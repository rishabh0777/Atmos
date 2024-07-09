/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      screens: {
        xsm: '275px'
      }
    },
  },
  plugins: [],
}