import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { resources } from "@/lib/content";
import { compareNav } from "@/lib/compare-pages";
import { resourceArticleList } from "@/lib/resource-articles";
import { itemListJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Salon & Spa Software Guides for India",
  description:
    "Guides for choosing salon software in India: best salon software 2026, GST billing, beauty parlour, nail salon and spa software, multi-branch checklists.",
  path: "/resources/",
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd(resourceArticleList.map((a) => ({ name: a.title, path: `/resources/${a.slug}/` })))} />
      <PageHero
        eyebrow="Resources"
        title="Salon & spa software guides for Indian owners"
        body="Buyer guides, checklists and playbooks for choosing and running salon software — written for owners and ops heads, not vendors."
        crumbs={[{ name: "Resources", path: "/resources/" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-wide">
          <h2 className="h-section !text-3xl">Guides & playbooks</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceArticleList.map((article) => (
              <Link key={article.slug} href={`/resources/${article.slug}`} className="card card-hover group flex flex-col p-6">
                <p className="eyebrow">{article.type}</p>
                <h3 className="h-card mt-2">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">{article.seoDescription}</p>
                <p className="mt-4 text-xs text-ink-faint">{article.readMinutes} min read</p>
              </Link>
            ))}
          </div>

          <h2 className="h-section mt-16 !text-3xl">Tools & comparisons</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <Link key={r.href} href={r.href} className="card card-hover p-6">
                <p className="eyebrow">{r.type}</p>
                <h3 className="h-card mt-2">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{r.desc}</p>
              </Link>
            ))}
            {compareNav.map((c) => (
              <Link key={c.href} href={c.href} className="card card-hover p-6">
                <p className="eyebrow">Compare</p>
                <h3 className="h-card mt-2">{c.title}</h3>
                <span className="link-arrow mt-3">
                  Read comparison <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
