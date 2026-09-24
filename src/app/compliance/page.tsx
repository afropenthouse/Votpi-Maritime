import type { Metadata } from "next";
import { PageHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Compliance & Certifications | VOTPI Maritime",
  description: "Compliance information from VOTPI Maritime.",
  alternates: { canonical: "/compliance" },
  openGraph: {
    title: "VOTPI Compliance & Certifications",
    description: "Compliance information from VOTPI Maritime.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Compliance & certifications"
        title="Compliance information"
        intro="VOTPI Maritime operates within Nigeria's maritime and petroleum regulatory environment and maintains the industry relationships, registrations and approvals applicable to its operations."
        image="/images/hero-compliance.jpg"
        imageAlt="Marine surveyor inspecting safety equipment aboard a petroleum tanker"
      />
      <div aria-hidden="true" className="h-24 bg-background" />
    </main>
  );
}
