"use client";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

/** Extended industry list pulled from siteConfig plus close partners we already
 * describe in the Industries section. */
const INDUSTRY_CHIPS = [
  "General industrial & OEM",
  "Equipment manufacturers",
  "Automotive component suppliers",
  "Precision engineering firms",
  "Prototype & batch machining",
  "Maintenance & repair suppliers",
  "Ring & rotational components",
  "Contract production runs",
] as const;

export function AboutTrusted() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 py-20 text-text-on-dark sm:px-6 lg:py-28">
      {/* Faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// ACROSS INDUSTRIES //"}
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-text-on-dark/60">
                Trusted by industry partners
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.95rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.015em]">
              Delivering quality
              <br className="hidden sm:block" /> across{" "}
              <span className="text-accent-brand-orange">industries</span>{" "}
              &amp; borders.
            </h2>
          </Reveal>
        </div>

        {/* Split: dial visual + industries chips */}
        <div className="mt-20 grid gap-14 border-t border-white/10 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16">
          <Reveal>
            <GlobeDial />
          </Reveal>

          <div>
            <Reveal>
              <p className="max-w-xl text-base leading-relaxed text-text-on-dark/75 sm:text-lg">
                We serve manufacturers, OEMs, and engineering firms who need a
                machining partner with reliable output and clear communication.
                Our engagement model is the same at any scale — prototype or
                production.
              </p>
            </Reveal>

            {/* Industry chips */}
            <ul className="mt-10 flex flex-wrap gap-3">
              {INDUSTRY_CHIPS.map((chip, i) => (
                <Reveal key={chip} as="li" delay={i * 50}>
                  <span className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-text-on-dark/85 backdrop-blur-sm transition-colors duration-200 hover:border-accent-brand-orange hover:text-accent-brand-orange">
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 bg-accent-brand-orange"
                    />
                    {chip}
                  </span>
                </Reveal>
              ))}
            </ul>

            {/* Footer row */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-10">
              {[
                { value: "4+", label: "Core sectors" },
                { value: "PAN-IN", label: "Delivery reach" },
                { value: "B2B", label: "Engagement model" },
                { value: "100%", label: "On-time focus" },
              ].map((item, i) => (
                <div key={item.label}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/50">
                    / 0{i + 1}
                  </p>
                  <p className="mt-2 text-[clamp(1.4rem,2.2vw,1.85rem)] font-semibold leading-none tracking-[-0.02em] text-accent-brand-orange">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-on-dark/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with primary coordinate */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-text-on-dark/60">
          <span>{"// " + siteConfig.tagline.toUpperCase() + " //"}</span>
          <span className="hidden text-text-on-dark/50 sm:inline">
            22.5645° N, 72.9289° E — Anand, Gujarat
          </span>
        </div>
      </div>
    </section>
  );
}

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function GlobeDial() {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r = 132;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-white/15 bg-[#0d0d0d]">
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

      {/* Top label */}
      <div className="absolute inset-x-3 top-3 flex items-center justify-between border-b border-white/15 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/60">
        <span>reach · delivery</span>
        <span className="text-accent-brand-orange">live</span>
      </div>

      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Outer */}
        <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.18)" />
        <circle cx={cx} cy={cy} r={r - 16} stroke="rgba(255,255,255,0.12)" />
        <circle cx={cx} cy={cy} r={r - 44} stroke="rgba(255,255,255,0.2)" />

        {/* Longitude ellipses */}
        {[0.35, 0.65, 0.85].map((rx, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={r * rx}
            ry={r}
            stroke="rgba(255,255,255,0.14)"
          />
        ))}

        {/* Latitudes */}
        {[-0.7, -0.35, 0, 0.35, 0.7].map((t, i) => (
          <line
            key={i}
            x1={cx - r * Math.sqrt(Math.max(0, 1 - t * t))}
            y1={cy + r * t}
            x2={cx + r * Math.sqrt(Math.max(0, 1 - t * t))}
            y2={cy + r * t}
            stroke="rgba(255,255,255,0.14)"
          />
        ))}

        {/* Ticks around outer */}
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i * Math.PI) / 24;
          const inner = i % 4 === 0 ? r - 10 : r - 5;
          const x1 = round(cx + Math.cos(a) * inner);
          const y1 = round(cy + Math.sin(a) * inner);
          const x2 = round(cx + Math.cos(a) * r);
          const y2 = round(cy + Math.sin(a) * r);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 4 === 0 ? "#fff" : "rgba(255,255,255,0.35)"}
              strokeOpacity={i % 4 === 0 ? 0.6 : 1}
              strokeWidth={i % 4 === 0 ? 1.2 : 1}
            />
          );
        })}

        {/* Orange location marker (Anand approx) */}
        <g>
          <line
            x1={cx}
            y1={cy}
            x2={round(cx + r * 0.55)}
            y2={round(cy - r * 0.15)}
            stroke="#d94125"
            strokeOpacity="0.5"
            strokeDasharray="4 4"
          />
          <circle
            cx={round(cx + r * 0.55)}
            cy={round(cy - r * 0.15)}
            r="6"
            fill="#d94125"
          />
          <circle
            cx={round(cx + r * 0.55)}
            cy={round(cy - r * 0.15)}
            r="14"
            stroke="#d94125"
            strokeOpacity="0.4"
          />
        </g>

        {/* Centre node */}
        <circle cx={cx} cy={cy} r="4" fill="#fff" />
      </svg>

      {/* Bottom meta */}
      <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 border-t border-white/15 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-on-dark/60">
        <div>
          <span className="block text-text-on-dark/40">origin</span>
          <span className="mt-1 block text-text-on-dark">Anand, IN</span>
        </div>
        <div className="text-right">
          <span className="block text-text-on-dark/40">network</span>
          <span className="mt-1 block text-accent-brand-orange">active</span>
        </div>
      </div>
    </div>
  );
}
