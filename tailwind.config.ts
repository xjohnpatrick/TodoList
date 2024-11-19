import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        purple: {
          DEFAULT: "#d3e2f2",
          100: "#6a7fc1",
          200: "#4a5989",
          300: "#262c40",
          400: "#414e6e",
        },
        gray: {
          DEFAULT: "#596379",
          100: "#596379",
        },
        white: {
          DEFAULT: "#ffffff",
          50: "#d3e2f2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
