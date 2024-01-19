/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackTheme: "#8A8A8A",
        greenTheme: "#279D71 "
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
