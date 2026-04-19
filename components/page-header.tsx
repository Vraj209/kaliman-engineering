"use client";

import { Reveal } from "./reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={eyebrow ? 60 : 0}>
          <h1 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={eyebrow ? 120 : 60}>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
