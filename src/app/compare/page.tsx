import type { Metadata } from "next";
import Link from "next/link";
import { compareNav, comparePages } from "@/lib/compare-pages";
import { brand } from "@/lib/content";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compare salon software for multi-branch chains in India",
  description:
    "Compare Antrahq with Zenoti, MioSalon, and Salonist — pricing, multi-branch P&L, GST billing, CRM, and rollout fit for 3–20 outlet salon chains.",
  alternates: { canonical: "/compare/zenoti" },
};

export default function CompareIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Salon software comparisons for multi-branch buyers"
        body="Honest starting points — not attack ads. Each page explains where a competitor excels and where Antrahq fits mid-market Indian chains."
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-4 sm:grid-cols-3">
          {compareNav.map((item) => {
            const page = comparePages[item.href.replace("/compare/", "")];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-ink/10 p-6 transition hover:border-jade/30"
              >
                <p className="font-display text-xl text-ink">{page.title}</p>
                <p className="mt-3 text-sm text-ink-mute">{page.lede.slice(0, 140)}…</p>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-ink-mute">
          {brand.name} focuses on salon & spa chains with 3–20 branches.{" "}
          <Link href="/demo" className="font-semibold text-jade">
            Book a growth audit
          </Link>{" "}
          with your shortlist.
        </p>
      </section>
      <FinalCta />
    </>
  );
}
