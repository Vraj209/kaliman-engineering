import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.company.legalName} — how we collect, use, and protect your information.`,
};

const LAST_UPDATED = "April 19, 2026";

export default function PrivacyPolicyPage() {
  const company = siteConfig.company.legalName;
  const email = siteConfig.contact.email;
  const address = siteConfig.contact.address;

  return (
    <>
      <PageHeader
        eyebrow="// Legal //"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <Section>
        <div className="prose-custom mx-auto max-w-3xl">
          <h2>1. Introduction</h2>
          <p>
            {company} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            operates the website at this domain. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you
            visit our website or contact us through any channel.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Information you provide</h3>
          <p>
            When you fill out a contact form, send us an email, or call us, you
            may provide personal information such as your name, email address,
            phone number, company name, and details about your project or
            enquiry.
          </p>
          <h3>Automatically collected information</h3>
          <p>
            We may automatically collect certain information when you visit our
            website, including your IP address, browser type, operating system,
            referring URLs, and pages viewed. This information is collected
            through standard web server logs and may be supplemented by analytics
            tools.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested services</li>
            <li>Send quotes, project updates, and delivery information</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul>
            <li>
              With service providers who assist us in operating our website or
              conducting our business, subject to confidentiality obligations
            </li>
            <li>
              When required by law, regulation, or legal process
            </li>
            <li>
              To protect our rights, property, or safety, or that of our
              customers or others
            </li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable technical and organisational measures to
            protect your personal information. However, no method of
            transmission over the internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance your
            browsing experience. You can control cookie settings through your
            browser preferences. Disabling cookies may affect some functionality
            of the website.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete the personal information we hold about you. To
            exercise these rights, please contact us using the details below.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date.
            Your continued use of the website after changes are posted
            constitutes acceptance of the revised policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
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
