const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        brown: {
          50: "#fcfaf7",
          100: "#f8f5f0",
          200: "#eee7d9",
          300: "#e4d8c1",
          400: "#d0bb93",
          500: "#6454ea",
          600: "#a98e5b",
          700: "#8d774c",
          800: "#715f3d",
          900: "#1d1d1b",
        },
      },
    },
  },
  plugins: [],
};
