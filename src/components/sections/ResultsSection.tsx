"use client";

import { motion } from "framer-motion";
import { results, sectionCopy } from "@/lib/content";
import { GrowthDelta } from "@/components/visual/GrowthDelta";

export function ResultsSection() {
  const copy = sectionCopy.results;

  return (
    <section id="results" className="section-pad bg-mist-soft">
      <div className="container-wide">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="display mt-3 max-w-3xl">{copy.title}</h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-mute">{copy.disclaimer}</p>

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
                <div className="mt-4">
                  <GrowthDelta metric={item.metric} size="sm" />
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
