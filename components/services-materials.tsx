"use client";

import { Reveal } from "./reveal";

const MATERIAL_GROUPS = [
  {
    label: "Ferrous",
    code: "Fe",
    items: [
      "Mild steel (MS)",
      "Alloy steel — EN8 · EN24 · EN19",
      "Case-hardening steel",
      "Tool steel",
      "Stainless — SS304 · SS316 · SS410",
    ],
  },
  {
    label: "Non-ferrous",
    code: "Nf",
    items: [
      "Aluminium — 6061 · 6063 · 7075",
      "Brass — C360 · C385",
      "Copper",
      "Bronze",
    ],
  },
  {
    label: "Engineering plastics",
    code: "Pl",
    items: ["Nylon / PA6", "Delrin / POM", "PTFE", "HDPE"],
  },
  {
    label: "Finishes",
    code: "Fn",
    items: [
      "As-machined Ra 1.6–3.2",
      "Fine finish Ra ≤ 0.8",
      "Deburred & edge-broken",
      "Coordination with plating vendors",
    ],
  },
] as const;

export function ServicesMaterials() {
  return (
    <section className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// MATERIALS //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                We machine the alloys
                <br className="hidden sm:block" /> your drawing specifies.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right lg:ml-auto">
              Common engineering grades are stocked or procured quickly.
              Specialty material? Share the spec and we&apos;ll source it —
              or suggest a suitable alternative for cost and lead-time.
            </p>
          </Reveal>
        </div>

        {/* Group cards */}
        <div className="grid gap-0 border-y border-border divide-y divide-border lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {MATERIAL_GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 60} className="flex">
              <article className="flex w-full flex-col p-8 lg:p-10">
                {/* Head */}
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-brand-orange">
                    / 0{i + 1}
                  </p>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center border border-foreground/20 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/70"
                  >
                    {g.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">
                  {g.label}
                </h3>

                {/* Items */}
                <ul className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 bg-accent-brand-orange"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={360}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-text-muted">
            Need a grade or finish not listed? Mention it in your enquiry —
            we regularly take on bespoke material requests and sourcing
            support for our partners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
