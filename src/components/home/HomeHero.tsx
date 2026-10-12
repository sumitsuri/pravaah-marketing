import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brand, hero, painPoints } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { HeroToasts } from "@/components/home/HeroToasts";
import { painVisuals, tones } from "@/components/home/tones";

const reassurance = ["Live the same day", "From ₹499 / branch / month", "No booking commission"];

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
              <Link href="/demo" className="btn-primary btn-lg">
                {brand.cta.primary} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#problems" className="btn-secondary btn-lg">
                {brand.cta.secondary}
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-mute lg:justify-start">
              {reassurance.map((r) => (
                <li key={r} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-win" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
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
