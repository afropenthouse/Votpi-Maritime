"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SectionHeader({
  eyebrow,
  title,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-semibold uppercase leading-none md:text-6xl ${inverse ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
    </div>
  );
}

export function StatBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-px bg-primary-foreground/15 md:grid-cols-3">
        {[
          ["9+", "Years of experience"],
          ["250+", "Projects completed"],
          ["500,000+ MT", "Cargo handled to date"],
        ].map(([n, l]) => (
          <div key={l} className="bg-primary px-8 py-12">
            <strong className="font-display text-5xl font-semibold text-accent">{n}</strong>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/65">
              {l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="bg-accent py-20 text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end md:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em]">Business enquiry</p>
          <h2 className="mt-3 text-5xl font-semibold uppercase md:text-7xl">
            Let's move energy together
          </h2>
          <p className="mt-4 max-w-2xl leading-7 opacity-80">
            Discuss petroleum product transportation, vessel chartering or marine logistics support
            with our team.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="shrink-0 bg-navy-deep text-primary-foreground hover:bg-navy-deep/90"
        >
          <Link href="/contact">
            Request vessel capacity <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function TradeRoute() {
  const stops = [
    "Refinery",
    "Loading terminal",
    "Coastal route",
    "Port / jetty",
    "Depot",
    "Market",
  ];
  return (
    <section className="maritime-grid bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader eyebrow="Our trade routes" title="From supply point to market" />
        <div className="relative mt-14 grid gap-4 md:grid-cols-6">
          <div className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-primary/30 md:block" />
          {stops.map((s, i) => (
            <div key={s} className="relative">
              <span
                className="route-pulse relative z-10 grid size-10 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground"
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-bold uppercase">{s}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-muted-foreground">
          Voyages connect refinery offtake points and approved coastal terminals with discharge
          points across Nigeria and the West African sub-region.
        </p>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="page-hero relative flex min-h-[clamp(420px,58svh,600px)] items-end overflow-hidden bg-navy-deep text-primary-foreground">
      <img
        src={image}
        width={960}
        height={960}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/75 to-navy-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/25" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:pb-12 md:px-10 md:pb-14">
        <p className="text-[10px] font-bold uppercase tracking-[.24em] text-accent sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,5.3vw,5rem)] font-semibold uppercase leading-[.94]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/80 md:text-base md:leading-7">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; text: string; href?: string }[];
}) {
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {items.map((x, i) => (
        <article key={x.title} className="bg-background p-7">
          <span className="text-xs font-bold text-steel">0{i + 1}</span>
          <h2 className="mt-8 text-2xl font-semibold uppercase">{x.title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{x.text}</p>
          {x.href && (
            <Link
              href={x.href}
              className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent"
            >
              Learn more <ArrowRight className="size-3" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((x) => (
        <div
          key={x}
          className="flex items-center gap-3 border-t border-border py-4 text-sm font-semibold"
        >
          <CheckCircle2 className="size-5 text-accent" />
          {x}
        </div>
      ))}
    </div>
  );
}
