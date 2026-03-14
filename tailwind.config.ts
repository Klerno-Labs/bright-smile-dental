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
        primary: "#0E3A53",
        secondary: "#4CA1A3",
        accent: "#D4AF37",
        surface: "#FFFFFF",
        background: "#F9FAFB",
        textMain: "#4B5563",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        lg: "8px",
        xl: "12px",
        "2xl": "24px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(14, 58, 83, 0.05), 0 2px 4px -1 rgba(14, 58, 83, 0.03)",
        hover: "0 20px 25px -5px rgba(14, 58, 83, 0.1), 0 10px 10px -5px rgba(14, 58, 83, 0.04)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;