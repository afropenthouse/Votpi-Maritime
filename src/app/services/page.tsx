import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand } from "@/components/site-sections";
import { services } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Marine Transportation & Tanker Chartering Services | VOTPI",
  description:
    "Explore VOTPI marine transportation, vessel chartering, port logistics, vessel management and support services in Nigeria and West Africa.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "VOTPI Maritime Services",
    description:
      "Integrated marine transportation services for the downstream petroleum value chain.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marine solutions"
        title="One partner. Every stage of the voyage."
        intro="Explore the capabilities we bring to refined product movements, from vessel capacity and cargo transport to coastal logistics and operational support."
        image="/images/hero-services.jpg"
        imageAlt="Marine team coordinating a petroleum tanker operation"
      />

      <section id="service-directory" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">What we do</p>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold uppercase leading-none md:text-6xl">
                Marine capability, clearly connected
              </h2>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-muted-foreground">
                Select a service to explore how it works, what to expect and how our team can
                coordinate around your cargo and route.
              </p>
              <a
                href="#service-list"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent"
              >
                Explore services <ArrowDown className="size-4" />
              </a>
            </div>
          </div>

          <div
            id="service-list"
            className="mt-10 grid scroll-mt-24 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-navy-deep text-primary-foreground"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/15 transition duration-500 group-hover:via-navy-deep/55" />
                  <div className="relative flex items-start justify-between p-6 md:p-7">
                    <span className="font-display text-4xl font-semibold text-white/75">
                      0{index + 1}
                    </span>
                    <span className="grid size-11 place-items-center border border-white/35 bg-navy-deep/30 text-accent backdrop-blur transition group-hover:border-accent group-hover:bg-accent group-hover:text-navy-deep">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className="relative p-6 md:p-7">
                    <span className="text-[10px] font-bold uppercase tracking-[.2em] text-accent">
                      Marine service
                    </span>
                    <h3 className="mt-3 max-w-sm text-2xl font-semibold uppercase leading-tight md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                      {service.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 border-t border-white/25 pt-4 text-[11px] font-bold uppercase tracking-widest text-white">
                      Explore service{" "}
                      <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <div className="flex gap-4">
            <span className="grid size-12 shrink-0 place-items-center border border-accent/40 text-accent">
              <Compass className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                A tailored movement
              </p>
              <h2 className="mt-2 text-2xl font-semibold uppercase md:text-3xl">
                Cargo, route and schedule come first
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Tell us what you need to move and where. We can discuss the suitable service mix,
                operating requirements and next steps with your team.
              </p>
            </div>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">
              Discuss your requirements <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
