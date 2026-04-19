"use client";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {siteConfig.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 60}>
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-accent-brand-orange lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-text-muted">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
