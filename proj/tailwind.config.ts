import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#B3261E",
        ink: "#4A1210",
        cream: "#F4E7C5",
        paper: "#EFDDB0",
        mustard: "#F9C80E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      boxShadow: {
        hard: "8px 8px 0 #B3261E",
        "hard-lg": "12px 12px 0 #B3261E",
        btn: "4px 4px 0 #4A1210",
      },
    },
  },
  plugins: [],
};
export default config;
