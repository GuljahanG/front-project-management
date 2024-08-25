/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          750: '#EEF2FC',  // Background color
          800: '#14367B',  // Text color
          900: '#2563DC',  // Active background color
          1000: '#1D4ED8', // Active border color
          1100: '#D1D9FF', // Hover background color
        },
        neutral:{
          100: '#EDEDED',
          200: '#EFEFEF',
          600: '#5C5C5C',
          700: '#3D3D3D'

        }
      },
      fontFamily: {
        custom: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

