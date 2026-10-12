import Link from "next/link";
import { differentiators, edgeColumns, edgeRows } from "@/lib/content";
import { EdgeCell as Cell } from "@/components/home/EdgeCell";
import { EdgeCompareMobile } from "@/components/home/EdgeCompareMobile";
import { compareNav } from "@/lib/compare-pages";

export function EdgeSection({ showCompareLinks = true }: { showCompareLinks?: boolean }) {
  return (
    <section id="compare" className="section-pad bg-white">
      <div className="container-wide">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">Why AntraHQ</p>
          <h2 className="h-section mt-3">How AntraHQ compares with other salon software</h2>
          <p className="lede mt-4">
            Most salon software is built for one desk. AntraHQ is built for the owner who needs every branch to be profitable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <div key={d.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }} className="card card-hover p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-sm font-bold text-white shadow-sm">
                {i + 1}
              </span>
              <h3 className="h-card mt-4 !text-lg">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{d.desc}</p>
            </div>
          ))}
        </div>

        <EdgeCompareMobile />

        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-surface-line lg:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Salon software comparison by category</caption>
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="sticky left-0 z-10 w-[30%] bg-surface px-4 py-4 font-semibold text-ink">
                  Capability
                </th>
                {edgeColumns.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    className={`px-4 py-4 align-bottom font-semibold ${c.key === "antrahq" ? "bg-brand-50 text-brand" : "text-ink"}`}
                  >
                    {c.label}
                    {"examples" in c && <span className="block text-xs font-normal text-ink-faint">{c.examples}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {edgeRows.map((row) => (
                <tr key={row.capability} className="border-t border-surface-line">
                  <th scope="row" className="sticky left-0 z-10 bg-white px-4 py-3.5 font-medium text-ink">
                    {row.capability}
                  </th>
                  <td className="bg-brand-50/60 px-4 py-3.5">
                    <Cell value={row.antrahq} highlight />
                  </td>
                  <td className="px-4 py-3.5">
                    <Cell value={row.enterprise} />
                  </td>
                  <td className="px-4 py-3.5">
                    <Cell value={row.india} />
                  </td>
                  <td className="px-4 py-3.5">
                    <Cell value={row.marketplace} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Category columns are directional and based on publicly available information as of October 2026 — plans differ by
          vendor and region. Validate any shortlist in live demos.
        </p>

        {showCompareLinks && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-sm font-semibold text-ink">Detailed comparisons:</span>
            {compareNav.map((c) => (
              <Link key={c.href} href={c.href} className="link-arrow">
                {c.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
