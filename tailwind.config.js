/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand, sans-serif"]
      }
    },
    screens: {
      xs: "250px",
      sm: "640px",
      md: "950px",
      lg: "1280px",
      xl: "1600px",
    }
  },
  plugins: [],
}

