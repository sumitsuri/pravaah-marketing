import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { resources } from "@/lib/content";
import { resourceArticleList } from "@/lib/resource-articles";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = {
  title: "Resources for salon & spa management platforms in India",
  description:
    "Guides on salon management platforms, spa management software, multi-branch checklists, GST, attendance, and WhatsApp win-backs for Indian chains.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesPage() {
  const tools = resources.filter((r) => r.type === "Tool" || r.type === "Compare");
  const guides = resourceArticleList;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides for salon & spa management platforms"
        body="Buyer guides and playbooks for owners, ops heads, and finance leads — plus calculators and honest software comparisons."
      />
      <section className="section-pad bg-white">
        <div className="container-wide">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Guides & playbooks</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="rounded-2xl border border-ink/10 bg-mist-soft/50 p-6 transition hover:border-jade/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-jade">{article.type}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{article.title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{article.seoDescription.slice(0, 120)}…</p>
                <p className="mt-3 text-xs text-ink-mute">{article.readMinutes} min read</p>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl text-ink md:text-3xl">Tools & comparisons</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tools.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-jade/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-jade">{r.type}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ComparisonSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
