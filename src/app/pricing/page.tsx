import type { Metadata } from "next";
import Link from "next/link";
import { brand, pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent mid-market pricing for multi-branch salon chains in India.",
};

export default function PricingPage() {
  return (
    <div className="bg-mist-soft pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow">
          <p className="eyebrow">Pricing</p>
          <h1 className="display mt-3 max-w-3xl">Plans that match how Indian salon chains actually buy.</h1>
          <p className="lede mt-5">
            Per-branch pricing. WhatsApp included on Growth. Enterprise when you need custom rollout —
            not because you want to know the price.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  tier.highlighted ? "border-jade bg-white" : "border-ink/10 bg-white/80"
                }`}
              >
                <h2 className="font-display text-2xl">{tier.name}</h2>
                <p className="mt-1 text-sm text-ink-mute">{tier.blurb}</p>
                <p className="mt-5 font-display text-3xl sm:text-4xl">{tier.price}</p>
                <p className="text-xs text-ink-mute">{tier.unit}</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink-mute">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo"
                  className={`mt-8 text-center ${tier.highlighted ? "btn-primary" : "btn-secondary"}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm text-ink-mute">
            Compared to opaque enterprise quotes and marketplace commission models, {brand.name} keeps
            economics simple: pay per branch, keep 100% of bookings, and get campaigns in Growth.
          </p>
        </div>
      </section>
    </div>
  );
}
