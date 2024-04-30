import { Megrim } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        megrim: ["var(--font-megrim)"],
      },
      colors: {
        primary: {
          "black-90": "#454545",
          "white-90": "#FAFAFA",
          "gray-80": "#B9B9B9",
          "gray-100": "#EEE",
          "gray-90": "#979797",
        },
        secondary: {
          "green-100": "#829B7E",
        },
      },
      boxShadow: {
        shadowOne: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        shadowTwo: "0px 4px 30px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        "white-90": "#FAFAFA",
        "black-80": "#191919",
        "brown-100": "#D87D4A",
        "peach-90": "#FBAF85",
      },
    },
  },
  plugins: [],
};
export default config;
