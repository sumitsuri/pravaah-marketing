import { pageMetadata } from "@/lib/seo";
import { ToolExplainer } from "@/components/ToolExplainer";

export const metadata = pageMetadata({
  title: "Salon Revenue Opportunity Calculator",
  description:
    "Estimate the desk time you save and the WhatsApp win-back revenue you could recover across your salon branches in India. Free calculator.",
  path: "/roi-calculator/",
});

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolExplainer
        name="Revenue opportunity calculator"
        path="/roi-calculator/"
        intro="A quick, directional estimate of two levers salon software can move: time your front desk saves on every bill, and revenue from guests you win back on WhatsApp. Change the sliders to match your chain; the numbers update instantly."
        method={[
          "Desk hours saved per month = branches × daily walk-ins × minutes saved per bill × 26 working days ÷ 60.",
          "Admin value = desk hours saved × a notional ₹350 per hour of staff time.",
          "Win-back visits = branches × daily walk-ins × 26 × the share of quiet guests you reactivate × 15% (a conservative response assumption).",
          "Win-back revenue = win-back visits × your average ticket. The monthly opportunity is admin value plus win-back revenue.",
        ]}
        faqs={[
          { q: "How accurate is the salon ROI estimate?", a: "It's a directional model with conservative assumptions. Your actual results depend on branch count, service mix and how consistently the team uses the software — validate with your own numbers in a demo." },
          { q: "Why 26 working days?", a: "Most Indian salons are open six days a week, so the model uses 26 working days per month." },
          { q: "What counts as a win-back?", a: "A guest who hadn't visited for a while and returns after a WhatsApp message — see the WhatsApp win-back playbook for how to run these." },
        ]}
        links={[
          { href: "/resources/whatsapp-winback-playbook", label: "WhatsApp win-back playbook" },
          { href: "/products/billing", label: "Walk-in billing" },
          { href: "/pricing", label: "Pricing" },
        ]}
      />
    </>
  );
}
