"use client";

import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

const REASONS = [
  "End-to-end CNC, VMC & lathe job work",
  "Tight tolerance & repeatable quality",
  "Realistic schedules, on-time delivery",
  "Custom rings & ring components",
  "Prototype to batch production",
  "Single point of contact per project",
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative bg-surface px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          {/* Left: geometric composition */}
          <Reveal>
            <WhyChooseVisual />
          </Reveal>

          {/* Right: copy */}
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// WHY CHOOSE US //"}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Machining partners
                <br className="hidden sm:block" /> you can count on.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg">
                We don&apos;t over-promise. We set realistic timelines, keep
                you informed, and deliver parts that match your drawing — run
                after run.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {REASONS.map((reason, i) => (
                <Reveal key={reason} as="li" delay={180 + i * 50}>
                  <div className="flex items-start gap-3 border-t border-border pt-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center bg-accent-brand-orange"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="square"
                        aria-hidden="true"
                      >
                        <path d="M2 5l2 2 4-4" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-foreground sm:text-[15px]">
                      {reason}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={500}>
              <div className="mt-10">
                <ButtonLink href="/services" variant="primary">
                  See our capabilities
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
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Round to 2dp for SSR-stable SVG coordinate strings. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function WhyChooseVisual() {
  return (
    <div className="relative aspect-square w-full max-w-md overflow-hidden border border-border bg-foreground text-text-on-dark">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Concentric gauge */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Outer reference circle */}
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        {/* Tick ring */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * Math.PI) / 30;
          const inner = i % 5 === 0 ? 150 : 158;
          const x1 = round(200 + Math.cos(angle) * inner);
          const y1 = round(200 + Math.sin(angle) * inner);
          const x2 = round(200 + Math.cos(angle) * 168);
          const y2 = round(200 + Math.sin(angle) * 168);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 5 === 0 ? "#fff" : "rgba(255,255,255,0.35)"}
              strokeWidth={i % 5 === 0 ? 1.5 : 1}
            />
          );
        })}
        {/* Orange arc — 80% filled gauge */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#d94125"
          strokeWidth="14"
          strokeDasharray={`${round(0.78 * 2 * Math.PI * 120)} ${round(2 * Math.PI * 120)}`}
          strokeDashoffset={`${round(0.25 * 2 * Math.PI * 120)}`}
          transform="rotate(-90 200 200)"
        />
        {/* Inner disc */}
        <circle cx="200" cy="200" r="86" fill="#1a1a1a" />
        {/* Centre bullseye */}
        <circle cx="200" cy="200" r="12" fill="#d94125" />
        <circle cx="200" cy="200" r="4" fill="#fff" />

        {/* Horizontal dashed alignment */}
        <line
          x1="24"
          y1="200"
          x2="376"
          y2="200"
          stroke="rgba(255,255,255,0.15)"
          strokeDasharray="4 6"
        />
        <line
          x1="200"
          y1="24"
          x2="200"
          y2="376"
          stroke="rgba(255,255,255,0.15)"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Meta labels */}
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/70">
        / precision index
      </div>
      <div className="absolute bottom-4 right-4 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/70">
        <span className="block text-accent-brand-orange">ON-TIME</span>
        <span className="block">delivery-first</span>
      </div>
      {/* Corner ticks */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/40"
      />
    </div>
  );
}
