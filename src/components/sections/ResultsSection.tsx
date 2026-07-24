"use client";

import { motion } from "framer-motion";
import { results } from "@/lib/content";

export function ResultsSection() {
  return (
    <section id="results" className="section-pad bg-mist-soft">
      <div className="container-wide">
        <p className="eyebrow">Real results</p>
        <h2 className="display mt-3 max-w-3xl">Operators feel the flow — not another login.</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {results.map((item, i) => (
            <motion.blockquote
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 md:p-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="flex-1 text-sm leading-relaxed text-ink-mute md:text-base">
                “{item.quote}”
              </p>
              <footer className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink-mute">{item.role}</p>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-ink-mute">
                    {item.metric}
                  </span>
                  <span className="font-display text-2xl text-jade">{item.metricValue}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
