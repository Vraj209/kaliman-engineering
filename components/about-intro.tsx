"use client";

import Link from "next/link";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/site-config";

const ABOUT_STATS = [
  {
    value: "100%",
    label: "On-time delivery commitment",
    caption: "Realistic schedules, proactive status updates.",
  },
  {
    value: "6+",
    label: "Capabilities under one roof",
    caption: "CNC, VMC, lathe, rings & custom job work.",
  },
  {
    value: "B2B",
    label: "Partnership engagement model",
    caption: "A single point of contact for every run.",
  },
] as const;

export function AboutIntro() {
  return (
    <section
      id="about-intro"
      className="relative border-b border-border bg-surface px-4 py-20 text-foreground sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow + headline grid */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// WHO WE ARE //"}
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-text-subtle">
                Kalimal Engineering
              </p>
              <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-text-muted">
                A G.I.D.C.-estate precision machining shop built on a simple
                promise: the best range of job work, delivered when you need
                it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
              Driven by precision,
              <br className="hidden sm:block" /> backed by craft, focused on{" "}
              <span className="text-accent-brand-orange">
                on-time delivery.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Body + CTA */}
        <div className="mt-10 grid gap-10 border-t border-border pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
              Backed by capable CNC and VMC centres, conventional and CNC
              lathes, and skilled machinists, we help OEMs and equipment
              manufacturers bring components to life — from one-off prototypes
              to repeat production batches. We&apos;re your outsourced
              machining partner, not just another vendor.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/about" variant="primary">
                Learn more about us
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
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-border bg-transparent px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors duration-200 hover:border-foreground hover:bg-foreground hover:text-text-on-dark"
              >
                <BrochureIcon />
                View capabilities
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <AboutMark />
          </Reveal>
        </div>

        {/* Stats band */}
        <div className="mt-16 grid gap-0 border border-border bg-background sm:grid-cols-3">
          {ABOUT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div
                className={`relative h-full p-8 sm:p-10 ${
                  i !== ABOUT_STATS.length - 1
                    ? "border-b border-border sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-subtle">
                  / 0{i + 1}
                </p>
                <p className="mt-4 text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-foreground">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {stat.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Small-print tagline */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-text-subtle">
          <span>{"// " + siteConfig.tagline.toUpperCase() + " //"}</span>
          <span className="hidden sm:inline">{"// 2K26 //"}</span>
        </div>
      </div>
    </section>
  );
}

function BrochureIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="10" height="10" />
      <path d="M7 4v4M5 6h4M4 10h6" />
    </svg>
  );
}

/** Round to 2dp for SSR-stable SVG coordinate strings. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

/** Abstract geometric "K / spindle" mark — no stock imagery needed. */
function AboutMark() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-foreground">
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Corner ticks */}
      <CornerTicks />

      {/* Central SVG — abstract lathe/spindle motif */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Outer circle */}
        <circle
          cx="200"
          cy="150"
          r="110"
          stroke="#fff"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        {/* Middle circle */}
        <circle
          cx="200"
          cy="150"
          r="80"
          stroke="#fff"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        {/* Orange inner disc */}
        <circle cx="200" cy="150" r="52" fill="#d94125" />
        {/* Centre bore */}
        <circle cx="200" cy="150" r="14" fill="#151515" />
        {/* Radial ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * Math.PI) / 12;
          const x1 = round(200 + Math.cos(angle) * 100);
          const y1 = round(150 + Math.sin(angle) * 100);
          const x2 = round(200 + Math.cos(angle) * 110);
          const y2 = round(150 + Math.sin(angle) * 110);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fff"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
          );
        })}
        {/* Cross hair */}
        <line
          x1="50"
          y1="150"
          x2="350"
          y2="150"
          stroke="#fff"
          strokeOpacity="0.15"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <line
          x1="200"
          y1="30"
          x2="200"
          y2="270"
          stroke="#fff"
          strokeOpacity="0.15"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Label */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/70">
        <span className="block">ø — precision spindle</span>
        <span className="mt-1 block text-accent-brand-orange">
          kalimal engineering
        </span>
      </div>
    </div>
  );
}

function CornerTicks() {
  return (
    <>
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
    </>
  );
}
