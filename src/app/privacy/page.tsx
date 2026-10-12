import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Privacy policy", description: `How ${brand.name} collects, uses, and protects personal data across web apps and mobile apps.`, path: "/privacy/" }),
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow prose prose-neutral max-w-none">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-3">Privacy policy</h1>
          <p className="lede mt-4 text-sm text-ink/70">Last updated: 10 March 2026</p>

          <h2 className="mt-10 font-display text-2xl text-ink">Who we are</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            {brand.name} (&quot;Antrahq&quot;, &quot;we&quot;, &quot;us&quot;) provides multi-location operations software for
            salon and spa businesses in India. This policy covers our marketing site (antrahq.com), cloud API (
            api.antrahq.com), and mobile/web applications:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/80">
            <li>
              <strong>Employee app</strong> (employee.antrahq.com) — staff attendance, sales, and growth tracking
            </li>
            <li>
              <strong>Manager app</strong> (app.antrahq.com) — branch managers and brand owners (CEO)
            </li>
            <li>
              <strong>Platform app</strong> (platform.antrahq.com) — Antrahq internal platform and sales operations
            </li>
          </ul>

          <h2 className="mt-10 font-display text-2xl text-ink">Data we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>
              <strong>Account data:</strong> name, work email, role, salon/brand association, authentication tokens
            </li>
            <li>
              <strong>Operational data:</strong> bookings, billing, inventory, CRM, and business records entered by
              your organization
            </li>
            <li>
              <strong>Staff attendance:</strong> punch times, optional photo verification, and{" "}
              <strong>device location</strong> when your employer enables geofenced check-in
            </li>
            <li>
              <strong>Device &amp; usage:</strong> app version, browser type, IP address, crash/diagnostic logs for
              security and reliability
            </li>
            <li>
              <strong>Marketing site:</strong> cookies/analytics as described in our cookie notice (if enabled)
            </li>
          </ul>

          <h2 className="mt-10 font-display text-2xl text-ink">How we use data</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            We process data to provide the service your salon chain contracted for: authentication, payroll-related
            attendance, sales targets, WhatsApp and billing features, support, fraud prevention, and product improvement.
            Location is used only for features your administrator turns on (e.g. geofenced punch).
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Legal basis &amp; roles</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            For salon customer and staff data, your business is typically the data controller and Antrahq acts as a
            processor providing the platform. For Antrahq account administration and platform sales tools, Antrahq may act
            as controller for internal user accounts.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Sharing</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            We use infrastructure providers (e.g. cloud hosting in India regions where configured), email/SMS/WhatsApp
            delivery partners, and payment processors only as needed to operate the product. We do not sell personal
            information.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Retention &amp; security</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Data is retained while your organization maintains an active account and as required by law (e.g. tax
            records). We use HTTPS, access controls, and industry-standard practices; no method of transmission is 100%
            secure.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Your rights &amp; account deletion</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Staff and operators should contact their salon administrator for access, correction, or deletion requests.
            Administrators may contact us at{" "}
            <a href={`mailto:${brand.email}`} className="text-brand underline">
              {brand.email}
            </a>
            . See our{" "}
            <Link href="/account-deletion/" className="text-brand underline">
              account deletion
            </Link>{" "}
            page for app-store requirements.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Children</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Our business apps are not directed at children under 18 and are intended for workforce and business use.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Changes &amp; contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            We may update this policy; the date above will change. Questions:{" "}
            <a href={`mailto:${brand.email}`} className="text-brand underline">
              {brand.email}
            </a>
            .
          </p>

          <p className="mt-10 text-sm">
            <Link href="/terms/" className="text-brand underline">
              Terms of use
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
