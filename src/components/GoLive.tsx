import Link from "next/link";
import { ArrowRight, Check, Zap } from "lucide-react";
import { goLive, timeline } from "@/lib/content";

/**
 * Same-day go-live pitch: headline stat + hour-by-hour steps.
 * `stack` sits in a half-width column (homepage); `wide` spreads steps across a row (solution pages).
 */
export function GoLiveCard({ layout = "stack" }: { layout?: "stack" | "wide" }) {
  const wide = layout === "wide";
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-6 text-white shadow-premium-lg sm:p-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 100% 0%, rgba(167,139,250,0.45), transparent 70%), radial-gradient(60% 50% at 0% 100%, rgba(109,40,217,0.6), transparent 70%)",
        }}
        aria-hidden
      />
      <div className={`relative ${wide ? "grid gap-8 xl:grid-cols-[0.75fr_1.25fr] xl:items-center xl:gap-12" : ""}`}>
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-200">
            <Zap className="h-3.5 w-3.5" aria-hidden /> Same-day go-live
          </p>
          <p className="mt-5 flex items-end gap-3">
            <span className="font-display text-6xl leading-none sm:text-7xl">{goLive.stat}</span>
          </p>
          <p className="mt-2 max-w-xs text-lg font-semibold leading-snug text-white">{goLive.statLabel}</p>
          <ul className="mt-5 space-y-2">
            {goLive.perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-brand-100">
                <Check className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <GoLiveCta className={wide ? "mt-6" : "mt-6 hidden sm:inline-flex"} />
        </div>

        <ol
          className={
            wide
              ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2"
              : "relative mt-8 space-y-5 border-l-2 border-white/15 pl-6"
          }
        >
          {timeline.map((step, i) => (
            <li
              key={step.when}
              className={wide ? "rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur" : "relative"}
            >
              {!wide && (
                <span
                  className={`absolute -left-[2.06rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    i === 2 ? "bg-white text-brand" : "bg-brand-400 text-white"
                  }`}
                  aria-hidden
                >
                  {i + 1}
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">{step.when}</p>
              <p className="mt-1 font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-brand-100/80">{step.detail}</p>
            </li>
          ))}
        </ol>
        {!wide && <GoLiveCta className="mt-8 w-full sm:hidden" />}
      </div>
    </div>
  );
}

function GoLiveCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/demo"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-brand-50 ${className}`}
    >
      Go live today <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
