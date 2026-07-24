"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { videoStories } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

export function VideoStoriesSection() {
  const [active, setActive] = useState(0);
  const story = videoStories[active];

  return (
    <section className="section-pad bg-ink text-white">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">
          Watch the flow
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Product stories you can watch before the demo.
        </h2>
        <p className="mt-5 max-w-2xl text-mist/70">
          Interactive product films walk the exact demos we run with buyers: desk billing, attendance
          integrity, and owner P&amp;L.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {videoStories.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                  i === active
                    ? "border-jade/50 bg-white/5"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade/20 text-jade-soft">
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
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f2a26]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <p className="text-xs text-mist/70">{story.title}</p>
                <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold">
                  {story.runtime}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <FeatureScreen variant={story.screen} />
                <p className="mt-4 text-sm text-mist/70">
                  Takeaway: <span className="text-jade-soft">{story.takeaway}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
