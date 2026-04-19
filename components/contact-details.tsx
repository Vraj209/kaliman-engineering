"use client";

import { siteConfig, quoteMailto } from "@/lib/site-config";
import { Reveal } from "./reveal";

const phoneIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const emailIcon = (
  <svg
    width="28"
    height="28"
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
);

const locationIcon = (
  <svg
    width="28"
    height="28"
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
);

const clockIcon = (
  <svg
    width="28"
    height="28"
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
);

export function ContactDetails() {
  return (
    <section className="bg-surface-dark-alt px-4 py-16 text-text-on-dark sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          {/* ── Left: Contact us on ────────────────────────── */}
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D94125]">
                {"// Contact us on //"}
              </p>

              <ul className="mt-8 flex flex-col gap-6">
                {siteConfig.contact.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="group flex items-center gap-4 transition-colors duration-200"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-brand-orange transition-colors duration-200 group-hover:bg-accent-brand-orange group-hover:text-white">
                        {phoneIcon}
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-text-subtle">
                          {phone.label}
                        </span>
                        <span className="mt-0.5 block text-lg font-medium text-text-on-dark transition-colors duration-200 group-hover:text-accent-bright">
                          {phone.display}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href={quoteMailto()}
                    className="group flex items-center gap-4 transition-colors duration-200"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-brand-orange transition-colors duration-200 group-hover:bg-accent-brand-orange group-hover:text-white">
                      {emailIcon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-text-subtle">
                        Email
                      </span>
                      <span className="mt-0.5 block text-lg font-medium text-text-on-dark transition-colors duration-200 group-hover:text-accent-bright">
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* ── Right: Find us ─────────────────────────────── */}
          <Reveal delay={80}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
                {"// Find us //"}
              </p>

              <ul className="mt-8 flex flex-col gap-6">
                <li>
                  <div className="group flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-brand-orange">
                      {locationIcon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-text-subtle">
                        Address
                      </span>
                      <span className="mt-0.5 block text-lg font-medium leading-snug text-text-on-dark/90">
                        {siteConfig.contact.address}
                      </span>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="group flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-brand-orange">
                      {clockIcon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-text-subtle">
                        Hours
                      </span>
                      <span className="mt-0.5 block text-lg font-medium text-text-on-dark/90">
                        {siteConfig.contact.hours}
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center lg:mt-16 lg:pt-12">
          <Reveal>
            <p className="text-lg text-text-on-dark/70">
              Email us with your project details — drawings, material
              specifications, quantities, and timeline — and we&apos;ll respond
              with a quote.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
