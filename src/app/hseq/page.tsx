import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  HeartPulse,
  Leaf,
  LifeBuoy,
  ShieldCheck,
  Ship,
  UsersRound,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, PageHero, SectionHeader } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "HSEQ & Marine Safety | VOTPI Maritime",
  description:
    "VOTPI Maritime's approach to health, marine safety, cargo integrity, environmental protection and operational quality.",
  alternates: { canonical: "/hseq" },
  openGraph: {
    title: "HSEQ at VOTPI Maritime",
    description: "Safety is fundamental to every voyage we undertake.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const pillars = [
  {
    letter: "H",
    title: "Health",
    phrase: "People first, at every stage.",
    text: "Crew welfare and fitness for duty are essential to safe vessel operations. We value competent people, clear responsibilities and a working culture where wellbeing is taken seriously.",
    icon: HeartPulse,
    points: ["Crew wellbeing", "Competence and readiness", "Respectful communication"],
  },
  {
    letter: "S",
    title: "Safety",
    phrase: "Think ahead. Work with care.",
    text: "Marine and cargo safety begin with understanding the movement: vessel, product, route, terminal conditions and the people involved in each handover.",
    icon: ShieldCheck,
    points: [
      "Voyage and task risk awareness",
      "Vessel and cargo integrity",
      "Emergency preparedness",
    ],
  },
  {
    letter: "E",
    title: "Environment",
    phrase: "Protect the waters we operate in.",
    text: "Pollution prevention and responsible operations help protect coastal communities and marine environments throughout loading, transit and discharge.",
    icon: Leaf,
    points: ["Pollution prevention", "Spill response readiness", "Responsible marine operations"],
  },
  {
    letter: "Q",
    title: "Quality",
    phrase: "Careful work. Clear records.",
    text: "Quality is reflected in cargo handling, vessel readiness, accurate documentation and the discipline to review how a movement was delivered.",
    icon: BadgeCheck,
    points: [
      "Cargo handling discipline",
      "Documentation and handovers",
      "Learning and improvement",
    ],
  },
];

const controls = [
  [
    "01",
    "Before work",
    "Understand the task, identify hazards and confirm that people, equipment and plans are ready.",
  ],
  [
    "02",
    "During transfer",
    "Keep communication clear and follow agreed controls for loading or discharge and cargo integrity.",
  ],
  [
    "03",
    "At sea",
    "Maintain operational awareness, vessel integrity and clear communication as the voyage progresses.",
  ],
  [
    "04",
    "At handover",
    "Coordinate arrival and discharge requirements, record key information and share learning from the movement.",
  ],
];

export default function HseqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Health · Safety · Environment · Quality"
        title="Safety is fundamental to every voyage"
        intro="Our HSEQ culture is built around protecting people, vessels, cargo, communities and the marine environment at every operating stage."
        image="/images/hero-hseq.jpg"
        imageAlt="Marine officers conducting a safety inspection on a product tanker"
      />

      <section className="bg-navy-deep py-10 text-primary-foreground md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center border border-accent/50 text-accent">
              <LifeBuoy className="size-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-accent">
                Our commitment
              </p>
              <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">
                Safety is not an option. It is fundamental to every voyage we undertake.
              </h2>
            </div>
          </div>
          <span className="hidden h-16 w-px bg-white/15 md:block" />
          <p className="max-w-xs text-sm leading-6 text-white/65">
            A shared responsibility from planning and preparation through to final cargo handover.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <SectionHeader eyebrow="Our HSEQ framework" title="Four connected responsibilities" />
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Health, safety, environment and quality are linked. Decisions in one area affect the
              others, so each belongs in the operating conversation.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.letter}
                  className="group relative overflow-hidden border border-border bg-mist/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background md:p-7"
                >
                  <span className="absolute -right-2 -top-7 font-display text-[130px] font-semibold leading-none text-primary/[.035] transition group-hover:text-accent/[.08]">
                    {pillar.letter}
                  </span>
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl font-semibold text-accent/80">
                        {pillar.letter}
                      </span>
                      <Icon className="size-5 text-steel transition-colors group-hover:text-accent" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold uppercase">{pillar.title}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-accent">
                      {pillar.phrase}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-4">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-xs font-semibold">
                          <span className="size-1.5 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid bg-mist lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              A voyage-wide view
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Safety travels with the cargo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              HSEQ does not begin and end at a single point on the route. The same attention follows
              the operation through planning, cargo transfer, navigation and delivery coordination.
            </p>
            <div className="mt-8 grid gap-0 sm:grid-cols-2">
              {[
                [Ship, "Vessel readiness"],
                [UsersRound, "People and roles"],
                [Waves, "Marine environment"],
                [ClipboardCheck, "Cargo and records"],
              ].map(([Icon, title]) => {
                const ItemIcon = Icon as typeof Ship;
                return (
                  <div
                    key={String(title)}
                    className="flex items-center gap-3 border-t border-border py-4"
                  >
                    <ItemIcon className="size-4 shrink-0 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      {String(title)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden bg-navy-deep lg:min-h-[560px]">
          <img
            src="/images/votpi-bridge.jpg"
            alt="Marine officers monitoring a tanker voyage from the bridge"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-navy-deep/10" />
          <p className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[.22em] text-white/80 md:bottom-9 md:left-9">
            Awareness · communication · readiness
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                In practice
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
                Controls that follow the operation
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              The focus changes as the vessel moves through the voyage, while clear responsibilities
              and practical communication remain constant.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map(([n, title, text]) => (
              <article key={n} className="border-t-2 border-accent bg-mist/60 p-6 md:p-7">
                <span className="text-xs font-bold tracking-[.18em] text-steel">{n} / HSEQ</span>
                <h3 className="mt-5 text-xl font-semibold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-12 text-primary-foreground md:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Standards and transparency
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase md:text-4xl">
              Clear about what is current and verified.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
              Specific policies, audit records, certificates and approvals are published only after
              the current documents are approved for public release.
            </p>
          </div>
          <Button asChild variant="maritimeOutline" size="lg">
            <Link href="/compliance">
              View compliance information <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
