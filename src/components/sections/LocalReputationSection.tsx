"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageSquareHeart, Star } from "lucide-react";
import { brand, localReputationLoop, sectionCopy } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

const icons = [MessageSquareHeart, Star, MapPin];

export function LocalReputationSection() {
  const copy = sectionCopy.localReputation;

  return (
    <section id="local-reputation" className="section-pad relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(20,143,122,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(255,200,100,0.12), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">{copy.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.08] sm:text-4xl md:text-5xl">{copy.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/75 md:text-lg">{copy.lede}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          {localReputationLoop.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-jade/20 text-jade-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-mist/50">{step.step}</span>
                </div>
                <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/70">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div>
            <FeatureScreen variant="localSpotlight" elevated />
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/products/local-spotlight"
                className="inline-flex items-center gap-2 text-sm font-semibold text-jade-soft hover:text-white"
              >
                Local Spotlight details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <FeatureScreen variant="guestVoice" elevated />
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/products/reviews"
                className="inline-flex items-center gap-2 text-sm font-semibold text-jade-soft hover:text-white"
              >
                Reviews & Customer voice <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary !bg-jade shadow-glow-jade">
            {brand.cta.primary} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products/reviews"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            See review flow
          </Link>
        </div>
      </div>
    </section>
  );
}
