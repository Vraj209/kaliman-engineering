import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kali-engineering.example";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.company.legalName} — Precision CNC, VMC & Lathe Job Work`,
    template: `%s | ${siteConfig.company.legalName}`,
  },
  description: siteConfig.elevatorPitch,
  keywords: [
    "Kalimal Engineering",
    "CNC job work",
    "VMC machining",
    "lathe job work",
    "CNC machining",
    "precision engineering",
    "contract manufacturing",
    "ring components",
    "job work",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.company.legalName,
    title: `${siteConfig.company.legalName} — Precision CNC, VMC & Lathe Job Work`,
    description: siteConfig.elevatorPitch,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent-brand-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-on-dark"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
