import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon Branch Health Score — Free Self-Assessment",
  description:
    "Score your salon chain's reporting, attendance, CRM and retention readiness in two minutes, then see which AntraHQ modules close the gaps.",
  path: "/branch-health-score/",
});

export default function BranchHealthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
