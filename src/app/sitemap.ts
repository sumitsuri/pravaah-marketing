import type { MetadataRoute } from "next";
import { productPages } from "@/lib/content";
import { comparePages } from "@/lib/compare-pages";
import { resourceArticles } from "@/lib/resource-articles";

export const dynamic = "force-static";

const base = "https://antrahq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/demo",
    "/pricing",
    "/products",
    "/customers",
    "/resources",
    "/roi-calculator",
    "/branch-health-score",
    "/compare",
  ];

  const productRoutes = Object.keys(productPages).map((slug) => `/products/${slug}`);
  const compareRoutes = Object.keys(comparePages).map((slug) => `/compare/${slug}`);
  const solutionRoutes = ["/solutions/multi-branch", "/solutions/owners", "/solutions/managers"];

  const resourceRoutes = Object.keys(resourceArticles).map((slug) => `/resources/${slug}`);
  const all = [...staticRoutes, ...productRoutes, ...compareRoutes, ...solutionRoutes, ...resourceRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") || path.startsWith("/compare") ? 0.8 : 0.6,
  }));
}
