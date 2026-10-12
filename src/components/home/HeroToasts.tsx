"use client";

import { useEffect, useState } from "react";
import { autopilot } from "@/lib/content";
import { autopilotVisuals, tones } from "@/components/home/tones";

/** Two notification toasts that cycle through Autopilot events over the hero product screen. */
export function HeroToasts() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((x) => x + 1), 3200);
    return () => clearInterval(id);
  }, []);

  const n = autopilot.list.length;
  const top = autopilot.list[(i * 2) % n];
  const bottom = autopilot.list[(i * 2 + 1) % n];

  return (
    <>
      <Toast key={`t-${i}`} routine={top} className="-right-3 -top-6 lg:-right-8" />
      <Toast key={`b-${i}`} routine={bottom} className="-bottom-7 -left-4 lg:-left-10" delay />
    </>
  );
}

function Toast({
  routine,
  className,
  delay = false,
}: {
  routine: (typeof autopilot.list)[number];
  className: string;
  delay?: boolean;
}) {
  const v = autopilotVisuals[routine.id];
  const Icon = v.icon;
  return (
    <div
      className={`toast-in absolute hidden w-64 rounded-2xl border border-surface-line bg-white/95 p-3 shadow-premium backdrop-blur sm:block ${className}`}
      style={delay ? { animationDelay: "0.35s" } : undefined}
      aria-hidden
    >
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tones[v.tone].tile}`}>
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-ink">{routine.event}</p>
          <p className="flex items-center gap-1.5 text-[11px] text-ink-mute">
            <span className="live-dot !h-1.5 !w-1.5" /> {routine.name} · just now
          </p>
        </div>
      </div>
    </div>
  );
}
