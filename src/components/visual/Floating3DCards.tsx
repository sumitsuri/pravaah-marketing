"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroFloatingCards } from "@/lib/content";

/** Premium 3D-perspective floating metric cards for the hero. */
export function Floating3DCards() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto h-[220px] w-full max-w-lg md:h-[260px] md:max-w-xl" style={{ perspective: "1200px" }}>
      <div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-jade/20 via-transparent to-amber/10 blur-3xl"
        aria-hidden
      />
      {heroFloatingCards.map((card, i) => (
        <motion.div
          key={card.label}
          className="glass-card absolute w-[62%] max-w-[240px] rounded-2xl border border-white/60 p-4 shadow-premium md:p-5"
          style={{
            transformStyle: "preserve-3d",
            top: `${12 + i * 22}%`,
            left: i === 1 ? "38%" : i === 2 ? "8%" : "52%",
            zIndex: 3 - i,
            rotateX: reduceMotion ? 0 : card.tilt * 0.4,
            rotateY: reduceMotion ? 0 : card.tilt,
          }}
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={
            reduceMotion
              ? { opacity: 1, y: 0, scale: 1 }
              : {
                  opacity: 1,
                  y: [0, -8, 0],
                  scale: 1,
                  rotateY: [card.tilt, card.tilt + 3, card.tilt],
                  rotateX: [card.tilt * 0.4, card.tilt * 0.4 - 2, card.tilt * 0.4],
                }
          }
          transition={{
            opacity: { delay: 0.5 + card.delay, duration: 0.7 },
            y: { delay: 0.5 + card.delay, duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-jade">{card.label}</p>
          <p className="mt-1 font-display text-2xl text-ink md:text-3xl">{card.value}</p>
          <p className="mt-1 text-[11px] text-ink-mute">{card.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
