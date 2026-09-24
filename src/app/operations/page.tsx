import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  ClipboardCheck,
  Compass,
  FileCheck2,
  LifeBuoy,
  Ship,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, PageHero, SectionHeader } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Marine Operations | VOTPI Maritime",
  description:
    "See how VOTPI coordinates petroleum cargo voyages from refinery loading through marine transport, discharge and downstream delivery.",
  alternates: { canonical: "/operations" },
  openGraph: {
    title: "VOTPI Marine Operations",
    description: "Disciplined voyage planning around offtake schedules and downstream demand.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const stages = [
  {
    number: "01",
    title: "Plan the movement",
    label: "Before the voyage",
    text: "Confirm product, parcel size, loading and discharge points, timing and the operating requirements each end of the route brings.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Prepare vessel and cargo",
    label: "Readiness",
    text: "Review vessel suitability, cargo handling needs, documentation and readiness against the agreed movement plan.",
    icon: Ship,
  },
  {
    number: "03",
    title: "Coordinate loading",
    label: "At the terminal",
    text: "Align the loading window with terminal requirements, cargo documentation and the teams responsible for the transfer.",
    icon: Anchor,
  },
  {
    number: "04",
    title: "Manage the passage",
    label: "Underway",
    text: "Maintain clear voyage communications and keep the relevant parties aligned as the vessel proceeds to its destination.",
    icon: Waves,
  },
  {
    number: "05",
    title: "Prepare for discharge",
    label: "Arrival planning",
    text: "Coordinate arrival information, receiving-terminal readiness, port procedures and discharge arrangements ahead of arrival.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Complete the handover",
    label: "Delivery",
    text: "Bring the movement to a clear close through discharge coordination, cargo records and communication with the receiving team.",
    icon: FileCheck2,
  },
];

export default function OperationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marine operations"
        title="From loading window to safe delivery"
        intro="Every movement is planned around cargo requirements, vessel readiness, terminal windows and downstream demand."
        image="/images/hero-operations.jpg"
        imageAlt="Product tanker and tugboats coordinating operations at a petroleum terminal"
      />

      <section className="bg-navy-deep py-12 text-primary-foreground md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.8fr_1.2fr] md:items-center md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Our operating approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight md:text-5xl">
              Every handover is part of the voyage.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/75">
            Marine transport depends on connected decisions on shore and at sea. We coordinate
            vessel deployment, cargo preparation, port and terminal requirements, and delivery
            planning as one operating sequence—so teams understand the next milestone and their part
            in it.
          </p>
        </div>
      </section>

      <section id="sequence" className="scroll-mt-16 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <SectionHeader
              eyebrow="The voyage sequence"
              title="Planned from first brief to final handover"
            />
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              The exact sequence varies by cargo, vessel, port and terminal. These are the core
              stages VOTPI brings together for a marine movement.
            </p>
          </div>
          <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-border lg:block" />
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.number}
                  className="group relative border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 grid size-12 place-items-center border border-accent/50 bg-background text-accent">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-steel/50">
                      {stage.number}
                    </span>
                  </div>
                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[.2em] text-accent">
                    {stage.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold uppercase">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="coordination" className="scroll-mt-16 grid bg-mist lg:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden bg-navy-deep lg:min-h-[600px]">
          <img
            src="/images/votpi-bridge.jpg"
            alt="Marine officers coordinating a tanker voyage from the bridge"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[.22em] text-white/80 md:bottom-9 md:left-9">
            Planning meets execution
          </p>
        </div>
        <div className="flex items-center px-5 py-14 md:px-12 md:py-20 lg:px-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Coordination at every stage
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-5xl">
              One clear picture across ship and shore
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              A voyage involves more than the vessel. Loading facilities, port and jetty procedures,
              cargo records, receiving terminals and customer schedules all need to line up. Our
              operations approach keeps these touchpoints visible through planning and execution.
            </p>
            <div className="mt-8 grid gap-0 sm:grid-cols-2">
              {[
                ["Cargo & vessel", "Suitability and readiness"],
                ["Terminal & port", "Windows and local procedures"],
                ["Documents", "Cargo and compliance records"],
                ["Customer", "Milestones and updates"],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-border py-4">
                  <p className="text-xs font-bold uppercase tracking-wider">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/hseq"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition hover:text-accent"
            >
              Explore our HSEQ approach <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="readiness" className="scroll-mt-16 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                Operational readiness
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
                Attention to the details that keep cargo moving
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Readiness begins before loading and carries through to the receiving facility. Clear
              responsibilities and early coordination help teams respond to changing operating
              conditions.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              [
                "01",
                "Cargo requirements",
                "Product, quantity, handling considerations and the documentation expected for the movement.",
              ],
              [
                "02",
                "Vessel & route",
                "Vessel suitability, operating readiness, destination needs and route considerations.",
              ],
              [
                "03",
                "Shore-side alignment",
                "Loading and discharge windows, port procedures, receiving capacity and customer communication.",
              ],
            ].map(([n, title, text]) => (
              <article key={n} className="border-t-2 border-accent bg-mist/60 p-6 md:p-8">
                <span className="font-display text-4xl font-semibold text-accent">{n}</span>
                <h3 className="mt-5 text-xl font-semibold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-12 text-primary-foreground md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center border border-accent/50 text-accent">
              <LifeBuoy className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                Built around the operating context
              </p>
              <h2 className="mt-2 text-2xl font-semibold uppercase md:text-3xl">
                No two cargo movements are exactly alike.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Product, vessel, terminal and route requirements shape the plan. We begin by
                understanding your movement and coordinating the right conversations.
              </p>
            </div>
          </div>
          <Button asChild variant="maritime" size="lg">
            <Link href="/contact">
              Talk through a movement <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
