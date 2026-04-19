import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ServicesHero } from "@/components/services-hero";
import { CapabilitiesMarquee } from "@/components/capabilities-marquee";
import { ServicesCategories } from "@/components/services-categories";
import { AllServicesIndex } from "@/components/all-services-index";
import { ServicesProcess } from "@/components/services-process";
import { ServicesMaterials } from "@/components/services-materials";
import { ServicesFaq } from "@/components/services-faq";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description: `CNC machining, VMC milling, lathe turning, precision job work, and custom manufacturing services — ${siteConfig.company.legalName}.`,
  keywords: [
    "CNC job work",
    "CNC machining services",
    "CNC prototyping",
    "CNC milling",
    "CNC turning",
    "precision machining",
    "VMC machine job work",
    "VMC milling",
    "lathe machining",
    "CNC lathe turning",
    "ring components",
    "contract manufacturing",
    "precision job work",
    "custom precision parts",
  ],
  openGraph: {
    title: `Services | ${siteConfig.company.legalName}`,
    description: `CNC machining, VMC milling, lathe turning, precision job work, and custom manufacturing — ${siteConfig.company.legalName}.`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 01 — Hero: dark, capabilities matrix visual, stats */}
      <ServicesHero />

      {/* 02 — Capabilities marquee (continuity with home / about) */}
      <CapabilitiesMarquee />

      {/* 03 — Four capabilities as large alternating rows with illustrations */}
      <ServicesCategories />

      {/* 04 — Full directory of every sub-service grouped by category */}
      <AllServicesIndex />

      {/* 05 — Process: 4-step workflow (intake → planning → machining → dispatch) */}
      <ServicesProcess />

      {/* 06 — Materials & finishes strip */}
      <ServicesMaterials />

      {/* 07 — FAQ accordion */}
      <ServicesFaq />

      {/* 08 — CTA — reuse with services-specific copy */}
      <CtaBand
        numeral="03"
        eyebrow="// START A BRIEF //"
        title={"Have a drawing\nready to machine?"}
        body="Share the part, the batch, and the timeline. We'll come back with an honest schedule and a clear scope — no guessing, no over-commitment."
        primaryLabel="Request a quote"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
