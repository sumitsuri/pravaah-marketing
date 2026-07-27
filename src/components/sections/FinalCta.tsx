"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { brand, sectionCopy } from "@/lib/content";

export function FinalCta() {
  const copy = sectionCopy.finalCta;

  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(20,143,122,0.35), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist/70 md:text-lg">{copy.lede}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-jade px-7 py-3.5 text-sm font-semibold text-white shadow-glow-jade transition hover:bg-jade-bright active:scale-[0.98]"
            >
              Book a growth walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" /> {brand.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
