"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { agentFlowOutcome, agentFlowSteps, sectionCopy } from "@/lib/content";
import { GrowthDelta } from "@/components/visual/GrowthDelta";
import { AgentFlowGraph } from "@/components/visual/AgentFlowGraph";
import { useMarketingTheme } from "@/components/theme/MarketingThemeProvider";

const ease = [0.22, 1, 0.36, 1] as const;
const STEP_MS = 4500;

export function AgentFlowSection() {
  const copy = sectionCopy.aiAgents;
  const { cssVars, themeId } = useMarketingTheme();
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveStep((s) => (s + 1) % agentFlowSteps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = agentFlowSteps[activeStep];
  const isDarkSection = themeId !== "light-paper";

  return (
    <section
      id="ai-agents"
      className="section-pad relative overflow-x-clip lg:overflow-hidden"
      style={{
        ...cssVars,
        backgroundColor: "var(--mkt-bg)",
        color: "var(--mkt-text)",
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full blur-[100px] animate-flow-drift"
          style={{ background: "var(--mkt-orb-primary)" }}
        />
        <div
          className="absolute -right-24 bottom-10 h-96 w-96 rounded-full blur-[120px] animate-flow-drift [animation-delay:-3s]"
          style={{ background: "var(--mkt-orb-secondary)" }}
        />
        <div
          className="agent-grid absolute inset-0 opacity-[0.35]"
          style={{ ["--mkt-grid" as string]: "var(--mkt-grid)" }}
        />
      </div>

      <div className="container-wide relative">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
            style={{
              borderColor: "var(--mkt-badge-border)",
              background: "var(--mkt-badge-bg)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: "var(--mkt-accent)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--mkt-accent)" }}
              />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--mkt-accent)" }}
            >
              {copy.eyebrow}
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--mkt-text-muted)" }}>
            {copy.lede}
          </p>
        </div>

        {/* Use case header */}
        <div
          className="connected-story-shell connected-story-shell--scroll mt-10 rounded-2xl border p-4 sm:mt-12 sm:p-6 md:p-8"
          style={{
            borderColor: "var(--mkt-card-border)",
            background: "var(--mkt-card-bg)",
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--mkt-accent)" }}>
                {copy.storyEyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl">{copy.useCaseTitle}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--mkt-text-muted)" }}>
                {copy.useCaseLede}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5" style={{ color: "var(--mkt-text-muted)" }}>
                <Moon className="h-3.5 w-3.5" /> {copy.graphStart}
              </span>
              <ArrowRight className="h-3.5 w-3.5" style={{ color: "var(--mkt-accent)" }} />
              <span className="flex items-center gap-1.5" style={{ color: "var(--mkt-accent)" }}>
                <Sun className="h-3.5 w-3.5" /> {copy.graphEnd}
              </span>
            </div>
          </div>

          {/* Connected graph */}
          <div className="relative mt-10 min-w-0">
            <AgentFlowGraph activeIndex={activeStep} onSelect={setActiveStep} />
          </div>

          {/* Plain-language detail card — replaces dev console */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="mt-8 rounded-xl border p-5 md:p-6 connected-story-detail"
              style={{
                borderColor: "var(--mkt-accent)",
                background: "var(--mkt-node-active)",
              }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    background: "var(--mkt-badge-bg)",
                    color: "var(--mkt-accent)",
                    border: "1px solid var(--mkt-badge-border)",
                  }}
                >
                  {current.agent}
                </span>
                <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--mkt-text-muted)" }}>
                  {copy.detailEyebrow}
                </span>
              </div>
              <h4 className="mt-3 font-display text-xl md:text-2xl">{current.title}</h4>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed md:text-base" style={{ color: "var(--mkt-text-muted)" }}>
                {current.detail}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--mkt-accent)" }}>
                <ArrowRight className="h-4 w-4" />
                {current.insight}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Step dots for manual navigation */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {agentFlowSteps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(i)}
                className="flex h-11 w-11 items-center justify-center rounded-full"
                aria-label={`Go to step ${i + 1}: ${step.title}`}
                aria-current={i === activeStep ? "step" : undefined}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${i === activeStep ? "w-6" : "w-2"}`}
                  style={{
                    background: i === activeStep ? "var(--mkt-accent)" : "var(--mkt-edge)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <motion.div
          className="mt-10 rounded-2xl border p-6 md:p-8"
          style={{
            borderColor: "var(--mkt-card-border)",
            background: "var(--mkt-card-bg)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--mkt-accent)" }}>
                Outcome after 30 days
              </p>
              <p className="mt-2 font-display text-xl md:text-2xl">Koramangala back on track — progress you can see</p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {agentFlowOutcome.map((metric) => (
              <GrowthDelta key={metric.label} metric={metric} size="md" dark={isDarkSection} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
