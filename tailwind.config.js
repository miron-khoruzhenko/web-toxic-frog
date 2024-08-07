/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        // -webkit-linear-gradient(#84FE0A, #80FF95)
        'green-grad' : 'linear-gradient(90deg, #84FE0A 0%, #80FF95 100%)',
      }
    },
  },
  plugins: [],
}