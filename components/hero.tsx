"use client";

import { quoteMailto, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { HeroGearVisual } from "./hero-gear-visual";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 py-20 text-text-on-dark sm:px-6 lg:py-32">
      {/* Subtle grid overlay for texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] lg:items-center lg:gap-8 xl:gap-12">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              {"// Precision Engineering — Since Day One //"}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The Best Range of{" "}
              <span className="text-accent-brand-orange">Job Work</span>
              {" "}— Effective &amp; Timely Delivery
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-on-dark/80">
              {siteConfig.company.legalName} delivers CNC, VMC, lathe, and ring
              machining with dependable execution. Contract manufacturing you can
              rely on.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/services" variant="primary">
                Explore Services
              </ButtonLink>
              <ButtonLink
                href={quoteMailto()}
                variant="secondary"
                className="border-white/20 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
              >
                Request a Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="flex justify-center lg:justify-end">
          <HeroGearVisual />
        </Reveal>
      </div>
    </section>
  );
}
