/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        customGreen: '#CBF281',
        customWhite: '#D9D9D9',
        customPurple: '#8F88FF',
        customYellow: '#FFE86E',
        customOrange: '#CA4E18',
        customWhite: '#FFFFFF',
        customBlue: "#4731D3",
        projeTitle: "#4338CA",
        customBlack: "#1E1E1E"
      },
    },
  },
  plugins: [],
}

