import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e27",
        foreground: "#e4e4e7",
        surface: "#151935",
        muted: "#a1a1aa",
        border: "#1f2547",
        accent: {
          DEFAULT: "#B8955A",
          hover: "#c9a66a",
          muted: "#8a6f43",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15)",
        "card-hover":
          "0 4px 8px rgba(0,0,0,0.35), 0 12px 32px rgba(184,149,90,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
