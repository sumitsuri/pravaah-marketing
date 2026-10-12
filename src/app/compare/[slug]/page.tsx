import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { comparePages } from "@/lib/compare-pages";
import { brand } from "@/lib/content";
import { absoluteUrl, CONTENT_UPDATED, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(comparePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) return { title: "Compare" };
  return pageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/compare/${slug}/`,
    type: "article",
  });
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) notFound();
  const others = Object.values(comparePages).filter((p) => p.slug !== slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.seoDescription,
          dateModified: CONTENT_UPDATED,
          author: { "@type": "Organization", name: brand.name, url: absoluteUrl("/") },
          publisher: { "@id": absoluteUrl("/") + "#organization" },
          mainEntityOfPage: absoluteUrl(`/compare/${slug}/`),
          about: [
            { "@type": "SoftwareApplication", name: brand.name, applicationCategory: "BusinessApplication" },
            { "@type": "SoftwareApplication", name: page.competitor, applicationCategory: "BusinessApplication" },
          ],
        }}
      />
      <PageHero
        eyebrow={page.eyebrow}
        title={`${page.title}: which salon software fits your business?`}
        body={page.lede}
        crumbs={[
          { name: "Compare", path: "/compare/" },
          { name: page.title, path: `/compare/${slug}/` },
        ]}
      />

      <section className="section-pad bg-white">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="h-card">Where {page.competitor} is strong</h2>
            <ul className="mt-5 space-y-3">
              {page.competitorStrengths.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-mute">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-brand-200 bg-brand-50/50 p-6 sm:p-8">
            <h2 className="h-card">Where {brand.name} is stronger</h2>
            <ul className="mt-5 space-y-3">
              {page.antrahqStrengths.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <h2 className="h-section !text-3xl">
            {brand.name} vs {page.competitor}: side by side
          </h2>
          <ul className="mt-8 space-y-3 md:hidden">
            {page.rows.map((row) => (
              <li key={row.topic} className="card overflow-hidden">
                <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">{row.topic}</p>
                <div className="m-3 rounded-lg bg-brand-50 p-3">
                  <p className="text-xs font-semibold text-brand">{brand.name}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{row.antrahq}</p>
                </div>
                <div className="px-6 pb-4">
                  <p className="text-xs font-semibold text-ink-faint">{page.competitor}</p>
                  <p className="mt-1 text-sm text-ink-mute">{row.competitor}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-surface-line bg-white md:block">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th scope="col" className="w-1/4 px-4 py-3.5 font-semibold text-ink">
                    Topic
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-semibold text-ink">
                    {page.competitor}
                  </th>
                  <th scope="col" className="bg-brand-50 px-4 py-3.5 font-semibold text-brand">
                    {brand.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.topic} className="border-t border-surface-line">
                    <th scope="row" className="px-4 py-3.5 font-medium text-ink">
                      {row.topic}
                    </th>
                    <td className="px-4 py-3.5 text-ink-mute">{row.competitor}</td>
                    <td className="bg-brand-50/50 px-4 py-3.5 text-ink-soft">{row.antrahq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-mute">Choose {page.competitor} if</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-mute">{page.bestFor.competitor}</p>
            </div>
            <div className="card border-brand-200 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Choose {brand.name} if</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{page.bestFor.antrahq}</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-ink-faint">
            {page.disclaimer} Last reviewed {new Date(CONTENT_UPDATED).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="container-wide flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm font-semibold text-ink">More comparisons:</span>
          {others.map((o) => (
            <Link key={o.slug} href={`/compare/${o.slug}`} className="link-arrow">
              {o.title}
            </Link>
          ))}
          <Link href="/resources/best-salon-software-india-2026" className="link-arrow">
            Best salon software in India (2026)
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
