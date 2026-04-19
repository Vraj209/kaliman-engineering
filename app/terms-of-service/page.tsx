import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.company.legalName} — conditions governing use of our website and services.`,
};

const LAST_UPDATED = "April 19, 2026";

export default function TermsOfServicePage() {
  const company = siteConfig.company.legalName;
  const email = siteConfig.contact.email;
  const address = siteConfig.contact.address;

  return (
    <>
      <PageHeader
        eyebrow="// Legal //"
        title="Terms of Service"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <Section>
        <div className="prose-custom mx-auto max-w-3xl">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website operated by {company} (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these
            Terms of Service. If you do not agree with any part of these terms,
            you must not use our website.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            {company} provides precision manufacturing services including CNC
            machining, VMC machining, lathe work, ring components, and general
            contract job work. Our website provides information about these
            services and allows you to contact us for enquiries and quotes.
          </p>

          <h2>3. Use of the Website</h2>
          <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of any third party</li>
            <li>Restrict or inhibit anyone else&apos;s use of the website</li>
            <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
            <li>Introduce any viruses, malware, or other harmful material</li>
          </ul>

          <h2>4. Quotations & Orders</h2>
          <p>
            Quotations provided through our website or email are estimates and
            are subject to confirmation based on final drawings, specifications,
            materials, and quantities. A binding agreement is formed only upon
            our written acceptance of your order. Pricing, lead times, and terms
            are agreed on a per-project basis.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos, and
            design — is the property of {company} or its licensors and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works from our content
            without our prior written consent.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            We treat all customer drawings, specifications, and project details
            as confidential. We will not share your proprietary information with
            third parties without your consent, except as required to fulfil
            your order or comply with legal obligations.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {company} shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the website or our
            services. Our total liability for any claim related to the website
            shall not exceed the amount you have paid us in the twelve months
            preceding the claim.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The website is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the website will be
            uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may link to third-party websites for your convenience.
            We have no control over and accept no responsibility for the
            content, privacy policies, or practices of any third-party sites.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of India. Any disputes arising from these terms or
            your use of the website shall be subject to the exclusive
            jurisdiction of the courts in Anand, Gujarat, India.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time.
            Changes will be posted on this page with an updated &quot;Last
            updated&quot; date. Your continued use of the website after changes
            are posted constitutes acceptance of the revised terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${email}`} className="text-accent-brand-orange hover:underline">
                {email}
              </a>
            </li>
            <li>Address: {address}</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
