import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F1F3F5", // soft blue-grey off-white — primary background
          raised: "#FFFFFF",
          sunken: "#E7EBEF",
        },
        ink: {
          DEFAULT: "#141A24", // near-black charcoal-navy — primary text
          soft: "#4B5563",
          faint: "#8A94A3",
        },
        marque: {
          50: "#EAF1FF",
          100: "#CFE0FF",
          300: "#7FA8F2",
          500: "#2E5FD9", // ignition blue — CTAs, links, active states
          600: "#1F4BC2",
          700: "#183C9E",
          800: "#152E72", // marque blue — headline accents, dark panels
          900: "#101E45", // deep marque — dark hero panel
        },
        silver: {
          200: "#DCE1E7",
          300: "#C7CED7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(20,26,36,0.04), 0 8px 24px -8px rgba(20,26,36,0.12)",
        lift: "0 2px 4px rgba(20,26,36,0.06), 0 16px 40px -12px rgba(21,46,114,0.18)",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
