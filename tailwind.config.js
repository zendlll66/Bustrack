/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '430px',
    //   'sm': '1px',
    //   'lg': '1440px', 
    //   'lg': '1280px',
    // },
    screens: {
      'sm': '144px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1440px',
    },
    extend: {
      fontFamily :{
        "kanit" : ["Kanit", "sans-serif"],
        "roboto" :["Roboto", "sans-serif"],
      }
    },
    
  },
  plugins: [],
}