import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FBFF",
        section: "#F5FAFF",
        accent: "#2563EB",
        teal: "#14B8A6",
        lime: "#A3E635",
        yellow: "#FACC15"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(37, 99, 235, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
