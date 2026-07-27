"use client";

import { motion } from "framer-motion";
import { predictiveAgents, sectionCopy } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { Scene3DWrapper } from "@/components/visual/Scene3DWrapper";
import { GrowthDelta } from "@/components/visual/GrowthDelta";

export function PredictiveSection() {
  const copy = sectionCopy.intelligence;

  return (
    <section className="section-pad relative overflow-hidden bg-mist-soft">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-jade/10 blur-3xl"
        aria-hidden
      />
      <div className="container-wide relative">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="display mt-3 max-w-3xl">{copy.title}</h2>
        <p className="mt-5 max-w-2xl text-base text-ink-mute md:text-lg">{copy.lede}</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {predictiveAgents.map((agent, i) => (
            <motion.div
              key={agent.title}
              className="flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Scene3DWrapper depth={0.4 + i * 0.1}>
                <FeatureScreen variant={agent.screen} elevated />
              </Scene3DWrapper>
              <h3 className="mt-5 font-display text-2xl text-ink">{agent.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{agent.blurb}</p>
              <div className="mt-4 border-t border-ink/10 pt-4">
                <GrowthDelta metric={agent.metric} size="sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
