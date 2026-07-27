"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/lib/content";
import { ProductFilm } from "@/components/ProductFilm";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-flow-hero pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F6B5C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="container-wide relative px-5 pb-16 pt-10 md:px-8 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="font-display text-5xl leading-none tracking-tight text-ink md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {brand.name}
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-jade md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {brand.productLabel} · {brand.tagline}
          </motion.p>
          <motion.h1
            className="mt-8 font-display text-3xl leading-[1.12] text-ink md:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            Run every location as one connected business.
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            {brand.mission}
          </motion.p>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            GST billing, branch P&amp;L, WhatsApp campaigns, verified attendance, and Market Pulse —
            one connected platform for operators who run more than one door.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            <Link href="/demo" className="btn-primary">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#film" className="btn-secondary">
              Watch product film
            </Link>
            <a href={`mailto:${brand.email}`} className="btn-secondary">
              <Phone className="h-4 w-4" /> Talk to us
            </a>
          </motion.div>
        </div>

        <motion.div
          id="film"
          className="mx-auto mt-14 max-w-6xl scroll-mt-28"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <ProductFilm />
        </motion.div>
      </div>
    </section>
  );
}
