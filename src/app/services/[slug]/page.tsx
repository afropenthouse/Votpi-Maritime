import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, FeatureGrid } from "@/components/site-sections";
import { allServiceSlugs, getServiceBySlug, services } from "@/lib/service-data";
import ServiceFAQ from "./service-faq";

export async function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} | VOTPI Maritime`,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | VOTPI Maritime`,
      description: service.tagline,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

const faqs = [
  {
    q: "What information should I share for an enquiry?",
    a: "Start with the product, approximate quantity, loading and discharge locations, and your preferred schedule. Our team can then discuss vessel suitability, operating requirements and next steps.",
  },
  {
    q: "Can services be coordinated around a specific route or schedule?",
    a: "Yes. Share your cargo window, route and terminal requirements so the commercial and operations teams can review the movement and discuss an appropriate plan.",
  },
  {
    q: "Which products and locations can be supported?",
    a: "VOTPI focuses on refined petroleum products including PMS, AGO and other approved products. Support depends on vessel, cargo, terminal and applicable regulatory requirements for each movement.",
  },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const sections = [
    ["overview", "Overview"],
    ["capabilities", "What we cover"],
    ["process", "How it works"],
    ["benefits", "Why it matters"],
    ["faqs", "FAQs"],
    ["related", "Related services"],
  ];

  return (
    <main>
      <section className="bg-navy-deep pb-12 pt-28 text-primary-foreground md:pb-16 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <ArrowLeft className="size-3" /> All services
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Service detail</span>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                Marine service · Nigeria & West Africa
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[.94] md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                {service.intro}
              </p>
              <Button asChild size="lg" className="mt-7">
                <Link href="/contact">
                  Discuss this service <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="group relative min-h-[260px] overflow-hidden bg-navy-deep sm:min-h-[340px]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/10" />
              <div className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[.22em] text-white/80">
                VOTPI Maritime · Service overview
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-0 z-40 border-y border-border bg-background/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 md:px-8">
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 px-3 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition hover:text-accent sm:text-xs"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-16 bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              01 / Overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase md:text-5xl">
              A service shaped around the voyage
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground/85">{service.tagline}</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-16 bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="mb-8 text-xs font-bold uppercase tracking-[.22em] text-accent">
            02 / What we cover
          </p>
          <FeatureGrid items={service.features} />
        </div>
      </section>

      <section id="process" className="scroll-mt-16 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                03 / How it works
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase md:text-6xl">
                A clear operating sequence
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Every movement is specific to the cargo, route and terminal requirements. These are
              the key conversations and handovers we coordinate.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <article
                key={step.step}
                className="relative border border-border bg-background p-6 md:p-7"
              >
                <span className="font-display text-5xl font-semibold text-accent/75">
                  0{index + 1}
                </span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-steel">
                  {step.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
                <span className="absolute right-6 top-7 grid size-8 place-items-center border border-border text-accent">
                  <Check className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="scroll-mt-16 bg-navy-deep py-16 text-primary-foreground md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              04 / Why it matters
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase md:text-5xl">
              Confidence at each handover
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
              Good marine coordination helps customers plan cargo movements with clearer
              responsibilities and fewer unknowns.
            </p>
          </div>
          <ul className="grid gap-0 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <li key={benefit} className="flex gap-4 border-t border-white/20 py-5">
                <span className="text-xs font-bold text-accent">0{index + 1}</span>
                <span className="text-sm leading-6 text-white/85">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-16 bg-background py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              05 / Common questions
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase md:text-5xl">
              Before we set sail
            </h2>
          </div>
          <ServiceFAQ items={faqs} />
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section id="related" className="scroll-mt-16 bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              06 / Explore further
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase md:text-4xl">
              Connected services
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {relatedServices.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-accent/60"
                  >
                    <Icon className="size-5 text-accent" />
                    <h3 className="mt-5 text-lg font-semibold uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                      View service{" "}
                      <ArrowRight className="size-3 text-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <ContactBand />
    </main>
  );
}
