import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Marine Operations | VOTPI Maritime",
  description:
    "See how VOTPI coordinates petroleum cargo voyages from refinery loading through marine transport, discharge and downstream delivery.",
  alternates: { canonical: "/operations" },
  openGraph: {
    title: "VOTPI Marine Operations",
    description: "Disciplined voyage planning around real offtake schedules and downstream demand.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function OperationsPage() {
  return (
    <ContentPage
      data={{
        eyebrow: "Operations",
        title: "Control across the voyage",
        intro:
          "Every movement is planned around real offtake schedules, terminal readiness and downstream demand.",
        image: "/images/hero-operations.jpg",
        imageAlt: "Product tanker and tugboats coordinating operations at a petroleum terminal",
        statement: "Every litre. Every voyage. Every time.",
        items: [
          {
            title: "01 · Plan",
            text: "Vessel deployment, scheduling, cargo requirements and route assessment.",
          },
          {
            title: "02 · Load",
            text: "Loading-terminal coordination, documentation and cargo compliance.",
          },
          {
            title: "03 · Transport",
            text: "Voyage monitoring, marine safety, vessel integrity and operational control.",
          },
          {
            title: "04 · Coordinate",
            text: "Port, jetty and regulatory coordination throughout the movement.",
          },
          {
            title: "05 · Discharge",
            text: "Controlled discharge operations and cargo integrity management.",
          },
          {
            title: "06 · Deliver",
            text: "Depot and storage-facility coordination through to downstream market.",
          },
        ],
        note: "Since June 2025, VOTPI has facilitated clearing and agency handling for vessels carrying 163,995 metric tons of petroleum products and crude parcels. East African routes between Mombasa and Dar es Salaam are planned from Q3 2026, subject to approvals and operational readiness.",
      }}
    />
  );
}
