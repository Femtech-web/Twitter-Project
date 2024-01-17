/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#121212",
        grayTheme: "#F7F7F7",
        purpleTheme: "#A259FF",
      }
    },
    screens: {
      'lg': '912px',
      'sm': '640px',
      'md': '768px',
    }
  },
  plugins: [],
}
