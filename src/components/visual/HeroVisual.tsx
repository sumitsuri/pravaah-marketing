"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { heroVisualMetrics } from "@/lib/content";

/** Hero visual — 3D-tilt product preview with before/after metric chips. */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 10);
    rotateX.set(-y * 8);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const chipPositions = [
    { top: "4%", right: "0%", left: "auto" },
    { top: "42%", right: "-2%", left: "auto" },
    { top: "78%", right: "auto", left: "0%" },
  ];

  return (
    <div className="w-full">
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-md px-1 sm:max-w-lg lg:max-w-none lg:px-0"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: "1400px" }}
      >
        <div
          className="pointer-events-none absolute -inset-4 rounded-[2.5rem] blur-3xl sm:-inset-6"
          style={{
            background: `linear-gradient(to bottom right, color-mix(in srgb, var(--mkt-primary) 25%, transparent), color-mix(in srgb, var(--mkt-primary-soft) 10%, transparent))`,
          }}
          aria-hidden
        />

        {/* Floating chips — desktop / large tablet only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {heroVisualMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="glass-card absolute z-20 max-w-[10rem] rounded-xl px-3 py-2 shadow-premium xl:max-w-none xl:min-w-[9.5rem] xl:px-3.5 xl:py-2.5"
              style={chipPositions[i]}
              initial={{ opacity: 0, scale: 0.9, x: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-ink-mute">{metric.label}</p>
              <div className="mt-1 flex flex-wrap items-center gap-1">
                <span className="text-xs text-ink-mute line-through opacity-45">{metric.before}</span>
                <ArrowRight className="h-2.5 w-2.5 text-[var(--mkt-primary)]" aria-hidden />
                <span className="text-sm font-semibold text-[var(--mkt-primary)]">{metric.after}</span>
                <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold text-[var(--mkt-primary)]" style={{ background: "color-mix(in srgb, var(--mkt-primary) 15%, transparent)" }}>
                  <TrendingUp className="h-2.5 w-2.5" />
                  {metric.delta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 rounded-[1.25rem] border bg-white/90 p-1.5 shadow-premium-lg backdrop-blur-sm sm:rounded-[1.35rem] sm:p-2"
          style={{
            rotateX: reduceMotion ? 0 : rotateX,
            rotateY: reduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
            borderColor: "var(--mkt-site-border)",
          }}
        >
          <div className="overflow-hidden rounded-[1rem] ring-1 ring-ink/5 sm:rounded-[1.1rem]">
            <FeatureScreen variant="pulse" elevated />
          </div>
        </motion.div>
      </div>

      {/* Metric chips below product on mobile / tablet */}
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:hidden">
        {heroVisualMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border bg-white/80 px-3 py-2.5 backdrop-blur-sm"
            style={{ borderColor: "var(--mkt-site-border)" }}
          >
            <p className="text-[10px] font-medium uppercase tracking-wider text-ink-mute">{metric.label}</p>
            <div className="mt-1 flex flex-wrap items-center gap-1">
              <span className="text-xs text-ink-mute line-through opacity-45">{metric.before}</span>
              <ArrowRight className="h-2.5 w-2.5 shrink-0 text-[var(--mkt-primary)]" aria-hidden />
              <span className="text-sm font-semibold text-[var(--mkt-primary)]">{metric.after}</span>
              <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold text-[var(--mkt-primary)]" style={{ background: "color-mix(in srgb, var(--mkt-primary) 15%, transparent)" }}>
                <TrendingUp className="h-2.5 w-2.5" />
                {metric.delta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
