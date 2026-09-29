import { NextResponse } from "next/server";

type ApiRecord = Record<string, unknown>;

function isRecord(value: unknown): value is ApiRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getApiError(payload: unknown, fallback: string) {
  if (!isRecord(payload)) return fallback;
  const message = payload["error"] ?? payload["message"] ?? payload["detail"];
  return typeof message === "string" && message.trim() ? message : fallback;
}

async function reverseGeocodeAtZoom(
  latitude: number,
  longitude: number,
  zoom: string,
): Promise<string | null> {
  const params = new URLSearchParams({
    format: "jsonv2",
    lat: String(latitude),
    lon: String(longitude),
    zoom,
    addressdetails: "1",
  });
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, {
      headers: { "User-Agent": "VOTPI Maritime vessel tracking https://votpimaritime.com" },
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 86400 },
    });
    if (!response.ok) return null;

    const payload: unknown = await response.json();
    if (!isRecord(payload)) return null;
    const address = isRecord(payload["address"]) ? payload["address"] : null;
    const parts = address
      ? [
          address["neighbourhood"],
          address["suburb"],
          address["city"],
          address["town"],
          address["village"],
          address["county"],
          address["state_district"],
          address["state"],
          address["sea"],
          address["ocean"],
          address["country"],
        ].filter((part): part is string => typeof part === "string" && part.length > 0)
      : [];

    const label = [...new Set(parts)].slice(0, 3).join(", ");
    if (label) return label;
    const name = payload["name"] ?? payload["display_name"];
    return typeof name === "string" && name.trim() ? name : null;
  } catch {
    return null;
  }
}

async function reverseGeocode(latitude: number, longitude: number): Promise<string | null> {
  return (
    (await reverseGeocodeAtZoom(latitude, longitude, "10")) ??
    (await reverseGeocodeAtZoom(latitude, longitude, "5"))
  );
}

export async function POST(request: Request) {
  const apiKey = process.env["VESSELAPI_API_KEY"];
  if (!apiKey) {
    return NextResponse.json(
      { error: "Vessel tracking is not configured yet. Please contact VOTPI Maritime." },
      { status: 503 },
    );
  }

  let reference: string;
  try {
    const body = await request.json();
    reference = String(body.reference ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Enter a valid IMO or MMSI number." }, { status: 400 });
  }

  if (!/^\d{7}$/.test(reference) && !/^\d{9}$/.test(reference)) {
    return NextResponse.json(
      { error: "Enter a 7-digit IMO or 9-digit MMSI number." },
      { status: 400 },
    );
  }

  const idType = reference.length === 7 ? "imo" : "mmsi";
  const params = new URLSearchParams({ "filter.idType": idType });

  try {
    const response = await fetch(
      `https://api.vesselapi.com/v1/vessel/${encodeURIComponent(reference)}/position?${params}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
        signal: AbortSignal.timeout(10000),
      },
    );
    const responseText = await response.text();
    let payload: unknown;
    try {
      payload = responseText ? JSON.parse(responseText) : null;
    } catch {
      payload = null;
    }

    if (response.status === 404) {
      return NextResponse.json({ position: null });
    }
    if (!response.ok) {
      return NextResponse.json(
        { error: getApiError(payload, "VesselAPI could not complete the lookup.") },
        { status: 502 },
      );
    }
    if (!isRecord(payload)) {
      return NextResponse.json(
        { error: "VesselAPI returned an unexpected response." },
        { status: 502 },
      );
    }

    const record = isRecord(payload["vesselPosition"])
      ? payload["vesselPosition"]
      : isRecord(payload["vessel_position"])
        ? payload["vessel_position"]
        : isRecord(payload["vessel"])
          ? payload["vessel"]
          : isRecord(payload["position"])
            ? payload["position"]
            : payload;
    const latitude = record["latitude"] ?? record["LATITUDE"];
    const longitude = record["longitude"] ?? record["LONGITUDE"];
    if (latitude == null || longitude == null) {
      return NextResponse.json({ position: null });
    }

    const latitudeNumber = Number(latitude);
    const longitudeNumber = Number(longitude);
    const location =
      Number.isFinite(latitudeNumber) && Number.isFinite(longitudeNumber)
        ? await reverseGeocode(latitudeNumber, longitudeNumber)
        : null;

    return NextResponse.json({
      position: {
        NAME: record["vessel_name"] ?? record["name"] ?? record["NAME"],
        IMO: record["imo"] ?? record["IMO"] ?? (idType === "imo" ? reference : undefined),
        MMSI: record["mmsi"] ?? record["MMSI"] ?? (idType === "mmsi" ? reference : undefined),
        TIMESTAMP: record["timestamp"] ?? record["TIMESTAMP"],
        LATITUDE: latitude,
        LONGITUDE: longitude,
        LOCATION: location ?? record["zone"] ?? record["ZONE"] ?? null,
        LOCATION_IS_APPROXIMATE: Boolean(location),
        SPEED: record["sog"] ?? record["SPEED"],
        DESTINATION: record["destination"] ?? record["DESTINATION"],
        ETA: record["eta"] ?? record["ETA"],
        ZONE: record["zone"] ?? record["ZONE"],
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Vessel tracking is temporarily unavailable." },
      { status: 502 },
    );
  }
}
