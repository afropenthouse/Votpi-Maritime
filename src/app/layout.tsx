import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://votpimaritime.com"),
  title: {
    default: "VOTPI Maritime | Marine Transportation Nigeria & West Africa",
    template: "%s | VOTPI Maritime",
  },
  description:
    "Dedicated product tankers and marine logistics connecting refineries to markets across Nigeria and West Africa. Safe, reliable transportation of refined petroleum products.",
  keywords: [
    "VOTPI Maritime",
    "marine transportation Nigeria",
    "product tanker Nigeria",
    "petroleum transport West Africa",
    "PMS AGO transportation",
    "vessel chartering Nigeria",
    "marine logistics Lagos",
    "coastal shipping West Africa",
    "refinery to terminal transport",
    "tanker fleet Nigeria",
    "Nigerian maritime company",
    "marine agency Nigeria",
    "cargo survey inspection",
    "bunker supply Nigeria",
  ],
  authors: [{ name: "VOTPI Maritime Limited", url: "https://votpimaritime.com" }],
  creator: "VOTPI Maritime Limited",
  publisher: "VOTPI Maritime Limited",
  category: "Marine Transportation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://votpimaritime.com",
    siteName: "VOTPI Maritime",
    title: "VOTPI Maritime | Marine Transportation Nigeria & West Africa",
    description:
      "Dedicated product tankers and marine logistics connecting refineries to markets across Nigeria and West Africa.",
    images: [
      {
        url: "/images/votpi-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "VOTPI Maritime — Product Tanker & Marine Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOTPI Maritime | Marine Transportation Nigeria & West Africa",
    description:
      "Dedicated product tankers and marine logistics connecting refineries to markets across Nigeria and West Africa.",
    images: ["/images/votpi-hero.jpg"],
    creator: "@votpimaritime",
  },
  icons: {
    icon: "/votpi-logo.png",
    shortcut: "/votpi-logo.png",
    apple: "/votpi-logo.png",
  },
  alternates: {
    canonical: "https://votpimaritime.com",
  },
  verification: {
    google: "votpi-maritime-site-verification",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
