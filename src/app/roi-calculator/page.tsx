"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoiCalculatorPage() {
  const [branches, setBranches] = useState(6);
  const [dailyWalkins, setDailyWalkins] = useState(28);
  const [minutesSaved, setMinutesSaved] = useState(4);
  const [winbackRate, setWinbackRate] = useState(8);
  const [avgTicket, setAvgTicket] = useState(1200);

  const model = useMemo(() => {
    const deskHoursSaved =
      (branches * dailyWalkins * minutesSaved * 26) / 60; // ~26 working days
    const monthlyWinbacks = Math.round(
      branches * dailyWalkins * 26 * (winbackRate / 100) * 0.15
    );
    const winbackRevenue = monthlyWinbacks * avgTicket;
    const adminValue = deskHoursSaved * 350; // notional ₹/hr ops cost
    return {
      deskHoursSaved: Math.round(deskHoursSaved),
      monthlyWinbacks,
      winbackRevenue: Math.round(winbackRevenue),
      adminValue: Math.round(adminValue),
      total: Math.round(winbackRevenue + adminValue),
    };
  }, [branches, dailyWalkins, minutesSaved, winbackRate, avgTicket]);

  return (
    <div className="bg-flow-hero pt-28">
      <section className="section-pad !pt-10">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Tool</p>
            <h1 className="display mt-3">Branch revenue opportunity calculator</h1>
            <p className="lede mt-5">
              Inspired by Phorest-style ROI tools — estimate hours saved at the desk and WhatsApp
              win-back upside for your chain size. Directional, not a guarantee.
            </p>

            <div className="mt-10 space-y-6 rounded-3xl border border-ink/10 bg-white p-6 md:p-8">
              <Slider
                label="Branches"
                value={branches}
                min={1}
                max={20}
                onChange={setBranches}
              />
              <Slider
                label="Walk-ins / branch / day"
                value={dailyWalkins}
                min={5}
                max={80}
                onChange={setDailyWalkins}
              />
              <Slider
                label="Minutes saved per bill"
                value={minutesSaved}
                min={1}
                max={12}
                onChange={setMinutesSaved}
              />
              <Slider
                label="Quiet guests reactivated (%)"
                value={winbackRate}
                min={2}
                max={20}
                onChange={setWinbackRate}
              />
              <Slider
                label="Avg ticket (₹)"
                value={avgTicket}
                min={400}
                max={4000}
                step={100}
                onChange={setAvgTicket}
              />
            </div>
          </div>

          <motion.div
            className="h-fit rounded-3xl border border-jade/30 bg-ink p-8 text-white shadow-[0_30px_80px_-40px_rgba(15,107,92,0.6)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jade-soft">
              Monthly opportunity
            </p>
            <p className="mt-4 font-display text-5xl text-white">
              ₹{model.total.toLocaleString("en-IN")}
            </p>
            <p className="mt-2 text-sm text-mist/65">Combined desk-time value + win-back revenue</p>

            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-mist/65">Desk hours saved / mo</dt>
                <dd className="font-semibold">{model.deskHoursSaved} hrs</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-mist/65">Notional admin value</dt>
                <dd className="font-semibold">₹{model.adminValue.toLocaleString("en-IN")}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-mist/65">Est. win-back visits</dt>
                <dd className="font-semibold">{model.monthlyWinbacks}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-mist/65">Win-back revenue</dt>
                <dd className="font-semibold">₹{model.winbackRevenue.toLocaleString("en-IN")}</dd>
              </div>
            </dl>

            <Link href="/demo" className="btn-primary mt-8 w-full !bg-jade">
              Book a demo with these numbers
            </Link>
            <p className="mt-4 text-center text-[11px] text-mist/50">
              Model assumes 26 working days. Validate with your actuals in a live walkthrough.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="font-display text-lg text-jade">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-jade"
      />
    </label>
  );
}
