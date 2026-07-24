"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflows } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

const screenByWorkflow = {
  "walk-in": "walkin",
  ceo: "pnl",
  attendance: "attendance",
} as const;

export function WorkflowsSection() {
  const [active, setActive] = useState(0);
  const current = workflows[active];

  return (
    <section id="workflows" className="section-pad bg-mist-soft">
      <div className="container-narrow">
        <p className="eyebrow">Workflows</p>
        <h2 className="display mt-3 max-w-3xl">How Pravaah rewires the day — not just the dashboard.</h2>
        <p className="lede mt-5">
          Three flows that matter on day one: bill a walk-in, read the chain, and trust attendance.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {workflows.map((flow, i) => {
              const selected = i === active;
              return (
                <button
                  key={flow.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                    selected
                      ? "border-jade/40 bg-white shadow-sm"
                      : "border-transparent bg-white/50 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-ink">{flow.title}</h3>
                    <span className="shrink-0 text-xs font-semibold text-jade">{flow.time}</span>
                  </div>
                  <AnimatePresence initial={false}>
                    {selected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ol className="mt-4 space-y-2">
                          {flow.steps.map((step, idx) => (
                            <li key={step} className="flex gap-3 text-sm text-ink-mute">
                              <span className="font-semibold text-jade">{idx + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <p className="mt-4 text-sm font-medium text-ink">{flow.outcome}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <FeatureScreen variant={screenByWorkflow[current.id as keyof typeof screenByWorkflow]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
