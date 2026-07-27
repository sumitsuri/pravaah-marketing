"use client";

import { motion } from "framer-motion";
import { brand, osPillars } from "@/lib/content";

export function OsSection() {
  return (
    <section id="os" className="section-pad relative overflow-hidden bg-gradient-to-b from-ink-soft to-ink text-white">
      <div className="pointer-events-none absolute inset-0 film-shimmer opacity-20" aria-hidden />
      <div className="container-wide relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">
          The {brand.name} loop
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          From floor signals to growth decisions — one connected platform.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-mist/70 md:text-lg">
          India&apos;s multi-location reality — walk-ins, GST, WhatsApp, attendance, and P&amp;L — wired
          together so every decision is faster and every outlet gets sharper.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {osPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-jade/35 hover:bg-white/[0.06]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
            >
              <p className="font-mono text-xs text-jade-soft/70">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/65">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
