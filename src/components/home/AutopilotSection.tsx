import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { autopilot } from "@/lib/content";
import { AutopilotFeed } from "@/components/home/AutopilotFeed";
import { autopilotVisuals, tones } from "@/components/home/tones";

export function AutopilotSection() {
  return (
    <section id="autopilot" className="relative overflow-hidden bg-[#1a0b3d] py-16 text-white sm:py-20 lg:py-24">
      <div className="blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-brand" aria-hidden />
      <div className="blob bottom-[-15%] right-[-5%] h-[26rem] w-[26rem] bg-accent [animation-delay:-6s]" aria-hidden />
      <div className="blob left-[40%] top-[30%] h-72 w-72 bg-sky-500 opacity-30 [animation-delay:-3s]" aria-hidden />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 [&>*]:min-w-0">
          <div data-reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
              <span className="live-dot" aria-hidden /> {autopilot.eyebrow} · Always on
            </p>
            <h2 className="mt-4 font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-[2.625rem]">
              {autopilot.title.split("autopilot")[0]}
              <span className="bg-gradient-to-r from-brand-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">autopilot</span>
              {autopilot.title.split("autopilot")[1]}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100/85 sm:text-lg">{autopilot.lede}</p>
            <dl className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {autopilot.outcomes.map((o) => (
                <div key={o.label} className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                  <dt className="sr-only">{o.label}</dt>
                  <dd>
                    <span className="block font-display text-lg leading-tight text-white sm:text-2xl">{o.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-brand-100/75 sm:text-sm">{o.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <AutopilotFeed />
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autopilot.list.map((a, i) => {
            const v = autopilotVisuals[a.id];
            const Icon = v.icon;
            return (
              <li
                key={a.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms`, ["--scan" as string]: tones[v.tone].scan, ["--scan-delay" as string]: `${i * 0.45}s` }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[v.tone].tile}`}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="live-dot !h-1.5 !w-1.5" aria-hidden /> Live
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{a.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-100/80">{a.does}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-200/60">{a.plan}</p>
                <span className="pilot-scan" aria-hidden />
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between" data-reveal>
          <p className="max-w-xl text-sm text-brand-100/80">
            No extra cost — Autopilot comes with your plan and keeps running while your salon is closed.
          </p>
          <Link href="/demo" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-brand-50">
            See Autopilot in a demo <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
