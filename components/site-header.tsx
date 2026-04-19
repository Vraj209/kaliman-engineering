"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { siteConfig, quoteMailto } from "@/lib/site-config";
import { ButtonLink } from "./button-link";
import { ContactPhones } from "./contact-phones";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      className="transition-transform duration-200"
    >
      {open ? (
        <>
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          onClick={close}
        >
          {logoFailed ? (
            <span className="text-base font-bold tracking-tight text-foreground">
              {siteConfig.company.shortName}
            </span>
          ) : (
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={160}
              height={80}
              className="h-10 w-auto"
              priority
              onError={() => setLogoFailed(true)}
            />
          )}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent-brand-orange ${
                pathname === item.href
                  ? "text-accent-brand-orange"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={quoteMailto()} variant="primary">
            Request a Quote
          </ButtonLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-foreground md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-orange"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-surface px-4 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={`block px-2 py-3 text-base font-medium transition-colors duration-200 hover:text-accent-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-orange ${
                    pathname === item.href
                      ? "text-accent-brand-orange"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-6">
            <ButtonLink
              href={quoteMailto()}
              variant="primary"
              className="w-full justify-center"
              onClick={close}
            >
              Request a Quote
            </ButtonLink>
            <div className="border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
                Call us
              </p>
              <ContactPhones variant="onLight" className="mt-3" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
