"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

export type GrowthMetric = {
  label: string;
  before: string;
  after: string;
  delta: string;
  /** When true, higher/newer is better (revenue, rank). When false, lower is better (time, cost). */
  improved?: boolean;
};

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, { before: string; after: string; delta: string; label: string }> = {
  sm: { before: "text-xs sm:text-sm", after: "text-base sm:text-lg", delta: "text-[10px] px-1.5 py-0.5", label: "text-[10px] leading-snug" },
  md: { before: "text-sm sm:text-base", after: "text-xl sm:text-2xl", delta: "text-xs px-2 py-0.5", label: "text-xs" },
  lg: { before: "text-base sm:text-lg", after: "text-3xl sm:text-4xl md:text-5xl", delta: "text-sm px-2.5 py-1", label: "text-sm" },
};

/** Before → after with delta badge — makes progress unmistakable. */
export function GrowthDelta({
  metric,
  size = "md",
  className = "",
  dark = false,
}: {
  metric: GrowthMetric;
  size?: Size;
  className?: string;
  dark?: boolean;
}) {
  const s = sizeStyles[size];
  const positive = metric.improved !== false;
  const DeltaIcon = positive ? TrendingUp : TrendingDown;

  return (
    <div className={className}>
      <p
        className={`font-medium uppercase tracking-wider ${s.label}`}
        style={{ color: dark ? "var(--mkt-text-muted)" : "var(--mkt-site-text-muted)" }}
      >
        {metric.label}
      </p>
      <div className="mt-2 flex flex-wrap items-end gap-x-2 gap-y-1">
        <span
          className={`font-display line-through opacity-45 ${s.before}`}
          style={{ color: dark ? "var(--mkt-text-muted)" : "var(--mkt-site-text-muted)" }}
        >
          {metric.before}
        </span>
        <ArrowRight
          className="mb-1 h-3.5 w-3.5 shrink-0"
          style={{ color: dark ? "var(--mkt-accent)" : "var(--mkt-primary)" }}
          aria-hidden
        />
        <span
          className={`font-display font-semibold ${s.after}`}
          style={{ color: dark ? "var(--mkt-text)" : "var(--mkt-site-text)" }}
        >
          {metric.after}
        </span>
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className={`mb-0.5 inline-flex items-center gap-0.5 rounded-full font-semibold ${s.delta}`}
          style={{
            background: dark
              ? "color-mix(in srgb, var(--mkt-accent) 25%, transparent)"
              : "color-mix(in srgb, var(--mkt-primary) 15%, transparent)",
            color: dark ? "var(--mkt-accent)" : "var(--mkt-primary)",
          }}
        >
          <DeltaIcon className="h-3 w-3" />
          {metric.delta}
        </motion.span>
      </div>
    </div>
  );
}
