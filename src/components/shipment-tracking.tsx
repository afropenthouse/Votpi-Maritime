"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type VesselPosition = {
  NAME?: string;
  IMO?: number;
  MMSI?: number;
  TIMESTAMP?: string;
  LATITUDE?: number;
  LONGITUDE?: number;
  LOCATION?: string | null;
  LOCATION_IS_APPROXIMATE?: boolean;
  SPEED?: number;
  DESTINATION?: string;
  ETA?: string;
  ZONE?: string;
};

function formatTimestamp(value?: string) {
  if (!value) return "Not reported";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date)} UTC`;
}

export function ShipmentTracking() {
  const [reference, setReference] = useState("");
  const [position, setPosition] = useState<VesselPosition | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const latitude = position ? Number(position.LATITUDE) : NaN;
  const longitude = position ? Number(position.LONGITUDE) : NaN;
  const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);
  const hasLocation = Boolean(position?.LOCATION?.trim());
  const locationLabel = position?.LOCATION?.trim() || "Not reported";
  const mapBounds = hasCoordinates
    ? new URLSearchParams({
        bbox: `${longitude - 0.12},${latitude - 0.1},${longitude + 0.12},${latitude + 0.1}`,
        layer: "mapnik",
        marker: `${latitude},${longitude}`,
      })
    : null;
  const mapLink = hasCoordinates
    ? `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=8/${latitude}/${longitude}`
    : null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPosition(null);
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("/api/track-vessel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: reference.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to look up this vessel.");
      setPosition(data.position);
      if (!data.position) setMessage("No vessel position was found for that IMO or MMSI.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to look up this vessel.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 82% 18%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 42%), radial-gradient(ellipse at 8% 100%, rgb(25 112 139 / 35%), transparent 48%), linear-gradient(120deg, transparent 35%, rgb(255 255 255 / 4%) 100%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 w-full text-white/10 md:h-48"
      >
        <path
          d="M0 110 C180 35 310 185 500 110 S820 35 1010 110 1260 185 1440 95"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M0 150 C180 75 310 225 500 150 S820 75 1010 150 1260 225 1440 135"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M0 190 C180 115 310 265 500 190 S820 115 1010 190 1260 265 1440 175"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Track your Shipment</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/85 md:text-base">
            View the latest available AIS position for a vessel carrying your shipment. Enter its
            IMO or MMSI number to track its voyage.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Track Your Shipment</h2>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <label htmlFor="vessel-reference" className="sr-only">
              Vessel IMO or MMSI number
            </label>
            <input
              id="vessel-reference"
              name="reference"
              inputMode="numeric"
              autoComplete="off"
              required
              value={reference}
              onChange={(event) => setReference(event.target.value)}
              placeholder="Vessel IMO or MMSI number"
              className="h-14 w-full rounded-full border-0 bg-white px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent sm:flex-1"
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={loading}
              className="h-14 rounded-full px-8"
            >
              {loading ? "SEARCHING..." : "SUBMIT NOW"}
            </Button>
          </form>
          {(message || position) && (
            <div
              aria-live="polite"
              className="mt-5 rounded-md bg-primary-foreground/10 p-4 text-sm"
            >
              {message ? (
                <p>{message}</p>
              ) : position ? (
                <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      Vessel
                    </dt>
                    <dd className="mt-1 font-medium">{position.NAME || "Unknown"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      Destination
                    </dt>
                    <dd className="mt-1 font-medium">{position.DESTINATION || "Not reported"}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      Location
                    </dt>
                    <dd className="mt-1 break-words font-medium leading-6">
                      {locationLabel}
                      {hasLocation && position.LOCATION_IS_APPROXIMATE
                        ? " (approximate area)"
                        : null}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      Speed
                    </dt>
                    <dd className="mt-1 font-medium">{position.SPEED ?? "Not reported"} kn</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      ETA
                    </dt>
                    <dd className="mt-1 font-medium">{position.ETA || "Not reported"}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary-foreground/65">
                      Last AIS update
                    </dt>
                    <dd className="mt-1 font-medium">{formatTimestamp(position.TIMESTAMP)}</dd>
                  </div>
                  {hasLocation && hasCoordinates && mapBounds && mapLink && (
                    <div className="sm:col-span-2">
                      <dt className="sr-only">Map</dt>
                      <dd>
                        <iframe
                          title={`Map showing ${position.NAME || "vessel"} location`}
                          src={`https://www.openstreetmap.org/export/embed.html?${mapBounds.toString()}`}
                          loading="lazy"
                          className="mt-2 h-80 w-full rounded-md border-0 bg-white"
                        />
                        <a
                          href={mapLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-xs font-bold uppercase tracking-widest text-accent underline underline-offset-4"
                        >
                          Open location in OpenStreetMap
                        </a>
                        <p className="mt-1 text-[10px] text-primary-foreground/60">
                          Place data &copy;{" "}
                          <a
                            href="https://www.openstreetmap.org/copyright"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-2"
                          >
                            OpenStreetMap contributors
                          </a>
                        </p>
                      </dd>
                    </div>
                  )}
                </dl>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
