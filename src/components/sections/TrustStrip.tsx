"use client";

import { trustLogos } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-white py-10">
      <div className="container-wide px-5 md:px-8 lg:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
          Trusted pattern for multi-branch salon operators across India
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustLogos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg tracking-tight text-ink/45 md:text-xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
