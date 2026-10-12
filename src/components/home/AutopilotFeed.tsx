"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { autopilot } from "@/lib/content";
import { autopilotVisuals, tones } from "@/components/home/tones";

/** Round-the-clock timestamps so the feed visibly runs through the night. */
const clock = ["11:48 PM", "2:14 AM", "6:30 AM", "9:05 AM", "1:20 PM", "7:45 PM"];
const VISIBLE = 4;

/** Cycling demo feed of Autopilot events — illustrative data, labelled as such. */
export function AutopilotFeed() {
  const [tick, setTick] = useState(VISIBLE - 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);

  const n = autopilot.list.length;
  const items = Array.from({ length: VISIBLE }, (_, i) => tick - i).map((k) => ({
    key: k,
    routine: autopilot.list[((k % n) + n) % n],
    time: clock[((k % clock.length) + clock.length) % clock.length],
  }));
  const night = items[0].time.includes("AM") && Number(items[0].time.split(":")[0]) < 6;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-premium-lg backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="live-dot" aria-hidden /> Autopilot activity
        </p>
        <p className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100" aria-live="off">
          {night ? <Moon className="h-3.5 w-3.5" aria-hidden /> : <Sun className="h-3.5 w-3.5" aria-hidden />}
          {items[0].time}
        </p>
      </div>
      <ul className="mt-5 space-y-3" aria-label="Example Autopilot events">
        {items.map(({ key, routine, time }, i) => {
          const v = autopilotVisuals[routine.id];
          const Icon = v.icon;
          return (
            <li
              key={key}
              className={`flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ${i === 0 ? "toast-in" : ""}`}
              style={{ opacity: 1 - i * 0.18 }}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tones[v.tone].tile}`}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">{routine.event}</span>
                <span className="block text-xs text-ink-mute">
                  {routine.name} · {time}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-center text-[11px] text-brand-200/70">Illustrative demo data</p>
    </div>
  );
}
