import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { resources } from "@/lib/content";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = {
  title: "Resources",
  description: "Guides, playbooks, calculators, and comparisons for Indian salon chain operators.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge that helps owners buy — and run — better."
        body="Practical, ROI-minded guides and tools for multi-branch salon operators in India."
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-5 md:grid-cols-2">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="rounded-2xl border border-ink/10 bg-mist-soft/50 p-6 transition hover:border-jade/40"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-jade">{r.type}</p>
              <h2 className="mt-2 font-display text-2xl text-ink">{r.title}</h2>
              <p className="mt-2 text-sm text-ink-mute">{r.desc}</p>
            </Link>
          ))}
        </div>

        <div id="pnl-guide" className="container-wide mt-16 scroll-mt-28 rounded-3xl border border-ink/10 bg-mist-soft p-8 md:p-10">
          <p className="eyebrow">Guide</p>
          <h2 className="mt-3 font-display text-3xl text-ink">Weekly multi-branch P&amp;L checklist</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm text-ink-mute">
            <li>Pull revenue by branch and compare utilisation vs last week.</li>
            <li>Scan discounts and voided bills — audit trail should explain every outlier.</li>
            <li>Check salary + product cost % against your target band.</li>
            <li>Open Market Pulse: coach the bottom quartile with one playbook.</li>
            <li>Queue a WhatsApp win-back for 45–90 day quiet guests.</li>
          </ol>
        </div>

        <div id="whatsapp-playbook" className="container-wide mt-8 scroll-mt-28 rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="eyebrow">Playbook</p>
          <h2 className="mt-3 font-display text-3xl text-ink">WhatsApp win-back sequence</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-mute">
            <li>
              <strong className="text-ink">Day 0:</strong> Soft check-in to 45–60 day guests (opted-in only).
            </li>
            <li>
              <strong className="text-ink">Day 4:</strong> Offer tied to their last service category.
            </li>
            <li>
              <strong className="text-ink">Day 10:</strong> Final nudge with weekday slots only — protect weekend capacity.
            </li>
          </ul>
        </div>
      </section>
      <ComparisonSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
