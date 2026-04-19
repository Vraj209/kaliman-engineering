import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { AboutHero } from "@/components/about-hero";
import { CapabilitiesMarquee } from "@/components/capabilities-marquee";
import { AboutStory } from "@/components/about-story";
import { MissionVisionValues } from "@/components/about-mission";
import { AboutTimeline } from "@/components/about-timeline";
import { AboutTeam } from "@/components/about-team";
import { AboutTrusted } from "@/components/about-trusted";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.company.legalName} — precision contract job work and CNC machining services from Anand, Gujarat.`,
  keywords: [
    "about Kalimal Engineering",
    "precision engineering company",
    "contract job work",
    "CNC machining services",
    "manufacturing Anand Gujarat",
  ],
  openGraph: {
    title: `About | ${siteConfig.company.legalName}`,
    description: `About ${siteConfig.company.legalName} — precision contract job work and CNC machining services.`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 01 — Hero: dark, blueprint visual, coordinates, stats */}
      <AboutHero />

      {/* 02 — Capabilities marquee (continuity with home rhythm) */}
      <CapabilitiesMarquee />

      {/* 03 — Our journey: story + founder attribution + capabilities row */}
      <AboutStory />

      {/* 04 — Mission / Vision / Values (dark pillar strip) */}
      <MissionVisionValues />

      {/* 05 — Milestones timeline */}
      <AboutTimeline />

      {/* 06 — People & craft (disciplines grid) */}
      <AboutTeam />

      {/* 07 — Trusted across industries (dark, globe dial + chips) */}
      <AboutTrusted />

      {/* 08 — CTA — reuse with About-specific copy */}
      <CtaBand
        numeral="02"
        eyebrow="// LET'S TALK //"
        title={"Ready to work\nwith us?"}
        body="Tell us about the part, the batch, and the timeline. We'll come back with an honest schedule and a clear scope — no guessing, no over-commitment."
        primaryLabel="Request a quote"
        secondaryLabel="Visit our contact page"
      />
    </>
  );
}
