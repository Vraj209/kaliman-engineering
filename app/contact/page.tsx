import type { Metadata } from "next";
import { siteConfig, quoteMailto, telHref } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.company.legalName} for quotes and job work inquiries.`,
  keywords: [
    "contact Kalimal Engineering",
    "request a quote",
    "CNC machining quote",
    "job work inquiry",
  ],
  openGraph: {
    title: `Contact | ${siteConfig.company.legalName}`,
    description: `Contact ${siteConfig.company.legalName} for quotes and job work inquiries.`,
  },
};

const contactBlocks = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: quoteMailto(),
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" />
        <path d="M22 4 12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: siteConfig.contact.phoneDisplay,
    href: telHref(),
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: siteConfig.contact.address,
    href: undefined,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: siteConfig.contact.hours,
    href: undefined,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Get in Touch //"
        title="Contact Us"
        subtitle="Have a project in mind? Reach out for a quote or to discuss your machining requirements."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactBlocks.map((block) => (
            <div
              key={block.label}
              className="border border-border bg-surface p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-accent-brand-orange">
                  {block.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
                    {block.label}
                  </p>
                  {block.href ? (
                    <a
                      href={block.href}
                      className="mt-1 block text-sm font-medium text-foreground underline underline-offset-4 transition-colors duration-200 hover:text-accent-brand-orange"
                    >
                      {block.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-text-muted">
                      {block.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">
            Request a Quote
          </h2>
          <p className="mt-2 max-w-lg text-sm text-text-muted">
            Email us with your project details — drawings, material
            specifications, quantities, and timeline — and we&apos;ll respond
            with a quote. Subject line is pre-filled for your convenience.
          </p>
          <div className="mt-6">
            <ButtonLink href={quoteMailto()}>
              Email Us for a Quote
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Map placeholder */}
      <Section className="bg-surface">
        <div className="border border-dashed border-border bg-background p-10 text-center">
          <p className="text-text-subtle">
            Map embed coming soon — once the verified address is confirmed.
          </p>
        </div>
      </Section>
    </>
  );
}
