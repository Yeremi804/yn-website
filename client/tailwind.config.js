/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Sea Foam Green Palette
        'brand-bg': '#50C878',
        //light green palette for cards and sections
        'brand-cds': '#D9F2DD',
        //Goldn Palette
        'brand-bt': '#ffcf40',
        //Black Palette
        'brand-text': '#2D4F44',
        //Boundary Palette
        'brand-boundary': '#1c1c1c',
        //white palette text
        'brand-text-light': '#f5f5f5',
        //ruby palette
        'brand-notify': '#960000'
      },
    },
  },
  plugins: [],
}