import { quoteMailto, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { HeroSection } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { IndustriesSection } from "@/components/industries";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      {/* 1 ─ Hero */}
      <HeroSection />

      {/* 2 ─ Trust strip */}
      <TrustStrip />

      {/* 3 ─ Services preview */}
      <Section id="services-preview">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
            {"// What We Do //"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight lg:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            From precision CNC machining to custom contract work — we deliver
            quality parts on schedule, every time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((svc) => (
            <ServiceCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              href="/services"
            />
          ))}
        </div>
        <div className="mt-10 flex gap-4">
          <ButtonLink href="/services" variant="secondary">
            View All Services
          </ButtonLink>
          <ButtonLink href={quoteMailto()}>Request a Quote</ButtonLink>
        </div>
      </Section>

      {/* 4 ─ Industries */}
      <IndustriesSection />

      {/* 5 ─ CTA band */}
      <CtaBand />
    </>
  );
}
