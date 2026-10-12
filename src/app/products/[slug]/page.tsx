import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { FinalCta } from "@/components/sections/FinalCta";
import { nav, painPoints, productPages } from "@/lib/content";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { productSeo } from "@/lib/product-seo";
import { resourceArticles } from "@/lib/resource-articles";
import { compareNav } from "@/lib/compare-pages";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";

type ProductKey = keyof typeof productPages;

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages[slug as ProductKey];
  if (!page) return { title: "Product" };
  const canonicalSlug = "canonicalSlug" in page ? page.canonicalSlug : slug;
  return pageMetadata({
    title: page.seoTitle,
    absoluteTitle: true,
    description: page.seoDescription,
    path: `/products/${canonicalSlug}/`,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages[slug as ProductKey];
  if (!page) notFound();

  const href = `/products/${slug}`;
  const solves = painPoints.filter((p) => p.modules.some((m) => m.href === href));
  const related = nav.products.filter((p) => p.href !== href).slice(0, 4);
  const seo = productSeo[slug];
  const guides = (seo?.guides ?? []).map((g) => resourceArticles[g]).filter(Boolean);

  return (
    <>
      {seo?.faqs?.length ? <JsonLd data={faqJsonLd(seo.faqs)} /> : null}
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.hero}
        crumbs={[
          { name: "Products", path: "/products/" },
          { name: page.title, path: `${href}/` },
        ]}
      />

      <section className="section-pad bg-white">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h-section !text-3xl">What it does</h2>
            <p className="body-copy mt-4 !text-base">{page.body}</p>
            <ul className="mt-8 space-y-3">
              {page.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <FeatureScreen variant={page.screen} elevated label={`${page.title} screen (demo data)`} />
        </div>
      </section>

      {seo && (
        <section className="section-pad bg-white !pt-0">
          <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Who it&apos;s for</p>
              <h2 className="h-section mt-3 !text-3xl">Built for teams like yours</h2>
              <p className="body-copy mt-4 !text-base">{seo.forWho}</p>
            </div>
            <div>
              <p className="eyebrow">How it works</p>
              <ol className="mt-4 space-y-4">
                {seo.steps.map((st, i) => (
                  <li key={st.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{st.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-ink-mute">{st.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {solves.length > 0 && (
        <section className="section-pad bg-surface">
          <div className="container-wide">
            <p className="eyebrow">Problems it solves</p>
            <h2 className="h-section mt-3 !text-3xl">Why salon owners turn this on first</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {solves.map((p) => (
                <div key={p.id} className="card p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-pain">
                    <X className="h-3.5 w-3.5" aria-hidden /> The problem
                  </p>
                  <p className="mt-2 font-semibold text-ink">{p.pain}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-win">
                    <Check className="h-3.5 w-3.5" aria-hidden /> The fix
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad-sm bg-white">
        <div className="container-wide">
          <h2 className="font-display text-xl text-ink">Works together with</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="card card-hover group p-5">
                <span className="block font-semibold text-ink">{r.title}</span>
                <span className="mt-1 block text-sm text-ink-mute">{r.desc}</span>
                <span className="link-arrow mt-3">
                  Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {(guides.length > 0 || compareNav.length > 0) && (
        <section className="section-pad-sm bg-surface">
          <div className="container-wide grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-ink">Guides for salon owners</h2>
              <ul className="mt-4 space-y-2.5">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/resources/${g.slug}`} className="text-sm font-semibold text-brand hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl text-ink">Compare AntraHQ</h2>
              <ul className="mt-4 space-y-2.5">
                {compareNav.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm font-semibold text-brand hover:underline">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {seo?.faqs?.length ? <FaqSection faqs={seo.faqs} title={`${page.title}: questions`} /> : null}
      <FinalCta />
    </>
  );
}
