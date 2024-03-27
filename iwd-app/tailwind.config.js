/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        customh1: "1.3em",
      },
      padding: {
        woman: "13vw",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      custom: ["Rock Salt"],
    },
    colors: {
      "custom-purple": "#165185",
    },
  },
  plugins: [],
}