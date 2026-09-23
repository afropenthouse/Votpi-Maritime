export type NewsCategory = "company-update" | "industry-insight";

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  "company-update": "Company update",
  "industry-insight": "Industry insight",
};

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  publishedDisplay: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  category: NewsCategory;
  author: string;
  readingTimeMinutes: number;
  verified: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "163995-mt-handled-since-june-2025",
    title: "163,995 metric tons handled since June 2025",
    excerpt:
      "VOTPI Maritime has facilitated clearing and agency handling for vessels discharging or loading petroleum products and crude parcels while navigating port delays, infrastructure constraints, security risks and regulatory complexity.",
    body: [
      "VOTPI Maritime has facilitated clearing and agency handling for vessels discharging or loading petroleum products and crude parcels while navigating port delays, infrastructure constraints, security risks and regulatory complexity.",
      "The operating record reflects the importance of disciplined planning, port coordination and downstream-focused execution across Nigeria's petroleum logistics network.",
    ],
    publishedAt: "2025-06-30",
    publishedDisplay: "June 2025",
    image: "/images/hero-news.jpg",
    imageAlt: "Tugboat escorting a petroleum tanker into port at sunrise",
    category: "company-update",
    author: "VOTPI Maritime",
    readingTimeMinutes: 2,
    verified: true,
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function latestNews(): NewsArticle[] {
  return [...newsArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function allNewsSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}
