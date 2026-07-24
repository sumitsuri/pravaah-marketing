"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-flow-band opacity-30" aria-hidden />
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">
            Next step
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            See your chain flow in a live demo.
          </h2>
          <p className="mt-5 max-w-xl text-base text-mist/70 md:text-lg">
            Walk-in to GST invoice. Branch P&L. WhatsApp campaign. Market Pulse.
            Thirty minutes — no marketplace pitch, no six-month implementation theatre.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-jade px-6 py-3 text-sm font-semibold text-white hover:bg-jade-bright"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Compare plans
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
