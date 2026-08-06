import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { brand, productPages } from "@/lib/content";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";

type ProductKey = keyof typeof productPages;

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = productPages[slug as ProductKey];
    if (!page) return { title: "Product" };
    return {
      title: page.seoTitle,
      description: page.seoDescription,
      alternates: { canonical: `/products/${slug}` },
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = productPages[slug as ProductKey];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.hero} />
      <section className="section-pad bg-white">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-ink-mute md:text-lg">{page.body}</p>
            <ul className="mt-8 space-y-3">
              {page.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary">
                {brand.cta.primary}
              </Link>
              <Link href="/products" className="btn-secondary">
                All products
              </Link>
            </div>
          </div>
          <FeatureScreen variant={page.screen} />
        </div>
      </section>
      <FaqSection />
      <FinalCta />
    </>
  );
}
