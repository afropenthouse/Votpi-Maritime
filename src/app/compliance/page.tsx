import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, ContactBand } from "@/components/site-sections";
import {
  compliance,
  credentialAuthorities,
  CREDENTIAL_AUTHORITY_CATEGORY_LABELS,
} from "@/lib/credentials-data";

export const metadata: Metadata = {
  title: "Compliance & Certifications | VOTPI Maritime",
  description:
    "VOTPI Maritime operates within applicable Nigerian maritime, petroleum, customs and port requirements.",
  alternates: { canonical: "/compliance" },
  openGraph: {
    title: "VOTPI Compliance & Certifications",
    description: "A transparent framework for current maritime credentials and approvals.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Compliance & certifications"
        title="Credibility through current, verifiable credentials"
        intro="We operate within the Nigerian maritime and petroleum regulatory environment and maintain the registrations and approvals applicable to each operation."
        image="/images/hero-compliance.jpg"
        imageAlt="Marine surveyor inspecting safety equipment aboard a petroleum tanker"
      />
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {credentialAuthorities.map((authority) => (
              <article key={authority.name} className="bg-background p-7">
                <ShieldCheck className="size-8 text-accent" />
                <p className="mt-7 text-xs font-bold uppercase tracking-widest text-accent">
                  {CREDENTIAL_AUTHORITY_CATEGORY_LABELS[authority.category]}
                </p>
                <h2 className="mt-2 text-2xl font-semibold uppercase">{authority.name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {authority.roleDescription}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="bg-background p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Current status
              </p>
              <h2 className="mt-3 text-2xl font-semibold uppercase">{compliance.statusLabel}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {compliance.statusNote}
              </p>
            </article>
            <article className="bg-background p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                What we display
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                <li>Regulatory authority categories</li>
                <li>Applicable operating requirements</li>
                <li>Authorised documents only</li>
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                No certificate images, logos, document numbers, expiry dates or approval references
                are displayed.
              </p>
            </article>
          </div>
          <div className="mt-10 border-l-2 border-accent bg-background p-6 text-sm leading-6 text-muted-foreground">
            <strong className="text-foreground">Important notice:</strong> {compliance.disclaimer}
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Request compliance information</Link>
            </Button>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
