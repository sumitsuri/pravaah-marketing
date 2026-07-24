"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/content";

export function TimelineSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <p className="eyebrow">Go-live</p>
        <h2 className="display mt-3 max-w-3xl">From zero to flowing — without a six-month programme.</h2>
        <p className="mt-5 max-w-2xl text-base text-ink-mute md:text-lg">
          Enterprise platforms sell 4-week white-glove transformations. Mid-market chains need
          days, not quarters — with your managers billing on the floor by week one.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((step, i) => (
            <motion.div
              key={step.week}
              className="rounded-2xl border border-ink/10 bg-mist-soft p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-jade">
                {step.week}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{step.detail}</p>
              <div className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-display text-2xl text-ink">{step.stat}</p>
                <p className="text-xs text-ink-mute">{step.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
