"use client";

import { motion } from "framer-motion";
import { heroStats, reviewBadges } from "@/lib/content";
import { GrowthDelta } from "@/components/visual/GrowthDelta";

export function StatsBand() {
  return (
    <section className="border-y bg-white" style={{ borderColor: "var(--mkt-site-border)" }}>
      <div className="container-wide grid grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-5 md:px-8 lg:grid-cols-4 lg:gap-0 lg:px-12 lg:py-0">
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`lg:border-r lg:border-ink/8 lg:px-6 lg:py-8 ${i === heroStats.length - 1 ? "lg:border-r-0" : ""}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <GrowthDelta metric={stat} size="md" className="lg:[&_*]:!text-left" />
          </motion.div>
        ))}
      </div>
      <div
        className="container-wide flex flex-wrap justify-center gap-2 border-t px-4 py-4 sm:gap-3 sm:px-5 md:px-8 lg:px-12"
        style={{ borderColor: "var(--mkt-site-border)" }}
      >
        {reviewBadges.map((b) => (
          <div
            key={b.name}
            className="rounded-full border px-3 py-2 text-center sm:px-4"
            style={{ borderColor: "var(--mkt-site-border)", background: "var(--mkt-page-bg)" }}
          >
            <p className="text-xs font-semibold" style={{ color: "var(--mkt-site-text)" }}>
              {b.name}
            </p>
            <p className="text-[10px]" style={{ color: "var(--mkt-site-text-muted)" }}>
              {b.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
