"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroWords } from "@/lib/content";

/** Rotating accent word — fixed slot so the headline never breaks awkwardly. */
export function KineticHeadline({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 3200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const word = heroWords[index];

  return (
    <span
      className={`relative inline-grid align-bottom [grid-template-areas:'slot'] ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Invisible sizer — widest word keeps the slot stable */}
      <span className="invisible col-start-1 row-start-1 [grid-area:slot] font-display" aria-hidden>
        locations
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 [grid-area:slot] font-display text-jade"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
