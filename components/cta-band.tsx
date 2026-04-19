"use client";

import { quoteMailto } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  numeral?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBand({
  eyebrow = "// LET'S BUILD //",
  title = "Ready to start\nyour next project?",
  body = "Send us a drawing, a sample, or a rough idea. We'll come back with a realistic schedule and a clear scope — no guessing, no over-commitment.",
  numeral = "01",
  primaryLabel = "Schedule a quote",
  primaryHref,
  secondaryLabel = "Or contact us directly",
  secondaryHref = "/contact",
}: CtaBandProps = {}) {
  const primary = primaryHref ?? quoteMailto();
  const titleLines = title.split("\n");

  return (
    <section className="relative overflow-hidden bg-accent-brand-orange px-4 py-20 text-text-on-dark sm:px-6 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 16px)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 select-none font-mono text-[18rem] font-semibold leading-none tracking-tighter text-text-on-dark/10 sm:-right-16 sm:-top-20 sm:text-[22rem]"
      >
        {numeral}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-on-dark/70">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
                {titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-on-dark/85 sm:text-lg">
                {body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <ButtonLink
                href={primary}
                className="bg-surface-dark text-text-on-dark hover:bg-foreground"
              >
                {primaryLabel}
                <svg
                  className="ml-2"
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
              </ButtonLink>
              <ButtonLink
                href={secondaryHref}
                variant="secondary"
                className="border-white/60 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
              >
                {secondaryLabel}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
