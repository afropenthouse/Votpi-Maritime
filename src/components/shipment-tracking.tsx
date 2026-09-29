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
  SPEED?: number;
  DESTINATION?: string;
  ETA?: string;
  ZONE?: string;
};

export function ShipmentTracking() {
  const [reference, setReference] = useState("");
  const [position, setPosition] = useState<VesselPosition | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
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
                <div className="grid gap-2 sm:grid-cols-2">
                  <p>
                    <strong>Vessel:</strong> {position.NAME || "Unknown"}
                  </p>
                  <p>
                    <strong>Destination:</strong> {position.DESTINATION || "Not reported"}
                  </p>
                  <p>
                    <strong>Position:</strong> {position.LATITUDE}, {position.LONGITUDE}
                  </p>
                  <p>
                    <strong>Speed:</strong> {position.SPEED ?? "Not reported"} kn
                  </p>
                  <p>
                    <strong>ETA:</strong> {position.ETA || "Not reported"}
                  </p>
                  <p>
                    <strong>Last AIS update:</strong> {position.TIMESTAMP || "Not reported"}
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
