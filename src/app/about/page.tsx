import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Anchor, Target, Eye } from "lucide-react";
import { PageHero, StatBand, ContactBand, SectionHeader } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "About VOTPI Maritime | Nigerian Marine Transportation",
  description:
    "Learn about VOTPI Maritime, its downstream energy roots, mission, vision, experience and commitment to safe marine transportation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VOTPI Maritime",
    description:
      "An integrated marine transportation partner connecting refineries, terminals and downstream markets.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const terminalImage = "/images/votpi-terminal.jpg";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About VOTPI"
        title="Connecting energy markets by sea"
        intro="A dedicated marine partner moving refined petroleum products from supply points to downstream markets."
        image="/images/hero-about.jpg"
        imageAlt="Petroleum tanker moored at a coastal energy terminal at sunrise"
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <div className="group relative min-h-[380px] overflow-hidden bg-navy-deep md:min-h-[520px]">
            <img
              src={terminalImage}
              loading="lazy"
              width={1600}
              height={1000}
              alt="Tanker operating at a petroleum terminal"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-primary-foreground md:p-10">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                Our place in the chain
              </p>
              <p className="mt-3 max-w-md font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">
                A marine link between energy supply and the markets that depend on it.
              </p>
            </div>
            <span className="absolute right-5 top-5 grid size-12 place-items-center border border-white/40 bg-navy-deep/40 text-white backdrop-blur">
              <Anchor className="size-5" />
            </span>
          </div>
          <div className="py-2">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Our roots</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold uppercase leading-[.96] md:text-6xl">
              Downstream insight. Dedicated marine capability.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              VOTPI Maritime Limited is the dedicated marine transportation arm of Pivot Energy
              Integrated Energy Limited. We bring a downstream energy perspective to the planning
              and movement of refined petroleum products.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The wider group was established in 2017 and operates across petroleum trading, imports
              and distribution. VOTPI extends that value chain by connecting refineries and approved
              loading terminals with ports, depots and storage facilities.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-border py-5 sm:grid-cols-3">
              {[
                ["01", "Marine transport"],
                ["02", "Vessel operations"],
                ["03", "Cargo coordination"],
              ].map(([n, t]) => (
                <div key={n}>
                  <span className="text-[10px] font-bold tracking-widest text-accent">{n}</span>
                  <p className="mt-1 text-xs font-bold uppercase">{t}</p>
                </div>
              ))}
            </div>
            <Link
              href="/operations"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent"
            >
              See how we work <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="maritime-grid bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader eyebrow="Our role" title="From supply point to market" />
            <p className="max-w-md pb-1 text-sm leading-6 text-muted-foreground">
              We coordinate the marine leg and the essential handovers that keep petroleum products
              moving through the downstream chain.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Supply", "Refinery or approved loading terminal"],
              ["02", "Load", "Vessel and cargo readiness"],
              ["03", "Transport", "Planned coastal voyage"],
              ["04", "Discharge", "Port, jetty or terminal"],
              ["05", "Connect", "Depot, storage and market"],
            ].map(([n, t, d], i) => (
              <article key={n} className="relative border border-border bg-background p-5 md:p-6">
                <span className="font-display text-4xl font-semibold text-accent/70">{n}</span>
                <h3 className="mt-5 text-xl font-semibold uppercase">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
                {i < 4 && (
                  <ArrowDownRight className="absolute right-4 top-5 hidden size-4 text-steel lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <StatBand />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <SectionHeader eyebrow="How we show up" title="Values that guide the voyage" />
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              The way we plan, communicate and deliver is grounded in a small set of commitments
              that matter on every movement.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Safety", "We put the safety of our people, vessels, cargo and environment first."],
              [
                "Reliability",
                "We deliver dependable marine transportation solutions and maintain operational discipline.",
              ],
              [
                "Integrity",
                "We conduct business with transparency, professionalism and accountability.",
              ],
              [
                "Excellence",
                "We continuously pursue higher standards in operations, technology and service.",
              ],
              [
                "Sustainability",
                "We operate responsibly with a commitment to environmental protection.",
              ],
            ].map(([t, d], i) => (
              <article
                key={String(t)}
                className="group border border-border bg-mist/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background"
              >
                <span className="text-[10px] font-bold tracking-[.2em] text-steel">0{i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold uppercase">{String(t)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(d)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy-deep py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                Our direction
              </p>
              <h2 className="mt-3 text-3xl font-semibold uppercase md:text-4xl">
                Purpose in motion
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-primary-foreground/65">
              A practical mission for today, and an ambition that looks toward Africa's coast.
            </p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            <article className="grid gap-5 border border-white/15 bg-white/[.04] p-6 sm:grid-cols-[150px_1fr] sm:items-start md:p-8">
              <div className="flex items-center gap-3 sm:block">
                <span className="grid size-10 place-items-center border border-accent/50 text-accent">
                  <Target className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[.2em] text-accent sm:mt-4 sm:block">
                  Our mission
                </span>
              </div>
              <p className="text-base leading-7 text-primary-foreground/90 md:text-lg">
                To provide safe, reliable, efficient and professionally managed marine
                transportation solutions for refined petroleum products across Nigeria and the
                African coastal markets.
              </p>
            </article>
            <article className="grid gap-5 border border-white/15 bg-white/[.04] p-6 sm:grid-cols-[150px_1fr] sm:items-start md:p-8">
              <div className="flex items-center gap-3 sm:block">
                <span className="grid size-10 place-items-center border border-accent/50 text-accent">
                  <Eye className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[.2em] text-accent sm:mt-4 sm:block">
                  Our vision
                </span>
              </div>
              <p className="text-base leading-7 text-primary-foreground/90 md:text-lg">
                To become one of Africa's most trusted and respected marine transportation
                companies, connecting refineries, terminals and downstream markets through
                world-class vessel operations and logistics.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
