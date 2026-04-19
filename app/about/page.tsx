import type { Metadata } from "next";
import { siteConfig, quoteMailto } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.company.legalName} — precision contract job work and CNC machining services.`,
  keywords: [
    "about Kalimal Engineering",
    "precision engineering company",
    "contract job work",
    "CNC machining services",
  ],
  openGraph: {
    title: `About | ${siteConfig.company.legalName}`,
    description: `About ${siteConfig.company.legalName} — precision contract job work and CNC machining services.`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <PageHeader
        eyebrow="// About Us //"
        title={siteConfig.company.legalName}
        subtitle={siteConfig.elevatorPitch}
      />

      {/* Values / differentiators */}
      <Section>
        <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
          // Why Work With Us //
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight lg:text-3xl">
          What Sets Us Apart
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.differentiators.map((d) => (
            <div
              key={d.title}
              className="border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Facility / team placeholder */}
      <Section className="bg-surface">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
          // Our Facility //
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight lg:text-3xl">
          Facility &amp; Team
        </h2>
        <div className="mt-6 border border-dashed border-border bg-background p-10 text-center">
          <p className="text-text-subtle">
            Facility photos and team information coming soon.
          </p>
          <p className="mt-1 text-xs text-text-subtle">
            Contact us directly to learn more about our capabilities and
            equipment.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-on-dark/70">
            Whether you need a single prototype or ongoing production runs,
            we&apos;re ready to discuss your requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={quoteMailto()}>Request a Quote</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="border-white/20 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
