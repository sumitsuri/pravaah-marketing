"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  BookOpen,
  LayoutDashboard,
  Megaphone,
  Users,
  Wallet,
} from "lucide-react";
import { agentFlowGraphLayout, agentFlowSteps } from "@/lib/content";
import { AgentFlowMobileRail } from "@/components/visual/AgentFlowMobileRail";

const agentIcons = {
  signal: Activity,
  finance: Wallet,
  people: Users,
  growth: Megaphone,
  coach: BookOpen,
  owner: LayoutDashboard,
} as const;

const DEPTH = [0, 28, 14, 42, 20, 56] as const;

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

/** Cinematic 3D insight path — perspective stage, parallax, glowing energy flow. */
export function AgentFlowGraph({ activeIndex, onSelect }: Props) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [-3, 3]), { stiffness: 120, damping: 22 });

  const nodes = useMemo(
    () =>
      agentFlowGraphLayout.map((layout, i) => ({
        ...layout,
        step: agentFlowSteps[i],
        depth: DEPTH[i] ?? 0,
        Icon: layout.id === "owner" ? LayoutDashboard : agentIcons[agentFlowSteps[i].agentId],
      })),
    [],
  );

  const points = nodes.map((n) => ({ x: n.x * 10, y: n.y * 4 }));
  const pathD = buildPath(points);
  const activeNode = nodes[activeIndex];

  function onPointerMove(e: React.PointerEvent) {
    if (reduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="relative w-full">
      {!reduceMotion && (
        <div className="connected-story-particles pointer-events-none absolute inset-0 hidden lg:block" aria-hidden />
      )}

      <div
        ref={stageRef}
        className="connected-story-stage relative hidden min-h-[340px] overflow-visible px-2 lg:block xl:min-h-[380px] xl:px-4"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <motion.div
          className="connected-story-stage__inner absolute inset-0"
          style={
            reduceMotion
              ? undefined
              : { rotateX, rotateY, transformStyle: "preserve-3d" }
          }
        >
          <svg
            viewBox="0 0 1000 220"
            className="absolute inset-0 h-full w-full drop-shadow-[0_0_40px_var(--mkt-accent-glow)]"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--mkt-edge)" />
                <stop offset="55%" stopColor="var(--mkt-accent-soft)" />
                <stop offset="100%" stopColor="var(--mkt-edge-active)" />
              </linearGradient>
              <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={pathD}
              fill="none"
              stroke="var(--mkt-edge)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />

            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#flowGlow)"
              initial={{ pathLength: 0, opacity: 0.6 }}
              animate={{
                pathLength: (activeIndex + 1) / nodes.length,
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                pathLength: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {!reduceMotion && (
              <motion.path
                d={pathD}
                fill="none"
                stroke="var(--mkt-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 24"
                animate={{ strokeDashoffset: [0, -64] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                opacity="0.85"
              />
            )}
          </svg>

          {!reduceMotion && activeNode && (
            <motion.div
              className="connected-story-orb pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
              animate={{
                left: `${activeNode.x}%`,
                top: `${activeNode.y}%`,
                scale: [1, 1.35, 1],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          )}

          <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {nodes.map((node, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => onSelect(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkt-accent)]"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: `translate(-50%, -50%) translateZ(${node.depth}px)`,
                  }}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`${node.shortLabel}: ${node.step.title}`}
                >
                  <motion.div
                    animate={
                      isActive && !reduceMotion
                        ? { scale: [1, 1.08, 1], rotateY: [0, 6, 0] }
                        : { scale: isPast ? 1.02 : 1, rotateY: 0 }
                    }
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                    className={`connected-story-node mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 sm:h-16 sm:w-16 ${
                      isActive
                        ? "connected-story-node--active agent-pulse-ring border-[var(--mkt-accent)] bg-[var(--mkt-node-active)] text-[var(--mkt-accent)]"
                        : isPast
                          ? "border-[var(--mkt-accent)]/55 bg-[var(--mkt-node-active)]/70 text-[var(--mkt-accent)]"
                          : "border-[var(--mkt-card-border)] bg-[var(--mkt-node-idle)] text-[var(--mkt-text-muted)]"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <node.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </motion.div>
                  <p
                    className={`mt-2.5 text-xs font-semibold tracking-wide ${isActive ? "text-[var(--mkt-text)]" : "text-[var(--mkt-text-muted)]"}`}
                  >
                    {node.shortLabel}
                  </p>
                  {isActive && (
                    <motion.span
                      layoutId="node-step-badge"
                      className="mt-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                      style={{
                        background: "var(--mkt-badge-bg)",
                        color: "var(--mkt-accent)",
                        border: "1px solid var(--mkt-badge-border)",
                      }}
                    >
                      Live
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-[4%] flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mkt-text-muted)]">
          <span className="connected-story-time-pill">Overnight</span>
        </div>
        <div className="absolute bottom-0 right-[2%] flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mkt-accent)]">
          <span className="connected-story-time-pill connected-story-time-pill--active">Your morning</span>
        </div>
      </div>

      <AgentFlowMobileRail nodes={nodes} activeIndex={activeIndex} onSelect={onSelect} />
    </div>
  );
}
