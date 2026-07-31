"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { videoStories } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { Scene3DWrapper } from "@/components/visual/Scene3DWrapper";

export function VideoStoriesSection() {
  const [active, setActive] = useState(0);
  const story = videoStories[active];

  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(15,107,92,0.4), transparent 45%), radial-gradient(circle at 80% 20%, rgba(196,130,58,0.12), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">Customer stories</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          See growth decisions in action — before you book.
        </h2>
        <p className="mt-5 max-w-2xl text-mist/70">
          Cinematic product walkthroughs of the exact flows we run with buyers: desk billing, attendance
          integrity, and owner P&amp;L — the moments that drive growth.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {videoStories.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                  i === active
                    ? "border-jade/50 bg-white/5 shadow-glow-jade"
                    : "border-white/10 hover:border-white/25"
                }`}
                whileHover={{ x: i === active ? 0 : 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade/20 text-jade-soft ring-1 ring-jade/30">
                  <Play className="h-4 w-4" />
                </span>
                <span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-jade-soft">
                    {item.persona} · {item.runtime}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white md:text-base">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs text-mist/60">{item.takeaway}</span>
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 16, rotateY: -3 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -8, rotateY: 3 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f2a26] shadow-premium-lg"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="film-shimmer pointer-events-none absolute inset-0 opacity-30" aria-hidden />
                <p className="relative text-xs text-mist/70">{story.title}</p>
                <span className="relative rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold">
                  ▶ {story.runtime}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <Scene3DWrapper depth={0.5}>
                  <FeatureScreen variant={story.screen} elevated />
                </Scene3DWrapper>
                <p className="mt-4 text-sm text-mist/70">
                  Growth takeaway: <span className="font-medium text-jade-soft">{story.takeaway}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
