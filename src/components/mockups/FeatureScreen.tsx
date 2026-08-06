"use client";

import { motion } from "framer-motion";

const screens = {
  walkin: (
    <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-ink-mute">
        <span className="rounded-md bg-jade/15 px-2 py-1 text-jade">1 · Guest</span>
        <span className="rounded-md bg-mist px-2 py-1">2 · Services</span>
        <span className="rounded-md bg-mist px-2 py-1">3 · Pay</span>
      </div>
      <div className="rounded-xl bg-mist-soft p-3">
        <p className="text-[11px] text-ink-mute">Phone</p>
        <p className="font-semibold text-ink">+91 98XXX 41208 · Ananya R.</p>
      </div>
      <div className="space-y-2">
        {[
          ["Keratin treatment", "Riya", "₹4,500"],
          ["Haircut", "Aman", "₹700"],
        ].map(([svc, staff, price]) => (
          <div
            key={svc}
            className="flex items-center justify-between rounded-lg border border-ink/8 px-3 py-2 text-sm"
          >
            <div>
              <p className="font-medium text-ink">{svc}</p>
              <p className="text-xs text-ink-mute">{staff}</p>
            </div>
            <p className="font-semibold">{price}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-jade px-4 py-3 text-center text-sm font-semibold text-white">
        Collect ₹5,200 · GST ready
      </div>
    </div>
  ),
  pnl: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Branch P&L · March
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-mist-soft p-3">
          <p className="text-[11px] text-ink-mute">Revenue</p>
          <p className="font-display text-2xl text-ink">₹18.2L</p>
        </div>
        <div className="rounded-xl bg-mist-soft p-3">
          <p className="text-[11px] text-ink-mute">Net after costs</p>
          <p className="font-display text-2xl text-jade">₹4.6L</p>
        </div>
      </div>
      {[
        ["Salaries", "42%", 42],
        ["Rent", "18%", 18],
        ["Product", "11%", 11],
      ].map(([label, pct, w]) => (
        <div key={label as string}>
          <div className="mb-1 flex justify-between text-xs">
            <span>{label}</span>
            <span className="text-ink-mute">{pct}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-mist">
            <div className="h-full rounded-full bg-jade" style={{ width: `${w}%` }} />
          </div>
        </div>
      ))}
    </div>
  ),
  attendance: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Verified punch</p>
      <div className="flex items-center gap-3 rounded-xl border border-jade/30 bg-jade/5 p-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-jade/20 text-xs font-semibold text-jade">
          SELFIE
        </div>
        <div>
          <p className="font-semibold text-ink">Riya Sharma · In</p>
          <p className="text-xs text-ink-mute">09:28 · 42m from salon · INSIDE</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          ["Aman", "09:31", "Late"],
          ["Priya", "09:12", "On time"],
          ["Kabir", "—", "Missing"],
        ].map(([name, time, status]) => (
          <div
            key={name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-lg bg-mist-soft px-3 py-2 text-sm"
          >
            <span className="font-medium">{name}</span>
            <span className="text-ink-mute">{time}</span>
            <span className={status === "Late" || status === "Missing" ? "text-amber" : "text-jade"}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
  campaign: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        WhatsApp campaign
      </p>
      <div className="rounded-xl border border-ink/8 p-3">
        <p className="text-sm font-semibold text-ink">Win-back · 45–90 days</p>
        <p className="mt-1 text-xs leading-relaxed text-ink-mute">
          Hi {"{{name}}"}, missing your glow? Book this week and enjoy 15% on colour services.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          ["Audience", "184"],
          ["Opted in", "171"],
          ["Est. reach", "93%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-mist-soft py-2">
            <p className="text-[10px] text-ink-mute">{k}</p>
            <p className="font-display text-lg text-ink">{v}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-jade py-2.5 text-center text-sm font-semibold text-white">
        Send campaign
      </div>
    </div>
  ),
  pulse: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Market Pulse</p>
      {[
        { name: "Indiranagar", rank: "#1", score: "92", note: "Peer top quartile" },
        { name: "Whitefield", rank: "#2", score: "86", note: "Stable" },
        { name: "HSR Layout", rank: "#4", score: "71", note: "Playbook: weekday colour" },
      ].map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between rounded-xl bg-mist-soft px-3 py-3"
        >
          <div>
            <p className="text-sm font-semibold text-ink">{row.name}</p>
            <p className="text-xs text-ink-mute">
              {row.rank} · {row.note}
            </p>
          </div>
          <span className="font-display text-lg text-jade">{row.score}</span>
        </div>
      ))}
    </div>
  ),
  inventory: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Branch inventory
      </p>
      {[
        ["Keratin kit", "14", "OK"],
        ["Colour — ash blonde", "3", "Low"],
        ["Shampoo retail", "22", "OK"],
        ["Developer 20vol", "1", "Critical"],
      ].map(([name, qty, status]) => (
        <div
          key={name}
          className="flex items-center justify-between rounded-lg border border-ink/8 px-3 py-2 text-sm"
        >
          <span className="font-medium">{name}</span>
          <span className="text-ink-mute">{qty} units</span>
          <span className={status === "OK" ? "text-jade" : "text-amber"}>{status}</span>
        </div>
      ))}
    </div>
  ),
  localSpotlight: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Local Spotlight</p>
      <div className="rounded-xl border border-jade/30 bg-jade/5 p-3">
        <p className="text-[11px] text-ink-mute">Local Visibility Score</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="font-display text-3xl text-jade">78</p>
          <span className="rounded-full bg-jade/15 px-2 py-0.5 text-[10px] font-semibold text-jade">Good</span>
        </div>
      </div>
      {[
        ["Google rating", "4.3 · 186 reviews"],
        ["Est. local rank", "#4 for “salon near me”"],
        ["GBP completeness", "82% · add services"],
        ["Rival · 1.2 km", "4.6★ · 240 reviews"],
      ].map(([label, value]) => (
        <div key={label} className="flex items-center justify-between rounded-lg bg-mist-soft px-3 py-2 text-sm">
          <span className="text-ink-mute">{label}</span>
          <span className="font-medium text-ink">{value}</span>
        </div>
      ))}
      <div className="rounded-xl bg-amber/10 px-3 py-2 text-xs text-amber">
        Playbook: grow reviews toward rival median
      </div>
    </div>
  ),
  guestVoice: (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Customer voice · 30 days</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-mist-soft p-3">
          <p className="text-[10px] text-ink-mute">Avg rating</p>
          <p className="font-display text-2xl text-jade">4.6★</p>
        </div>
        <div className="rounded-xl bg-mist-soft p-3">
          <p className="text-[10px] text-ink-mute">Reviews</p>
          <p className="font-display text-2xl text-ink">142</p>
        </div>
      </div>
      {[
        ["Service", "4.7"],
        ["Staff", "4.8"],
        ["Ambience", "4.4"],
        ["Value", "4.3"],
      ].map(([cat, score]) => (
        <div key={cat} className="flex items-center justify-between text-sm">
          <span className="text-ink-mute">{cat}</span>
          <span className="font-semibold text-ink">{score}</span>
        </div>
      ))}
      <div className="rounded-xl border border-amber/30 bg-amber/5 px-3 py-2 text-xs">
        <span className="font-semibold text-amber">3 recoveries</span>
        <span className="text-ink-mute"> · 1–3★ awaiting follow-up</span>
      </div>
    </div>
  ),
  reviewQr: (
    <div className="space-y-3 p-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">After payment</p>
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-xl border-2 border-dashed border-jade/40 bg-jade/5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-jade">Review QR</span>
      </div>
      <p className="text-sm font-semibold text-ink">Ask for a quick rating</p>
      <p className="text-xs text-ink-mute">Guest scans on their phone · ~10 seconds</p>
      <div className="flex justify-center gap-1 text-lg text-jade">★★★★★</div>
      <p className="text-[10px] text-ink-mute">4★+ can open Google review · 1–3★ stays private</p>
    </div>
  ),
};

export type ScreenVariant = keyof typeof screens;

export function FeatureScreen({
  variant,
  elevated = false,
}: {
  variant: ScreenVariant;
  elevated?: boolean;
}) {
  return (
    <motion.div
      className={`overflow-hidden rounded-2xl border bg-white ${
        elevated
          ? "border-ink/12 shadow-premium ring-1 ring-white/80"
          : "border-ink/10 shadow-[0_20px_50px_-30px_rgba(11,31,28,0.4)]"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center gap-1.5 border-b border-ink/8 bg-mist-soft px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
      </div>
      {screens[variant]}
    </motion.div>
  );
}
