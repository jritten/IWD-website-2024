const { hexToRgb } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
    fontSize: {
        '10px': '10px',
        '12px':'12px',
    },
    colors: {
      "custom-purple": "#165185",
    },
  },
  plugins: [],
};
