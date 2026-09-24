import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | VOTPI Maritime",
  description: "Current career opportunities at VOTPI Maritime.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at VOTPI Maritime",
    description: "View current career opportunities at VOTPI Maritime.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CareersPage() {
  return (
    <main>
      <section className="relative flex min-h-[340px] items-end overflow-hidden bg-navy-deep text-primary-foreground md:min-h-[390px]">
        <img
          src="/images/hero-careers.jpg"
          alt="Marine officers working together aboard a tanker"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-9 pt-28 md:px-10 md:pb-12">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">VOTPI Maritime</p>
          <h1 className="mt-3 text-5xl font-semibold uppercase leading-none md:text-7xl">Careers</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">
            Career opportunities with VOTPI Maritime.
          </p>
        </div>
      </section>

      <section className="bg-background px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl border border-border bg-mist/60 p-7 md:p-12">
          <span className="grid size-11 place-items-center border border-accent/50 text-accent">
            <BriefcaseBusiness className="size-5" />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-accent">
            Current opportunities
          </p>
          <h2 className="mt-3 text-3xl font-semibold uppercase md:text-5xl">
            No open roles at this time.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Please check back later for future openings.
          </p>
        </div>
      </section>
    </main>
  );
}
