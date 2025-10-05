/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        swGreen: "#7DB800",
        swBlack: "#212121",
        swWhite: "#FFFFFF",
        swGray: "#C4C4C4",
        swOrange: "#FF9900",
        swLight: "#EBEFE5",
      },
    },
  },
  plugins: [],
};
