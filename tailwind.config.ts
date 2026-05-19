import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#020617",
        ocean: "#0EA5E9",
        gold: "#F59E0B",
        crimson: "#EF4444",
        mist: "#94A3B8"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(14, 165, 233, 0.28)",
        gold: "0 0 44px rgba(245, 158, 11, 0.25)",
        crimson: "0 0 36px rgba(239, 68, 68, 0.20)"
      },
      backgroundImage: {
        "grand-line":
          "radial-gradient(circle at 15% 20%, rgba(14,165,233,.28), transparent 28%), radial-gradient(circle at 80% 12%, rgba(245,158,11,.18), transparent 24%), linear-gradient(135deg, #020617 0%, #061527 46%, #0b1120 100%)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(18px, -16px, 0) rotate(2deg)" }
        },
        wave: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(12%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" }
        },
        typeCaret: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" }
        }
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        wave: "wave 14s ease-in-out infinite alternate",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        typeCaret: "typeCaret 1s step-end infinite"
      }
    }
  },
  plugins: []
};

export default config;
