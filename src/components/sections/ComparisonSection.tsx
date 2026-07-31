"use client";

import Link from "next/link";
import { brand, comparisonRows } from "@/lib/content";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="font-semibold text-jade">Yes</span>;
  if (value === false) return <span className="text-ink/35">—</span>;
  return <span className="text-ink-mute">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section id="compare" className="section-pad bg-white">
      <div className="container-wide">
        <p className="eyebrow">Compare</p>
        <h2 className="display mt-3 max-w-3xl">Why operators choose {brand.name}.</h2>
        <p className="mt-5 max-w-2xl text-ink-mute">
          How {brand.name} stacks up against typical enterprise suites, marketplace apps, and India SMB tools —
          based on what we have shipped.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 [-webkit-overflow-scrolling:touch]">
          <table className="min-w-[640px] w-full border-collapse text-left text-sm">
            <thead className="bg-mist-soft">
              <tr>
                <th className="sticky left-0 z-10 bg-mist-soft px-4 py-3 font-semibold text-ink shadow-[4px_0_8px_-4px_rgba(11,31,28,0.08)]">
                  Capability
                </th>
                <th className="px-4 py-3 font-semibold text-jade">{brand.name}</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">Enterprise suites</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">Marketplace apps</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">India SMB tools</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-t border-ink/8">
                  <td className="sticky left-0 z-10 bg-white px-4 py-3 font-medium text-ink shadow-[4px_0_8px_-4px_rgba(11,31,28,0.06)]">
                    {row.capability}
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.antrahq} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.enterprise} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.marketplace} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.smb} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-mute lg:hidden">Swipe horizontally to compare all columns →</p>
        <p className="mt-4 text-xs text-ink-mute">
          Category columns are directional — validate against your shortlist.{" "}
          <Link href="/demo" className="font-semibold text-jade">
            Book a demo
          </Link>{" "}
          for a live walkthrough.
        </p>
      </div>
    </section>
  );
}
