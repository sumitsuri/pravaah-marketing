"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  applyThemeToDocument,
  DEFAULT_MARKETING_THEME,
  getMarketingTheme,
  STORAGE_KEY,
  type MarketingTheme,
  type MarketingThemeId,
  marketingThemes,
  themeToCssVars,
} from "@/lib/marketing-theme";

type MarketingThemeContextValue = {
  themeId: MarketingThemeId;
  theme: MarketingTheme;
  cssVars: Record<string, string>;
  setThemeId: (id: MarketingThemeId) => void;
  resetTheme: () => void;
  themes: typeof marketingThemes;
};

const MarketingThemeContext = createContext<MarketingThemeContextValue | null>(null);

function readInitialTheme(): MarketingThemeId {
  return DEFAULT_MARKETING_THEME;
}

export function MarketingThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<MarketingThemeId>(DEFAULT_MARKETING_THEME);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = readInitialTheme();
    setThemeIdState(id);
    applyThemeToDocument(getMarketingTheme(id));
    setReady(true);
  }, []);

  const setThemeId = useCallback((id: MarketingThemeId) => {
    setThemeIdState(id);
    applyThemeToDocument(getMarketingTheme(id));
  }, []);

  const resetTheme = useCallback(() => {
    setThemeId(DEFAULT_MARKETING_THEME);
  }, [setThemeId]);

  const theme = getMarketingTheme(themeId);
  const cssVars = useMemo(() => themeToCssVars(theme), [theme]);

  const value = useMemo(
    () => ({ themeId, theme, cssVars, setThemeId, resetTheme, themes: marketingThemes }),
    [themeId, theme, cssVars, setThemeId, resetTheme],
  );

  if (!ready) {
    return <MarketingThemeContext.Provider value={value}>{children}</MarketingThemeContext.Provider>;
  }

  return <MarketingThemeContext.Provider value={value}>{children}</MarketingThemeContext.Provider>;
}

export function useMarketingTheme() {
  const ctx = useContext(MarketingThemeContext);
  if (!ctx) throw new Error("useMarketingTheme must be used within MarketingThemeProvider");
  return ctx;
}
