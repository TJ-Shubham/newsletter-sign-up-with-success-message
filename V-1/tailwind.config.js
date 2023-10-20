/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url('./assets/illustration-sign-up-mobile.svg')",
        'desk-pattern':"url('./assets/illustration-sign-up-desktop.svg')",
      },
      fontFamily:{
        'sans':['Roboto','sans-serif']
      },
      colors:{
        'base-color':'hsl(235, 18%, 26%)',
        'btn-color':'hsl(234, 29%, 20%)',
        'custom-pink': 'hsla(333, 100%, 53%, 1)',
        'custom-yellow': 'hsla(33, 94%, 57%, 1)',
        'tomato': 'hsl(4, 100%, 67%)',
      },

    },
  },
  plugins: [],
}

