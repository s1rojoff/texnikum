/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'rgba(51, 80, 157, 1)',
        second: 'rgba(30, 30, 30, 1)',
        opacityColor: 'rgba(000, 000, 000, 0.3)'
      }
    }
  },
  plugins: []
}
