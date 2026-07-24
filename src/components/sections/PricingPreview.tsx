"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pricing } from "@/lib/content";

export function PricingPreview() {
  return (
    <section className="section-pad bg-mist-soft">
      <div className="container-wide">
        <p className="eyebrow">Pricing</p>
        <h2 className="display mt-3 max-w-2xl">Transparent mid-market pricing. No demo tax to see the number.</h2>
        <p className="lede mt-5">
          Built for 3–20 branch chains. WhatsApp campaigns included on Growth — a real edge vs tools
          that meter messaging separately.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                tier.highlighted
                  ? "border-jade bg-white shadow-[0_24px_60px_-36px_rgba(15,107,92,0.55)]"
                  : "border-ink/10 bg-white/70"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {tier.highlighted && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-jade">
                  Most chosen
                </p>
              )}
              <h3 className="font-display text-2xl text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm text-ink-mute">{tier.blurb}</p>
              <p className="mt-5 font-display text-4xl text-ink">{tier.price}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
