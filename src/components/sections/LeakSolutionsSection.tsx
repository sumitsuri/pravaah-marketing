"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { leakSolutions, sectionCopy } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { Scene3DWrapper } from "@/components/visual/Scene3DWrapper";

export function LeakSolutionsSection() {
  const [active, setActive] = useState(0);
  const current = leakSolutions[active];
  const copy = sectionCopy.growthLevers;

  return (
    <section id="leaks" className="section-pad bg-white">
      <div className="container-wide">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="display mt-3 max-w-4xl">{copy.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg">{copy.lede}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leakSolutions.map((item, i) => {
            const selected = i === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-5 text-left transition ${
                  selected
                    ? "border-jade bg-mist-soft shadow-sm"
                    : "border-ink/10 bg-white hover:border-jade/30"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber">
                  {item.problemLabel}
                </p>
                <p className="mt-2 text-xs leading-snug text-ink-mute">{item.problemStat}</p>
                <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-jade">{item.promise}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 overflow-hidden rounded-3xl border border-ink/10 bg-mist-soft p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jade">
                {current.problemLabel}
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{current.title}</h3>
              <p className="mt-2 text-lg font-medium text-jade">{current.promise}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-mute md:text-base">
                {current.desc}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-ink-mute">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary inline-flex">
                  See it in a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={current.href} className="btn-secondary inline-flex">
                  Product details
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-screen`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Scene3DWrapper depth={0.5}>
                <FeatureScreen variant={current.screen} elevated />
              </Scene3DWrapper>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
