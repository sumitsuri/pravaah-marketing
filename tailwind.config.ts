import type { Config } from "tailwindcss";

/**
 * Single source of truth for marketing colours.
 * Brand violet matches the AntraHQ product app (`--brand: #7c3aed` family) so the site and
 * the app a buyer sees in a demo read as one brand. Every component uses these semantic tokens —
 * never raw hex — so a palette change is a one-file edit.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6D28D9",
          hover: "#5B21B6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          900: "#2E1065",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          mute: "#475569",
          faint: "#94A3B8",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          muted: "#F1F5F9",
          line: "#E2E8F0",
        },
        /** Secondary vibrant accent — gradients, highlights, salon warmth */
        accent: {
          DEFAULT: "#DB2777",
          soft: "#FCE7F3",
        },
        /**
         * Antra Gold has two tones — same 40° hue, tuned per background:
         *  DEFAULT/light: on dark & violet backgrounds (7.7:1 on midnight)
         *  dark ("Gold on Light"): on white & light backgrounds (5.1:1 on white) — never use DEFAULT for text on light.
         */
        gold: {
          DEFAULT: "#E3B04B",
          light: "#E3B04B",
          dark: "#92650C",
          soft: "#FBF3DC",
        },
        /** Problem / risk callouts and warning statuses */
        pain: {
          DEFAULT: "#BE123C",
          soft: "#FFF1F2",
        },
        /** Positive outcomes and "yes" cells */
        win: {
          DEFAULT: "#047857",
          soft: "#ECFDF5",
        },
        amber: {
          DEFAULT: "#B45309",
          soft: "#FEF3C7",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)",
        premium: "0 1px 2px rgba(15,23,42,0.04), 0 24px 48px -24px rgba(15,23,42,0.22)",
        "premium-lg": "0 2px 4px rgba(15,23,42,0.05), 0 40px 80px -32px rgba(15,23,42,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
