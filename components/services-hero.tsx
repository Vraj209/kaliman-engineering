"use client";

import { quoteMailto, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

const TOTAL_SUB_SERVICES = siteConfig.serviceCategories.reduce(
  (sum, c) => sum + c.services.length,
  0,
);

const HERO_STATS = [
  {
    value: `${siteConfig.serviceCategories.length}`,
    label: "Core capabilities",
  },
  { value: `${TOTAL_SUB_SERVICES}`, label: "Service lines" },
  { value: "1-1000+", label: "Batch flexibility" },
] as const;

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 pb-20 pt-12 text-text-on-dark sm:px-6 lg:pb-28 lg:pt-20">
      {/* Industrial grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top-left orange diffuse glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[460px] w-[460px] rounded-full bg-accent-brand-orange/10 blur-3xl"
      />

      {/* Top meta row */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/55 sm:text-xs">
        <Reveal>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse bg-accent-brand-orange"
            />
            Services · Capabilities
          </span>
        </Reveal>
        <Reveal delay={80}>
          <span className="hidden font-mono tracking-[0.18em] sm:inline">
            04 CATEGORIES / {TOTAL_SUB_SERVICES} LINES
          </span>
        </Reveal>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto mt-12 grid max-w-7xl gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* Left — copy */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
              {"// WHAT WE DO //"}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.75rem,6.8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              Our{" "}
              <span className="relative inline-block text-accent-brand-orange">
                services.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent-brand-orange/40"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-text-on-dark/75 sm:text-lg">
              Four focused capability areas — CNC machining, VMC milling,
              lathe turning, and general precision job work — coordinated
              under one roof. Send a drawing, pick a batch size, and we&apos;ll
              plan the most efficient route through our shop.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={quoteMailto()} variant="primary">
                Request a quote
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
                href="#service-index"
                variant="secondary"
                className="border-white/25 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
              >
                See all services
              </ButtonLink>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={280}>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:gap-10">
              {HERO_STATS.map((stat, i) => (
                <div key={stat.label}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/50">
                    / 0{i + 1}
                  </p>
                  <dt className="mt-3 text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.02em] text-accent-brand-orange">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-on-dark/75 sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — capabilities matrix blueprint */}
        <Reveal delay={180} className="relative">
          <CapabilitiesMatrix />
        </Reveal>
      </div>

      {/* Bottom meta row */}
      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/60 sm:flex-row sm:items-center sm:justify-between sm:text-xs lg:mt-20">
        <span className="inline-flex items-center gap-2.5">
          <GearIcon />
          Capabilities: CNC · VMC · Lathe · General
        </span>
        <span className="font-mono tracking-[0.18em] text-text-on-dark/50">
          {"// PROCESS · PRECISION · DELIVERY //"}
        </span>
        <span className="inline-flex items-center gap-2.5 text-accent-brand-orange">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 bg-accent-brand-orange"
          />
          Accepting new briefs
        </span>
      </div>
    </section>
  );
}

function GearIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.2" />
      <path d="M6 1v1.4M6 9.6V11M1 6h1.4M9.6 6H11M2.5 2.5l1 1M8.5 8.5l1 1M2.5 9.5l1-1M8.5 3.5l1-1" />
    </svg>
  );
}

/**
 * Capabilities matrix — a 4×6 grid where rows are service categories and
 * columns are capability checkpoints. Filled orange dots show where Kalimal
 * covers a given operation. Frames, dimension ticks, and callouts add the
 * blueprint feel without relying on stock imagery.
 */
function CapabilitiesMatrix() {
  const categories = [
    { code: "CNC", label: "CNC machining" },
    { code: "VMC", label: "VMC milling" },
    { code: "LATHE", label: "Lathe turning" },
    { code: "GEN", label: "General / rings" },
  ];
  // Each bit = filled; pattern chosen to feel believable, not uniform.
  const rows = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  const cols = [
    "Draw",
    "Prog",
    "Set",
    "Cut",
    "QC",
    "Ship",
  ];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#0d0d0d]">
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Corner ticks */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 h-4 w-4 border-r border-t border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/40"
      />

      {/* Title bar */}
      <div className="absolute inset-x-3 top-3 flex items-center justify-between border-b border-white/15 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/60">
        <span>dwg · capability-matrix</span>
        <span className="text-accent-brand-orange">rev · 01</span>
      </div>

      {/* Matrix body */}
      <div className="absolute inset-x-6 top-14 bottom-16 flex flex-col">
        {/* Column header */}
        <div
          className="grid gap-0 border-b border-white/12 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-text-on-dark/45 sm:text-[10px]"
          style={{ gridTemplateColumns: "64px repeat(6, 1fr)" }}
        >
          <span />
          {cols.map((c) => (
            <span key={c} className="text-center">
              {c}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div className="flex flex-1 flex-col justify-around pt-4">
          {categories.map((cat, rIdx) => (
            <div
              key={cat.code}
              className="grid items-center gap-0"
              style={{ gridTemplateColumns: "64px repeat(6, 1fr)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-on-dark/70">
                {cat.code}
              </span>
              {rows[rIdx].map((filled, cIdx) => (
                <span key={cIdx} className="flex items-center justify-center">
                  {filled ? (
                    <span
                      aria-hidden="true"
                      className="relative inline-flex h-3 w-3 items-center justify-center"
                    >
                      <span className="absolute inset-0 border border-accent-brand-orange/70" />
                      <span className="h-1.5 w-1.5 bg-accent-brand-orange" />
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-block h-3 w-3 border border-white/18"
                    />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Callout — top right */}
      <svg
        viewBox="0 0 400 500"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Dimension bracket — right edge */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="374" y1="88" x2="374" y2="412" />
          <line x1="370" y1="88" x2="378" y2="88" />
          <line x1="370" y1="412" x2="378" y2="412" />
        </g>
        <text
          x="374"
          y="254"
          transform="rotate(-90 374 254)"
          textAnchor="middle"
          fontSize="10"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.6"
          dy="-4"
        >
          4 × capability
        </text>

        {/* Dimension bracket — bottom */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="74" y1="426" x2="346" y2="426" />
          <line x1="74" y1="422" x2="74" y2="430" />
          <line x1="346" y1="422" x2="346" y2="430" />
        </g>
        <text
          x="210"
          y="442"
          textAnchor="middle"
          fontSize="10"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.6"
        >
          6 · process checkpoints
        </text>
      </svg>

      {/* Legend footer */}
      <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 border-t border-white/15 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-on-dark/60">
        <div>
          <span className="block text-text-on-dark/40">mode</span>
          <span className="mt-1 block text-text-on-dark">in-house</span>
        </div>
        <div>
          <span className="block text-text-on-dark/40">coverage</span>
          <span className="mt-1 block text-text-on-dark">end-to-end</span>
        </div>
        <div>
          <span className="block text-text-on-dark/40">QC</span>
          <span className="mt-1 block text-accent-brand-orange">100 %</span>
        </div>
      </div>
    </div>
  );
}
