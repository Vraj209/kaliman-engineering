"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const firstName = fd.get("firstName") ?? "";
    const lastName = fd.get("lastName") ?? "";
    const email = fd.get("email") ?? "";
    const phone = fd.get("phone") ?? "";
    const subject = fd.get("subject") ?? "";
    const message = fd.get("message") ?? "";

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({
      subject: String(subject || `Quote request — ${siteConfig.company.legalName}`),
      body,
    });

    window.location.href = `mailto:${siteConfig.contact.email}?${params.toString()}`;
    setSubmitted(true);
  }

  const inputBase =
    "w-full border border-white/10 bg-white/5 px-4 py-3.5 text-base text-text-on-dark placeholder:text-text-subtle transition-colors duration-200 focus:border-accent-brand-orange focus:outline-none";

  return (
    <div className="bg-surface-dark p-8 sm:p-10 lg:p-12">
      {submitted ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center bg-accent-brand-orange">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-on-dark">
            Thank you!
          </h3>
          <p className="mt-2 max-w-xs text-sm text-text-on-dark/70">
            Your email client should have opened with the details pre-filled.
            Send the email to complete your inquiry.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-medium text-accent-brand-orange underline underline-offset-4 transition-colors hover:text-accent-bright"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2.5">
              <span className="text-base font-semibold text-text-on-dark">
                First name<span className="text-accent-brand-orange">*</span>
              </span>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Enter your first name"
                className={inputBase}
              />
            </label>
            <label className="flex flex-col gap-2.5">
              <span className="text-base font-semibold text-text-on-dark">
                Last name<span className="text-accent-brand-orange">*</span>
              </span>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Enter your last name"
                className={inputBase}
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2.5">
              <span className="text-base font-semibold text-text-on-dark">
                Email<span className="text-accent-brand-orange">*</span>
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className={inputBase}
              />
            </label>
            <label className="flex flex-col gap-2.5">
              <span className="text-base font-semibold text-text-on-dark">
                Phone<span className="text-accent-brand-orange">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your contact number"
                className={inputBase}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2.5">
            <span className="text-base font-semibold text-text-on-dark">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Enter topic or subject"
              className={inputBase}
            />
          </label>

          <label className="flex flex-col gap-2.5">
            <span className="text-base font-semibold text-text-on-dark">
              Message
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project"
              className={`${inputBase} resize-y`}
            />
          </label>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center border border-white/15 bg-transparent px-7 py-3.5 text-base font-semibold text-text-on-dark transition-colors duration-200 hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-orange"
            >
              Submit details
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
