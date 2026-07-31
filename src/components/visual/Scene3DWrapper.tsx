"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Wraps product mockups with scroll-linked 3D tilt — premium product-led feel. */
export function Scene3DWrapper({
  children,
  className = "",
  depth = 1,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8 * depth, -6 * depth]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5 * depth, 5 * depth]);
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ perspective: "1400px" }}>
      <motion.div
        style={{ rotateX, rotateY, y, transformStyle: "preserve-3d" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
