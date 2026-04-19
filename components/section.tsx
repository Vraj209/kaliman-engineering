import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className, dark, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 lg:py-24 ${
        dark
          ? "bg-surface-dark text-text-on-dark"
          : "bg-background text-foreground"
      } ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
