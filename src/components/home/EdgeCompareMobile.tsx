"use client";

import { useState } from "react";
import { edgeColumns, edgeRows } from "@/lib/content";
import { EdgeCell } from "@/components/home/EdgeCell";

type RivalKey = "enterprise" | "india" | "marketplace";

const rivals = edgeColumns.filter((c) => c.key !== "antrahq") as unknown as {
  key: RivalKey;
  label: string;
  examples: string;
}[];

/**
 * Phones & tablets: AntraHQ vs one competitor category at a time, two columns that always fit
 * the screen. AntraHQ's column is pinned and highlighted so the advantage reads without scrolling.
 */
export function EdgeCompareMobile() {
  const [rival, setRival] = useState<RivalKey>("enterprise");
  const current = rivals.find((r) => r.key === rival)!;

  return (
    <div className="mt-10 lg:hidden">
      <p className="text-sm font-semibold text-ink">Compare AntraHQ with:</p>
      <div role="tablist" aria-label="Competitor category" className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-surface-muted p-1">
        {rivals.map((r) => {
          const selected = r.key === rival;
          return (
            <button
              key={r.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="edge-mobile-panel"
              onClick={() => setRival(r.key)}
              className={`min-h-11 rounded-lg px-2 py-2 text-xs font-semibold leading-tight transition sm:text-sm ${
                selected ? "bg-white text-brand shadow-sm" : "text-ink-mute hover:text-ink"
              }`}
            >
              {r.label.replace("Booking marketplaces", "Marketplaces")}
            </button>
          );
        })}
      </div>

      <div id="edge-mobile-panel" role="tabpanel" className="mt-4 overflow-hidden rounded-2xl border border-surface-line bg-white">
        <div className="grid grid-cols-2 border-b border-surface-line text-sm font-semibold">
          <div className="bg-brand px-4 py-3 text-white">AntraHQ</div>
          <div className="bg-surface px-4 py-3 text-ink">
            {current.label}
            <span className="block text-xs font-normal text-ink-faint">{current.examples}</span>
          </div>
        </div>
        <ul>
          {edgeRows.map((row) => (
            <li key={row.capability} className="border-t border-surface-line first:border-t-0">
              <p className="px-4 pt-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">{row.capability}</p>
              <div className="grid grid-cols-2 text-sm">
                <div className="mx-2 mb-2 mt-1.5 rounded-lg bg-brand-50 px-2 py-2">
                  <EdgeCell value={row.antrahq} highlight />
                </div>
                <div className="mb-2 mt-1.5 px-4 py-2">
                  <EdgeCell value={row[rival]} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
