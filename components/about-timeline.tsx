"use client";

import { Reveal } from "./reveal";

const MILESTONES = [
  {
    step: "Day one",
    title: "A lathe and a drawing",
    description:
      "Kalimal Engineering opened in the G.I.D.C. Estate, V.U. Nagar — focused on dependable general job work and delivering every drawing as promised.",
  },
  {
    step: "Early years",
    title: "Lathe & general job work",
    description:
      "Built a reputation on the shop floor for consistent turning, honest timelines, and straightforward communication with every customer.",
  },
  {
    step: "Capacity shift",
    title: "CNC & VMC centres",
    description:
      "Invested in multi-axis CNC and VMC platforms — opening up tight-tolerance milling, drilling, and multi-setup production in one roof.",
  },
  {
    step: "Today",
    title: "End-to-end precision shop",
    description:
      "Full capability across CNC, VMC, lathe and rings — from one-off prototypes to repeat production, with a single point of contact per project.",
  },
] as const;

export function AboutTimeline() {
  return (
    <section className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// MILESTONES //"}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-muted">
                A timeline of how the shop grew — from a single machine to a
                full-service precision partner.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.95rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.015em]">
              Growing{" "}
              <span className="text-accent-brand-orange">capability</span>
              <br className="hidden sm:block" /> one capability at a time.
            </h2>
          </Reveal>
        </div>

        {/* Timeline rail */}
        <div className="relative mt-20">
          {/* Desktop rail line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 100}>
                <div className="relative pl-8 lg:pl-0">
                  {/* Node marker (desktop: on rail, mobile: on vertical line) */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center bg-background lg:left-auto lg:top-6 lg:-translate-y-1/2"
                  >
                    <span className="h-3 w-3 bg-accent-brand-orange" />
                  </span>

                  {/* Mobile vertical line */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[7px] top-4 w-px bg-border lg:hidden ${
                      i === MILESTONES.length - 1 ? "h-0" : "h-[calc(100%+40px)]"
                    }`}
                  />

                  <div className="lg:pt-14">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-brand-orange">
                      / 0{i + 1} — {m.step}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-2xl">
                      {m.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                      {m.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
