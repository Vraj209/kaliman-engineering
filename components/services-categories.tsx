"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function slugifyCategory(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ServicesCategories() {
  return (
    <section className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16 lg:mb-20">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// CAPABILITIES //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Four capabilities,
                <br className="hidden sm:block" /> one coordinated workflow.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right lg:ml-auto">
              Each capability area is a complete service line on its own —
              and every job benefits from shared tooling, planning, and
              quality processes across the shop.
            </p>
          </Reveal>
        </div>

        {/* Category rows */}
        <div className="divide-y divide-border border-y border-border">
          {siteConfig.serviceCategories.map((cat, i) => (
            <CategoryRow
              key={cat.category}
              index={i + 1}
              title={cat.category}
              description={cat.description}
              services={cat.services.map((s) => ({
                title: s.title,
                slug: s.slug,
              }))}
              slug={slugifyCategory(cat.category)}
              flip={i % 2 === 1}
              visual={<CategoryVisual index={i} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryRowProps {
  index: number;
  title: string;
  description: string;
  services: { title: string; slug: string }[];
  slug: string;
  flip: boolean;
  visual: ReactNode;
}

function CategoryRow({
  index,
  title,
  description,
  services,
  flip,
  visual,
}: CategoryRowProps) {
  return (
    <Reveal delay={index * 60}>
      <article
        className="group grid items-stretch gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
      >
        {/* Copy column */}
        <div
          className={`flex flex-col px-0 py-12 lg:px-12 lg:py-20 ${
            flip ? "lg:order-2 lg:border-l lg:border-border" : "lg:border-r lg:border-border"
          }`}
        >
          {/* Top row: numeral + service chip */}
          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-brand-orange">
              / 0{index}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-subtle">
              {services.length} service lines
            </p>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
            {description}
          </p>

          {/* Services list */}
          <ul className="mt-8 flex flex-wrap gap-2 lg:mt-10">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 border border-border bg-surface px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-200 hover:border-accent-brand-orange hover:text-accent-brand-orange"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 bg-accent-brand-orange"
                  />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer meta */}
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6 lg:mt-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-subtle">
              Materials
            </span>
            <span className="text-xs text-text-muted">
              Steel · Stainless · Aluminium · Brass · Plastics
            </span>
          </div>
        </div>

        {/* Visual column */}
        <div
          className={`relative flex items-center justify-center overflow-hidden bg-surface-dark p-8 text-text-on-dark lg:p-12 ${
            flip ? "lg:order-1" : ""
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative aspect-[4/3] w-full max-w-[480px]">
            {visual}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CategoryVisual({ index }: { index: number }) {
  if (index === 0) return <CncVisual />;
  if (index === 1) return <VmcVisual />;
  if (index === 2) return <LatheVisual />;
  return <GeneralVisual />;
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Category visuals                                                        */
/* ──────────────────────────────────────────────────────────────────────── */

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full border border-white/15 bg-[#0d0d0d]">
      {/* Corner ticks */}
      <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-white/40" />
      <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-white/40" />
      <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-white/40" />
      <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-white/40" />
      {children}
    </div>
  );
}

function VisualLabel({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="absolute inset-x-3 top-3 flex items-center justify-between border-b border-white/15 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/60">
      <span>{left}</span>
      <span className="text-accent-brand-orange">{right}</span>
    </div>
  );
}

function VisualFooter({
  a,
  b,
  c,
}: {
  a: [string, string];
  b: [string, string];
  c: [string, string];
}) {
  return (
    <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 border-t border-white/15 pt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-text-on-dark/60">
      <div>
        <span className="block text-text-on-dark/40">{a[0]}</span>
        <span className="mt-0.5 block text-text-on-dark">{a[1]}</span>
      </div>
      <div>
        <span className="block text-text-on-dark/40">{b[0]}</span>
        <span className="mt-0.5 block text-text-on-dark">{b[1]}</span>
      </div>
      <div>
        <span className="block text-text-on-dark/40">{c[0]}</span>
        <span className="mt-0.5 block text-accent-brand-orange">{c[1]}</span>
      </div>
    </div>
  );
}

/** CNC: multi-axis spindle w/ toolpath orbit + end-mill arrow */
function CncVisual() {
  // Spiral toolpath
  const points: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const t = i / 80;
    const angle = t * Math.PI * 4;
    const r = 30 + t * 80;
    const x = round(200 + Math.cos(angle) * r);
    const y = round(150 + Math.sin(angle) * r);
    points.push(`${x},${y}`);
  }
  return (
    <Frame>
      <VisualLabel left="dwg · cnc / 3-axis" right="live" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Alignment crosshairs */}
        <line
          x1="200"
          y1="30"
          x2="200"
          y2="270"
          stroke="#fff"
          strokeOpacity="0.14"
          strokeDasharray="4 6"
        />
        <line
          x1="40"
          y1="150"
          x2="360"
          y2="150"
          stroke="#fff"
          strokeOpacity="0.14"
          strokeDasharray="4 6"
        />

        {/* Outer stock circle */}
        <circle
          cx="200"
          cy="150"
          r="115"
          stroke="#fff"
          strokeOpacity="0.22"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="150"
          r="95"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* Toolpath spiral */}
        <polyline
          points={points.join(" ")}
          stroke="#d94125"
          strokeOpacity="0.9"
          strokeWidth="1.3"
          fill="none"
        />

        {/* End mill */}
        <g>
          <line x1="200" y1="30" x2="200" y2="90" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
          <rect x="195" y="90" width="10" height="26" fill="#d94125" />
          <path d="M195 116 l5 6 l5 -6" stroke="#d94125" strokeWidth="1.2" fill="#d94125" />
        </g>

        {/* Dimension tick */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="62" y1="40" x2="338" y2="40" />
          <line x1="62" y1="36" x2="62" y2="44" />
          <line x1="338" y1="36" x2="338" y2="44" />
        </g>
        <text
          x="200"
          y="54"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.6"
        >
          Ø 230 ±0.02
        </text>
      </svg>
      <VisualFooter
        a={["axes", "3-axis"]}
        b={["tol.", "±0.02"]}
        c={["stage", "cutting"]}
      />
    </Frame>
  );
}

/** VMC: vertical spindle + plate with positioned holes */
function VmcVisual() {
  const holes = [
    { x: 110, y: 210, r: 6 },
    { x: 150, y: 210, r: 6 },
    { x: 190, y: 210, r: 6 },
    { x: 230, y: 210, r: 6 },
    { x: 270, y: 210, r: 6 },
    { x: 110, y: 170, r: 4 },
    { x: 150, y: 170, r: 4 },
    { x: 190, y: 170, r: 4 },
    { x: 230, y: 170, r: 4 },
    { x: 270, y: 170, r: 4 },
  ];
  return (
    <Frame>
      <VisualLabel left="dwg · vmc / plate" right="active" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Vertical column */}
        <rect x="40" y="36" width="20" height="200" stroke="#fff" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="40" y1="56" x2="60" y2="56" stroke="#fff" strokeOpacity="0.35" />
        <line x1="40" y1="76" x2="60" y2="76" stroke="#fff" strokeOpacity="0.35" />
        <line x1="40" y1="96" x2="60" y2="96" stroke="#fff" strokeOpacity="0.35" />
        <line x1="40" y1="116" x2="60" y2="116" stroke="#fff" strokeOpacity="0.35" />

        {/* Spindle arm */}
        <path d="M60 84 L200 84" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.4" />
        <rect x="190" y="78" width="20" height="18" fill="#1a1a1a" stroke="#fff" strokeOpacity="0.5" />

        {/* Z-axis + tool */}
        <line x1="200" y1="96" x2="200" y2="140" stroke="#fff" strokeOpacity="0.6" strokeWidth="2" />
        <rect x="195" y="140" width="10" height="22" fill="#d94125" />

        {/* Table / plate */}
        <rect x="80" y="170" width="240" height="60" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.2" fill="#151515" />
        {holes.map((h, i) => (
          <circle
            key={i}
            cx={h.x}
            cy={h.y}
            r={h.r}
            stroke="#fff"
            strokeOpacity="0.55"
            strokeWidth="1"
            fill={h.x === 190 && h.y === 210 ? "#d94125" : "none"}
          />
        ))}

        {/* Base */}
        <line x1="60" y1="240" x2="340" y2="240" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" />
        <line x1="60" y1="246" x2="340" y2="246" stroke="#fff" strokeOpacity="0.25" />

        {/* Callout */}
        <g>
          <line x1="190" y1="210" x2="310" y2="96" stroke="#d94125" strokeOpacity="0.7" />
          <circle cx="310" cy="96" r="11" stroke="#d94125" strokeWidth="1.1" fill="#0d0d0d" />
          <text
            x="310"
            y="100"
            textAnchor="middle"
            fontSize="9"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fill="#d94125"
          >
            H1
          </text>
        </g>
      </svg>
      <VisualFooter
        a={["ops", "mill · drill"]}
        b={["feat.", "10+ holes"]}
        c={["pos.", "±0.03"]}
      />
    </Frame>
  );
}

/** Lathe: horizontal chuck with workpiece + tool */
function LatheVisual() {
  return (
    <Frame>
      <VisualLabel left="dwg · lathe / shaft" right="run" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Centerline */}
        <line
          x1="40"
          y1="150"
          x2="360"
          y2="150"
          stroke="#fff"
          strokeOpacity="0.22"
          strokeDasharray="6 6"
        />

        {/* Chuck */}
        <rect
          x="50"
          y="100"
          width="40"
          height="100"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="1.2"
          fill="#151515"
        />
        {/* Chuck jaws */}
        <line x1="50" y1="120" x2="90" y2="120" stroke="#fff" strokeOpacity="0.45" />
        <line x1="50" y1="150" x2="90" y2="150" stroke="#fff" strokeOpacity="0.45" />
        <line x1="50" y1="180" x2="90" y2="180" stroke="#fff" strokeOpacity="0.45" />

        {/* Workpiece — turned stepped shaft */}
        <path
          d="M90 128 L220 128 L220 118 L300 118 L300 182 L220 182 L220 172 L90 172 Z"
          fill="#222"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        {/* Highlight currently-cutting region */}
        <path
          d="M220 118 L300 118 L300 182 L220 182 Z"
          fill="#d94125"
          fillOpacity="0.12"
          stroke="#d94125"
          strokeOpacity="0.8"
          strokeWidth="1.2"
        />

        {/* Tailstock point */}
        <path
          d="M300 150 L330 140 L330 160 Z"
          fill="#151515"
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <rect x="330" y="120" width="20" height="60" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" fill="#151515" />

        {/* Cutting tool */}
        <g>
          <rect x="250" y="220" width="40" height="12" fill="#1a1a1a" stroke="#fff" strokeOpacity="0.5" />
          <path d="M250 220 L258 206" stroke="#d94125" strokeWidth="2" />
          <circle cx="258" cy="206" r="3" fill="#d94125" />
        </g>

        {/* Dimension — above workpiece */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="90" y1="88" x2="300" y2="88" />
          <line x1="90" y1="84" x2="90" y2="92" />
          <line x1="300" y1="84" x2="300" y2="92" />
        </g>
        <text
          x="195"
          y="80"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.6"
        >
          L 210 · Ø 64 → Ø 52
        </text>
      </svg>
      <VisualFooter
        a={["ops", "turn · face"]}
        b={["runout", "≤ 0.01"]}
        c={["stage", "finishing"]}
      />
    </Frame>
  );
}

/** General: ring component + concentric callouts */
function GeneralVisual() {
  return (
    <Frame>
      <VisualLabel left="dwg · ring / bearing-race" right="qc" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {/* Crosshairs */}
        <line x1="200" y1="30" x2="200" y2="270" stroke="#fff" strokeOpacity="0.14" strokeDasharray="4 6" />
        <line x1="50" y1="150" x2="350" y2="150" stroke="#fff" strokeOpacity="0.14" strokeDasharray="4 6" />

        {/* Outer ring */}
        <circle cx="200" cy="150" r="100" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" fill="#151515" />
        <circle cx="200" cy="150" r="80" stroke="#fff" strokeOpacity="0.6" strokeWidth="1" fill="#0d0d0d" />
        {/* Inner bore */}
        <circle cx="200" cy="150" r="40" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" fill="#151515" />
        <circle cx="200" cy="150" r="6" fill="#d94125" />

        {/* Groove highlight */}
        <circle
          cx="200"
          cy="150"
          r="90"
          stroke="#d94125"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeDasharray="3 3"
        />

        {/* Radial ticks around rim */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12;
          const r1 = i % 3 === 0 ? 102 : 100;
          const r2 = 108;
          const x1 = round(200 + Math.cos(a) * r1);
          const y1 = round(150 + Math.sin(a) * r1);
          const x2 = round(200 + Math.cos(a) * r2);
          const y2 = round(150 + Math.sin(a) * r2);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? "#fff" : "rgba(255,255,255,0.4)"}
              strokeWidth="1"
            />
          );
        })}

        {/* Callout */}
        <g>
          <line x1="290" y1="150" x2="340" y2="86" stroke="#d94125" strokeOpacity="0.8" />
          <circle cx="340" cy="86" r="12" stroke="#d94125" strokeWidth="1.2" fill="#0d0d0d" />
          <text
            x="340"
            y="90"
            textAnchor="middle"
            fontSize="9"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fill="#d94125"
          >
            R1
          </text>
        </g>

        {/* Dimensional brackets */}
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
          <line x1="90" y1="256" x2="310" y2="256" />
          <line x1="90" y1="252" x2="90" y2="260" />
          <line x1="310" y1="252" x2="310" y2="260" />
        </g>
        <text
          x="200"
          y="272"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#fff"
          fillOpacity="0.6"
        >
          Ø 200 · ring outer
        </text>
      </svg>
      <VisualFooter
        a={["type", "ring"]}
        b={["grade", "EN8 / EN24"]}
        c={["stage", "finish"]}
      />
    </Frame>
  );
}
