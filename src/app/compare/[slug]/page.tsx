import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { comparePages } from "@/lib/compare-pages";
import { brand } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(comparePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) return { title: "Compare" };
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: `/compare/${slug}/` },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.lede} />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink">Where {page.competitor} excels</h2>
            <ul className="mt-5 space-y-3">
              {page.competitorStrengths.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-mute">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Where {brand.name} fits</h2>
            <ul className="mt-5 space-y-3">
              {page.antrahqStrengths.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-mute">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist-soft">
        <div className="container-wide">
          <h2 className="font-display text-3xl text-ink">Side-by-side topics</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="min-w-[560px] w-full border-collapse text-left text-sm">
              <thead className="bg-mist-soft">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Topic</th>
                  <th className="px-4 py-3 font-semibold text-ink-mute">{page.competitor}</th>
                  <th className="px-4 py-3 font-semibold text-jade">{brand.name}</th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.topic} className="border-t border-ink/8">
                    <td className="px-4 py-3 font-medium text-ink">{row.topic}</td>
                    <td className="px-4 py-3 text-ink-mute">{row.competitor}</td>
                    <td className="px-4 py-3 text-ink-mute">{row.antrahq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
              Often best for · {page.competitor}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">{page.bestFor.competitor}</p>
          </div>
          <div className="rounded-2xl border border-jade/20 bg-jade/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-jade">
              Often best for · {brand.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">{page.bestFor.antrahq}</p>
          </div>
        </div>
        <p className="container-wide mt-8 text-xs text-ink-mute">{page.disclaimer}</p>
        <div className="container-wide mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">
            Book a growth audit
          </Link>
          <Link href="/pricing" className="btn-secondary">
            View pricing
          </Link>
          <Link href="/compare/" className="btn-secondary">
            All comparisons
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
