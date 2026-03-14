import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        accent: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#0F3460", // Deep Navy Blue
        secondary: "#16213E", // Slate/Dark Blue
        accent: "#E94560", // Coral Red
        teal: {
          400: "#2dd4bf", // Soft Teal
          500: "#14b8a6", // Standard Teal
          600: "#008080", // Medical Tint Teal
        },
        surface: "#F8F9FA",
        "surface-alt": "#F3F4F6",
      },
      backgroundImage: {
        "gradient-mint": "linear-gradient(135deg, #F0FDFA 0%, #FFFFFF 100%)",
      },
      borderRadius: {
        "4xl": "24px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 15px rgba(0, 128, 128, 0.3)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;