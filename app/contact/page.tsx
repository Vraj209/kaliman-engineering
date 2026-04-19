import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ContactHero } from "@/components/contact-hero";
import { Section } from "@/components/section";

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

export default function ContactPage() {
  return (
    <>
      {/* Hero: two-column — left headline/info, right form */}
      <ContactHero />

      {/* Map */}
      <Section className="bg-background">
        <p className="text-lg font-semibold uppercase tracking-widest text-[#D94125]">
          {"// Find Us //"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-subtle">
          Our Location
        </h2>
        <div className="mt-6 overflow-hidden border border-border">
          <iframe
            title="Kalimal Engineering location on Google Maps"
            src="https://maps.google.com/maps?q=C-444,+Nr.+Berger+Paints,+G.I.D.C.+Estate,+V.U.+Nagar,+Anand+388121,+Gujarat,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            {siteConfig.contact.address}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=C-444+Nr+Berger+Paints+GIDC+Estate+VU+Nagar+Anand+388121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-brand-orange underline underline-offset-4 transition-colors duration-200 hover:text-accent-deep"
          >
            Open in Google Maps
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <path d="M1 13 13 1M13 1H5M13 1v8" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
