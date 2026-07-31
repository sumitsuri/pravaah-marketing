"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { brand, filmScenes, sectionCopy } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { Scene3DWrapper } from "@/components/visual/Scene3DWrapper";

/** Cinematic product film — auto-advancing UI scenes with 3D depth and progress rail. */
export function ProductFilm({ autoPlay = true }: { autoPlay?: boolean }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const reduceMotion = useReducedMotion();
  const scene = filmScenes[index];

  useEffect(() => {
    if (!playing || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % filmScenes.length);
    }, 4800);
    return () => clearInterval(id);
  }, [playing, reduceMotion]);

  return (
    <div className="group relative">
      {/* Glow halo */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-jade/25 via-jade-soft/15 to-amber/10 opacity-70 blur-2xl transition duration-700 group-hover:opacity-100"
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-premium-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Chrome bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-ink-soft/80 px-4 py-3 backdrop-blur md:px-5">
          <div className="flex items-center gap-3">
            <div className="hidden gap-1.5 sm:flex" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jade text-white shadow-glow-jade transition hover:bg-jade-bright"
              aria-label={playing ? "Pause film" : "Play film"}
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>
            <div>
              <p className="text-xs font-semibold text-white">{brand.name} · {sectionCopy.film.title}</p>
              <p className="text-[11px] text-mist/55">
                Scene {index + 1}/{filmScenes.length} · {scene.title}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {filmScenes.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setIndex(i);
                  setPlaying(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full"
                aria-label={`Show ${s.title}`}
                aria-current={i === index ? "step" : undefined}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-jade" : "w-3 bg-white/25 hover:bg-white/45"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* Narrative panel — video-like gradient motion */}
          <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-ink via-ink-soft to-[#0a2f28] p-6 md:min-h-[320px] md:p-8">
            <div className="pointer-events-none absolute inset-0 film-shimmer opacity-40" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col justify-end"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-soft">{scene.title}</p>
                <p className="mt-3 max-w-md font-display text-2xl leading-tight text-white md:text-4xl">
                  {scene.caption}
                </p>
                <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={`${scene.id}-bar`}
                    className="h-full rounded-full bg-gradient-to-r from-jade to-jade-soft"
                    initial={{ width: "0%" }}
                    animate={{ width: playing && !reduceMotion ? "100%" : `${((index + 1) / filmScenes.length) * 100}%` }}
                    transition={{
                      duration: playing && !reduceMotion ? 4.8 : 0.4,
                      ease: playing ? "linear" : [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product UI — 3D tilt */}
          <div className="relative bg-gradient-to-br from-mist-soft to-white p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${scene.id}-ui`}
                initial={{ opacity: 0, scale: 0.96, rotateY: -4 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.98, rotateY: 4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Scene3DWrapper depth={0.6}>
                  <FeatureScreen variant={scene.screen} elevated />
                </Scene3DWrapper>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
