"use client";

import { quoteMailto, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { HeroGearVisual } from "./hero-gear-visual";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 pb-16 pt-14 text-text-on-dark sm:px-6 lg:pb-24 lg:pt-24">
      {/* Grid overlay for industrial texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Offset orange glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-brand-orange/15 blur-3xl"
      />

      {/* Top meta row — tagline + coordinates */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/55 sm:text-xs">
        <Reveal>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse bg-accent-brand-orange"
            />
            Trusted machining partner
          </span>
        </Reveal>
        <Reveal delay={80}>
          <span className="hidden font-mono tracking-[0.18em] sm:inline">
            22.5645° N, 72.9289° E
          </span>
        </Reveal>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto mt-10 grid max-w-7xl gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:gap-16">
        {/* Left — copy */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
              {"// SINCE DAY ONE //"}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              From raw stock
              <br />
              to{" "}
              <span className="relative inline-block text-accent-brand-orange">
                finished parts
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent-brand-orange/40"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-text-on-dark/75 sm:text-lg">
              {siteConfig.company.legalName} delivers end-to-end precision job
              work — CNC and VMC machining, lathe turning, and ring
              components — engineered for quality, repeatability, and on-time
              delivery.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/services" variant="primary">
                Explore our capabilities
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={quoteMailto()}
                variant="secondary"
                className="border-white/25 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
              >
                Request a quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* Right — gear visual */}
        <Reveal delay={140} className="relative flex justify-center lg:justify-end">
          <HeroGearVisual />
        </Reveal>
      </div>

      {/* Bottom meta row — location + scroll indicator + since */}
      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/60 sm:flex-row sm:items-center sm:justify-between sm:text-xs lg:mt-20">
        <span className="inline-flex items-center gap-2.5">
          <PinIcon />
          Based in: Anand, Gujarat — India
        </span>

        <a
          href="#about-intro"
          className="group inline-flex items-center gap-3 self-start transition-colors duration-200 hover:text-accent-brand-orange sm:self-auto"
        >
          <span>Scroll down</span>
          <span className="relative flex h-8 w-5 items-start justify-center border border-white/30 pt-1.5 transition-colors duration-200 group-hover:border-accent-brand-orange">
            <span className="h-1.5 w-[2px] animate-bounce bg-white/80 transition-colors duration-200 group-hover:bg-accent-brand-orange" />
          </span>
        </a>

        <span className="font-mono tracking-[0.18em] text-text-on-dark/50">
          {"// EST. ANAND, IN //"}
        </span>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M6 1.5c-2 0-3.5 1.5-3.5 3.5 0 2.6 3.5 5.5 3.5 5.5s3.5-2.9 3.5-5.5c0-2-1.5-3.5-3.5-3.5z" />
      <circle cx="6" cy="5" r="1.1" />
    </svg>
  );
}
