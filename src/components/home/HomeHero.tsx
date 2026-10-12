import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { brand, hero, painPoints } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { HeroToasts } from "@/components/home/HeroToasts";
import { painVisuals, tones } from "@/components/home/tones";

const reassurance = ["Live in about 2 hours", "0% booking commission", "GST + WhatsApp built in"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="blob right-[-8%] top-[-12%] h-[30rem] w-[30rem] bg-brand-300" aria-hidden />
      <div className="blob left-[-12%] top-[30%] h-[22rem] w-[22rem] bg-pink-200 [animation-delay:-5s]" aria-hidden />
      <div className="blob bottom-[-10%] right-[25%] h-[18rem] w-[18rem] bg-amber-100 [animation-delay:-9s]" aria-hidden />
      <div className="container-wide relative pb-14 pt-10 sm:pt-14 lg:pb-16 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <a href="#autopilot" className="chip !border-brand-200 !bg-white/80 !text-brand backdrop-blur transition hover:!bg-brand-50">
              <span className="live-dot" aria-hidden />
              Autopilot on · your salon runs 24×7
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <h1 className="h-hero mt-5">
              {hero.h1Lead} <span className="text-gradient">{hero.h1Accent}</span>
            </h1>
            <p className="lede mx-auto mt-5 lg:mx-0">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/demo" className="btn-primary btn-lg !bg-[#1a0b3d] hover:!bg-brand">
                {brand.cta.primary}
                <span className="arrow-tile" aria-hidden>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="#problems" className="btn-secondary btn-lg">
                {brand.cta.secondary}
              </Link>
            </div>
            {/* Offer card — the price hook, cashfree-style */}
            <div className="relative mx-auto mt-8 flex max-w-md items-stretch overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-amber-50 text-left shadow-card lg:mx-0">
              <div className="flex flex-col justify-center border-r border-brand-100 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">Starts at</p>
                <p className="font-display text-4xl leading-none text-ink">
                  ₹499
                </p>
                <p className="mt-1 text-xs text-ink-mute">per branch / month</p>
              </div>
              <ul className="flex flex-col justify-center gap-1.5 px-5 py-4 text-sm text-ink-soft">
                {reassurance.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-win" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" data-reveal>
            <div className="float-y">
              <FeatureScreen variant="pnl" elevated label="Branch P&L screen with demo data" />
            </div>
            <HeroToasts />
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-surface-line bg-white/80 p-4 backdrop-blur sm:p-5 lg:mt-14">
          <p className="text-center text-sm font-semibold text-ink lg:text-left">{hero.painPrompt}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
            {painPoints.map((p) => (
              <li key={p.id}>
                <a
                  href={`#problem-${p.id}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-surface-line bg-white py-1.5 pl-1.5 pr-3.5 text-sm text-ink-soft transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand"
                >
                  <PainIcon id={p.id} />
                  {p.chip}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PainIcon({ id }: { id: string }) {
  const v = painVisuals[id];
  const Icon = v.icon;
  return (
    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${tones[v.tone].tile}`} aria-hidden>
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}
