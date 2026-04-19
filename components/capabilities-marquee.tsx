const CAPABILITIES = [
  "CNC Machining",
  "VMC Milling",
  "Lathe Turning",
  "Precision Rings",
  "Contract Job Work",
  "CNC Prototyping",
  "Custom Fixtures",
  "Repeat Production",
  "Tight Tolerances",
  "On-Time Delivery",
] as const;

/**
 * Infinite-scroll capability marquee. Pure CSS, respects reduced motion.
 * Dark band contrasts against the surrounding light sections, echoing
 * Manufact's client-logo strip without fabricating real client logos.
 */
export function CapabilitiesMarquee() {
  // Repeat list so the scroll loops seamlessly (2× for `translateX(-50%)`).
  const track = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section
      aria-label="Kalimal Engineering capabilities"
      className="relative overflow-hidden border-y border-border bg-surface-dark py-6 text-text-on-dark sm:py-8"
    >
      {/* Edge fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-dark to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-dark to-transparent sm:w-40"
      />

      <div className="capabilities-marquee flex w-max items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
        {track.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-10 sm:gap-14"
          >
            <span className="whitespace-nowrap text-[clamp(1.35rem,3.2vw,2.5rem)] font-semibold uppercase tracking-[-0.01em]">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rotate-45 bg-accent-brand-orange sm:h-4 sm:w-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
