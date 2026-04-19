"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "What manufacturing services do you provide?",
    a: "We provide end-to-end precision job work — CNC machining, VMC milling, lathe turning, ring components, and bespoke custom parts — all under a single engagement model. Whether you need a one-off prototype or a repeat production batch, your drawing goes through the same intake, planning, machining, and QC process.",
  },
  {
    q: "What batch sizes do you take on?",
    a: "We handle the full range — from a single prototype or replacement part to production batches of several hundred units. Because we plan the process before cutting, the workflow scales cleanly. Tell us your quantity and we'll quote an honest schedule around it.",
  },
  {
    q: "How do you maintain quality across a batch?",
    a: "Every job has a first-article inspection, in-process checks on critical dimensions, and a final inspection against your drawing. For precision-critical runs we use CMM measurement and can supply dimensional reports, material certificates, and CoC documents as required.",
  },
  {
    q: "Can you work from a sketch or sample if I don't have a CAD file?",
    a: "Yes. A clear 2D drawing is ideal, but we regularly work from 3D models, hand sketches, or a physical sample — especially for replacement and repair jobs. We confirm every dimension, tolerance, and material call-out before machining begins.",
  },
  {
    q: "What materials can you machine?",
    a: "Common engineering grades — mild and alloy steels (EN8 / EN24 / EN19), stainless (SS304 / SS316 / SS410), tool steel, aluminium (6061 / 6063 / 7075), brass, copper, bronze, and engineering plastics (nylon, Delrin, PTFE, HDPE). Specialty grades can usually be sourced — share the spec and we'll confirm availability and lead-time.",
  },
  {
    q: "How do I request a quote?",
    a: "Email your drawing or model along with the quantity, required material, and any documentation needs (inspection reports, certificates) to kalimalengineering@gmail.com — or use the contact page. We respond with an honest schedule and a clear scope, no guessing.",
  },
] as const;

export function ServicesFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-surface px-4 py-20 text-foreground sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-brand-orange">
                {"// COMMON QUESTIONS //"}
              </p>
              <h2 className="mt-5 text-[clamp(1.85rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
                Frequently asked
                <br className="hidden sm:block" /> questions.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right lg:ml-auto">
              Short answers to the things customers ask most often. Have a
              different question? Write to us — we&apos;ll reply personally.
            </p>
          </Reveal>
        </div>

        {/* Accordion */}
        <Reveal delay={140}>
          <ul className="border-t border-border">
            {FAQS.map((f, i) => {
              const open = openIdx === i;
              return (
                <li key={f.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:bg-background sm:py-7"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-brand-orange">
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold tracking-[-0.005em] text-foreground sm:text-lg">
                        {f.q}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-200 ${
                        open
                          ? "border-accent-brand-orange bg-accent-brand-orange text-text-on-dark"
                          : "border-border text-foreground"
                      }`}
                    >
                      <PlusMinus open={open} />
                    </span>
                  </button>
                  {/* Panel */}
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-7 pl-0 pr-6 text-[15px] leading-relaxed text-text-muted sm:pl-[calc(11px+1.5rem)]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function PlusMinus({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="2" y1="7" x2="12" y2="7" />
      {!open && <line x1="7" y1="2" x2="7" y2="12" />}
    </svg>
  );
}
