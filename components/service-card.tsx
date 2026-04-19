import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  const content = (
    <>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {description}
      </p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-brand-orange">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      )}
    </>
  );

  const base =
    "group block border border-border bg-surface p-6 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-md";

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return <div className={base}>{content}</div>;
}
