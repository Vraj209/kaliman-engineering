"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in ms for stagger sequences */
  delay?: number;
  as?: "div" | "section" | "li";
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`reveal ${inView ? "reveal--visible" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
