import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { services } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Marine Transportation & Tanker Chartering Services | VOTPI",
  description:
    "Petroleum product transportation, vessel chartering, marine logistics, vessel management and agency support in Nigeria and West Africa.",
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
    <ContentPage
      data={{
        eyebrow: "Our services",
        title: "Marine capability from refinery to market",
        intro:
          "A single, accountable partner for vessel operations, cargo movement and coastal logistics.",
        image: "/images/hero-services.jpg",
        imageAlt: "Petroleum tanker loading arms and marine operations crew at sea",
        items: services.map((s) => ({
          title: s.title,
          text: s.tagline,
          href: `/services/${s.slug}`,
        })),
      }}
    />
  );
}
