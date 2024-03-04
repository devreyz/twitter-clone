/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2",
        secundary: "#344ff5",
        accent: "#2345d9",
        background: "",
        textcolor: "#0f1419",
        heading: "",
        link: "",
        border: "#ebeef0",
        success: colors.green,
      },
    },
  },
  plugins: [],
};
