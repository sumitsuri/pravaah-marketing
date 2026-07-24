"use client";

import Link from "next/link";
import { comparisonRows } from "@/lib/content";

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
        <h2 className="display mt-3 max-w-3xl">Where Pravaah wins for India mid-market chains.</h2>
        <p className="mt-5 max-w-2xl text-ink-mute">
          Honest matrix vs enterprise suites, marketplace tools, and India SMB software — based on
          public positioning and what we have shipped.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead className="bg-mist-soft">
              <tr>
                <th className="px-4 py-3 font-semibold text-ink">Capability</th>
                <th className="px-4 py-3 font-semibold text-jade">Pravaah</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">Zenoti</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">Fresha</th>
                <th className="px-4 py-3 font-semibold text-ink-mute">MioSalon</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-t border-ink/8">
                  <td className="px-4 py-3 font-medium text-ink">{row.capability}</td>
                  <td className="px-4 py-3">
                    <Cell value={row.pravaah} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.zenoti} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.fresha} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={row.miosalon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-mute">
          Competitor cells summarise public marketing and common market packaging — validate in your
          own RFP.{" "}
          <Link href="/demo" className="font-semibold text-jade">
            Book a demo
          </Link>{" "}
          for a live side-by-side.
        </p>
      </div>
    </section>
  );
}
