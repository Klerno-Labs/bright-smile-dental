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
          DEFAULT: "#0E3A53", // Deep Navy
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4CA1A3", // Muted Teal
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#FFFFFF",
        },
        background: {
          DEFAULT: "#F9FAFB", // Off-white
          surface: "#FFFFFF", // Pure white
        },
        text: {
          main: "#4B5563", // Cool Grey
          heading: "#0E3A53",
          muted: "#9CA3AF",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(14, 58, 83, 0.05), 0 2px 4px -1px rgba(14, 58, 83, 0.03)',
        'hover': '0 20px 25px -5px rgba(14, 58, 83, 0.1), 0 10px 10px -5px rgba(14, 58, 83, 0.04)',
        'modal': '0 25px 50px -12px rgba(14, 58, 83, 0.25)',
      },
      borderRadius: {
        'lg': '0.5rem',   // 8px
        'xl': '0.75rem',  // 12px
        '2xl': '1.5rem',  // 24px
      }
    },
  },
  plugins: [],
};
export default config;