"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

import { brand } from "@/lib/content";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-flow-hero pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Growth walkthrough</p>
            <h1 className="display mt-3">See your decision platform in thirty minutes.</h1>
            <p className="lede mt-5">
              We&apos;ll walk Market Pulse, branch P&L, WhatsApp win-backs, and floor signals using a live
              multi-branch demo — the same growth map we use with operators like you.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink-mute">
              {[
                "Built for multi-location operators who want growth decisions, not dashboards",
                "No marketplace pitch — your brand keeps every booking",
                "Clear path on Starter vs Growth vs Enterprise",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,31,28,0.4)] md:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl text-ink">You&apos;re on the list.</p>
                <p className="mt-3 text-sm text-ink-mute">
                  We&apos;ll reach out shortly to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Full name
                  </label>
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Work email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    name="phone"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Number of branches
                  </label>
                  <select
                    name="branches"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    defaultValue="3-5"
                  >
                    <option value="1-2">1–2</option>
                    <option value="3-5">3–5</option>
                    <option value="6-15">6–15</option>
                    <option value="16+">16+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    What should we focus on?
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    placeholder="P&L, attendance, WhatsApp campaigns…"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Request demo
                </button>
                <p className="text-center text-xs text-ink-mute">
                  Or email{" "}
                  <a className="text-jade underline" href={`mailto:${brand.email}`}>
                    {brand.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
