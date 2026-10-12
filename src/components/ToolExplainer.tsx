import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

/**
 * Server-rendered context under an interactive tool, so search engines see what the tool does,
 * how it calculates, and related links — the calculator itself renders client-side.
 */
export function ToolExplainer({
  name,
  path,
  intro,
  method,
  faqs,
  links,
}: {
  name: string;
  path: string;
  intro: string;
  method: string[];
  faqs: { q: string; a: string }[];
  links: { href: string; label: string }[];
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name, path },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">About this tool</p>
            <h2 className="h-section mt-3 !text-3xl">How the {name.toLowerCase()} works</h2>
            <p className="body-copy mt-4 !text-base">{intro}</p>
          </div>
          <div>
            <ul className="space-y-3">
              {method.map((m) => (
                <li key={m} className="rounded-xl border border-surface-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink-soft">
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="link-arrow">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FaqSection faqs={faqs} title={`${name}: questions`} />
    </>
  );
}
