"use client";

import { Reveal } from "./reveal";

const INDUSTRIES = [
  {
    name: "General Industrial & OEM",
    description:
      "Outsourced machining for industrial OEMs who need dependable job work across CNC, VMC, and lathe — prototypes through repeat batches.",
    capabilities: [
      "Component machining to drawing",
      "Jigs, fixtures & tooling",
      "Repeat production batches",
    ],
  },
  {
    name: "Equipment manufacturers",
    description:
      "Machined components and sub-assemblies for equipment builders — housings, plates, shafts, and wear parts delivered on schedule.",
    capabilities: [
      "Machined housings & plates",
      "Shafts, bushings & spacers",
      "Replacement parts & repairs",
    ],
  },
  {
    name: "Automotive component suppliers",
    description:
      "Precision turned and milled parts for tier-2 and tier-3 automotive suppliers who need tight tolerances and consistent batch quality.",
    capabilities: [
      "Precision turning & milling",
      "Tight tolerance components",
      "Batch-level consistency",
    ],
  },
  {
    name: "Precision engineering firms",
    description:
      "Contract machining for precision engineering workshops needing extra capacity, specialised operations, or specific capability coverage.",
    capabilities: [
      "Capacity overflow support",
      "Specialised CNC & VMC work",
      "Custom ring components",
    ],
  },
] as const;

export function IndustriesSection() {
  return (
    <section className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// BUILT FOR INDUSTRY //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Machining for every
                <br className="hidden sm:block" /> kind of workshop.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-relaxed text-text-muted lg:text-lg">
              Whatever your sector, our engagement model is the same: clear
              scope, realistic schedules, open communication — and parts
              delivered as agreed.
            </p>
          </Reveal>
        </div>

        {/* Stacked list */}
        <ul className="mt-14 border-t border-foreground/80">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} as="li" delay={i * 60}>
              <IndustryRow index={i + 1} industry={ind} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IndustryRow({
  index,
  industry,
}: {
  index: number;
  industry: (typeof INDUSTRIES)[number];
}) {
  return (
    <div className="group relative border-b border-foreground/80 transition-colors duration-300 hover:bg-foreground hover:text-text-on-dark">
      {/* Orange edge bar — shows on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-0 bg-accent-brand-orange transition-[width] duration-300 ease-out group-hover:w-1"
      />

      <div className="grid items-start gap-6 px-2 py-8 sm:grid-cols-[auto_minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:gap-8 sm:px-6 sm:py-10">
        {/* Index */}
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-subtle group-hover:text-text-on-dark/55">
          / 0{index}
        </div>

        {/* Name + description */}
        <div>
          <h3 className="text-2xl font-semibold leading-[1.1] tracking-[-0.01em] sm:text-3xl lg:text-[2.1rem]">
            {industry.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted group-hover:text-text-on-dark/75 sm:text-[15px]">
            {industry.description}
          </p>
        </div>

        {/* Capabilities list */}
        <ul className="space-y-2 sm:mt-2">
          {industry.capabilities.map((cap) => (
            <li
              key={cap}
              className="flex items-start gap-2.5 text-sm text-foreground/80 group-hover:text-text-on-dark/80"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 bg-accent-brand-orange"
              />
              {cap}
            </li>
          ))}
        </ul>

        {/* Arrow icon */}
        <div className="flex items-start justify-end sm:mt-1">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center border border-foreground/30 transition-colors duration-300 group-hover:border-accent-brand-orange group-hover:bg-accent-brand-orange group-hover:text-text-on-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M4 12L12 4M6 4h6v6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
