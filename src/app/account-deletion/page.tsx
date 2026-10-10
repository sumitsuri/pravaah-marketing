import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Account deletion",
  description: `Request deletion of Antrahq app accounts and associated personal data.`,
};

export default function AccountDeletionPage() {
  return (
    <div className="bg-mist-soft pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow prose prose-neutral max-w-none">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-3">Account deletion</h1>
          <p className="lede mt-4 text-sm text-ink/70">Last updated: 10 March 2026</p>

          <p className="mt-6 text-sm leading-relaxed text-ink/80">
            Antrahq publishes Employee, Manager, and Platform apps on Google Play and the Apple App Store. This page
            explains how users can request deletion of personal data tied to an app login.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Salon staff &amp; managers</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Work accounts are created and managed by your salon or brand administrator. To remove your staff app login
            or personal profile data, contact your manager or brand owner first — they can deactivate the employee record
            in Antrahq.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Request deletion from Antrahq</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Email{" "}
            <a href={`mailto:${brand.email}?subject=Account%20deletion%20request`} className="text-jade underline">
              {brand.email}
            </a>{" "}
            from your work email with:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/80">
            <li>Your full name and login email</li>
            <li>Salon/brand name (if applicable)</li>
            <li>Which app you use (Employee, Manager, or Platform)</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            We verify identity with your administrator where required and respond within a reasonable timeframe (typically
            30 days). Some billing or legal records may be retained as required by law.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Uninstalling the app</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Removing the app from your device does not delete your server-side account. Deactivation or deletion must be
            requested as above.
          </p>

          <p className="mt-10 text-sm">
            <Link href="/privacy/" className="text-jade underline">
              Privacy policy
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
