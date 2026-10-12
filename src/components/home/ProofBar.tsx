import { proofPoints } from "@/lib/content";

/** Checkable product facts in place of a logo wall — no invented customer counts. */
export function ProofBar() {
  return (
    <section aria-label="Why salon owners choose AntraHQ" className="border-y border-surface-line bg-surface">
      <ul className="container-wide grid grid-cols-2 gap-x-6 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-5">
        {proofPoints.map((p, i) => (
          <li key={p.label} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }} className="text-center last:col-span-2 sm:last:col-span-1 lg:text-left">
            <p className="text-sm font-semibold text-ink">{p.label}</p>
            <p className="mt-0.5 text-xs text-ink-mute">{p.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
