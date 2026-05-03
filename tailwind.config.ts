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
        bg: "#0a0a0f",
        "bg-2": "#14141c",
        ink: "#f4f1ea",
        "ink-soft": "#a8a59e",
        accent: "#ff5722",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
