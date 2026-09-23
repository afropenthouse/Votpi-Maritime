import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "HSEQ & Marine Safety | VOTPI Maritime",
  description:
    "VOTPI Maritime's commitment to health, marine safety, cargo integrity, environmental protection and operational quality.",
  alternates: { canonical: "/hseq" },
  openGraph: {
    title: "HSEQ at VOTPI Maritime",
    description: "Safety is fundamental to every voyage we undertake.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function HseqPage() {
  return (
    <ContentPage
      data={{
        eyebrow: "Health · Safety · Environment · Quality",
        title: "Safety is fundamental to every voyage",
        intro:
          "Our HSEQ culture protects people, vessels, cargo, communities and the marine environment at every operating stage.",
        image: "/images/hero-hseq.jpg",
        imageAlt: "Marine officers conducting a safety inspection on a product tanker",
        statement: "Safety is not an option. It is fundamental to every voyage we undertake.",
        items: [
          {
            title: "Marine Safety",
            text: "Disciplined voyage planning, safe navigation practices and clear operational accountability.",
          },
          {
            title: "Cargo Safety",
            text: "Controlled handling practices designed to preserve cargo integrity from loading through discharge.",
          },
          {
            title: "Environmental Protection",
            text: "Pollution prevention and responsible operations focused on protecting coastal and marine environments.",
          },
          {
            title: "Crew Welfare",
            text: "Competent people, fit-for-duty standards and a working culture that puts wellbeing first.",
          },
          {
            title: "Vessel Integrity",
            text: "Inspection, maintenance and operational readiness aligned with vessel and trading requirements.",
          },
          {
            title: "Emergency Preparedness",
            text: "Risk-based planning, clear response procedures and continuous operational awareness.",
          },
          {
            title: "Regulatory Compliance",
            text: "Operations conducted within applicable maritime, port and petroleum requirements.",
          },
          {
            title: "Quality Management",
            text: "Structured oversight and continuous improvement across customer-facing marine services.",
          },
        ],
        note: "Specific policies, audit records and certifications are published only after current documents are approved for public release.",
      }}
    />
  );
}
