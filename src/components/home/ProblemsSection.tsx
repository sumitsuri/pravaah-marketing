import { painPoints } from "@/lib/content";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { PainSolutions } from "@/components/home/PainSolutions";

const screenLabels: Record<string, string> = {
  pnl: "Branch P&L screen",
  walkin: "Walk-in billing screen",
  campaign: "WhatsApp campaign screen",
  attendance: "Verified attendance screen",
  inventory: "Branch inventory screen",
  localSpotlight: "Local Spotlight screen",
};

export function ProblemsSection() {
  // Mockups render on the server; the client tab component only toggles visibility.
  const screens = Object.fromEntries(
    painPoints.map((p) => [p.screen, <FeatureScreen key={p.screen} variant={p.screen} label={`${screenLabels[p.screen]} (demo data)`} />]),
  );

  return (
    <section id="problems" className="section-pad scroll-mt-16 bg-white">
      {painPoints.map((p) => (
        <span key={p.id} id={`problem-${p.id}`} className="block scroll-mt-16" aria-hidden />
      ))}
      <div className="container-wide">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">Problems we solve</p>
          <h2 className="h-section mt-3">Six leaks that quietly cost Indian salons money — and how AntraHQ fixes each one</h2>
          <p className="lede mt-4">
            Pick the problem that sounds most like your week. Each fix is a module you can see working in a 30-minute demo.
          </p>
        </div>
        <PainSolutions screens={screens} />
      </div>
    </section>
  );
}
