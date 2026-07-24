"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/content";
import { HeroProductMock } from "@/components/mockups/HeroProductMock";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-flow-hero pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F6B5C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="container-narrow relative grid items-center gap-14 px-5 pb-28 pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-16">
        <div>
          <motion.p
            className="font-display text-5xl leading-none tracking-tight text-ink md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {brand.name}
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-jade md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {brand.sanskrit} · {brand.tagline}
          </motion.p>

          <motion.h1
            className="mt-8 max-w-lg font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.65rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Run every salon like your best one.
          </motion.h1>

          <motion.p
            className="lede mt-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            The operating system for multi-branch salon chains in India — GST billing,
            branch P&L, WhatsApp campaigns, and a manager floor app in one continuous flow.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <Link href="/demo" className="btn-primary">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#workflows" className="btn-secondary">
              See the workflows
            </Link>
          </motion.div>
        </div>

        <div className="pb-10 lg:pb-0">
          <HeroProductMock />
        </div>
      </div>
    </section>
  );
}
