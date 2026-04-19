import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  siteConfig,
  quoteMailto,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/site-config";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button-link";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getServiceBySlug(slug);
  if (!result) return {};

  const { service, category } = result;
  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      category.category,
      "precision machining",
      "job work",
      siteConfig.company.legalName,
    ],
    openGraph: {
      title: `${service.title} | ${siteConfig.company.legalName}`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const result = getServiceBySlug(slug);
  if (!result) notFound();

  const { service, category } = result;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark text-text-on-dark">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/80 to-surface-dark/50" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-subtle transition-colors duration-200 hover:text-text-on-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <path d="M10 4 6 8l4 4" />
            </svg>
            All Services
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent-brand-orange">
            {category.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-on-dark/80">
            {service.longDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={quoteMailto()}>Request a Quote</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="border-white/20 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section>
        <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
          {"// How It Works //"}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
          Our Process
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Every {service.title.toLowerCase()} project follows a structured
          process — from initial review through final delivery.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.howItWorks.map((step, i) => (
            <div key={step.step} className="relative border border-border bg-surface p-6">
              <span className="text-4xl font-bold text-accent-brand-orange/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.step}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities / features */}
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              {"// Capabilities //"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
              What We Deliver
            </h2>
            <p className="mt-4 max-w-lg text-text-muted leading-relaxed">
              {service.description}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-accent-brand-orange">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M11 4 5.5 10 3 7.5" />
                    </svg>
                  </span>
                  <span className="text-base font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden border border-border">
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={450}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-on-dark/70">
            Tell us about your {service.title.toLowerCase()} requirements — we
            provide quotes, technical consultation, and realistic timelines.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={quoteMailto()}>Request a Quote</ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="border-white/20 text-text-on-dark hover:border-white hover:bg-white hover:text-surface-dark"
            >
              View All Services
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
