import {
  CalendarCheck,
  IndianRupee,
  MapPin,
  MapPinned,
  Package,
  ReceiptIndianRupee,
  Star,
  TrendingUp,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/** Colour tones used to give each problem / Autopilot routine its own identity. Full class strings so Tailwind keeps them. */
export const tones = {
  violet: { tile: "bg-brand-100 text-brand", ring: "ring-brand-200", scan: "#a78bfa", text: "text-brand" },
  sky: { tile: "bg-sky-100 text-sky-700", ring: "ring-sky-200", scan: "#38bdf8", text: "text-sky-700" },
  pink: { tile: "bg-pink-100 text-pink-700", ring: "ring-pink-200", scan: "#f472b6", text: "text-pink-700" },
  amber: { tile: "bg-amber-100 text-amber-700", ring: "ring-amber-200", scan: "#fbbf24", text: "text-amber-700" },
  emerald: { tile: "bg-emerald-100 text-emerald-700", ring: "ring-emerald-200", scan: "#34d399", text: "text-emerald-700" },
  orange: { tile: "bg-orange-100 text-orange-700", ring: "ring-orange-200", scan: "#fb923c", text: "text-orange-700" },
} as const;

export type Tone = keyof typeof tones;

export const painVisuals: Record<string, { icon: LucideIcon; tone: Tone }> = {
  profit: { icon: IndianRupee, tone: "violet" },
  desk: { icon: ReceiptIndianRupee, tone: "sky" },
  retention: { icon: Users, tone: "pink" },
  staff: { icon: MapPin, tone: "amber" },
  stock: { icon: Package, tone: "emerald" },
  local: { icon: MapPinned, tone: "orange" },
};

export const autopilotVisuals: Record<string, { icon: LucideIcon; tone: Tone }> = {
  booking: { icon: CalendarCheck, tone: "sky" },
  receipt: { icon: ReceiptIndianRupee, tone: "violet" },
  attendance: { icon: UserRoundCheck, tone: "amber" },
  stock: { icon: Package, tone: "emerald" },
  reputation: { icon: Star, tone: "pink" },
  profit: { icon: TrendingUp, tone: "orange" },
};
