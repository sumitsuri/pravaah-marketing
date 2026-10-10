import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing use of ${brand.name} websites and applications.`,
};

export default function TermsPage() {
  return (
    <div className="bg-mist-soft pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow prose prose-neutral max-w-none">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-3">Terms of use</h1>
          <p className="lede mt-4 text-sm text-ink/70">Last updated: 10 March 2026</p>

          <p className="mt-6 text-sm leading-relaxed text-ink/80">
            By accessing antrahq.com, api.antrahq.com, or Antrahq mobile/web applications, you agree to these terms.
            If you use the product on behalf of a salon or brand, you confirm you have authority to bind that
            organization.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Service</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Antrahq provides software for salon and spa operations. Features depend on your subscription and
            configuration. We may modify or discontinue features with reasonable notice where practical.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Accounts</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            You must keep credentials confidential. Employee, manager, and platform apps use separate entry points;
            use the app your administrator assigned. You are responsible for activity under your account.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Acceptable use</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Do not misuse the platform: no unauthorized access, scraping, malware, harassment, or violation of applicable
            law (including Indian IT and consumer protection rules where applicable).
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Data &amp; privacy</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Our{" "}
            <Link href="/privacy/" className="text-jade underline">
              Privacy policy
            </Link>{" "}
            describes how we handle personal data. Customer data entered by your business remains subject to your policies
            and applicable law.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Disclaimer &amp; liability</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            The service is provided &quot;as is&quot; to the maximum extent permitted by law. Antrahq is not liable for
            indirect or consequential damages arising from use of the software. Business decisions (pricing, payroll,
            compliance) remain your responsibility.
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            <a href={`mailto:${brand.email}`} className="text-jade underline">
              {brand.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
