"use client";

import { Reveal } from "./reveal";

const STEPS = [
  {
    step: "01",
    title: "Drawing & intake",
    body: "Send a 2D drawing, 3D model, or even a hand-sketched requirement. We confirm dimensions, tolerances, materials, and batch size — and flag anything worth revising.",
    meta: ["drawings", "CAD models", "DFM notes"],
  },
  {
    step: "02",
    title: "Process planning",
    body: "Each part is routed to the right machine — CNC, VMC, or lathe — with an honest schedule. Fixturing, tooling, and operations are planned before a chip is cut.",
    meta: ["routing", "fixtures", "schedule"],
  },
  {
    step: "03",
    title: "Machining & checks",
    body: "Programmed operations run on our CNC, VMC, and lathe lines. In-process checks on critical features catch variance early, before parts move to the next stage.",
    meta: ["programming", "cutting", "in-process QC"],
  },
  {
    step: "04",
    title: "Inspection & dispatch",
    body: "Every batch is inspected against your drawing. Required documentation — dimensional reports, material certs — is packaged with the parts for dispatch.",
    meta: ["final QC", "reports", "dispatch"],
  },
] as const;

export function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 py-20 text-text-on-dark sm:px-6 lg:py-28">
      {/* Diagonal texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:mb-20">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// HOW WE WORK //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                A predictable path
                <br className="hidden sm:block" /> from drawing to dispatch.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-base leading-relaxed text-text-on-dark/70 lg:text-right lg:ml-auto">
              Same process for a one-off prototype and a repeat production
              run — only the speed and volume change. You always know which
              stage your job is in.
            </p>
          </Reveal>
        </div>

        {/* Steps — horizontal rail on desktop */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[48px] hidden h-px bg-white/15 lg:block"
          />
          <div className="grid gap-0 divide-y divide-white/10 lg:grid-cols-4 lg:gap-0 lg:divide-y-0 lg:divide-x lg:divide-white/10">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 80} className="flex">
                <article className="relative flex w-full flex-col px-0 py-10 lg:px-8 lg:py-0">
                  {/* Node */}
                  <div
                    aria-hidden="true"
                    className="relative z-10 -ml-1 flex items-center lg:-ml-0 lg:pt-10"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center border border-accent-brand-orange bg-surface-dark">
                      <span className="h-2 w-2 bg-accent-brand-orange" />
                    </span>
                    <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-brand-orange">
                      / {s.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-2xl">
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-text-on-dark/70">
                    {s.body}
                  </p>

                  {/* Meta row */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.meta.map((m) => (
                      <li
                        key={m}
                        className="border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-on-dark/70"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <Reveal delay={360}>
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-text-on-dark/55 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
            <span>
              Engagement ·{" "}
              <span className="text-text-on-dark">single point of contact</span>
            </span>
            <span>
              Updates ·{" "}
              <span className="text-text-on-dark">at every milestone</span>
            </span>
            <span className="text-accent-brand-orange">
              Delivery · committed schedule
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
