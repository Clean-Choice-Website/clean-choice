/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoGreen: "#c4d951",
        logoGreenHover: "#b0c348",
      },
    },
  },
  plugins: [],
};
