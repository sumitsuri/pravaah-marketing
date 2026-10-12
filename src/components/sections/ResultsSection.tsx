import { ArrowRight } from "lucide-react";
import { results } from "@/lib/content";

/** Illustrative scenarios — clearly labelled until attributed case studies are published. */
export function ResultsSection() {
  return (
    <section id="results" className="section-pad bg-surface">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Operator scenarios</p>
          <h2 className="h-section mt-3">What multi-branch teams set out to change</h2>
          <p className="mt-4 text-sm text-ink-mute">
            Illustrative scenarios from early deployments — not attributed customer quotes. Results depend on branch count, service
            mix and how consistently managers use the platform.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {results.map((item) => (
            <figure key={item.name} className="card flex h-full flex-col p-6">
              <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-surface-line pt-4">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink-mute">{item.role}</p>
                <p className="mt-3 inline-flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-ink-faint line-through">{item.before}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-ink-faint" aria-hidden />
                  <span className="font-semibold text-win">{item.after}</span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
