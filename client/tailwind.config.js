/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#808080",
        "primary-dark": "#00070A",
        "primary-light": "#E4F1FB",
      },
      fontFamily: {
        comingsoon: ["Coming Soon", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        patua: ["Patua One", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        gloria: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  plugins: [],
};
