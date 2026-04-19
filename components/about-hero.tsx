"use client";

import { quoteMailto } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

const HERO_STATS = [
  { value: "10+", label: "Skilled machinists" },
  { value: "6+", label: "Capabilities" },
  { value: "B2B", label: "Engagement model" },
] as const;

export function AboutHero() {
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

      {/* Top-right orange diffuse glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent-brand-orange/12 blur-3xl"
      />

      {/* Top meta row */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/55 sm:text-xs">
        <Reveal>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse bg-accent-brand-orange"
            />
            About Kalimal Engineering
          </span>
        </Reveal>
        <Reveal delay={80}>
          <span className="hidden font-mono tracking-[0.18em] sm:inline">
            22.5645° N, 72.9289° E
          </span>
        </Reveal>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto mt-12 grid max-w-7xl gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* Left — copy */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
              {"// WHO WE ARE //"}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.75rem,6.8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              About{" "}
              <span className="relative inline-block text-accent-brand-orange">
                us.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent-brand-orange/40"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-text-on-dark/75 sm:text-lg">
              A precision machining shop built in Anand, Gujarat — dedicated to
              delivering CNC, VMC, lathe, and ring work that shapes the
              industries it serves. Our standards are defined by trust,
              repeatable quality, and a commitment to every drawing we pick up.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/services" variant="primary">
                Our capabilities
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
                href={quoteMailto()}
                variant="secondary"
                className="border-white/25 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
              >
                Request a quote
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

        {/* Right — blueprint visual */}
        <Reveal delay={180} className="relative">
          <AboutBlueprint />
        </Reveal>
      </div>

      {/* Bottom meta row */}
      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-text-on-dark/60 sm:flex-row sm:items-center sm:justify-between sm:text-xs lg:mt-20">
        <span className="inline-flex items-center gap-2.5">
          <PinIcon />
          Based in: G.I.D.C. Estate, V.U. Nagar — Anand
        </span>
        <span className="font-mono tracking-[0.18em] text-text-on-dark/50">
          {"// TRUST · QUALITY · DELIVERY //"}
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

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M6 1.5c-2 0-3.5 1.5-3.5 3.5 0 2.6 3.5 5.5 3.5 5.5s3.5-2.9 3.5-5.5c0-2-1.5-3.5-3.5-3.5z" />
      <circle cx="6" cy="5" r="1.1" />
    </svg>
  );
}

function round(n: number) {
  return Math.round(n * 100) / 100;
}

/**
 * Engineering blueprint panel — substitutes for a photographic hero on the
 * right. References spindle geometry, dimension lines, and tolerance callouts
 * without fabricating client or team imagery.
 */
function AboutBlueprint() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#0d0d0d]">
      {/* Grid */}
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
        <span>dwg · ke / 001</span>
        <span className="text-accent-brand-orange">sheet 1 / 1</span>
      </div>

      {/* Central blueprint SVG */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Centre cross alignment */}
        <line
          x1="200"
          y1="60"
          x2="200"
          y2="440"
          stroke="#fff"
          strokeOpacity="0.14"
          strokeDasharray="4 6"
        />
        <line
          x1="40"
          y1="250"
          x2="360"
          y2="250"
          stroke="#fff"
          strokeOpacity="0.14"
          strokeDasharray="4 6"
        />

        {/* Outer dimensional bracket */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="62" y1="96" x2="338" y2="96" />
          <line x1="62" y1="92" x2="62" y2="100" />
          <line x1="338" y1="92" x2="338" y2="100" />
        </g>

        {/* Dimension label */}
        <text
          x="200"
          y="86"
          textAnchor="middle"
          fontSize="11"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.7"
        >
          Ø 276 ±0.02
        </text>

        {/* Concentric spindle rings */}
        <circle
          cx="200"
          cy="250"
          r="130"
          stroke="#fff"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="250"
          r="108"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* Orange arc — 65% gauge */}
        <circle
          cx="200"
          cy="250"
          r="88"
          stroke="#d94125"
          strokeWidth="12"
          strokeDasharray={`${round(0.65 * 2 * Math.PI * 88)} ${round(2 * Math.PI * 88)}`}
          strokeDashoffset={`${round(0.25 * 2 * Math.PI * 88)}`}
          transform="rotate(-90 200 250)"
        />

        {/* Inner disc with bore */}
        <circle cx="200" cy="250" r="64" fill="#1a1a1a" />
        <circle
          cx="200"
          cy="250"
          r="44"
          stroke="#fff"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <circle cx="200" cy="250" r="10" fill="#d94125" />

        {/* Radial tolerance ticks */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * Math.PI) / 18;
          const inner = i % 3 === 0 ? 122 : 126;
          const x1 = round(200 + Math.cos(angle) * inner);
          const y1 = round(250 + Math.sin(angle) * inner);
          const x2 = round(200 + Math.cos(angle) * 130);
          const y2 = round(250 + Math.sin(angle) * 130);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? "#fff" : "rgba(255,255,255,0.4)"}
              strokeWidth={i % 3 === 0 ? 1.4 : 1}
            />
          );
        })}

        {/* Callout line + bubble — lower right */}
        <g>
          <line
            x1="264"
            y1="316"
            x2="312"
            y2="364"
            stroke="#d94125"
            strokeOpacity="0.8"
          />
          <circle
            cx="312"
            cy="364"
            r="12"
            stroke="#d94125"
            fill="#0d0d0d"
            strokeWidth="1.2"
          />
          <text
            x="312"
            y="368"
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fill="#d94125"
          >
            A
          </text>
        </g>

        {/* Callout bubble — upper left */}
        <g>
          <line
            x1="136"
            y1="184"
            x2="88"
            y2="136"
            stroke="#fff"
            strokeOpacity="0.5"
          />
          <circle
            cx="88"
            cy="136"
            r="12"
            stroke="#fff"
            strokeOpacity="0.5"
            fill="#0d0d0d"
            strokeWidth="1.2"
          />
          <text
            x="88"
            y="140"
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fill="#fff"
            fillOpacity="0.7"
          >
            B
          </text>
        </g>
      </svg>

      {/* Tolerance callouts */}
      <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 border-t border-white/15 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-on-dark/60">
        <div>
          <span className="block text-text-on-dark/40">tolerance</span>
          <span className="mt-1 block text-text-on-dark">±0.02 mm</span>
        </div>
        <div>
          <span className="block text-text-on-dark/40">surface</span>
          <span className="mt-1 block text-text-on-dark">Ra 1.6</span>
        </div>
        <div>
          <span className="block text-text-on-dark/40">scale</span>
          <span className="mt-1 block text-accent-brand-orange">1 : 2</span>
        </div>
      </div>
    </div>
  );
}
