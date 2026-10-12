import Link from "next/link";
import { ArrowRight, Check, Crown, MonitorSmartphone, ReceiptIndianRupee, Scissors } from "lucide-react";
import { roles } from "@/lib/content";
import { tones, type Tone } from "@/components/home/tones";

const roleVisuals: { icon: typeof Crown; tone: Tone }[] = [
  { icon: Crown, tone: "violet" },
  { icon: MonitorSmartphone, tone: "sky" },
  { icon: ReceiptIndianRupee, tone: "pink" },
  { icon: Scissors, tone: "amber" },
];

export function RolesSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">One platform, every role</p>
          <h2 className="h-section mt-3">Everyone in your salon works from the same numbers</h2>
          <p className="lede mt-4">
            Owners, managers, the front desk and stylists each get an app shaped around their job — all feeding one source of truth.{" "}
            <Link href="/customers" className="font-semibold text-brand hover:underline">
              See how operators use AntraHQ
            </Link>
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => {
            const v = roleVisuals[i];
            const Icon = v.icon;
            return (
            <Link
              key={r.role}
              href={r.href}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="card card-hover group flex flex-col p-6"
            >
              <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${tones[v.tone].tile}`}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${tones[v.tone].text}`}>{r.role}</p>
              <h3 className="h-card mt-2">{r.headline}</h3>
              <ul className="mt-4 flex-1 space-y-2">
                {r.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-mute">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="link-arrow mt-5">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
