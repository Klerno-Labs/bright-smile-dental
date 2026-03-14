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
        primary: "#0F3460", // Deep Navy
        secondary: "#16213E", // Slate
        accent: "#E94560", // Coral Red
        medical: "#008080", // Teal
        surface: "#F8F9FA", // Off-white
        "surface-alt": "#F3F4F6",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-mint': 'linear-gradient(135deg, #F0FDFA 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(0, 128, 128, 0.3)',
      },
      borderRadius: {
        'medium': '12px',
        'large': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;