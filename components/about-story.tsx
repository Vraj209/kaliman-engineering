"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function AboutStory() {
  return (
    <section className="relative bg-background px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// OUR JOURNEY //"}
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-text-subtle">
                How we got here
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[clamp(1.95rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.015em]">
              Engineering trust and quality
              <br className="hidden sm:block" /> through years of{" "}
              <span className="text-accent-brand-orange">
                hands-on craft.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Story body + founder attribution */}
        <div className="mt-16 grid gap-10 border-t border-border pt-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-16">
          {/* Story paragraphs */}
          <Reveal>
            <div className="space-y-5 text-[15px] leading-relaxed text-text-muted sm:text-base">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                Our story
              </h3>
              <p>
                {siteConfig.company.legalName}{" "}was built on a simple idea:
                manufacturers shouldn&apos;t have to chase multiple vendors to
                get dependable machining work. We started out in the G.I.D.C.
                industrial estate in V.U. Nagar, Anand, with a lathe, a
                drawing, and a commitment to delivering the job as promised.
              </p>
              <p>
                Over the years we&apos;ve grown into a full-capability shop —
                CNC, VMC, conventional and CNC lathes, ring work, and general
                job work — all under one roof, with a single point of contact
                per project. What hasn&apos;t changed is the approach:
                realistic timelines, clear scope, and parts that match the
                drawing every time.
              </p>
              <p>
                What drives us today is the same thing that drove day one —
                not just producing components, but delivering value. Every
                part we machine contributes to a customer&apos;s product, and
                we take that responsibility seriously. It&apos;s why our
                clients keep coming back with the next job.
              </p>
            </div>
          </Reveal>

          {/* Founder card */}
          <Reveal delay={140}>
            <figure className="relative border border-border bg-foreground p-8 text-text-on-dark sm:p-10">
              {/* Orange side bar */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-accent-brand-orange"
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-on-dark/55">
                / founder&apos;s note
              </p>

              <svg
                aria-hidden="true"
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="currentColor"
                className="mt-6 text-accent-brand-orange"
              >
                <path d="M10 0v10c0 4-2 7-6 8v4c7-1 10-5 10-12V0H0zm18 0v10c0 4-2 7-6 8v4c7-1 10-5 10-12V0H18z" />
              </svg>

              <blockquote className="mt-6 text-lg font-semibold leading-[1.35] tracking-[-0.01em] sm:text-[22px]">
                &ldquo;Every drawing gets treated like it&apos;s going to run
                in our own machine. Quality and on-time delivery aren&apos;t
                promises — they&apos;re the job.&rdquo;
              </blockquote>

              <figcaption className="mt-8 border-t border-white/15 pt-6 text-[13px] leading-snug">
                <p className="font-semibold tracking-wide text-text-on-dark">
                  The team at {siteConfig.company.legalName}
                </p>
                <p className="mt-1 text-text-on-dark/60">
                  Founders &amp; shop-floor supervisors
                </p>
              </figcaption>

              {/* Tick corners */}
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 h-3 w-3 border-r border-t border-white/30"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/30"
              />
            </figure>
          </Reveal>
        </div>

        {/* Capabilities row */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:items-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-subtle">
                {"// OUR CAPABILITIES //"}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="grid gap-0 border border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
                {siteConfig.serviceCategories.map((cat, i) => (
                  <li
                    key={cat.category}
                    className={`relative ${
                      i > 0 ? "border-t border-border" : ""
                    } ${i >= 2 ? "lg:border-t-0" : ""} ${
                      i % 2 === 1 ? "sm:border-l sm:border-border sm:border-t-0" : ""
                    } ${
                      i === 0 || i === 2 ? "lg:border-l-0" : "lg:border-l lg:border-border"
                    } ${i >= 2 ? "sm:border-t sm:border-border" : ""}`}
                  >
                    <Link
                      href="/services"
                      className="group flex items-center justify-between gap-4 p-5 transition-colors duration-200 hover:bg-background sm:p-6"
                    >
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-text-subtle">
                          / 0{i + 1}
                        </span>
                        <span className="mt-2 block text-sm font-semibold leading-snug tracking-tight sm:text-[15px]">
                          {shortenCategory(cat.category)}
                        </span>
                      </span>
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="square"
                        className="shrink-0 text-text-subtle transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-brand-orange"
                      >
                        <path d="M3 11L11 3M5 3h6v6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-6 flex items-center justify-end">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:text-accent-brand-orange"
              >
                View all capabilities
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function shortenCategory(name: string) {
  return name
    .replace(/\s*Services$/i, "")
    .replace(/\s*&\s*Speciality$/i, "");
}
