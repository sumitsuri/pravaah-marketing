"use client";

import { useEffect, useState } from "react";
import { painPoints } from "@/lib/content";
import { painVisuals, tones } from "@/components/home/tones";

const short: Record<string, string> = {
  profit: "Profit",
  desk: "Billing",
  retention: "Guests",
  staff: "Staff",
  stock: "Stock",
  local: "Google",
};

/**
 * Floating module dock (cashfree.com-style bottom pill): appears after the hero, hides near the footer,
 * and jumps to the matching problem → fix tab via its #problem-<id> anchor.
 */
export function ModuleDock() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      const nearEnd = footer ? footer.getBoundingClientRect().top < window.innerHeight + 40 : false;
      setShow(window.scrollY > window.innerHeight * 0.9 && !nearEnd);
    };
    const onHash = () => setActive(window.location.hash.replace("#problem-", "") || null);
    onScroll();
    onHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <nav
      aria-label="Jump to a problem we solve"
      className={`fixed bottom-4 left-4 right-20 z-40 transition duration-300 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <ul className="scroll-rail flex gap-1 overflow-x-auto rounded-full border border-white/60 bg-white/85 p-1.5 shadow-premium-lg backdrop-blur-xl">
        {painPoints.map((p) => {
          const v = painVisuals[p.id];
          const Icon = v.icon;
          const on = active === p.id;
          return (
            <li key={p.id} className="shrink-0">
              <a
                href={`#problem-${p.id}`}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                  on ? "bg-brand text-white" : "text-ink-soft hover:bg-surface-muted"
                }`}
              >
                <span className={`flex h-5 w-5 items-center justify-center rounded-full ${on ? "bg-white/20 text-white" : tones[v.tone].tile}`}>
                  <Icon className="h-3 w-3" aria-hidden />
                </span>
                {short[p.id]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
