/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        baseGray: "#6B6B6B",
        darkGray: "#515151",
        lightGray: "#7B7B7B",
        primary: "#F8AF2A",
        secondary: "#AE410A",
      },
      fontFamily:{
        judson: ["Judson", "sans-serif"],
        sansita: ["Sansita", "sans-serif"],
      }
    },
  },
  plugins: [],
}