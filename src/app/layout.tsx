import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "VOTPI Maritime | Marine Transportation Nigeria & West Africa",
    template: "%s | VOTPI Maritime",
  },
  description:
    "Safe, reliable marine transportation of refined petroleum products across Nigeria and West Africa.",
  authors: [{ name: "VOTPI Maritime Limited" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "VOTPI Maritime",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/votpi-logo.png",
  },
  alternates: {
    canonical: "https://votpimaritime.com",
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
        <meta name="author" content="VOTPI Maritime Limited" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
