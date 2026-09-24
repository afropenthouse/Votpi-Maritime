import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site-sections";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Charter Enquiries | VOTPI Maritime",
  description:
    "Request vessel capacity or discuss petroleum product transportation and marine logistics with VOTPI Maritime.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact VOTPI Maritime",
    description:
      "Request vessel capacity for refined petroleum product transportation across Nigeria and West Africa.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Request vessel capacity"
        intro="Share your cargo, route and schedule requirements with our commercial team."
        image="/images/hero-contact.jpg"
        imageAlt="Port control officer coordinating a tanker arrival at dusk"
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ContactForm />
        <aside className="bg-mist p-7">
          <h2 className="text-3xl font-semibold uppercase">Commercial contact</h2>
          <div className="mt-7 grid gap-5 text-sm leading-6">
            <a href="mailto:info@votpimaritime.com" className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-accent" />
              info@votpimaritime.com
            </a>
            <a href="mailto:daniel.manuwa@votpimaritime.com" className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-accent" />
              daniel.manuwa@votpimaritime.com
            </a>
            <a href="tel:+2348138577307" className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-accent" />
              0813 857 7307
            </a>
            <a href="tel:+2349134972232" className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-accent" />
              +234 913 497 2232
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-accent" />
              Plot 1B, Block 57A, Sikiru Alade Oloko Crescent, Lekki Phase 1, Lagos, Nigeria.
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-accent" />
              3/5 Imam Dauda Street, off Eric Moore, Surulere, Lagos.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
