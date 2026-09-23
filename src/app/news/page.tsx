import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand } from "@/components/site-sections";
import { NEWS_CATEGORY_LABELS, latestNews } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News & Insights | VOTPI Maritime",
  description:
    "Company news, marine operations updates and perspectives on petroleum product transportation in Africa.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "VOTPI News & Insights",
    description: "Operational updates and perspectives from VOTPI Maritime.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function NewsPage() {
  const articles = latestNews();

  return (
    <main>
      <PageHero
        eyebrow="News & insights"
        title="Updates from the waterline"
        intro="Company news, operational developments and informed perspectives on Africa's evolving petroleum trade."
        image="/images/hero-news.jpg"
        imageAlt="Tugboat escorting a petroleum tanker into port at sunrise"
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-px bg-border">
            {articles.map((article) => (
              <article key={article.slug} className="bg-background p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
                  <span>{NEWS_CATEGORY_LABELS[article.category]}</span>
                  <span className="text-muted-foreground/60">|</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="size-3" />
                    {article.publishedDisplay}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3" />
                    {article.readingTimeMinutes} min read
                  </span>
                  {article.verified && (
                    <span className="rounded bg-accent/15 px-2 py-0.5 text-accent">Verified</span>
                  )}
                </div>
                <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight md:text-4xl">
                  {article.title}
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">{article.excerpt}</p>
                <div className="mt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link href={`/news/${article.slug}`}>
                      Read article <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
            Further company updates will be published following internal approval.
          </p>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
