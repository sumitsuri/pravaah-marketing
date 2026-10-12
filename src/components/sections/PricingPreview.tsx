import Link from "next/link";
import { Check } from "lucide-react";
import { pricing } from "@/lib/content";

export function PricingCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pricing.map((tier, i) => (
        <div
          key={tier.name}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
            tier.highlighted ? "border-brand shadow-premium ring-1 ring-brand" : "border-surface-line"
          }`}
        >
          {tier.highlighted && (
            <p className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand to-accent px-3 py-1 text-xs font-semibold text-white shadow-sm">Recommended</p>
          )}
          <Heading className="font-display text-xl text-ink">{tier.name}</Heading>
          <p className="mt-1 min-h-10 text-sm text-ink-mute">{tier.blurb}</p>
          <p className="mt-5 font-display text-4xl text-ink">{tier.price}</p>
          <p className="text-xs text-ink-mute">{tier.unit}</p>
          <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink-soft">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/demo" className={`mt-8 w-full ${tier.highlighted ? "btn-primary" : "btn-secondary"}`}>
            {tier.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function PricingPreview() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="h-section mt-3">Simple per-branch pricing, published</h2>
          <p className="lede mx-auto mt-4">
            No demo needed to see the price. No commission on bookings. WhatsApp campaigns included on Growth.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <PricingCards />
        </div>
        <p className="mt-6 text-center text-sm text-ink-mute">
          <Link href="/pricing" className="font-semibold text-brand hover:underline">
            Compare plans in detail
          </Link>
        </p>
      </div>
    </section>
  );
}
