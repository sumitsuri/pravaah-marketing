import type { MetadataRoute } from "next";
import { productPages } from "@/lib/content";
import { comparePages } from "@/lib/compare-pages";
import { resourceArticles } from "@/lib/resource-articles";
import { absoluteUrl, CONTENT_UPDATED } from "@/lib/seo";

export const dynamic = "force-static";

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/demo/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/compare/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/customers/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/roi-calculator/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/branch-health-score/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
    ...["multi-branch", "owners", "managers"].map((s) => ({
      path: `/solutions/${s}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    // Pages that canonicalise elsewhere stay out of the sitemap.
    ...Object.entries(productPages)
      .filter(([, p]) => !("canonicalSlug" in p))
      .map(([slug]) => ({ path: `/products/${slug}/`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...Object.keys(comparePages).map((slug) => ({
      path: `/compare/${slug}/`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...Object.keys(resourceArticles).map((slug) => ({
      path: `/resources/${slug}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return entries.map((e) => ({
    url: absoluteUrl(e.path),
    lastModified: new Date(CONTENT_UPDATED),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
