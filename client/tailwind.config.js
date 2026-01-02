/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Emerald Green Palette
        'brand-bg': '#74C365',
        //light green palette for cards and sections
        'brand-cds': '#D9F2DD',
        //Goldn Palette
        'brand-bt': '#ffcf40',
        //Black Palette
        'brand-text': '#090909',
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