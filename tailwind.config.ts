import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F0",
        foreground: "#2A2823",
        surface: "#F0EAD9",
        muted: "#6B6660",
        border: "#D8D0BD",
        accent: {
          DEFAULT: "#5F7A52",
          hover: "#6F8C61",
          muted: "#4A6041",
        },
        tan: "#B5A380",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(42,40,35,0.06), 0 4px 12px rgba(42,40,35,0.06)",
        "card-hover":
          "0 4px 8px rgba(42,40,35,0.08), 0 12px 32px rgba(95,122,82,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
