"use client";

import { motion } from "framer-motion";
import { heroStats, reviewBadges } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="border-y border-ink/8 bg-white">
      <div className="container-wide grid gap-0 px-5 md:grid-cols-4 md:px-8 lg:px-12">
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="border-b border-ink/8 py-8 last:border-b-0 md:border-b-0 md:border-r md:border-ink/8 md:px-6 md:last:border-r-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <p className="font-display text-4xl text-jade md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-ink-mute">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="container-wide flex flex-wrap justify-center gap-3 border-t border-ink/8 px-5 py-5 md:px-8 lg:px-12">
        {reviewBadges.map((b) => (
          <div
            key={b.name}
            className="rounded-full border border-ink/10 bg-mist-soft px-4 py-2 text-center"
          >
            <p className="text-xs font-semibold text-ink">{b.name}</p>
            <p className="text-[10px] text-ink-mute">{b.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
