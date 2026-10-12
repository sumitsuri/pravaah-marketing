"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { painPoints } from "@/lib/content";
import { painVisuals, tones } from "@/components/home/tones";

/**
 * Problem → solution tabs. Every panel is server-rendered into the HTML (inactive ones are
 * `hidden`), so crawlers read all six solutions while visitors see one at a time.
 * Hero chips link to `#problem-<id>` (anchor targets rendered by ProblemsSection, so the browser
 * scrolls natively); the hash then selects the tab.
 */
export function PainSolutions({ screens }: { screens: Record<string, React.ReactNode> }) {
  const [active, setActive] = useState<string>(painPoints[0].id);

  useEffect(() => {
    function fromHash() {
      const id = window.location.hash.replace("#problem-", "");
      if (painPoints.some((p) => p.id === id)) setActive(id);
    }
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // Keep the selected tab visible in the horizontal rail on phones and tablets.
  useEffect(() => {
    const tab = document.getElementById(`tab-${active}`);
    const rail = tab?.parentElement;
    if (!tab || !rail || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollLeft = tab.offsetLeft - rail.offsetLeft - 16;
  }, [active]);

  function onKey(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    const next = painPoints[(index + dir + painPoints.length) % painPoints.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <div data-reveal
      className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-8">
      <div
        role="tablist"
        aria-label="Salon problems AntraHQ solves"
        aria-orientation="vertical"
        className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
      >
        {painPoints.map((p, i) => {
          const selected = p.id === active;
          return (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${p.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(p.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition lg:w-full ${
                selected
                  ? "border-brand bg-brand-50 text-brand shadow-sm"
                  : "border-surface-line bg-white text-ink-soft hover:border-brand-200"
              }`}
            >
              <span className="flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal">
                <span className="flex items-center gap-2.5">
                  <TabIcon id={p.id} />
                  {p.chip}
                </span>
                <ArrowRight className={`hidden h-4 w-4 shrink-0 lg:block ${selected ? "opacity-100" : "opacity-0"}`} aria-hidden />
              </span>
            </button>
          );
        })}
      </div>

      {painPoints.map((p) => (
        <div
          key={p.id}
          id={`panel-${p.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${p.id}`}
          hidden={p.id !== active}
          className="card overflow-hidden"
        >
          <div className="grid xl:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <div className="rounded-xl border border-pain/15 bg-pain-soft p-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-pain">
                  <X className="h-3.5 w-3.5" aria-hidden /> The problem
                </p>
                <p className="mt-2 font-semibold text-ink">{p.pain}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-mute">{p.painDetail}</p>
              </div>

              <p className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-win">
                <Check className="h-3.5 w-3.5" aria-hidden /> How AntraHQ fixes it
              </p>
              <h3 className="h-card mt-2 !text-2xl">{p.title}</h3>
              <p className="body-copy mt-3">{p.solution}</p>
              <ul className="mt-5 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-ink-faint">Modules:</span>
                {p.modules.map((m) => (
                  <Link
                    key={m.label}
                    href={m.href}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand transition hover:bg-brand-100"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-surface-line bg-surface p-6 sm:p-8 xl:border-l xl:border-t-0">
              {screens[p.screen]}
              <p className="rounded-lg bg-white px-3 py-2 text-center text-xs font-semibold text-win shadow-sm">
                {p.outcome}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TabIcon({ id }: { id: string }) {
  const v = painVisuals[id];
  const Icon = v.icon;
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${tones[v.tone].tile}`} aria-hidden>
      <Icon className="h-4 w-4" />
    </span>
  );
}
