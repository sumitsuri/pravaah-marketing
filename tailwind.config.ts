import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F1C",
          soft: "#1A3330",
          mute: "#3D5652",
        },
        mist: {
          DEFAULT: "#E8F0EE",
          deep: "#D5E4E0",
          soft: "#F3F7F6",
        },
        jade: {
          DEFAULT: "#0F6B5C",
          bright: "#148F7A",
          soft: "#7BC4B2",
          glow: "#A8D9CE",
        },
        amber: {
          DEFAULT: "#C4823A",
          soft: "#E8C49A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "flow-hero":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(123,196,178,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(196,130,58,0.12), transparent 50%), linear-gradient(165deg, #F3F7F6 0%, #E8F0EE 45%, #D5E4E0 100%)",
        "flow-band":
          "linear-gradient(120deg, rgba(15,107,92,0.08), rgba(123,196,178,0.18), rgba(15,107,92,0.06))",
      },
      keyframes: {
        "flow-drift": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-10px) translateX(6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "flow-drift": "flow-drift 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "draw-line": "draw-line 1.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
