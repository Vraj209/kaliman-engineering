import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  variant?: Variant;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"a">)
);

const base =
  "inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-orange";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-brand-orange text-text-on-dark hover:bg-accent-deep",
  secondary:
    "border border-border text-foreground hover:border-foreground hover:bg-foreground hover:text-text-on-dark",
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const cls = [base, variants[variant], className].filter(Boolean).join(" ");

  if (props.href && typeof props.href === "string" && props.href.startsWith("/")) {
    return <Link {...(props as ComponentPropsWithoutRef<typeof Link>)} href={props.href} className={cls} />;
  }

  return <a {...(props as ComponentPropsWithoutRef<"a">)} className={cls} />;
}
