"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Link2, Rocket, Signal } from "lucide-react";
import Link from "next/link";
import { decisionLoop, sectionCopy } from "@/lib/content";
import { useMarketingTheme } from "@/components/theme/MarketingThemeProvider";

const icons = [Signal, Link2, Compass, Rocket];

export function DecisionPlatformSection() {
  const copy = sectionCopy.decisionPlatform;
  const { cssVars } = useMarketingTheme();

  return (
    <section
      id="platform"
      className="section-pad relative overflow-hidden text-white"
      style={{
        ...cssVars,
        backgroundColor: "var(--mkt-bg)",
        color: "var(--mkt-text)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 80% 20%, var(--mkt-orb-primary), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, var(--mkt-orb-secondary), transparent 50%)`,
        }}
        aria-hidden
      />
      <div className="container-wide relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--mkt-accent)" }}
            >
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.25rem]">{copy.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--mkt-text-muted)" }}>
              {copy.lede}
            </p>
            <Link href="/demo" className="btn-primary mt-8 !bg-jade !text-white hover:!bg-jade-bright">
              See your growth map <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {decisionLoop.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.step}
                  className="group rounded-2xl border p-5 backdrop-blur-sm transition"
                  style={{
                    borderColor: "var(--mkt-card-border)",
                    background: "var(--mkt-card-bg)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl transition"
                      style={{ background: "var(--mkt-badge-bg)", color: "var(--mkt-accent)" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs" style={{ color: "var(--mkt-text-muted)" }}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--mkt-text-muted)" }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
