"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { brand } from "@/lib/content";

/** Score branches on operational readiness — directional self-assessment, not a guarantee. */
export default function BranchHealthScorePage() {
  const [branches, setBranches] = useState(6);
  const [pnlCadence, setPnlCadence] = useState(2);
  const [attendanceTrust, setAttendanceTrust] = useState(2);
  const [crmDiscipline, setCrmDiscipline] = useState(2);
  const [retentionRhythm, setRetentionRhythm] = useState(2);

  const score = useMemo(() => {
    const signals = [pnlCadence, attendanceTrust, crmDiscipline, retentionRhythm];
    const raw = signals.reduce((a, b) => a + b, 0);
    const max = signals.length * 3;
    const pct = Math.round((raw / max) * 100);
    let band = "Needs structure";
    let note =
      "Disconnected tools or irregular reviews — a free demo can map where to connect billing, CRM, and branch P&L first.";
    if (pct >= 75) {
      band = "Strong foundation";
      note =
        "You have solid rhythms — AntraHQ can unify signals you already track into one owner view across branches.";
    } else if (pct >= 50) {
      band = "Growing discipline";
      note =
        "Some areas run well, others lag — typical for chains scaling past three outlets. Focus on branch comparability next.";
    }
    return { pct, band, note };
  }, [pnlCadence, attendanceTrust, crmDiscipline, retentionRhythm]);

  return (
    <div className="bg-hero pt-28">
      <section className="section-pad !pt-10">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Tool</p>
            <h1 className="display mt-3">Branch health score for salon chains</h1>
            <p className="lede mt-5">
              A quick self-assessment across {branches} branches — reporting cadence, attendance trust, CRM
              discipline, and retention rhythm. Directional only; book a free demo to validate with your numbers.
            </p>

            <div className="mt-10 space-y-8 rounded-3xl border border-surface-line bg-white p-6 md:p-8">
              <Slider label="Number of branches" value={branches} min={1} max={50} onChange={setBranches} />
              <Likert
                label="Branch P&L / reporting cadence"
                value={pnlCadence}
                onChange={setPnlCadence}
                low="Month-end surprises"
                high="Weekly branch view"
              />
              <Likert
                label="Staff attendance confidence"
                value={attendanceTrust}
                onChange={setAttendanceTrust}
                low="Mostly trust-based"
                high="Verified daily"
              />
              <Likert
                label="Guest CRM discipline"
                value={crmDiscipline}
                onChange={setCrmDiscipline}
                low="Scattered lists"
                high="Profiles at billing"
              />
              <Likert
                label="Retention / WhatsApp rhythm"
                value={retentionRhythm}
                onChange={setRetentionRhythm}
                low="Ad hoc blasts"
                high="Segmented win-backs"
              />
            </div>
          </div>

          <div className="h-fit rounded-2xl bg-ink p-8 text-white shadow-premium-lg lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Network readiness
            </p>
            <p className="mt-4 font-display text-5xl text-white">{score.pct}</p>
            <p className="mt-1 text-sm text-ink-faint">out of 100 · {score.band}</p>
            <p className="mt-6 text-sm leading-relaxed text-ink-faint">{score.note}</p>

            <Link href="/demo" className="btn-primary mt-8 w-full">
              {brand.cta.primary}
            </Link>
            <Link
              href="/roi-calculator"
              className="mt-3 block text-center text-xs font-semibold text-brand-300 hover:text-white"
            >
              Also try revenue opportunity calculator →
            </Link>
          </div>
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
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="font-display text-lg text-brand">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand"
      />
    </label>
  );
}

function Likert({
  label,
  value,
  onChange,
  low,
  high,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  low: string;
  high: string;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-ink">{label}</legend>
      <div className="flex gap-2">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition ${
              value === n
                ? "border-brand bg-brand/10 text-brand"
                : "border-surface-line text-ink-mute hover:border-brand/30"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-ink-mute">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </fieldset>
  );
}
