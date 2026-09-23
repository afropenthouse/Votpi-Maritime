import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site-sections";
import { careers, INTEREST_AREA_LABELS, interestAreaMailto } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers | VOTPI Maritime",
  description:
    "Build a maritime career with VOTPI across marine operations, logistics, compliance and support functions.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at VOTPI Maritime",
    description: "Join a safety-led team moving refined energy across African coastal markets.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const bridgeImage = "/images/votpi-bridge.jpg";

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build the next chapter of African maritime logistics"
        intro="We value safety-minded professionals who bring discipline, integrity and operational excellence to every assignment."
        image="/images/hero-careers.jpg"
        imageAlt="African maritime officers walking on a product tanker deck"
      />
      <section className="grid bg-background lg:grid-cols-2">
        <div className="p-8 md:p-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Work with purpose
          </p>
          <h2 className="mt-4 text-5xl font-semibold uppercase">Expertise that moves energy</h2>
          <p className="mt-6 leading-7 text-muted-foreground">
            Our growing platform offers future opportunities across marine operations, vessel
            management, logistics, HSEQ, compliance and commercial support.
          </p>
          <div className="mt-9 border-l-2 border-accent pl-5">
            <h3 className="font-bold">No current vacancies are published.</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{careers.note}</p>
          </div>
          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Expression of interest
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Send a concise expression of interest and CV. Unsolicited applications do not
              guarantee engagement.
            </p>
            <a
              href={interestAreaMailto("marine-operations")}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent"
            >
              <Mail className="size-4" />
              {careers.expressionOfInterestEmail}
            </a>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {careers.areas.map((area) => (
              <a
                key={area}
                href={interestAreaMailto(area)}
                className="group flex items-center justify-between border-t border-border py-3 text-sm font-semibold transition hover:text-accent"
              >
                {INTEREST_AREA_LABELS[area]}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
          <Button asChild size="lg" className="mt-10">
            <Link href="/contact">
              Contact our team <ArrowRight />
            </Link>
          </Button>
        </div>
        <img
          src={bridgeImage}
          loading="lazy"
          width={1600}
          height={1000}
          alt="Professional marine officers on a tanker bridge"
          className="h-full min-h-[480px] w-full object-cover"
        />
      </section>
    </main>
  );
}
