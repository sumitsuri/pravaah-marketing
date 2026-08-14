"use client";

import { trustLogos } from "@/lib/content";

export function TrustStrip() {
  const row = [...trustLogos, ...trustLogos];
  return (
    <section className="overflow-hidden border-y border-ink/8 bg-white py-8">
      <p className="px-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute md:px-8">
        Built for salon & spa operators across India — 1 branch to any scale
      </p>
      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-12 px-6">
          {row.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="whitespace-nowrap font-display text-xl tracking-tight text-ink/40 md:text-2xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
