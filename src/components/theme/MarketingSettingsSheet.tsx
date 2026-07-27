"use client";

import { useEffect, useState } from "react";
import { Moon, Palette, RotateCcw, Sun, X } from "lucide-react";
import {
  DEFAULT_MARKETING_THEME,
  applyThemeToDocument,
  getMarketingTheme,
  getThemesByCategory,
  marketingThemeGroups,
  marketingThemeList,
  type MarketingThemeId,
} from "@/lib/marketing-theme";
import { useMarketingTheme } from "./MarketingThemeProvider";

function ThemePreviewCard({ themeId }: { themeId: MarketingThemeId }) {
  const theme = getMarketingTheme(themeId);
  const { site, section } = theme;

  return (
    <div className="overflow-hidden rounded-xl border" style={{ borderColor: site.border, background: site.pageBg }}>
      <div
        className="flex items-center gap-2 border-b px-3 py-2"
        style={{ borderColor: site.border, background: site.headerBg }}
      >
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold text-white"
          style={{ background: site.primary }}
        >
          A
        </div>
        <div>
          <p className="text-[10px] font-semibold" style={{ color: site.text }}>
            Antrahq
          </p>
          <p className="text-[9px]" style={{ color: site.textMuted }}>
            {theme.label}
          </p>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="rounded-lg p-2.5" style={{ background: section.background }}>
          <p className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: section.accent }}>
            Dark section
          </p>
          <p className="mt-1 text-[10px]" style={{ color: section.textMuted }}>
            AI agents · connected graph
          </p>
        </div>
        <button
          type="button"
          className="w-full rounded-lg py-2 text-[10px] font-semibold text-white"
          style={{ background: site.primary }}
        >
          Primary action
        </button>
      </div>
    </div>
  );
}

export function MarketingSettingsButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl p-2 text-[var(--mkt-site-text-muted)] transition hover:bg-[color-mix(in_srgb,var(--mkt-primary)_12%,transparent)] hover:text-[var(--mkt-primary)]"
      aria-label="Appearance settings"
      data-testid="marketing-settings-button"
    >
      <Palette className="h-5 w-5" />
    </button>
  );
}

export function MarketingSettingsSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { themeId, setThemeId, resetTheme } = useMarketingTheme();
  const [previewId, setPreviewId] = useState<MarketingThemeId>(themeId);

  useEffect(() => {
    if (open) setPreviewId(themeId);
  }, [open, themeId]);

  function selectPreview(id: MarketingThemeId) {
    setPreviewId(id);
    applyThemeToDocument(getMarketingTheme(id));
  }

  function handleApply() {
    setThemeId(previewId);
    onClose();
  }

  function handleCancel() {
    applyThemeToDocument(getMarketingTheme(themeId));
    onClose();
  }

  function handleReset() {
    setPreviewId(DEFAULT_MARKETING_THEME);
    applyThemeToDocument(getMarketingTheme(DEFAULT_MARKETING_THEME));
    resetTheme();
  }

  if (!open) return null;

  const previewTheme = getMarketingTheme(previewId);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={handleCancel}
        aria-label="Close appearance settings"
      />
      <div
        className="relative flex h-full w-full max-w-md flex-col border-l shadow-2xl"
        style={{ borderColor: "var(--mkt-site-border)", background: "var(--mkt-page-bg)" }}
        data-testid="marketing-settings-sheet"
      >
        <div
          className="flex items-center justify-between border-b px-4 py-4"
          style={{ borderColor: "var(--mkt-site-border)" }}
        >
          <div>
            <h2 className="font-display text-lg font-semibold" style={{ color: "var(--mkt-site-text)" }}>
              Appearance
            </h2>
            <p className="mt-0.5 text-xs" style={{ color: "var(--mkt-site-text-muted)" }}>
              {marketingThemeList.length} colour themes · preview before publish
            </p>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-xl p-2 transition hover:bg-black/5"
            style={{ color: "var(--mkt-site-text-muted)" }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-4">
          {/* Quick swatch picker — admin-style */}
          <section className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--mkt-site-text-muted)" }}>
              Quick pick
            </p>
            <div className="flex flex-wrap gap-2">
              {marketingThemeList.map((t) => {
                const active = previewId === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    title={t.label}
                    onClick={() => selectPreview(t.id)}
                    className={`h-9 w-9 rounded-full border-2 transition hover:scale-110 ${
                      active ? "scale-110 ring-2 ring-offset-2" : "border-transparent"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${t.swatch} 50%, ${t.section.accent} 50%)`,
                      ...(active ? { boxShadow: `0 0 0 2px ${t.swatch}` } : {}),
                    }}
                    aria-label={t.label}
                    aria-current={active ? "true" : undefined}
                  />
                );
              })}
            </div>
          </section>

          {/* Grouped theme list */}
          {marketingThemeGroups.map((group) => {
            const items = getThemesByCategory(group.id);
            if (items.length === 0) return null;
            return (
              <section key={group.id} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--mkt-site-text-muted)" }}>
                  {group.label}
                </p>
                <div className="space-y-2">
                  {items.map((t) => {
                    const active = previewId === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => selectPreview(t.id)}
                        className="flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition hover:border-black/15"
                        style={{
                          borderColor: active ? t.site.primary : "var(--mkt-site-border)",
                          background: active
                            ? `color-mix(in srgb, ${t.site.primary} 8%, ${t.site.pageBg})`
                            : "transparent",
                          ...(active ? { boxShadow: `0 0 0 2px ${t.site.primary}` } : {}),
                        }}
                      >
                        <span
                          className="h-9 w-9 shrink-0 rounded-lg border"
                          style={{
                            background: `linear-gradient(145deg, ${t.site.pageBg} 40%, ${t.swatch} 100%)`,
                            borderColor: t.site.border,
                          }}
                          aria-hidden
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold" style={{ color: "var(--mkt-site-text)" }}>
                            {t.label}
                          </span>
                          <span className="block truncate text-[11px]" style={{ color: "var(--mkt-site-text-muted)" }}>
                            {t.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}

          <section className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--mkt-site-text-muted)" }}>
              Preview
            </p>
            <ThemePreviewCard themeId={previewId} />
          </section>

          <section
            className="rounded-xl border p-3 text-xs leading-relaxed"
            style={{ borderColor: "var(--mkt-site-border)", color: "var(--mkt-site-text-muted)" }}
          >
            <div className="flex items-center gap-2 font-semibold" style={{ color: "var(--mkt-site-text)" }}>
              {previewTheme.section.background === previewTheme.site.pageBg ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
              {previewTheme.label}
            </div>
            <p className="mt-2">
              Primary <span className="font-mono">{previewTheme.site.primary}</span> · Accent{" "}
              <span className="font-mono">{previewTheme.section.accent}</span>
            </p>
          </section>
        </div>

        <div
          className="space-y-2 border-t p-4"
          style={{
            borderColor: "var(--mkt-site-border)",
            background: "color-mix(in srgb, var(--mkt-primary) 4%, var(--mkt-page-bg))",
          }}
        >
          <button type="button" onClick={handleApply} className="btn-primary w-full">
            Apply theme
          </button>
          <div className="flex gap-2">
            <button type="button" onClick={handleReset} className="btn-secondary flex-1 !py-2.5 text-xs">
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
            <button type="button" onClick={handleCancel} className="btn-secondary flex-1 !py-2.5 text-xs">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
