import Link from "next/link";
import { siteConfig, quoteMailto } from "@/lib/site-config";
import { ContactPhones } from "@/components/contact-phones";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold tracking-tight">
              {siteConfig.company.legalName}
            </p>
            <p className="mt-2 text-sm text-text-subtle">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Pages
            </p>
            <nav aria-label="Footer" className="mt-3">
              <ul className="flex flex-col gap-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-on-dark/80 transition-colors duration-200 hover:text-accent-bright"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Contact
            </p>
            <div className="mt-3 flex flex-col gap-4 text-sm">
              <a
                href={quoteMailto()}
                className="text-text-on-dark/80 transition-colors duration-200 hover:text-accent-bright"
              >
                {siteConfig.contact.email}
              </a>
              <ContactPhones variant="onDark" />
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Legal
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-text-on-dark/80 transition-colors duration-200 hover:text-accent-bright"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-text-on-dark/80 transition-colors duration-200 hover:text-accent-bright"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-text-subtle">
          &copy; {currentYear} {siteConfig.company.legalName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
