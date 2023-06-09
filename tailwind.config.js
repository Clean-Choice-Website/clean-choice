/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoGreen: "#497429",
        logoGreenHover: "#5b9133",
        ButtonBlackHover: "#273345",
      },
    },
  },
  plugins: [],
};
