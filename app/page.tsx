import { HeroSection } from "@/components/hero";
import { AboutIntro } from "@/components/about-intro";
import { ServicesShowcase } from "@/components/services-showcase";
import { CapabilitiesMarquee } from "@/components/capabilities-marquee";
import { ManufactureShowcase } from "@/components/manufacture-showcase";
import { CtaBand } from "@/components/cta-band";
import { IndustriesSection } from "@/components/industries";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      {/* 01 — Hero: dark, gear visual, SINCE badge, scroll indicator */}
      <HeroSection />

      {/* 02 — Who we are: driven by precision, stats band */}
      <AboutIntro />

      {/* 03 — What we do: 4-card services showcase */}
      <ServicesShowcase />

      {/* 04 — Capabilities marquee (industrial scroll) */}
      <CapabilitiesMarquee />

      {/* 05 — What we manufacture: 50k+ parts, product-spec grid */}
      <ManufactureShowcase />

      {/* 06 — Ready to start your next project (orange CTA) */}
      <CtaBand />

      {/* 07 — Built for industry (vertical stacked list) */}
      <IndustriesSection />

      {/* 08 — Why choose us (checklist + gauge visual) */}
      <WhyChooseUs />
    </>
  );
}
