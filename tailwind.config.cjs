/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: colors.slate[800],
        titleForegroundColor: colors.white,
        normalForegroundColor: colors.white,
      },
    },
  },
  plugins: [],
};
