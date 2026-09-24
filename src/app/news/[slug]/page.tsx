import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand } from "@/components/site-sections";
import { allNewsSlugs, getNewsArticleBySlug, NEWS_CATEGORY_LABELS } from "@/lib/news-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found | VOTPI Maritime" };
  }
  return {
    title: `${article.title} | VOTPI Maritime`,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main>
      <PageHero
        eyebrow={NEWS_CATEGORY_LABELS[article.category]}
        title={article.title}
        intro={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <article className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {article.readingTimeMinutes} min read
              </span>
              {article.verified && (
                <span className="flex items-center gap-1 rounded bg-accent/15 px-2 py-0.5 text-accent">
                  <ShieldCheck className="size-3" /> Verified
                </span>
              )}
            </div>
            <div className="mt-10 space-y-6 text-base leading-7 text-muted-foreground">
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {article.references && article.references.length > 0 && (
              <section className="mt-12 border-t border-border pt-7">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-accent">
                  References & further reading
                </p>
                <ul className="mt-4 space-y-3">
                  {article.references.map((reference, index) => (
                    <li key={reference.url}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-start gap-3 text-sm leading-6 text-foreground transition hover:text-accent"
                      >
                        <span className="mt-0.5 text-[10px] font-bold text-accent">
                          0{index + 1}
                        </span>
                        <span className="underline decoration-border underline-offset-4 group-hover:decoration-accent">
                          {reference.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">
                  These sources provide general industry context. Always refer to current rules and
                  voyage-specific requirements.
                </p>
              </section>
            )}
            <div className="mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/news">
                  <ArrowLeft /> Back to news
                </Link>
              </Button>
            </div>
          </article>
          <aside className="bg-mist p-7">
            <h2 className="text-2xl font-semibold uppercase">Article details</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-accent">
                  Category
                </dt>
                <dd className="mt-1 text-foreground">{NEWS_CATEGORY_LABELS[article.category]}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-accent">
                  Published
                </dt>
                <dd className="mt-1 text-foreground">{article.publishedAt}</dd>
              </div>
              {article.updatedAt && (
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-accent">
                    Updated
                  </dt>
                  <dd className="mt-1 text-foreground">{article.updatedAt}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-accent">
                  Verification
                </dt>
                <dd className="mt-1 text-foreground">
                  {article.verified
                    ? "Verified against operational records"
                    : article.category === "industry-insight"
                      ? "Editorial overview; references linked below"
                      : "Editorial content"}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
