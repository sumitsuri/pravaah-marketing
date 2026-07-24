"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { verticals } from "@/lib/content";

export function VerticalsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <p className="eyebrow">Built for your vertical</p>
        <h2 className="display mt-3 max-w-3xl">Complete software tailored to how you operate.</h2>
        <p className="mt-5 max-w-2xl text-ink-mute">
          Like Phorest and Zenoti segment by industry — we speak to the salon formats Indian chains
          actually run.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={v.href}
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-mist-soft/50 p-6 transition hover:border-jade/40 hover:bg-mist-soft"
              >
                <div>
                  <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{v.desc}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-jade opacity-60 transition group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
