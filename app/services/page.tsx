import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description: `CNC, VMC, lathe, and precision job work services — ${siteConfig.company.legalName}.`,
  keywords: [
    "CNC job work",
    "VMC machine job work",
    "CNC machining",
    "lathe machining",
    "ring components",
    "contract manufacturing",
    "precision job work",
  ],
  openGraph: {
    title: `Services | ${siteConfig.company.legalName}`,
    description: `CNC, VMC, lathe, and precision job work services — ${siteConfig.company.legalName}.`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Our Capabilities //"
        title="Services"
        subtitle="From CNC and VMC machining to lathe work and ring components — we deliver precision job work with effective, timely execution."
      />

      {/* Stacked service sections */}
      {siteConfig.services.map((svc, i) => (
        <Section key={svc.title} className={i % 2 === 1 ? "bg-surface" : ""}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight lg:text-3xl">
                {svc.title}
              </h2>
              <p className="mt-3 max-w-lg text-text-muted leading-relaxed">
                {svc.description}
              </p>
            </div>
            <ul className="flex flex-col gap-3 lg:mt-8">
              {svc.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-2 w-2 shrink-0 bg-accent-brand-orange"
                  />
                  <span className="text-sm text-text-muted">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {/* CTA band */}
      <CtaBand />
    </>
  );
}
