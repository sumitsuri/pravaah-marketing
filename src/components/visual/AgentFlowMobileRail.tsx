"use client";

import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Node = {
  id: string;
  shortLabel: string;
  step: { title: string };
  Icon: LucideIcon;
};

type Props = {
  nodes: Node[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

/** Full-bleed snap carousel for mobile / tablet — touch scroll + auto-sync with active step. */
export function AgentFlowMobileRail({ nodes, activeIndex, onSelect }: Props) {
  const reduceMotion = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndexRef = useRef(activeIndex);
  const onSelectRef = useRef(onSelect);
  const programmaticScroll = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  activeIndexRef.current = activeIndex;
  onSelectRef.current = onSelect;

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const rail = railRef.current;
      const card = cardRefs.current[index];
      if (!rail || !card) return;

      programmaticScroll.current = true;
      const target = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
      rail.scrollTo({
        left: Math.max(0, target),
        behavior: reduceMotion ? "auto" : behavior,
      });

      window.setTimeout(() => {
        programmaticScroll.current = false;
      }, reduceMotion ? 0 : 450);
    },
    [reduceMotion],
  );

  /* Centre active card when step changes via auto-play or dot nav. */
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  /* Swipe → update active step from nearest card. */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    function onScroll() {
      if (programmaticScroll.current) return;
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);

      scrollEndTimer.current = setTimeout(() => {
        const center = rail!.scrollLeft + rail!.clientWidth / 2;
        let closest = 0;
        let minDist = Infinity;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(center - cardCenter);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });

        if (closest !== activeIndexRef.current) {
          onSelectRef.current(closest);
        }
      }, 100);
    }

    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, []);

  return (
    <div className="connected-story-mobile-rail-wrap lg:hidden">
      <div
        ref={railRef}
        className="connected-story-mobile-rail"
        role="tablist"
        aria-label="Insight story steps"
      >
        {nodes.map((node, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={node.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              onClick={() => {
                onSelect(i);
                scrollToIndex(i);
              }}
              className={`connected-story-mobile-card snap-center shrink-0 rounded-2xl border p-4 text-left transition ${
                isActive ? "connected-story-mobile-card--active" : "opacity-85"
              }`}
              aria-selected={isActive}
              aria-current={isActive ? "step" : undefined}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 ${
                    isActive
                      ? "border-[var(--mkt-accent)] bg-[var(--mkt-node-active)] text-[var(--mkt-accent)]"
                      : "border-[var(--mkt-card-border)] bg-[var(--mkt-node-idle)] text-[var(--mkt-text-muted)]"
                  }`}
                >
                  <node.Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--mkt-accent)]">
                    {node.shortLabel}
                  </p>
                  <p className="mt-0.5 font-display text-base leading-snug text-[var(--mkt-text)] line-clamp-2">
                    {node.step.title}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="connected-story-mobile-rail-hint">Swipe the story · tap a card</p>
    </div>
  );
}
