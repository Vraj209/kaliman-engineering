import { siteConfig } from "@/lib/site-config";

type ContactPhonesVariant = "onDark" | "onLight";

const linkStyles: Record<ContactPhonesVariant, string> = {
  onDark:
    "font-medium text-text-on-dark/80 transition-colors duration-200 hover:text-accent-bright",
  onLight:
    "font-medium text-foreground underline underline-offset-4 transition-colors duration-200 hover:text-accent-brand-orange",
};

const labelStyles: Record<ContactPhonesVariant, string> = {
  onDark: "text-xs font-semibold uppercase tracking-widest text-text-subtle",
  onLight: "text-xs font-semibold uppercase tracking-widest text-text-subtle",
};

interface ContactPhonesProps {
  /** Footer uses dark background; contact cards use light. */
  variant?: ContactPhonesVariant;
  className?: string;
}

/**
 * Both business lines with explicit labels (Phone / Phone (Alt)) and tel: links.
 */
export function ContactPhones({
  variant = "onLight",
  className = "",
}: ContactPhonesProps) {
  return (
    <ul className={`flex flex-col gap-3 text-sm ${className}`}>
      {siteConfig.contact.phones.map((phone) => (
        <li key={phone.tel}>
          <p className={labelStyles[variant]}>{phone.label}</p>
          <a href={`tel:${phone.tel}`} className={`mt-1 inline-block ${linkStyles[variant]}`}>
            {phone.display}
          </a>
        </li>
      ))}
    </ul>
  );
}
