import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-6xl font-bold tracking-tight text-accent-brand-orange">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact Us
        </ButtonLink>
      </div>
    </div>
  );
}
