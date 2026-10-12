import { ChevronDown } from "lucide-react";
import { faqs as defaultFaqs } from "@/lib/content";

type Faq = { q: string; a: string };

/** Native <details> accordion: answers are always in the HTML, keyboard accessible, zero JS. */
export function FaqSection({
  faqs = defaultFaqs,
  title = "Questions salon owners ask before switching",
}: {
  faqs?: readonly Faq[];
  title?: string;
}) {
  return (
    <section id="faq" className="section-pad bg-surface">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">FAQ</p>
          <h2 className="h-section mt-3">{title}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details key={item.q} className="card group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left">
                <h3 className="text-[0.9375rem] font-semibold text-ink sm:text-base">{item.q}</h3>
                <ChevronDown className="faq-chevron h-4 w-4 shrink-0 text-ink-mute transition" aria-hidden />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
