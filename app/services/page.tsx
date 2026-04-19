import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, quoteMailto } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button-link";


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
      <PageHeader
        eyebrow="// Our Capabilities //"
        title="Manufacturing Services"
        subtitle="Comprehensive precision manufacturing — from CNC machining and VMC milling to lathe turning and custom job work. Every service backed by dependable execution."
      />

      {siteConfig.serviceCategories.map((cat, catIdx) => (
        <section key={cat.category}>
          {/* Category header with image */}
          <Section className={catIdx % 2 === 0 ? "" : "bg-surface"}>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Image — swap sides on odd rows */}
              <div className={catIdx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden border border-border">
                  <Image
                    src={cat.image}
                    alt={cat.category}
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Category info */}
              <div className={catIdx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
                  {String(catIdx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
                  {cat.category}
                </h2>
                <p className="mt-4 max-w-lg text-text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Sub-service cards below */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((svc) => (
                <Link
                  key={svc.title}
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col border border-border bg-background p-6 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {svc.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-brand-orange"
                        />
                        <span className="text-xs text-text-muted">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-brand-orange transition-transform duration-200 group-hover:translate-x-1">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        </section>
      ))}

      {/* Quote CTA between services and footer */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Need a specific machining capability?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-on-dark/70">
            If you don&apos;t see your exact requirement listed, get in touch —
            we regularly take on custom jobs and can advise on the best approach
            for your parts.
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
