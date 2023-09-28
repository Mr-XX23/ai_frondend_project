/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: [ "Satoshi", "Sans-serif"],
        inter : ["Inter", "sans-serif"],
       }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}