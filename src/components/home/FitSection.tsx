import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { verticals } from "@/lib/content";
import { GoLiveCard } from "@/components/GoLive";

/** Two buyer questions in one band: "Is it for a business like mine?" and "How fast can we start?" */
export function FitSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Built for your format</p>
          <h2 className="h-section mt-3">For salons, spas, parlours and nail studios</h2>
          <div className="mt-8 grid gap-3">
            {verticals.map((v, i) => (
              <Link key={v.title} href={v.href} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="card card-hover group flex items-start justify-between gap-4 p-5">
                <span>
                  <span className="block font-semibold text-ink">{v.title}</span>
                  <span className="mt-1 block text-sm text-ink-mute">{v.desc}</span>
                </span>
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-brand opacity-50 transition group-hover:opacity-100" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Go-live</p>
          <h2 className="h-section mt-3">Start billing today, not next month</h2>
          <p className="lede mt-4">No hardware, no long rollout — your salon is live on AntraHQ the same afternoon.</p>
          <div className="mt-8" data-reveal>
            <GoLiveCard />
          </div>
        </div>
      </div>
    </section>
  );
}
