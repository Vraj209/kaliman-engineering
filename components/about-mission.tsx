"use client";

import { Reveal } from "./reveal";

type Pillar = {
  label: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    label: "Mission",
    title: "Deliver dependable machining, every single job.",
    body: "Be the most reliable contract partner for industrial businesses — precision work, realistic schedules, zero surprises.",
    icon: <MissionIcon />,
  },
  {
    label: "Vision",
    title: "A recognised name for precision across India.",
    body: "Grow into a shop known — across Gujarat and beyond — for the best range of job work, modern capabilities, and partnerships built on trust.",
    icon: <VisionIcon />,
  },
  {
    label: "Values",
    title: "Quality without compromise. Timelines you can count on.",
    body: "Transparent communication at every stage. We treat every client's work as if our own reputation depends on it — because it does.",
    icon: <ValuesIcon />,
  },
];

export function MissionVisionValues() {
  return (
    <section className="relative bg-surface-dark px-4 py-20 text-text-on-dark sm:px-6 lg:py-28">
      {/* Diagonal texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 18px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
              {"// WHAT DRIVES US //"}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.95rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.015em]">
              The principles behind
              <br className="hidden sm:block" /> every part we ship.
            </h2>
          </Reveal>
        </div>

        {/* Pillar cards */}
        <div className="mt-16 grid gap-0 border border-white/15 bg-surface-dark-alt lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 100}
              className={`relative flex flex-col p-8 sm:p-10 ${
                i > 0 ? "border-t border-white/15 lg:border-l lg:border-t-0" : ""
              }`}
            >
              {/* Orange top bar */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-16 bg-accent-brand-orange"
              />

              {/* Monospace index */}
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/50">
                / 0{i + 1} — {p.label.toLowerCase()}
              </p>

              {/* Icon */}
              <div className="mt-8 flex h-14 w-14 items-center justify-center border border-white/20 bg-surface-dark">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-2xl">
                {p.title}
              </h3>

              {/* Body */}
              <p className="mt-4 text-sm leading-relaxed text-text-on-dark/70 sm:text-[15px]">
                {p.body}
              </p>

              {/* Spacer to push footer down */}
              <div className="flex-1" />

              {/* Footer label */}
              <p className="mt-10 border-t border-white/15 pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-on-dark/55">
                {p.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="#d94125"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <circle cx="13" cy="13" r="10" />
      <circle cx="13" cy="13" r="6" />
      <circle cx="13" cy="13" r="2" fill="#d94125" />
      <path d="M13 3v2M13 21v2M3 13h2M21 13h2" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="#d94125"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M2 13s3-7 11-7 11 7 11 7-3 7-11 7S2 13 2 13z" />
      <circle cx="13" cy="13" r="3.5" fill="#d94125" />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="#d94125"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M13 2L3 6v6c0 5.5 4 9 10 12 6-3 10-6.5 10-12V6l-10-4z" />
      <path d="M9 12l3 3 5-6" strokeWidth="1.8" />
    </svg>
  );
}
