"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/operations", "Operations"],
  ["/trading-areas", "Trading areas"],
  ["/hseq", "HSEQ"],
  ["/careers", "Careers"],
  ["/compliance", "Compliance"],
  ["/news", "Insights"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-primary-foreground/20 text-primary-foreground">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" aria-label="VOTPI Maritime home">
          <img
            src="/votpi-logo.png"
            alt="VOTPI Maritime"
            className="h-14 w-auto brightness-0 invert"
          />
        </Link>
        <nav className="hidden items-center gap-3 lg:flex xl:gap-6">
          {nav.map(([to, label]) => (
            <Link
              key={to}
              href={to}
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider transition hover:text-accent xl:text-[11px]",
                pathname === to ? "text-accent" : "text-primary-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:ml-4 xl:block">
          <Button asChild variant="maritime" size="sm">
            <Link href="/contact">Request capacity</Link>
          </Button>
        </div>
        <button
          className="grid size-11 place-items-center border border-primary-foreground/30 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary-foreground/20 bg-navy-deep px-5 py-6 lg:hidden">
          {nav.map(([to, label]) => (
            <Link
              key={to}
              href={to}
              onClick={() => setOpen(false)}
              className="block border-b border-primary-foreground/10 py-3 text-sm font-semibold uppercase"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-accent px-5 py-4 text-center text-sm font-bold uppercase"
          >
            Request capacity
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_.8fr_.8fr] md:px-10">
        <div>
          <img
            src="/votpi-logo.png"
            alt="VOTPI Maritime"
            className="h-20 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/60">
            A professionally managed marine transportation partner supporting the downstream
            petroleum value chain.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-accent">
            Every litre. Every voyage. Every time.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase">Company</h2>
          <div className="mt-5 grid gap-3 text-sm text-primary-foreground/65">
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/hseq">HSEQ</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase">Contact</h2>
          <div className="mt-5 space-y-4 text-sm leading-6">
            <a href="mailto:info@votpimaritime.com" className="flex gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              info@votpimaritime.com
            </a>
            <a href="mailto:daniel.manuwa@votpimaritime.com" className="flex gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              daniel.manuwa@votpimaritime.com
            </a>
            <a href="tel:+2348138577307" className="flex gap-3">
              <Phone className="size-4 shrink-0 text-accent" />
              0813 857 7307
            </a>
            <a href="tel:+2349134972232" className="flex gap-3">
              <Phone className="size-4 shrink-0 text-accent" />
              +234 913 497 2232
            </a>
            <p className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-accent" />
              Plot 1B, Block 57A, Sikiru Alade Oloko Crescent, Lekki Phase 1, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-[11px] text-primary-foreground/45">
        © 2026 VOTPI Maritime Limited. All rights reserved.
      </div>
    </footer>
  );
}
