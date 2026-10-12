import { Check, Minus, X } from "lucide-react";
import type { EdgeValue } from "@/lib/content";

/** One comparison value — shared by the desktop table and the mobile compare view. */
export function EdgeCell({ value, highlight }: { value: EdgeValue; highlight?: boolean }) {
  if (value === "yes")
    return (
      <span className={`inline-flex items-center gap-1 font-semibold ${highlight ? "text-brand" : "text-win"}`}>
        <Check className="h-4 w-4 shrink-0" aria-hidden /> Yes
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center gap-1 text-ink-faint">
        <X className="h-4 w-4 shrink-0" aria-hidden /> No
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center gap-1 text-ink-mute">
        <Minus className="h-4 w-4 shrink-0" aria-hidden /> Some
      </span>
    );
  return <span className={highlight ? "font-semibold text-brand" : "text-ink-mute"}>{value}</span>;
}
