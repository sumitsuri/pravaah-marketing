"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-flow-band opacity-30" aria-hidden />
      <div className="container-wide relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            Every location deserves to run in sync.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist/70 md:text-lg">
            See how {brand.name} connects billing, teams, and customer outreach across your network —
            book a personalized walkthrough today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-jade px-6 py-3 text-sm font-semibold text-white hover:bg-jade-bright"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              <Phone className="h-4 w-4" /> Call / email now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
