import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
          50: "#373e53",
        },
        white: {
          DEFAULT: "#ffffff",
          50: "#f2f7fb",
          100: "#d3e2f2",
        },
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
