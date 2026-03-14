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
          DEFAULT: "#0E3A53", // Deep Navy/Teal
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4CA1A3", // Muted Teal
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold/Sand
          foreground: "#0E3A53",
        },
        background: "#F9FAFB", // Off-white
        surface: "#FFFFFF", // Pure white
        muted: "#9CA3AF", // Light grey
        "text-main": "#4B5563", // Cool Grey
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(14, 58, 83, 0.05), 0 2px 4px -1px rgba(14, 58, 83, 0.03)",
        hover: "0 20px 25px -5px rgba(14, 58, 83, 0.1), 0 10px 10px -5px rgba(14, 58, 83, 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;