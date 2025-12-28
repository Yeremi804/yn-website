/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //naming for the background colors (mainly tesing/debugging)
        'brand-bg': '#B6D0E2',
        'brand-primary': '#B6D0E2',
        'brand-test': '#FF0000',
      },
    },
  },
  plugins: [],
}