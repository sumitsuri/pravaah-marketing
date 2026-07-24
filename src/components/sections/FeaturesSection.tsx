"use client";

import { motion } from "framer-motion";
import { platformTaxonomy, featureGroups } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

export function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="container-wide">
        <p className="eyebrow">Platform</p>
        <h2 className="display mt-3 max-w-3xl">Everything in the flow — organised the way buyers shop.</h2>
        <p className="mt-5 max-w-2xl text-base text-ink-mute md:text-lg">
          Organised around delight, grow, productive teams, and unify ops — only capabilities we have
          shipped.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformTaxonomy.map((col, i) => (
            <motion.div
              key={col.title}
              className="rounded-2xl border border-ink/10 bg-mist-soft/60 p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-display text-xl text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-ink-mute">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <FeatureScreen variant="campaign" />
          <div>
            <p className="text-sm font-semibold text-jade">Included in Growth</p>
            <h3 className="mt-2 font-display text-3xl text-ink">WhatsApp that earns its keep</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              Preview audiences by visit history and spend, then send. Campaigns ship with the
              product — built for India desks that already live on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-14">
          {featureGroups.map((group) => (
            <div key={group.buyer}>
              <h3 className="font-display text-2xl text-ink md:text-3xl">{group.buyer}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.name} className="border-t border-ink/10 pt-4">
                    <h4 className="text-base font-semibold text-ink">{item.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
