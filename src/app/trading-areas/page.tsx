import type { Metadata } from "next";
import { PageHero, TradeRoute, ContactBand } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Trading Areas | Nigeria & West Africa | VOTPI Maritime",
  description:
    "VOTPI Maritime serves Nigerian petroleum ports and is positioned for approved West and East African coastal routes.",
  alternates: { canonical: "/trading-areas" },
  openGraph: {
    title: "VOTPI Trading & Service Areas",
    description:
      "Marine transportation coverage across Nigeria and approved African coastal markets.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const west = [
  "Ghana",
  "Côte d'Ivoire",
  "Togo",
  "Benin",
  "Senegal",
  "Liberia",
  "Sierra Leone",
  "Guinea",
];

export default function TradingAreasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trading areas"
        title="Regional reach. Local operating knowledge."
        intro="Strategically positioned for Nigerian and West African petroleum movements, with broader African coastal ambitions."
        image="/images/hero-trading.jpg"
        imageAlt="Product tanker following a coastal shipping route toward an African port"
      />
      <TradeRoute />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-3 md:px-10">
          <div className="border-t-2 border-accent pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Primary market
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase">Nigeria</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Lagos · Lekki · Port Harcourt · Calabar · Onne · Warri · Other approved ports and
              coastal locations
            </p>
          </div>
          <div className="border-t-2 border-primary pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Expansion markets
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase">West Africa</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {west.join(" · ")} · Other approved coastal markets
            </p>
          </div>
          <div className="border-t-2 border-steel pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-steel">
              Planned from Q3 2026
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase">East Africa</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Mombasa · Dar es Salaam. Subject to regulatory approval and operational readiness.
            </p>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
