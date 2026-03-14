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
        primary: "#0F3460",
        secondary: "#16213E",
        accent: "#E94560",
        medical: "#008080",
        surface: "#F8F9FA",
        "surface-alt": "#F3F4F6",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-soft": "linear-gradient(135deg, #F0FDFA 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 15px rgba(0, 128, 128, 0.3)",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "24px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;