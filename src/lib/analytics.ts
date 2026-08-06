/** Client-side conversion helpers — no-ops when IDs are unset or on server. */

export type AnalyticsEvent =
  | "growth_audit_submit"
  | "whatsapp_click"
  | "roi_calculator_cta"
  | "branch_health_cta"
  | "resource_cta";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (action: string, data?: Record<string, unknown>) => void;
  }
}

export function trackEvent(name: AnalyticsEvent, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", name, params);

  window.fbq?.("trackCustom", name, params);

  if (name === "growth_audit_submit") {
    window.fbq?.("track", "Lead", params);
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}
