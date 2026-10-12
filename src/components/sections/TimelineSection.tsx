import { GoLiveCard } from "@/components/GoLive";

export function TimelineSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Go-live</p>
          <h2 className="h-section mt-3">Live the same day — not after a six-month programme</h2>
          <p className="lede mt-4">Set up with you in about an hour. Your first GST bill goes out on WhatsApp the same day.</p>
        </div>
        <div className="mt-10">
          <GoLiveCard layout="wide" />
        </div>
      </div>
    </section>
  );
}
