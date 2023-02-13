/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-snow': '#FCF7F8',
        'custom-aquamarine': '#5DFFBE',
        'custom-violet': '#DE75FF',
        'custom-indigo': '#665bf0',
        'custom-charcoal': {
          100:'#72798f',
          200: '#545969',
          300: '#363943'
        },
        'custom-raisin-black': '#191822',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
