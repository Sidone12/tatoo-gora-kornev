/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        lg: {
          max: '1024px',
        },
        md: {
          min: '650px',
          max:'900px'
        },
        sm: {
          max: '650px',
        },
      },
      colors: {
        "brand-black-1": "#050505", 
        "brand-black-2": "#191919",
        "brand-green-1": "#008080",
        "brand-green-2":"#0f969c", 
        "brand-grey": "#f4fdff", 
        "brand-grey-2": "#d0d0d0",
        "brand-grey-3": "#333333", 
        "brand-grey-4": "#eeeeee",
        "brand-grey-5": "#3c3c3c",
        "brand-blue-1": "#408bd1",
        "brand-blue-2": "#88c2f7",
        "brand-creem-1": "rgba(221, 219, 203,0.24)",   
        "brand-creem-2": "rgb(221, 219, 203)",  
        
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60,64,67, .3)",
      },
    },
  },
  plugins: [],
};
