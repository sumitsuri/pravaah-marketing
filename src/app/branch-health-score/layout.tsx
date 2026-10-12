import { pageMetadata } from "@/lib/seo";
import { ToolExplainer } from "@/components/ToolExplainer";

export const metadata = pageMetadata({
  title: "Salon Branch Health Score — Free Self-Assessment",
  description:
    "Score your salon chain's reporting, attendance, CRM and retention readiness in two minutes, then see which AntraHQ modules close the gaps.",
  path: "/branch-health-score/",
});

export default function BranchHealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolExplainer
        name="Branch health score"
        path="/branch-health-score/"
        intro="A two-minute self-assessment for salon and spa owners. Rate four habits that separate well-run chains from struggling ones, and get a 0–100 readiness score with the area to fix first."
        method={[
          "P&L cadence — how often you see profit by branch, not just sales.",
          "Attendance trust — whether punches can be verified before payroll.",
          "CRM discipline — whether every bill builds a guest profile you can use.",
          "Retention rhythm — whether you bring quiet guests back on a schedule.",
          "Each is rated 0–3. The score is your total as a percentage: 75+ is a strong foundation, 50–74 growing discipline, under 50 needs structure.",
        ]}
        faqs={[
          { q: "What is a branch health score?", a: "A directional measure of how well a salon chain runs four core habits: branch P&L reviews, verified attendance, guest CRM and retention." },
          { q: "Is my data saved?", a: "No. The score is calculated in your browser and nothing you enter is stored." },
          { q: "How do I improve my score?", a: "Start with the lowest-rated habit — usually branch P&L or attendance — and put it on a weekly rhythm." },
        ]}
        links={[
          { href: "/resources/multi-branch-pnl-checklist", label: "Multi-branch P&L checklist" },
          { href: "/resources/salon-attendance-guide", label: "Salon attendance guide" },
          { href: "/solutions/multi-branch", label: "Multi-branch solution" },
        ]}
      />
    </>
  );
}
