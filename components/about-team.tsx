"use client";

import { Reveal } from "./reveal";

type Discipline = {
  label: string;
  title: string;
  blurb: string;
  glyph: React.ReactNode;
};

const DISCIPLINES: Discipline[] = [
  {
    label: "CNC",
    title: "CNC programmers",
    blurb:
      "Toolpath planning, program writing, and setup sheets — the people who translate your drawing into clean, repeatable cycles.",
    glyph: <CncGlyph />,
  },
  {
    label: "VMC",
    title: "VMC operators",
    blurb:
      "Running vertical machining centres across plates, housings, and prismatic parts — precise hole positions, clean faces, tight repeatability.",
    glyph: <VmcGlyph />,
  },
  {
    label: "Lathe",
    title: "Lathe machinists",
    blurb:
      "Manual and CNC lathe craft — shafts, bushings, rings, and rotational components turned to spec with solid feel for the workpiece.",
    glyph: <LatheGlyph />,
  },
  {
    label: "QC",
    title: "Quality inspectors",
    blurb:
      "Dimensional checks, gauges, and first-article reviews. The last stop before every batch leaves the shop.",
    glyph: <QcGlyph />,
  },
  {
    label: "Plan",
    title: "Production planners",
    blurb:
      "Scheduling, material flow, and work-order coordination — keeping realistic timelines honest across every active job.",
    glyph: <PlanGlyph />,
  },
  {
    label: "Ship",
    title: "Dispatch & delivery",
    blurb:
      "Packing, documentation, and dispatch coordination so your parts reach you ready for the next operation.",
    glyph: <ShipGlyph />,
  },
];

export function AboutTeam() {
  return (
    <section className="relative bg-surface px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// OUR PEOPLE //"}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-muted">
                Behind every component is a person who cares about the craft.
                We don&apos;t outsource judgement — every decision on the shop
                floor is made by someone accountable for it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.95rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.015em]">
              Skilled hands on
              <br className="hidden sm:block" /> every{" "}
              <span className="text-accent-brand-orange">machine.</span>
            </h2>
          </Reveal>
        </div>

        {/* Disciplines grid */}
        <div className="mt-16 grid gap-0 border border-border bg-background sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((d, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const borderTop =
              i > 0 ? "border-t border-border sm:border-t-0" : "";
            const smBorderTop =
              row > 0 ? "sm:border-t sm:border-border" : "";
            const smBorderLeft =
              col % 2 === 1 ? "sm:border-l sm:border-border" : "";
            const lgBorderLeft =
              col !== 0 ? "lg:border-l lg:border-border" : "lg:border-l-0";
            const lgBorderTop =
              row > 0 ? "lg:border-t lg:border-border" : "lg:border-t-0";

            return (
              <Reveal
                key={d.title}
                delay={i * 80}
                className={`${borderTop} ${smBorderTop} ${smBorderLeft} ${lgBorderLeft} ${lgBorderTop}`}
              >
                <DisciplineCard discipline={d} index={i + 1} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({
  discipline,
  index,
}: {
  discipline: Discipline;
  index: number;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden p-8 transition-colors duration-300 hover:bg-foreground hover:text-text-on-dark sm:p-10">
      {/* Orange ribbon */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-12 w-12 origin-top-right bg-accent-brand-orange transition-transform duration-400 ease-out group-hover:scale-[1.25]"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />

      <div className="flex items-start justify-between gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-subtle group-hover:text-text-on-dark/60">
          / 0{index} — {discipline.label.toLowerCase()}
        </p>

        <div className="flex h-14 w-14 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-accent-brand-orange group-hover:bg-surface-dark">
          {discipline.glyph}
        </div>
      </div>

      <h3 className="mt-8 text-xl font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[22px]">
        {discipline.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-text-muted group-hover:text-text-on-dark/75 sm:text-[15px]">
        {discipline.blurb}
      </p>

      <div className="flex-1" />

      <div className="mt-10 inline-flex items-center gap-2 border-b border-foreground/20 pb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-300 group-hover:border-accent-brand-orange group-hover:text-accent-brand-orange">
        On the floor
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M2 6h8M7 3l3 3-3 3" />
        </svg>
      </div>
    </article>
  );
}

/* ── Glyphs ──────────────────────────────────────────────────── */

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

function CncGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <rect x="3" y="8" width="22" height="14" />
        <path d="M7 8V4h14v4M10 12h8M10 16h5" />
        <circle cx="21" cy="17" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

function VmcGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <path d="M3 22h22" />
        <path d="M14 4v10" />
        <rect x="9" y="14" width="10" height="5" />
        <path d="M6 22v-3M22 22v-3" />
        <path d="M14 4h3" />
      </g>
    </svg>
  );
}

function LatheGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <rect x="2" y="10" width="5" height="8" />
        <path d="M7 14h15" />
        <rect x="22" y="12" width="3.5" height="4" />
        <path d="M9 10l1-2M12 10l1-2M15 10l1-2M18 10l1-2" />
      </g>
    </svg>
  );
}

function QcGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <circle cx="12" cy="12" r="7" />
        <path d="M17 17l6 6" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

function PlanGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <rect x="4" y="5" width="20" height="18" />
        <path d="M4 10h20" />
        <path d="M8 15h6M8 19h10" />
      </g>
    </svg>
  );
}

function ShipGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground transition-colors duration-300 group-hover:text-accent-brand-orange" aria-hidden="true">
      <g {...stroke}>
        <path d="M3 10l11-5 11 5v9H3z" />
        <path d="M3 10l11 5 11-5M14 15v8" />
      </g>
    </svg>
  );
}
