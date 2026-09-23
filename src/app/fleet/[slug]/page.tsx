import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, FileText, Waves } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand, SectionHeader } from "@/components/site-sections";
import {
  getVesselBySlug,
  allVesselSlugs,
  statusDotColor,
  VesselAvailabilityStatus,
  VESSEL_TYPE_LABELS,
  AVAILABILITY_STATUS_LABELS,
  AVAILABILITY_STATUS_DESCRIPTIONS,
  type Vessel,
  type Certificate,
  type VesselPump,
} from "@/lib/fleet-data";

export async function generateStaticParams() {
  return allVesselSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vessel = getVesselBySlug(slug);
  if (!vessel) return { title: "Vessel not found" };
  const label = AVAILABILITY_STATUS_LABELS[vessel.status];
  return {
    title: `${vessel.name} | Fleet | VOTPI Maritime`,
    description: `${VESSEL_TYPE_LABELS[vessel.type]} · IMO ${vessel.imo} · ${label} · ${vessel.deadweight} MT DWT`,
    alternates: { canonical: `/fleet/${vessel.slug}` },
    openGraph: {
      title: `${vessel.name} | VOTPI Maritime`,
      description: `Verified particulars for ${vessel.name} (IMO ${vessel.imo}).`,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

type SpecRow = { label: string; value: string };

const str = (label: string, value: string | undefined): SpecRow | undefined =>
  value ? { label, value } : undefined;

const definedRows = (rows: (SpecRow | undefined)[]): SpecRow[] =>
  rows.filter((r): r is SpecRow => r !== undefined);

function SpecTable({ title, rows }: { title: string; rows: SpecRow[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="mt-10">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent">{title}</h3>
      <dl className="mt-4 divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-2 gap-4 py-3">
            <dt className="text-sm text-muted-foreground">{row.label}</dt>
            <dd className="text-sm font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function PumpsTable({ pumps }: { pumps: VesselPump[] }) {
  if (pumps.length === 0) return null;
  return (
    <div className="mt-10">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Cargo pumps</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-fixed border border-border text-sm">
          <thead className="bg-mist">
            <tr>
              {["Type", "Count", "Capacity (m³/hr)", "Pressure (bar)", "Power (hp)"].map((h) => (
                <th key={h} className="border-b border-border px-4 py-2.5 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pumps.map((pump, i) => (
              <tr key={i}>
                <td className="px-4 py-2.5">{pump.type}</td>
                <td className="px-4 py-2.5">{pump.count}</td>
                <td className="px-4 py-2.5">{pump.capacityM3Hr}</td>
                <td className="px-4 py-2.5">{pump.pressureBar ?? "—"}</td>
                <td className="px-4 py-2.5">{pump.hp ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CertificatesTable({ certificates }: { certificates: Certificate[] }) {
  if (certificates.length === 0) return null;
  return (
    <div className="mt-10">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Certificates</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-fixed border border-border text-sm">
          <thead className="bg-mist">
            <tr>
              {["Document", "Issuing authority", "Valid to", "File"].map((h) => (
                <th key={h} className="border-b border-border px-4 py-2.5 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {certificates.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-2.5">{c.name}</td>
                <td className="px-4 py-2.5">{c.issuedBy ?? "—"}</td>
                <td className="px-4 py-2.5">{c.validTo ?? "—"}</td>
                <td className="px-4 py-2.5">
                  <Link
                    href={c.file}
                    className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                  >
                    <FileText className="size-3" aria-hidden="true" />
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

const FALLBACK_HERO = "/images/hero-fleet.jpg";

const draftLabel = (v: Vessel): string =>
  [
    `Summer ${v.draft.summer} m`,
    v.draft.winter ? `Winter ${v.draft.winter} m` : null,
    v.draft.scantling ? `Scantling ${v.draft.scantling} m` : null,
    v.draft.ballast ? `Ballast ${v.draft.ballast} m` : null,
  ]
    .filter((s): s is string => s !== null)
    .join(" / ");

export default async function VesselPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vessel = getVesselBySlug(slug);
  if (!vessel) notFound();

  const identityRows = definedRows([
    str("Vessel name", vessel.name),
    str("IMO number", vessel.imo),
    str("MMSI", vessel.mmsi),
    str("Call sign", vessel.callSign),
    str("Flag state", vessel.flag),
  ]);

  const tonnageRows = definedRows([
    str("Deadweight", `${vessel.deadweight} MT`),
    str("Gross tonnage", String(vessel.grossTonnage)),
    str("Net tonnage", String(vessel.netTonnage)),
  ]);

  const dimensionRows = definedRows([
    str("Length overall (LOA)", `${vessel.loa} m`),
    str("Length between perpendiculars (LBP)", `${vessel.lbp} m`),
    str("Beam", `${vessel.beam} m`),
    str("Draft", draftLabel(vessel)),
  ]);

  const cargoRows = definedRows([
    str("Cargo capacity", `${vessel.cargo.capacityM3} m³`),
    str("Cargo tanks", `${vessel.cargo.tankCount}`),
    str("Tank coating", vessel.cargo.coating),
  ]);

  const buildRows = definedRows([
    str("Build year", String(vessel.buildYear)),
    str("Shipyard", vessel.builder),
    str("Yard number", vessel.yardNumber),
    str("Class society", vessel.classification),
  ]);

  return (
    <main>
      <PageHero
        eyebrow="Our fleet"
        title={vessel.name}
        intro={`${VESSEL_TYPE_LABELS[vessel.type]} · Flag ${vessel.flag} · ${vessel.deadweight} MT DWT`}
        image={vessel.image ?? FALLBACK_HERO}
        imageAlt={vessel.imageAlt ?? `${vessel.name} underway`}
      />

      <section className="bg-background py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent"
          >
            <ArrowLeft className="size-3" aria-hidden="true" />
            Back to fleet
          </Link>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                {VESSEL_TYPE_LABELS[vessel.type]}
              </p>
              <h1 className="mt-2 text-3xl font-semibold uppercase md:text-5xl">{vessel.name}</h1>
              <p className="mt-2 text-sm text-muted-foreground">IMO {vessel.imo}</p>
            </div>
            <StatusBadge status={vessel.status} />
          </div>
          {vessel.statusUpdatedAt && (
            <p className="mt-3 text-xs text-muted-foreground">
              Status updated {vessel.statusUpdatedAt}
            </p>
          )}
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            {AVAILABILITY_STATUS_DESCRIPTIONS[vessel.status]}
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader eyebrow="Technical particulars" title="Vessel specification" />

          <SpecTable title="Identity" rows={identityRows} />
          <SpecTable title="Tonnage" rows={tonnageRows} />
          <SpecTable title="Dimensions" rows={dimensionRows} />
          <SpecTable title="Cargo" rows={cargoRows} />
          <PumpsTable pumps={vessel.pumps} />
          <SpecTable title="Build & classification" rows={buildRows} />

          {vessel.cargo.tanks && (
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
                Cargo tanks
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full table-fixed border border-border text-sm">
                  <thead className="bg-mist">
                    <tr>
                      {["Tank", "Capacity (m³)", "Coating"].map((h) => (
                        <th
                          key={h}
                          className="border-b border-border px-4 py-2.5 text-left font-semibold"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {vessel.cargo.tanks.map((tank) => (
                      <tr key={tank.name}>
                        <td className="px-4 py-2.5">{tank.name}</td>
                        <td className="px-4 py-2.5">{tank.capacityM3}</td>
                        <td className="px-4 py-2.5">{tank.coating ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {vessel.features && vessel.features.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
                Vessel features
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {vessel.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {vessel.certificates && vessel.certificates.length > 0 && (
            <CertificatesTable certificates={vessel.certificates} />
          )}
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:px-10">
          <Waves className="size-10 text-accent" aria-hidden="true" />
          <h2 className="text-3xl font-semibold uppercase md:text-5xl">
            Require this vessel or similar capacity?
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-primary-foreground/75">
            Discuss this vessel's availability, rate and suitability for your cargo with our
            commercial team. We will confirm deployment terms and provide supporting documentation.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="maritime">
              <Link href="/contact">
                Request vessel capacity <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="maritimeOutline">
              <Link href="/fleet">Back to fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
