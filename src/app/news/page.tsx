import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, PageHero } from "@/components/site-sections";
import { NEWS_CATEGORY_LABELS, latestNews } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News & Insights | VOTPI Maritime",
  description:
    "Read marine operations explainers, cargo care guides and company news from VOTPI Maritime.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "VOTPI News & Insights",
    description: "Practical perspectives on marine transport and coastal energy logistics.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

function ArticleMeta({ article }: { article: ReturnType<typeof latestNews>[number] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <Calendar className="size-3 text-accent" />
        {article.publishedDisplay}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="size-3 text-accent" />
        {article.readingTimeMinutes} min read
      </span>
    </div>
  );
}

export default function NewsPage() {
  const allArticles = latestNews();
  const insights = allArticles.filter((article) => article.category === "industry-insight");
  const companyNews = allArticles.filter((article) => article.category === "company-update");
  const [featured, ...moreInsights] = insights;

  return (
    <main>
      <PageHero
        eyebrow="News & insights"
        title="Perspective from the waterline"
        intro="Marine operations, cargo care and coastal logistics—explained with practical context and references for further reading."
        image="/images/hero-news.jpg"
        imageAlt="Tugboat escorting a petroleum tanker into port at sunrise"
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
                The marine journal
              </p>
              <h2 className="mt-3 text-3xl font-semibold uppercase md:text-5xl">
                Ideas for the operating chain
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground">
              Four editorial guides explore voyage planning, cargo integrity, port coordination and
              pollution prevention. Each article includes authoritative references.
            </p>
          </div>

          {featured && (
            <article className="group grid overflow-hidden border border-border bg-mist/40 lg:grid-cols-[1.05fr_.95fr]">
              <Link
                href={`/news/${featured.slug}`}
                className="relative block min-h-[300px] overflow-hidden bg-navy-deep lg:min-h-[440px]"
              >
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                  Featured insight
                </span>
              </Link>
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-accent">
                  <BookOpen className="size-4" /> {NEWS_CATEGORY_LABELS[featured.category]}
                </div>
                <h3 className="mt-5 text-3xl font-semibold uppercase leading-tight md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-6">
                  <ArticleMeta article={featured} />
                </div>
                <Button asChild size="lg" className="mt-8 self-start">
                  <Link href={`/news/${featured.slug}`}>
                    Read the guide <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          )}

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreInsights.map((article, index) => (
              <article
                key={article.slug}
                className="group flex flex-col border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="relative block h-56 overflow-hidden bg-navy-deep"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-navy-deep/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                    0{index + 2} / Insight
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <ArticleMeta article={article} />
                  <h3 className="mt-5 text-2xl font-semibold uppercase leading-tight">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-steel">
                      <ExternalLink className="size-3" />
                      {article.references?.length ?? 0} references
                    </span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition hover:text-accent"
                    >
                      Read article{" "}
                      <ArrowRight className="size-3 text-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {companyNews.length > 0 && (
        <section className="bg-mist py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">From VOTPI</p>
            <h2 className="mt-3 text-3xl font-semibold uppercase">Company updates</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {companyNews.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group flex items-center justify-between gap-5 border border-border bg-background p-5 transition hover:border-accent/50"
                >
                  <div>
                    <ArticleMeta article={article} />
                    <h3 className="mt-3 text-lg font-semibold uppercase">{article.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBand />
    </main>
  );
}
