import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Radio, Ship } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand, SectionHeader, Checklist } from "@/components/site-sections";
import {
  vessels,
  fleetApprovalStatus,
  isFleetApproved,
  VesselAvailabilityStatus,
  AVAILABILITY_STATUS_LABELS,
  AVAILABILITY_STATUS_DESCRIPTIONS,
  AVAILABILITY_STATUS_ORDER,
  VESSEL_TYPE_LABELS,
  statusDotColor,
  type Vessel,
} from "@/lib/fleet-data";

export const metadata: Metadata = {
  title: "Our Fleet | VOTPI Maritime Product Tankers",
  description:
    "Verified fleet particulars and operational status for VOTPI Maritime's product tanker portfolio across Nigeria and West Africa.",
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: "VOTPI Maritime Fleet",
    description:
      "A professionally managed fleet for safe, efficient petroleum product transportation.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const requiredParticulars = [
  "Vessel name, IMO number and MMSI with flag-state registration",
  "Deadweight, gross and net tonnage",
  "Length overall, length between perpendiculars, beam and draft",
  "Cargo tank capacity, tank count and tank coating",
  "Cargo pump configuration, count and pumping rate",
  "Build year, shipyard, yard number and class notation",
  "Flag and classification society certificates",
];

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2 border-b border-border/40 py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: VesselAvailabilityStatus }) {
  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1.5 border-border/40 bg-background/60 text-xs font-bold uppercase"
    >
      <span className={`size-2 shrink-0 rounded-full ${statusDotColor[status]}`} />
      {AVAILABILITY_STATUS_LABELS[status]}
    </Badge>
  );
}

function VesselCard({ vessel }: { vessel: Vessel }) {
  return (
    <Link
      href={`/fleet/${vessel.slug}`}
      className="group block rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg bg-steel/10">
        {vessel.image ? (
          <img
            src={vessel.image}
            alt={vessel.imageAlt ?? vessel.name}
            className="size-full object-cover group-hover:scale-[1.02] transition-transform"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <Ship className="size-16 text-steel/40" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-3 top-3">
          <StatusBadge status={vessel.status} />
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold uppercase text-foreground group-hover:text-accent">
          {vessel.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">IMO {vessel.imo}</p>
        <p className="mt-2 text-sm font-medium">{VESSEL_TYPE_LABELS[vessel.type]}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <SpecRow label="DWT" value={`${vessel.deadweight} MT`} />
          <SpecRow label="LOA" value={`${vessel.loa} m`} />
          <SpecRow label="Beam" value={`${vessel.beam} m`} />
          <SpecRow label="Draft" value={`${vessel.draft.summer} m`} />
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent">
          View specifications{" "}
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function FleetPage() {
  const hasVessels = vessels.length > 0;

  return (
    <main>
      <PageHero
        eyebrow="Our fleet"
        title="Capacity for coastal energy routes"
        intro="Decision-ready particulars, transparent operational status and approved technical documentation for every vessel in our portfolio."
        image="/images/hero-fleet.jpg"
        imageAlt="Modern petroleum product tanker underway in open Atlantic waters"
      />

      <section className="bg-navy-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex items-center gap-3">
            <Radio className="size-5 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Fleet particulars pending approval
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-semibold uppercase md:text-5xl">Vessel portfolio</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/65">
            Vessel names, IMO numbers, capacities, classifications and operating status are
            published only after company approval. Once verified, each vessel is listed below with
            full technical particulars and live availability status.
          </p>
          <div className="mt-10 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              ["Approved for publication", isFleetApproved ? "Yes" : "No"],
              ["Vessels published", String(vessels.length)],
              ["Vessel type", "Product tanker"],
              ["Trading area", "Nigeria · West Africa"],
            ].map(([label, value]) => (
              <div key={label} className="bg-navy-deep p-5">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/45">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Fleet status" title="Vessels available for charter" />
          </div>

          {hasVessels ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {vessels.map((vessel) => (
                <VesselCard key={vessel.slug} vessel={vessel} />
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-border bg-mist/40 p-10 text-center">
              <Ship className="size-12 text-steel/40" aria-hidden="true" />
              <p className="text-sm leading-6 text-muted-foreground">
                No vessel records are currently published. Verified fleet particulars will appear
                here once approved for publication.
              </p>
              <Button asChild size="lg" className="mt-2">
                <Link href="/contact">
                  Request vessel capacity <ArrowRight />
                </Link>
              </Button>
            </div>
          )}

          <div className="mt-14 border-t border-border pt-14">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
              Publication state
            </p>
            <p className="text-sm text-muted-foreground">
              The fleet registry is set to{" "}
              <strong className="font-medium text-foreground">{fleetApprovalStatus}</strong>.
              Vessels are added to the published portfolio only after technical particulars and
              certificates have been verified and authorised by the company.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Particulars" title="Required particulars per vessel" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Every vessel in our portfolio is published with the complete set of technical and
            documentary particulars below.
          </p>
          <div className="mt-12">
            <Checklist items={requiredParticulars} />
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Availability" title="Operational status definitions" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Vessel availability is reported against the statuses below. Status reflects the most
            recent known operational state and is updated as voyages progress.
          </p>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {AVAILABILITY_STATUS_ORDER.map((status) => (
              <div key={status} className="bg-background p-7">
                <div className="flex items-center gap-3">
                  <span className={`size-3 shrink-0 rounded-full ${statusDotColor[status]}`} />
                  <span className="text-sm font-bold uppercase">
                    {AVAILABILITY_STATUS_LABELS[status]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {AVAILABILITY_STATUS_DESCRIPTIONS[status]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:px-10">
          <BadgeCheck className="size-10 text-accent" aria-hidden="true" />
          <h2 className="text-3xl font-semibold uppercase md:text-5xl">Need verified capacity?</h2>
          <p className="max-w-2xl text-sm leading-7 text-primary-foreground/70">
            Request a vessel tailored to your cargo, route and schedule. Our commercial team will
            confirm availability, technical suitability and terms.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="maritime">
              <Link href="/contact">
                Request vessel capacity <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="maritimeOutline">
              <Link href="/services">View our services</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
