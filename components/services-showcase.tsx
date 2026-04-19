"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

/** Hand-picked feature bullets per category (pulled from the first few sub-services). */
const CATEGORY_FEATURES: Record<string, string[]> = {
  "CNC Machining Services": [
    "Multi-axis CNC programming & operation",
    "Tight-tolerance production & prototyping",
    "Aluminium, steel, brass & engineering plastics",
    "CMM inspection with documentation",
  ],
  "VMC Machining Services": [
    "Milling, drilling & tapping on VMCs",
    "Complex multi-axis features in one setup",
    "Plates, blocks & housings",
    "Precise hole-position accuracy",
  ],
  "Lathe Machining Services": [
    "OD turning, boring, facing & threading",
    "Manual & CNC lathe capacity",
    "Shafts, bushings & rotational parts",
    "One-off repairs to production runs",
  ],
  "General Job Work & Speciality": [
    "Custom contract manufacturing",
    "Ring components to specification",
    "Bespoke precision parts from drawings",
    "Single point of contact per project",
  ],
};

export function ServicesShowcase() {
  return (
    <section
      id="services"
      className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// WHAT WE DO //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Scalable capabilities
                <br className="hidden sm:block" /> for every job.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right">
                Four focused service lines, one coordinated workflow. Send a
                drawing, pick a batch size — we&apos;ll handle the rest.
              </p>
              <ButtonLink href="/services" variant="primary">
                Explore all capabilities
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
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-0 border border-border bg-surface lg:grid-cols-2">
          {siteConfig.serviceCategories.map((cat, i) => {
            // Grid position (2 cols × 2 rows, fallback 1 col on mobile).
            // Mobile: all rows after the first get a top border.
            // Desktop: rows 2 gets top border; col 2 gets left border.
            const mobileBorder = i > 0 ? "border-t border-border" : "";
            const lgTop = i >= 2 ? "lg:border-t lg:border-border" : "";
            const lgLeft =
              i % 2 === 1 ? "lg:border-l lg:border-border" : "";
            const lgResetTop = i < 2 ? "lg:border-t-0" : "";
            return (
              <Reveal
                key={cat.category}
                delay={i * 80}
                className={`flex ${mobileBorder} ${lgTop} ${lgLeft} ${lgResetTop}`}
              >
                <ServiceCategoryCard
                  index={i + 1}
                  title={cat.category}
                  description={cat.description}
                  features={CATEGORY_FEATURES[cat.category] ?? []}
                  href={`/services#${slugifyCategory(cat.category)}`}
                  variant={i % 2 === 0 ? "light" : "dark"}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function slugifyCategory(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface CategoryCardProps {
  index: number;
  title: string;
  description: string;
  features: string[];
  href: string;
  variant: "light" | "dark";
}

function ServiceCategoryCard({
  index,
  title,
  description,
  features,
  href,
  variant,
}: CategoryCardProps) {
  const dark = variant === "dark";
  return (
    <Link
      href={href}
      className={`group relative block h-full w-full overflow-hidden p-8 transition-colors duration-300 sm:p-10 ${
        dark
          ? "bg-foreground text-text-on-dark hover:bg-[#1f1f1f]"
          : "bg-surface text-foreground hover:bg-background"
      }`}
    >
      {/* Orange corner accent — grows on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-12 w-12 origin-top-right scale-100 bg-accent-brand-orange transition-transform duration-400 ease-out group-hover:scale-[1.25]"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />

      {/* Header row: index + icon */}
      <div className="flex items-start justify-between gap-6">
        <p
          className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
            dark ? "text-text-on-dark/60" : "text-text-subtle"
          }`}
        >
          / 0{index} — service
        </p>
        <CategoryGlyph category={title} dark={dark} />
      </div>

      {/* Title */}
      <h3 className="mt-6 max-w-md text-2xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[28px]">
        {title}
      </h3>

      {/* Description */}
      <p
        className={`mt-4 max-w-md text-sm leading-relaxed ${
          dark ? "text-text-on-dark/65" : "text-text-muted"
        }`}
      >
        {description}
      </p>

      {/* Features */}
      <ul className={`mt-7 space-y-3 ${dark ? "" : ""}`}>
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <CheckArrow dark={dark} />
            <span
              className={`text-sm ${
                dark ? "text-text-on-dark/80" : "text-foreground/85"
              }`}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        className={`mt-8 inline-flex items-center gap-2 border-b pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
          dark
            ? "border-text-on-dark/30 text-text-on-dark group-hover:border-accent-brand-orange group-hover:text-accent-brand-orange"
            : "border-foreground/30 text-foreground group-hover:border-accent-brand-orange group-hover:text-accent-brand-orange"
        }`}
      >
        Explore service
        <svg
          className="transition-transform duration-300 group-hover:translate-x-1"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <path d="M2 6h8M7 3l3 3-3 3" />
        </svg>
      </div>
    </Link>
  );
}

function CheckArrow({ dark }: { dark: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center border ${
        dark
          ? "border-accent-brand-orange/60 bg-accent-brand-orange/10"
          : "border-accent-brand-orange/40 bg-accent-brand-orange/10"
      }`}
    >
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        stroke="#d94125"
        strokeWidth="1.8"
        strokeLinecap="square"
      >
        <path d="M1.5 4.5l2 2L7.5 2" />
      </svg>
    </span>
  );
}

function CategoryGlyph({
  category,
  dark,
}: {
  category: string;
  dark: boolean;
}) {
  const color = dark ? "#fff" : "#151515";
  const bg = dark ? "rgba(255,255,255,0.08)" : "rgba(21,21,21,0.04)";
  const common = {
    stroke: color,
    strokeWidth: 1.3,
    fill: "none" as const,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
  };
  return (
    <div
      className="flex h-14 w-14 items-center justify-center border transition-colors duration-300 group-hover:border-accent-brand-orange"
      style={{
        backgroundColor: bg,
        borderColor: dark ? "rgba(255,255,255,0.18)" : "rgba(21,21,21,0.15)",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        {category.includes("CNC") && !category.includes("Lathe") ? (
          // Gear-ish
          <g {...common}>
            <circle cx="14" cy="14" r="5" />
            <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.5 6.5l2 2M19.5 19.5l2 2M6.5 21.5l2-2M19.5 8.5l2-2" />
          </g>
        ) : category.includes("VMC") ? (
          // Vertical mill: spindle + table
          <g {...common}>
            <path d="M4 22h20" />
            <path d="M14 4v10" />
            <rect x="10" y="14" width="8" height="4" />
            <path d="M8 22v-4M20 22v-4" />
          </g>
        ) : category.includes("Lathe") ? (
          // Horizontal spindle: chuck + workpiece
          <g {...common}>
            <rect x="3" y="11" width="5" height="6" />
            <path d="M8 14h14" />
            <rect x="22" y="12.5" width="3" height="3" />
            <path d="M10 11l1-2M13 11l1-2M16 11l1-2M19 11l1-2" />
          </g>
        ) : (
          // General: diamond + stacked lines
          <g {...common}>
            <path d="M14 4l8 10-8 10-8-10 8-10z" />
            <path d="M10 14h8" />
            <path d="M11.5 11h5M11.5 17h5" />
          </g>
        )}
      </svg>
    </div>
  );
}
