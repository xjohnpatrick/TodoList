import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue": "#262c40",
        "lightBlue": "#4a5989",
        "lightPurple": "#6a7fc1",
        "white": "#f2f7fb",
        "shadow": "#596379",
        "gray": "#8098bb",
        "darkGray": "#373e53",
        "sbBody": "#d3e2f2",
        "completed": "#414e6e",
        "logoLight": "#6374ae",
        "logoDark": "#9cb6dd",
        "btnPage" : "#4772FB"
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [
    nextui(),
  ],
  darkMode: "class",
};
export default config;