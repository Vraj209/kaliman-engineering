"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function AllServicesIndex() {
  return (
    <section
      id="service-index"
      className="relative scroll-mt-24 bg-surface px-4 py-20 text-foreground sm:px-6 lg:py-28"
    >
      {/* Soft grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:mb-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// FULL INDEX //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Every service,
                <br className="hidden sm:block" /> one directory.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right lg:ml-auto">
              Click any line below for the full scope, process, and typical
              applications. If your requirement doesn&apos;t fit neatly into
              one bucket — start a conversation and we&apos;ll scope it.
            </p>
          </Reveal>
        </div>

        {/* Category groups */}
        <div className="flex flex-col gap-16">
          {siteConfig.serviceCategories.map((cat, catIdx) => (
            <Reveal key={cat.category} delay={catIdx * 40}>
              <div>
                {/* Group header */}
                <div className="flex items-baseline justify-between gap-6 border-b border-border pb-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-brand-orange">
                      / 0{catIdx + 1}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-subtle">
                    {String(cat.services.length).padStart(2, "0")} lines
                  </span>
                </div>

                {/* Services list — tabular rows */}
                <ul className="mt-0">
                  {cat.services.map((svc, svcIdx) => (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="group grid grid-cols-[52px_minmax(0,1fr)_40px] items-center gap-5 border-b border-border py-5 transition-colors duration-200 hover:bg-background sm:grid-cols-[64px_minmax(0,1.2fr)_minmax(0,1.4fr)_40px] sm:py-7"
                      >
                        {/* Index */}
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-subtle">
                          {String(svcIdx + 1).padStart(2, "0")} /
                        </span>

                        {/* Title */}
                        <span className="flex items-center gap-3 text-base font-semibold tracking-[-0.01em] text-foreground transition-colors duration-200 group-hover:text-accent-brand-orange sm:text-lg">
                          <span
                            aria-hidden="true"
                            className="inline-block h-1.5 w-1.5 shrink-0 bg-accent-brand-orange"
                          />
                          {svc.title}
                        </span>

                        {/* Description — hidden on mobile */}
                        <span className="hidden text-sm leading-relaxed text-text-muted sm:block">
                          {svc.description}
                        </span>

                        {/* Arrow */}
                        <span
                          aria-hidden="true"
                          className="justify-self-end text-text-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent-brand-orange"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="square"
                          >
                            <path d="M3 9h11M10 4l5 5-5 5" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
