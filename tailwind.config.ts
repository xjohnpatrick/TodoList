import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|modal).js",
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
          300: "#414e6e",
          400: "#262c40",
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
  plugins: [nextui()],
} satisfies Config;
