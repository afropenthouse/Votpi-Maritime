import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Anchor, Route as RouteIcon, ShieldCheck, ShipWheel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader, StatBand, ContactBand, TradeRoute } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "VOTPI Maritime | Marine Transportation Nigeria & West Africa",
  description:
    "Safe, reliable marine transportation of refined petroleum products across Nigeria and West Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VOTPI Maritime — Connecting Refineries to Markets by Sea",
    description:
      "Professionally managed petroleum product transportation, vessel chartering and marine logistics.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const capabilities = [
  [ShipWheel, "Oil Tanker Operations", "Dedicated petroleum product transportation."],
  [RouteIcon, "Marine Logistics", "End-to-end coordination of marine cargo movements."],
  [Anchor, "Vessel Chartering", "Flexible tanker capacity for qualified customers."],
  [ShieldCheck, "Coastal Transportation", "Reliable movement across Nigeria and West Africa."],
] as const;

const heroImage = "/images/votpi-hero.jpg";
const terminalImage = "/images/votpi-terminal.jpg";
const bridgeImage = "/images/votpi-bridge.jpg";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "VOTPI Maritime Limited",
            email: "info@votpimaritime.com",
            telephone: "+2348138577307",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
          }),
        }}
      />
      <section className="relative min-h-[88svh] overflow-hidden bg-navy-deep text-primary-foreground">
        <img
          src={heroImage}
          width={1920}
          height={1080}
          alt="Product tanker underway near a coastal energy terminal"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-start px-5 pb-8 pt-28 md:px-10 md:pb-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Connecting refineries to markets by sea
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold uppercase leading-[.88] sm:text-7xl lg:text-8xl">
              Powering Africa's energy movement by sea
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              Safe. Reliable. Efficient marine transportation of refined petroleum products across
              Nigeria and West Africa.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="maritime" size="lg">
                <Link href="/fleet">
                  Our fleet <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="maritimeOutline" size="lg">
                <Link href="/services">Our services</Link>
              </Button>
              <Button asChild variant="maritimeOutline" size="lg">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden border-l border-t border-primary-foreground/20 bg-navy-deep/70 px-8 py-5 backdrop-blur md:block">
          <p className="text-[10px] uppercase tracking-[.22em] text-primary-foreground/60">
            Operating focus
          </p>
          <p className="mt-1 text-sm font-semibold">
            Nigeria · West Africa · African Coastal Markets
          </p>
        </div>
      </section>
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[.9fr_1.1fr] md:px-10">
          <SectionHeader eyebrow="Who we are" title="Built around the downstream energy chain" />
          <div>
            <p className="text-xl leading-9 text-foreground/80">
              VOTPI Maritime specialises in moving refined petroleum products across Nigeria and
              West Africa. Through vessels, operational expertise and a strong commitment to safety
              and compliance, we connect refineries and petroleum terminals with downstream markets.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary"
            >
              About VOTPI <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader eyebrow="Our capabilities" title="One accountable marine partner" />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([Icon, title, text], i) => (
              <article key={title} className="bg-background p-7">
                <span className="text-xs font-bold text-steel">0{i + 1}</span>
                <Icon className="mt-10 size-8 text-accent" />
                <h3 className="mt-6 text-2xl font-semibold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="grid bg-navy-deep text-primary-foreground lg:grid-cols-2">
        <div className="min-h-[430px]">
          <img
            src={terminalImage}
            loading="lazy"
            width={1600}
            height={1000}
            alt="Product tanker berthed at a petroleum terminal"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center p-8 md:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-accent">Our fleet</p>
            <h2 className="mt-4 text-5xl font-semibold uppercase leading-none md:text-6xl">
              A fleet built for the energy market
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-primary-foreground/70">
              Professionally managed petroleum product tankers engineered for safe and efficient
              marine transportation. Approved particulars are published as each vessel enters the
              fleet portfolio.
            </p>
            <Button asChild variant="maritime" size="lg" className="mt-8">
              <Link href="/fleet">
                View our fleet <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <TradeRoute />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10">
          <div>
            <SectionHeader eyebrow="HSEQ" title="Safety at every stage of the voyage" />
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Our operating culture places people, vessels, cargo and the environment first—from
              voyage planning and vessel inspection to discharge and delivery coordination.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold">
              {[
                "Vessel inspections",
                "Crew competence",
                "Cargo integrity",
                "Pollution prevention",
                "Risk management",
                "Emergency readiness",
              ].map((x) => (
                <div className="border-t border-border pt-3" key={x}>
                  {x}
                </div>
              ))}
            </div>
          </div>
          <img
            src={bridgeImage}
            loading="lazy"
            width={1600}
            height={1000}
            alt="Marine officers monitoring a tanker voyage from the bridge"
            className="h-full min-h-96 w-full object-cover"
          />
        </div>
      </section>
      <StatBand />
      <ContactBand />
    </main>
  );
}
