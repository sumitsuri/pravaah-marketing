"use client";

import { motion } from "framer-motion";

export function HeroProductMock() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-jade/10 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-ink/10 bg-white shadow-[0_30px_80px_-40px_rgba(11,31,28,0.45)]">
        <div className="flex items-center gap-2 border-b border-ink/8 bg-mist-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <span className="ml-3 text-xs font-medium text-ink-mute">CEO · Chain overview</span>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Today", value: "₹2.4L" },
                { label: "Branches", value: "6 live" },
                { label: "Utilisation", value: "78%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-mist-soft p-3">
                  <p className="text-[10px] uppercase tracking-wider text-ink-mute">{stat.label}</p>
                  <p className="mt-1 font-display text-xl text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-ink/8 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Branch revenue flow</p>
                <p className="text-xs text-jade">Live</p>
              </div>
              <svg viewBox="0 0 320 110" className="h-28 w-full" aria-hidden>
                <defs>
                  <linearGradient id="flowFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7BC4B2" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#7BC4B2" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C40,70 60,40 100,48 C140,56 150,90 190,72 C230,54 250,30 320,38 L320,110 L0,110 Z"
                  fill="url(#flowFill)"
                />
                <path
                  d="M0,80 C40,70 60,40 100,48 C140,56 150,90 190,72 C230,54 250,30 320,38"
                  fill="none"
                  stroke="#0F6B5C"
                  strokeWidth="2.5"
                  className="flow-path"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-mute">
              Market Pulse
            </p>
            {[
              { name: "Indiranagar", rank: "#1", score: "92" },
              { name: "Whitefield", rank: "#2", score: "86" },
              { name: "HSR Layout", rank: "#4", score: "71" },
            ].map((row, i) => (
              <motion.div
                key={row.name}
                className="flex items-center justify-between rounded-xl bg-mist-soft px-3 py-3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.12 }}
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{row.name}</p>
                  <p className="text-xs text-ink-mute">Peer rank {row.rank}</p>
                </div>
                <span className="font-display text-lg text-jade">{row.score}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-8 -left-2 w-[78%] overflow-hidden rounded-[1.25rem] border border-ink/10 bg-ink text-white shadow-xl md:-left-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <div className="border-b border-white/10 px-4 py-2 text-[11px] text-jade-soft">
          Manager PWA · Walk-in
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Hair spa · Priya</span>
            <span>₹1,499</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>GST (CGST+SGST)</span>
            <span>₹269.82</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="rounded-lg bg-jade px-3 py-1.5 text-xs font-semibold">UPI paid</span>
            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs">WA receipt queued</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
