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
      colors: {
        primary: "#38c748",
        hovercolr: "#30a93d",
        bgcolor: "#000000",
        secondary: "#61d76f",
        textcolor: "#ffffff",
        blacktext: "#000000",
        thircolor: "#ccf626",
        textgray: "#5b5b5b",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebasNeue: ["var(--bebasNeue)"],
      },
    },
  },
  plugins: [],
};
export default config;
