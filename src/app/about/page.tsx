import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, StatBand, ContactBand } from "@/components/site-sections";

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
        title="Integrated by design. Maritime by expertise."
        intro="VOTPI Maritime Limited is the designated maritime subsidiary of Pivot Energy Integrated Energy Limited, serving Nigeria's downstream energy sector."
        image="/images/hero-about.jpg"
        imageAlt="Petroleum tanker moored at a coastal energy terminal at sunrise"
      />
      <section className="grid bg-background lg:grid-cols-2">
        <img
          src={terminalImage}
          loading="lazy"
          width={1600}
          height={1000}
          alt="Tanker operating at a petroleum terminal"
          className="h-full min-h-96 w-full object-cover"
        />
        <div className="p-8 md:p-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Our roots</p>
          <h2 className="mt-4 text-4xl font-semibold uppercase">A platform built for scale</h2>
          <p className="mt-6 leading-7 text-muted-foreground">
            Founded in 2017, Pivot Energy & Integrated Services Limited trades, imports and
            distributes premium petroleum products across key hubs including Lagos, Calabar and Port
            Harcourt.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            The group's N100 billion investor subscription offer was significantly oversubscribed.
            It is also one of 20 approved offtakers under the Dangote Refinery PMS Consortium, with
            an allocated target volume of 300 million litres per quarter.
          </p>
        </div>
      </section>
      <StatBand />
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
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
            ].map(([t, d]) => (
              <article key={t} className="bg-background p-6">
                <h3 className="text-2xl font-semibold uppercase">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Mission</p>
            <p className="mt-4 text-2xl leading-9">
              To provide safe, reliable, efficient and professionally managed marine transportation
              solutions across Nigeria and African coastal markets.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Vision</p>
            <p className="mt-4 text-2xl leading-9">
              To become one of Africa's most trusted marine transportation companies, connecting
              refineries, terminals and downstream markets.
            </p>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
