"use client";

import { motion } from "framer-motion";
import { predictiveAgents } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

export function PredictiveSection() {
  return (
    <section className="section-pad bg-mist-soft">
      <div className="container-wide">
        <p className="eyebrow">From fixing leaks to forecasting them</p>
        <h2 className="display mt-3 max-w-3xl">Meet the systems that keep the chain sharp.</h2>
        <p className="mt-5 max-w-2xl text-base text-ink-mute md:text-lg">
          Not reactive spreadsheets — live views that surface underperformance, cost drag, and
          attendance gaps before they become month-end surprises.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {predictiveAgents.map((agent, i) => (
            <motion.div
              key={agent.title}
              className="flex flex-col"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <FeatureScreen variant={agent.screen} />
              <h3 className="mt-5 font-display text-2xl text-ink">{agent.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{agent.blurb}</p>
              <div className="mt-4 border-t border-ink/10 pt-4">
                <p className="font-display text-3xl text-jade">{agent.metric}</p>
                <p className="mt-1 text-xs text-ink-mute">{agent.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
