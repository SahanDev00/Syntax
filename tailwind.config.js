/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xr': '1920px',
        '4xr': '2560px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"]
    },
  },
  plugins: [],
}

