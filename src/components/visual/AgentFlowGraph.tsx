"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BookOpen,
  LayoutDashboard,
  Megaphone,
  Users,
  Wallet,
} from "lucide-react";
import { agentFlowGraphLayout, agentFlowSteps } from "@/lib/content";

const agentIcons = {
  signal: Activity,
  finance: Wallet,
  people: Users,
  growth: Megaphone,
  coach: BookOpen,
  owner: LayoutDashboard,
} as const;

function buildPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` Q ${cpx} ${prev.y}, ${cpx} ${(prev.y + curr.y) / 2}`;
    d += ` Q ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

type Props = {
  activeIndex: number;
  onSelect: (index: number) => void;
};

/** Connected graph — business-friendly flow, not a dev console. */
export function AgentFlowGraph({ activeIndex, onSelect }: Props) {
  const reduceMotion = useReducedMotion();

  const nodes = useMemo(
    () =>
      agentFlowGraphLayout.map((layout, i) => ({
        ...layout,
        step: agentFlowSteps[i],
        Icon: layout.id === "owner" ? LayoutDashboard : agentIcons[agentFlowSteps[i].agentId],
      })),
    [],
  );

  const points = nodes.map((n) => ({ x: n.x * 10, y: n.y * 4 }));
  const pathD = buildPath(points);

  return (
    <div className="relative w-full">
      {/* Desktop / laptop graph */}
      <div className="relative hidden min-h-[300px] lg:block xl:min-h-[320px]">
        <svg
          viewBox="0 0 1000 220"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--mkt-edge)" />
              <stop offset="100%" stopColor="var(--mkt-edge-active)" />
            </linearGradient>
          </defs>

          <path d={pathD} fill="none" stroke="var(--mkt-edge)" strokeWidth="3" strokeLinecap="round" />

          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#flowGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: (activeIndex + 1) / nodes.length }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        <div className="absolute inset-0">
          {nodes.map((node, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => onSelect(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkt-accent)]"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-current={isActive ? "step" : undefined}
                aria-label={`${node.shortLabel}: ${node.step.title}`}
              >
                <motion.div
                  animate={isActive && !reduceMotion ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition sm:h-14 sm:w-14 ${
                    isActive
                      ? "border-[var(--mkt-accent)] bg-[var(--mkt-node-active)] text-[var(--mkt-accent)] shadow-[0_0_24px_-4px_var(--mkt-accent-glow)]"
                      : isPast
                        ? "border-[var(--mkt-accent)]/50 bg-[var(--mkt-node-active)]/60 text-[var(--mkt-accent)]"
                        : "border-[var(--mkt-card-border)] bg-[var(--mkt-node-idle)] text-[var(--mkt-text-muted)]"
                  }`}
                >
                  <node.Icon className="h-6 w-6" />
                </motion.div>
                <p
                  className={`mt-2 text-xs font-semibold ${isActive ? "text-[var(--mkt-text)]" : "text-[var(--mkt-text-muted)]"}`}
                >
                  {node.shortLabel}
                </p>
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-0 left-[4%] text-[10px] font-semibold uppercase tracking-wider text-[var(--mkt-text-muted)]">
          Overnight
        </div>
        <div className="absolute bottom-0 right-[2%] text-[10px] font-semibold uppercase tracking-wider text-[var(--mkt-accent)]">
          Your morning
        </div>
      </div>

      {/* Mobile + tablet — vertical connected steps */}
      <div className="space-y-0 lg:hidden">
        {nodes.map((node, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          const isLast = i === nodes.length - 1;
          return (
            <div key={node.id} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 transition ${
                    isActive
                      ? "border-[var(--mkt-accent)] bg-[var(--mkt-node-active)] text-[var(--mkt-accent)]"
                      : isPast
                        ? "border-[var(--mkt-accent)]/50 bg-[var(--mkt-node-active)]/60 text-[var(--mkt-accent)]"
                        : "border-[var(--mkt-card-border)] bg-[var(--mkt-node-idle)] text-[var(--mkt-text-muted)]"
                  }`}
                >
                  <node.Icon className="h-5 w-5" />
                </button>
                {!isLast && (
                  <div
                    className={`my-1 min-h-[2rem] w-0.5 flex-1 rounded-full ${
                      isPast ? "bg-[var(--mkt-edge-active)]" : "bg-[var(--mkt-edge)]"
                    }`}
                  />
                )}
              </div>
              <button type="button" onClick={() => onSelect(i)} className={`flex-1 pb-6 text-left ${isActive ? "" : "opacity-70"}`}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--mkt-accent)]">
                  {node.shortLabel}
                </p>
                <p className="mt-1 font-display text-base text-[var(--mkt-text)]">{node.step.title}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
