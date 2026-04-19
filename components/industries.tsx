"use client";

import { siteConfig } from "@/lib/site-config";
import { Section } from "./section";
import { Reveal } from "./reveal";

export function IndustriesSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              // Industries Served //
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight lg:text-4xl">
              Built for Industry
            </h2>
            <p className="mt-3 max-w-lg text-text-muted">
              We partner with manufacturers, OEM suppliers, and engineering firms
              who need reliable machining with clear communication and realistic
              schedules.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {siteConfig.industries.map((ind) => (
              <li
                key={ind}
                className="flex items-start gap-3 border border-border bg-surface p-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-block h-2 w-2 shrink-0 bg-accent-brand-orange"
                />
                <span className="text-sm font-medium">{ind}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
