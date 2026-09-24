import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Anchor,
  Route as RouteIcon,
  ShieldCheck,
  ShipWheel,
  Compass,
  Waves,
  CircleCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/hero-video";
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

const terminalImage = "/images/votpi-terminal.jpg";
const bridgeImage = "/images/votpi-bridge.jpg";
const partnerLogos = [
  "add_synergy.jpg",
  "Chevron_Logo.svg.webp",
  "Dangote_Group_Logo.svg.png",
  "Drizit-Environmental.png",
  "environ.png",
  "First-EP.png",
  "Herritagr-Energy.jpg",
  "hi_point.png",
  "kaizen_global.png",
  "mercuria-logo-vector.png",
  "pump.jfif",
  "SOCAR.svg",
  "total.svg",
  "Trafigura.webp",
  "Wilbur Eagle.jfif",
].map((filename) => `/images/partners/${filename}`);

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
      <section className="hero-sea relative min-h-[min(88svh,800px)] overflow-hidden bg-navy-deep text-primary-foreground">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
        <div className="relative z-10 mx-auto flex min-h-[min(88svh,800px)] max-w-7xl items-center px-5 pb-20 pt-28 md:px-10 md:pb-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.26em] text-accent sm:text-xs">
              Marine transportation · Nigeria & West Africa
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold uppercase leading-[.88] sm:text-6xl lg:text-8xl">
              Moving refined energy<span className="text-accent">. Connecting Africa.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base md:text-lg">
              Dedicated product tankers and coordinated marine logistics, connecting supply points
              with downstream markets along the West African coast.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="maritimeOutline" size="lg">
                <Link href="/contact">
                  Talk to our team <ArrowRight />
                </Link>
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white/90 transition hover:text-accent"
              >
                Discover VOTPI <ArrowRight className="size-4" />
              </Link>
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
      <section className="overflow-hidden bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader eyebrow="Working relationships" title="Our partners" />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            A shared commitment to keeping energy and essential supplies moving across the region.
          </p>
        </div>
        <div className="partners-marquee mt-10" aria-label="Partner logos">
          <div className="partners-marquee-track">
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                className="partner-logo-set"
                aria-hidden={duplicate ? "true" : undefined}
              >
                {partnerLogos.map((src) => (
                  <li key={src} className="partner-logo-item">
                    <img src={src} alt="" loading="lazy" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
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
            <p className="text-xs font-bold uppercase tracking-[.2em] text-accent">
              Marine capability
            </p>
            <h2 className="mt-4 text-5xl font-semibold uppercase leading-none md:text-6xl">
              From supply point to market
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-primary-foreground/70">
              Coordinated marine transport, cargo handling and terminal support for refined energy
              movements across Nigeria and West Africa.
            </p>
            <Button asChild variant="maritime" size="lg" className="mt-8">
              <Link href="/services">
                Explore our services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <TradeRoute />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader eyebrow="Why VOTPI" title="Built around your cargo, ready for the coast" />
          <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
            An integrated marine partner brings vessel planning, terminal coordination and cargo
            movement into one clear operating picture.
          </p>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                Compass,
                "Capacity with purpose",
                "Vessel deployment aligned with cargo, route and delivery windows.",
              ],
              [
                ShieldCheck,
                "Safety-led decisions",
                "Risk awareness and compliance shape each stage of the movement.",
              ],
              [
                RouteIcon,
                "Regional understanding",
                "Experience focused on Nigerian ports and West African coastal trade.",
              ],
              [
                CircleCheck,
                "Clear accountability",
                "A coordinated team supports customers from enquiry through delivery.",
              ],
              [
                Anchor,
                "End-to-end coordination",
                "Marine, terminal and documentation touchpoints planned together.",
              ],
              [
                Waves,
                "Downstream focus",
                "We connect supply points with the depots and markets that rely on them.",
              ],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof Compass;
              return (
                <article key={String(title)} className="bg-background p-7">
                  <span className="text-xs font-bold text-steel">0{i + 1}</span>
                  <I className="mt-7 size-7 text-accent" />
                  <h3 className="mt-5 text-2xl font-semibold uppercase">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Who we serve</p>
            <h2 className="mt-4 text-4xl font-semibold uppercase md:text-5xl">
              A partner across the petroleum chain
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Refineries",
              "Product traders",
              "Oil marketers",
              "Depot operators",
              "Tank farms",
              "Energy companies",
              "Industrial users",
              "Marine partners",
              "Institutions",
            ].map((name) => (
              <div key={name} className="border-t border-white/20 py-4 text-sm font-semibold">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
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
