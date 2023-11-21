/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFF5EC",
        titleForegroundColor: "#3D4139",
        normalForegroundColor: "#343434",
      },
    },
  },
  plugins: [],
};
