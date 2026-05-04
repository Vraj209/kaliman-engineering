"use client";

import { siteConfig, quoteMailto } from "@/lib/site-config";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* ── Left column ── */}
        <div className="flex flex-col">
          <Reveal>
            <h1 className="text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s{" "}
              <span className="text-accent-brand-orange">work</span> together
            </h1>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
              Got questions or need assistance? Reach out to us anytime — our
              team is ready to provide the support and guidance you need.
            </p>
          </Reveal>

          {/* ── Bottom: contact info ── */}
          <Reveal delay={180}>
            <div className="mt-auto pt-16 lg:pt-24">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#D94125]">
                    {"// Contact us on //"}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {siteConfig.contact.phones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="text-md font-semibold text-foreground transition-colors duration-200 hover:text-accent-brand-orange"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={quoteMailto()}
                        className="text-md font-semibold text-foreground transition-colors duration-200 hover:text-accent-brand-orange"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#D94125]">
                    {"// Find us //"}
                  </p>
                  <p className="mt-5 text-md font-semibold leading-relaxed text-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right column: dark contact form ── */}
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>

    </section>
  );
}
