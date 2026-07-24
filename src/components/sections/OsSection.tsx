"use client";

import { motion } from "framer-motion";
import { osPillars } from "@/lib/content";

export function OsSection() {
  return (
    <section id="os" className="section-pad bg-ink text-white">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">
          Pravaah OS
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Built so floor work and CEO decisions share one flow.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-mist/70 md:text-lg">
          Zenoti calls it an OS for AI. We call it an OS for Indian multi-branch reality — walk-ins,
          GST, WhatsApp, attendance, and P&amp;L tightly integrated so nothing falls between apps.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {osPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="border-t border-jade/40 pt-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="text-xs font-semibold text-jade-soft">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/65">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
