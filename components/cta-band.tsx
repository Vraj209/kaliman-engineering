"use client";

import { quoteMailto, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="bg-surface-dark-alt px-4 py-16 text-text-on-dark sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Ready to Discuss Your Project?
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mx-auto mt-4 max-w-xl text-text-on-dark/70">
            Get a quote from {siteConfig.company.legalName} — CNC, VMC, lathe,
            and general job work with effective, timely delivery.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={quoteMailto()}>Request a Quote</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="border-white/20 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
