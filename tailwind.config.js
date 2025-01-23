/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#C2E5C7',
        viewGreen: '#c1f6d4',
        viewColor:'#6c716d',
        buttonGreen:'#6fcf82'
      },
    },
  },
  plugins: [],
}
