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
        primary: "#0F3460", // Deep Navy Blue
        secondary: "#16213E", // Slate/Dark Blue
        accent: "#E94560", // Coral Red
        "medical-tint": "#008080", // Teal
        surface: "#F8F9FA", // Off-white
        "surface-alt": "#F3F4F6", // Light Grey
        border: "#E5E7EB",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-montserrat)", "sans-serif"],
      },
      spacing: {
        "section-gap": "120px",
        "card-padding": "40px",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 15px rgba(0, 128, 128, 0.3)",
      },
      borderRadius: {
        "large": "24px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;