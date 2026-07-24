"use client";

import { motion } from "framer-motion";
import { differentiators, pillars } from "@/lib/content";

export function PillarsSection() {
  return (
    <section id="pillars" className="section-pad bg-white">
      <div className="container-narrow">
        <p className="eyebrow">Why Pravaah</p>
        <h2 className="display mt-3 max-w-3xl">Built for chains that outgrew spreadsheets — and don&apos;t need enterprise bloat.</h2>
        <p className="lede mt-5">
          Global tools sell marketplaces and AI agents. India tools sell feature lists.
          Pravaah sells operational flow: one truth from front desk to CEO.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mb-4 h-px w-12 bg-jade" />
              <h3 className="font-display text-2xl text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-mute">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-flow-band p-6 md:p-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
