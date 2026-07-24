"use client";

import { motion } from "framer-motion";
import { featureGroups } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

export function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="container-narrow">
        <p className="eyebrow">Product</p>
        <h2 className="display mt-3 max-w-3xl">Everything your chain needs — mapped to who uses it.</h2>
        <p className="lede mt-5">
          No feature laundry list for its own sake. Each capability sits where the job gets done:
          CEO, branch manager, or front desk.
        </p>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <FeatureScreen variant="campaign" />
          <div>
            <p className="text-sm font-semibold text-jade">Included in Growth</p>
            <h3 className="mt-2 font-display text-3xl text-ink">WhatsApp that earns its keep</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              Preview audiences by visit history and spend, then send. Campaigns ship with the
              product — not as a ₹2–3.5K/mo bolt-on.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {featureGroups.map((group, gi) => (
            <motion.div
              key={group.buyer}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h3 className="font-display text-2xl text-ink md:text-3xl">{group.buyer}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.name} className="border-t border-ink/10 pt-4">
                    <h4 className="text-base font-semibold text-ink">{item.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.desc}</p>
                  </div>
                ))}
              </div>
              {gi === 0 && (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <FeatureScreen variant="pnl" />
                  <FeatureScreen variant="attendance" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
