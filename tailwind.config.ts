import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056b3",
          dark: "#004494",
          light: "#e6f0fa",
        },
        secondary: {
          DEFAULT: "#00a8cc",
          dark: "#008cab",
        },
        accent: {
          DEFAULT: "#ff6b6b",
        },
        neutral: {
          bg: "#f8f9fa",
          surface: "#ffffff",
          text: {
            main: "#1a202c",
            body: "#4a5568",
            muted: "#a0aec0",
          },
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-opensans)", "sans-serif"],
      },
      spacing: {
        section: "5rem",
        "section-lg": "6.25rem",
      },
      borderRadius: {
        sm: "4px",
        md: "12px",
        lg: "24px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        blue: "0 4px 14px 0 rgba(0, 86, 179, 0.39)",
      },
    },
  },
  plugins: [],
};
export default config;