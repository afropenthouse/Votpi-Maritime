import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero, FeatureGrid, ContactBand } from "@/components/site-sections";
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

function ProcessStep({
  index,
  step,
  title,
  text,
  isLast,
}: {
  index: number;
  step: string;
  title: string;
  text: string;
  isLast: boolean;
}) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-border md:left-1/2 md:ml-[-1px]"></div>
      )}
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-display text-xl font-semibold text-primary-foreground">
          {step}
        </span>
        <div>
          <h3 className="font-semibold uppercase">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What documentation is required to ship petroleum products?",
    a: "The required documentation includes cargo manifest, bill of lading, certificate of quality, tank cleaning certificate, insurance certificate, and relevant customs and port authority clearances. We assist with preparing and verifying all documentation throughout the voyage.",
  },
  {
    q: "How quickly can a vessel be deployed for cargo transport?",
    a: "Vessel deployment timelines depend on cargo volume, product type and route. For standard refinery-to-terminal movements, vessels can typically be deployed within 24-72 hours. Emergency or urgent cargoes are prioritised with expedited planning and positioning.",
  },
  {
    q: "What safety standards do your vessels operate under?",
    a: "All our vessels operate under approved Safety Management Systems (SMS) compliant with ISM Code and flag-state requirements. Vessels are class-certified, undergo regular third-party safety inspections, and crews are trained in petroleum product handling and emergency response procedures.",
  },
  {
    q: "Can you handle emergency or urgent cargo shipments?",
    a: "Yes, we maintain dedicated emergency response capability with vessels on standby and 24/7 operations coordination. Emergency or priority cargoes are handled with expedited planning, positioning and loading to meet critical delivery windows.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title={service.title}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FeatureGrid items={service.features} />
          <div className="mt-12 border-l-2 border-accent bg-background p-6 text-sm leading-6 text-muted-foreground">
            <strong className="text-foreground">Need capacity?</strong> Contact our commercial team
            with your cargo, route and schedule requirements and we will confirm vessel availability
            and terms.
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold uppercase">Overview</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {service.description}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold uppercase">Key Benefits</h3>
            </div>
            <div className="lg:col-span-2">
              <ul className="grid gap-4 text-sm text-muted-foreground sm:text-base">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-semibold uppercase">What to Expect</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
              A streamlined process designed for efficiency and transparency.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <ProcessStep
                key={step.step}
                index={i + 1}
                step={step.step}
                title={step.title}
                text={step.text}
                isLast={i === service.process.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-semibold uppercase">Frequently Asked Questions</h2>
          </div>
          <ServiceFAQ items={faqs} />
        </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-mist py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 className="text-3xl font-semibold uppercase">Related Services</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              You may also be interested in the following services.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {relatedServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block rounded-lg border border-border bg-background p-8 transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="size-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold uppercase group-hover:text-accent">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {s.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent">
                    Learn more <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
          <h2 className="text-3xl font-semibold uppercase">Ready to move energy?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 opacity-80">
            Request vessel capacity, discuss cargo requirements or arrange a consultation with our
            operations team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Request capacity <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="maritimeOutline" size="lg">
              <Link href="/fleet">Our fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
