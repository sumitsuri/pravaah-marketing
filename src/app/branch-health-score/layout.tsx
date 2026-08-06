import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branch health score for multi-branch salon chains",
  description:
    "Self-assess reporting, attendance, CRM, and retention readiness across your salon chain. Directional branch health score — then book a multi-branch growth audit.",
  alternates: { canonical: "/branch-health-score" },
};

export default function BranchHealthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
