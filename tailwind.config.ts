import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: {
          50: "#f0f5ff",
          100: "#e0eaff",
          200: "#c7d9fe",
          300: "#a4bffc",
          400: "#819bf9",
          500: "#5e74f3",
          600: "#4151e8",
          700: "#3141cf",
          800: "#2935a6",
          900: "#273282",
          950: "#121a42",
        },
      },
    },
  },
  plugins: [],
};
export default config;
