"use client";

import { PageHero, FeatureGrid, ContactBand } from "./site-sections";

export type ContentPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  statement?: string;
  items: { title: string; text: string; href?: string }[];
  note?: string;
};

export function ContentPage({ data }: { data: ContentPageData }) {
  return (
    <main>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
      />
      {data.statement && (
        <section className="bg-accent py-12 text-accent-foreground">
          <p className="mx-auto max-w-7xl px-5 font-display text-3xl font-semibold uppercase md:px-10 md:text-5xl">
            {data.statement}
          </p>
        </section>
      )}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FeatureGrid items={data.items} />
          {data.note && (
            <p className="mt-8 border-l-2 border-accent pl-5 text-sm leading-6 text-muted-foreground">
              {data.note}
            </p>
          )}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
