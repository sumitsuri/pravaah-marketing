"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { brand, heroHeadline, heroStats } from "@/lib/content";
import { MeshGradient } from "@/components/visual/MeshGradient";
import { KineticHeadline } from "@/components/visual/KineticHeadline";
import { HeroVisual } from "@/components/visual/HeroVisual";
import { ProductFilm } from "@/components/ProductFilm";
import { GrowthDelta } from "@/components/visual/GrowthDelta";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <MeshGradient />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.28]" aria-hidden />

      <div className="container-wide relative px-5 pb-10 pt-6 md:px-8 lg:px-12 lg:pb-14 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="max-w-xl text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-jade/20 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-jade shadow-sm backdrop-blur-md"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {brand.productLabel}
            </motion.div>

            <motion.h1
              className="hero-headline mt-6 font-display tracking-[-0.02em] sm:mt-7"
              style={{ color: "var(--mkt-site-text)" }}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <span
                className="hero-headline__prefix block md:inline md:after:content-['_']"
                style={{ color: "var(--mkt-site-text-muted)" }}
              >
                {heroHeadline.prefix}
              </span>
              <span className="hero-headline__accent block md:inline">
                <KineticHeadline />
              </span>
              <span className="hero-headline__suffix block md:mt-1 md:block">
                {heroHeadline.suffix}
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-mute md:text-[1.05rem] lg:mx-0"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              {brand.mission}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/demo" className="btn-primary shadow-glow-jade">
                Book a growth walkthrough
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link href="/#film" className="btn-secondary">
                <Play className="h-4 w-4" /> Watch product film
              </Link>
            </motion.div>

            {/* Inline proof stats — visible without scrolling */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-3 xl:grid-cols-4 xl:gap-4"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-white/60 px-3 py-3 backdrop-blur-sm sm:py-3.5 lg:text-left"
                  style={{ borderColor: "var(--mkt-site-border)" }}
                >
                  <GrowthDelta metric={stat} size="sm" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product visual — always visible on sm+ */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Product film */}
        <motion.div
          id="film"
          className="mx-auto mt-14 max-w-6xl scroll-mt-28 lg:mt-20"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 text-center lg:text-left">
            <p className="eyebrow">See it in action</p>
            <p className="mt-2 font-display text-2xl text-ink md:text-3xl">The product film</p>
          </div>
          <ProductFilm />
        </motion.div>
      </div>
    </section>
  );
}
