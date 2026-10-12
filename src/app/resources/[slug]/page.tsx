import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { brand } from "@/lib/content";
import { compareNav } from "@/lib/compare-pages";
import { resourceArticles } from "@/lib/resource-articles";
import { absoluteUrl, CONTENT_UPDATED, faqJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(resourceArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) return { title: "Resource" };
  return pageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/resources/${slug}/`,
    type: "article",
  });
}

/** Shared-keyword overlap → most relevant guides first, so internal links stay topical. */
function relatedArticles(slug: string, limit = 3) {
  const words = (s: string) => new Set(s.split("-").filter((w) => w.length > 3));
  const mine = words(slug);
  return Object.values(resourceArticles)
    .filter((a) => a.slug !== slug)
    .map((a) => ({ a, score: [...words(a.slug)].filter((w) => mine.has(w)).length }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) notFound();

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.seoDescription,
      inLanguage: "en-IN",
      dateModified: CONTENT_UPDATED,
      author: { "@type": "Organization", name: brand.name, url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: `${SITE_URL}/og-default.png`,
      mainEntityOfPage: absoluteUrl(`/resources/${slug}/`),
    },
  ];
  if (article.faqs?.length) schemas.push(faqJsonLd(article.faqs));

  const related = relatedArticles(slug);

  return (
    <>
      <JsonLd data={schemas} />
      <article>
        <header className="relative overflow-hidden border-b border-surface-line bg-hero pt-16">
          <div className="container-narrow relative py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { name: "Resources", path: "/resources/" },
                { name: article.title, path: `/resources/${slug}/` },
              ]}
            />
            <p className="eyebrow mt-6">{article.type}</p>
            <h1 className="h-hero mt-3 !text-[2rem] sm:!text-[2.5rem]">{article.title}</h1>
            <p className="lede mt-5">{article.lede}</p>
            <p className="mt-5 text-xs text-ink-faint">
              {article.readMinutes} min read · Updated{" "}
              <time dateTime={CONTENT_UPDATED}>
                {new Date(CONTENT_UPDATED).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </time>{" "}
              · By the {brand.name} team
            </p>
          </div>
        </header>

        <div className="container-narrow section-pad !pt-12">
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-ink sm:text-[1.75rem]">{section.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-mute">{section.body}</p>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {article.faqs?.length ? (
              <section>
                <h2 className="font-display text-2xl text-ink sm:text-[1.75rem]">Frequently asked questions</h2>
                <div className="mt-6 space-y-6">
                  {article.faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <aside className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
              <p className="font-semibold text-ink">{article.cta}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/demo" className="btn-primary">
                  {brand.cta.primary}
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  See pricing
                </Link>
              </div>
            </aside>

            <nav aria-label="Related reading" className="grid gap-8 border-t border-surface-line pt-8 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Related guides</h2>
                <ul className="mt-4 space-y-2.5">
                  {related.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/resources/${a.slug}`} className="text-sm font-medium text-brand hover:underline">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Compare software</h2>
                <ul className="mt-4 space-y-2.5">
                  {compareNav.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-sm font-medium text-brand hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
