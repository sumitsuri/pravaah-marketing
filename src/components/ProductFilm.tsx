"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { filmScenes } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";

/** Cinematic product “film” — auto-advancing UI scenes (leader-site product tour feel). */
export function ProductFilm({ autoPlay = true }: { autoPlay?: boolean }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const scene = filmScenes[index];

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % filmScenes.length);
    }, 4200);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-[0_40px_100px_-50px_rgba(11,31,28,0.7)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-jade text-white"
            aria-label={playing ? "Pause film" : "Play film"}
          >
            <Play className={`h-3.5 w-3.5 ${playing ? "opacity-40" : ""}`} />
          </button>
          <div>
            <p className="text-xs font-semibold text-white">Pravaah product film</p>
            <p className="text-[11px] text-mist/60">
              Scene {index + 1}/{filmScenes.length} · {scene.title}
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          {filmScenes.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setIndex(i);
                setPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-jade" : "w-3 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`Show ${s.title}`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[280px] bg-gradient-to-br from-ink via-ink-soft to-[#0a2f28] p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col justify-end"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-soft">
                {scene.title}
              </p>
              <p className="mt-3 max-w-md font-display text-3xl leading-tight text-white md:text-4xl">
                {scene.caption}
              </p>
              <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={`${scene.id}-bar`}
                  className="h-full bg-jade"
                  initial={{ width: "0%" }}
                  animate={{ width: playing ? "100%" : "0%" }}
                  transition={{ duration: playing ? 4.2 : 0, ease: "linear" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-mist-soft p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${scene.id}-ui`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <FeatureScreen variant={scene.screen} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
