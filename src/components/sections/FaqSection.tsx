"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-mist-soft">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3">Answers buyers ask before the demo.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-2xl border border-ink/10 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-semibold text-ink md:text-base">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-ink-mute transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Keep answers in the HTML for crawlability; collapse visually when closed */}
                <div className={isOpen ? "block" : "hidden"} aria-hidden={!isOpen}>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-mute">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
