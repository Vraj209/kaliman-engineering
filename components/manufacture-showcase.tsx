"use client";

import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

/** Representative product archetypes Kalimal Engineering manufactures. */
const PRODUCTS = [
  {
    slug: "precision-shafts",
    title: "Precision shafts & spindles",
    material: "Alloy Steel / EN24 / EN8",
    capability: "Turning & grinding",
    size: "Up to 1200 mm length",
    glyph: "shaft",
  },
  {
    slug: "ring-components",
    title: "Rings & bearing races",
    material: "Mild steel / stainless / brass",
    capability: "Lathe turning",
    size: "ID 20–400 mm",
    glyph: "ring",
  },
  {
    slug: "housings-plates",
    title: "Housings, plates & fixtures",
    material: "Aluminium 6061 / MS / SS",
    capability: "VMC milling",
    size: "Up to 600 × 400 mm envelope",
    glyph: "housing",
  },
  {
    slug: "custom-components",
    title: "Custom precision components",
    material: "Per customer specification",
    capability: "CNC machining",
    size: "Prototype to batch production",
    glyph: "custom",
  },
] as const;

export function ManufactureShowcase() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-4 py-20 text-text-on-dark sm:px-6 lg:py-28">
      {/* Corner grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header: 50k+ and caption */}
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// WHAT WE MANUFACTURE //"}
              </p>
              <p className="mt-8 font-mono text-sm uppercase tracking-[0.22em] text-text-on-dark/60">
                Parts delivered
              </p>
              <p className="mt-2 text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.035em]">
                <span className="text-accent-brand-orange">50k+</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="lg:pl-8 lg:text-right">
              <h2 className="text-[clamp(1.65rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em]">
                Precision-built components
                <br className="hidden sm:block" /> across industries &amp;
                applications.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-on-dark/70 lg:ml-auto">
                From shafts and bearing rings to custom housings and one-off
                repairs — if it turns, mills, or needs a tight tolerance, we
                machine it.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-0 border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => {
            // Dividers based on grid position.
            // sm: 2 cols; lg: 4 cols.
            const smLeft = i % 2 === 1 ? "sm:border-l sm:border-white/10" : "";
            const smTop = i >= 2 ? "sm:border-t sm:border-white/10" : "";
            const lgLeft = i > 0 ? "lg:border-l lg:border-white/10" : "";
            const lgResetTop = "lg:border-t-0";
            const mobileTop = i > 0 ? "border-t border-white/10" : "";
            return (
              <Reveal
                key={p.slug}
                delay={i * 70}
                className={`flex ${mobileTop} ${smLeft} ${smTop} ${lgLeft} ${lgResetTop}`}
              >
                <ProductCard product={p} />
              </Reveal>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Reveal>
            <h3 className="max-w-md text-xl font-medium leading-snug text-text-on-dark/90 sm:text-2xl">
              Explore the complete range across capabilities.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="border-white/25 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
            >
              View all capabilities
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: (typeof PRODUCTS)[number];
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex h-full w-full flex-col bg-surface-dark-alt transition-colors duration-300 hover:bg-[#1f1f1f]">
      {/* Illustration */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-surface-dark">
        <ProductIllustration kind={product.glyph} />
        {/* Top-left label */}
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/55">
          / {product.slug.toUpperCase().replace(/-/g, " ")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-text-on-dark group-hover:text-accent-brand-orange">
          {product.title}
        </h3>

        <dl className="mt-5 space-y-3 border-t border-white/10 pt-4 text-sm">
          <SpecRow label="Material" value={product.material} />
          <SpecRow label="Capability" value={product.capability} />
          <SpecRow label="Size range" value={product.size} />
        </dl>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-on-dark/50">
        {label}
      </dt>
      <dd className="max-w-[60%] text-right text-[13px] leading-snug text-text-on-dark/85">
        {value}
      </dd>
    </div>
  );
}

/** Round to 2dp for SSR-stable SVG coordinate strings. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function ProductIllustration({ kind }: { kind: string }) {
  const orange = "#d94125";
  const white = "rgba(255,255,255,0.85)";
  const faint = "rgba(255,255,255,0.18)";

  return (
    <svg
      viewBox="0 0 320 240"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* Backing grid */}
      <defs>
        <pattern
          id={`grid-${kind}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="320" height="240" fill={`url(#grid-${kind})`} />

      {kind === "shaft" && (
        <g>
          {/* Shaft body */}
          <rect x="40" y="105" width="240" height="30" fill={faint} />
          <rect x="40" y="108" width="240" height="24" fill={white} />
          {/* Diameter steps */}
          <rect x="40" y="112" width="40" height="16" fill={orange} />
          <rect x="240" y="112" width="40" height="16" fill={orange} />
          {/* Centerline */}
          <line
            x1="20"
            y1="120"
            x2="300"
            y2="120"
            stroke={faint}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* Dimension ticks */}
          <line x1="40" y1="155" x2="40" y2="170" stroke={faint} />
          <line x1="280" y1="155" x2="280" y2="170" stroke={faint} />
          <line x1="40" y1="162" x2="280" y2="162" stroke={faint} />
          <text
            x="160"
            y="180"
            fill="rgba(255,255,255,0.4)"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
          >
            L — 1200
          </text>
        </g>
      )}

      {kind === "ring" && (
        <g>
          <circle cx="160" cy="120" r="78" fill={faint} />
          <circle cx="160" cy="120" r="70" fill={white} />
          <circle cx="160" cy="120" r="46" fill="#151515" />
          <circle
            cx="160"
            cy="120"
            r="60"
            fill="none"
            stroke={orange}
            strokeWidth="3"
          />
          {/* Radial ticks */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI) / 8;
            return (
              <line
                key={i}
                x1={round(160 + Math.cos(a) * 70)}
                y1={round(120 + Math.sin(a) * 70)}
                x2={round(160 + Math.cos(a) * 78)}
                y2={round(120 + Math.sin(a) * 78)}
                stroke={faint}
                strokeWidth="1"
              />
            );
          })}
          <text
            x="160"
            y="224"
            fill="rgba(255,255,255,0.4)"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
          >
            ø OD — 200
          </text>
        </g>
      )}

      {kind === "housing" && (
        <g>
          {/* Base block */}
          <rect x="60" y="70" width="200" height="110" fill={faint} />
          <rect x="60" y="70" width="200" height="110" fill="none" stroke={white} strokeWidth="1.5" />
          {/* Pocket cutout */}
          <rect x="92" y="98" width="136" height="54" fill="#151515" />
          <rect x="92" y="98" width="136" height="54" fill="none" stroke={orange} strokeWidth="2" />
          {/* Bolt holes */}
          {[
            [78, 86], [242, 86], [78, 164], [242, 164],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="#151515" stroke={white} strokeWidth="1" />
          ))}
          {/* Datum arrows */}
          <line x1="60" y1="55" x2="260" y2="55" stroke={faint} />
          <text
            x="160"
            y="48"
            fill="rgba(255,255,255,0.4)"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
          >
            A — 600
          </text>
        </g>
      )}

      {kind === "custom" && (
        <g>
          {/* Stacked-part abstract composition */}
          <polygon
            points="160,40 250,100 220,200 100,200 70,100"
            fill={faint}
          />
          <polygon
            points="160,40 250,100 220,200 100,200 70,100"
            fill="none"
            stroke={white}
            strokeWidth="1.5"
          />
          <line x1="160" y1="40" x2="160" y2="200" stroke={faint} />
          <line x1="70" y1="100" x2="250" y2="100" stroke={faint} />
          <circle cx="160" cy="120" r="20" fill={orange} />
          <circle cx="160" cy="120" r="6" fill="#151515" />
          <text
            x="160"
            y="224"
            fill="rgba(255,255,255,0.4)"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
          >
            custom / per spec
          </text>
        </g>
      )}
    </svg>
  );
}
