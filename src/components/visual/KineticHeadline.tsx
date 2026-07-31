"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroHeadline } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

/** Rotating accent word — natural inline width, no reserved gap. */
export function KineticHeadline({ className = "" }: { className?: string }) {
  const words = heroHeadline.words;
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, [reduceMotion, words.length]);

  const word = words[index];

  return (
    <span className={`inline ${className}`} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.32, ease }}
          className="inline font-display text-[var(--mkt-primary)]"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
