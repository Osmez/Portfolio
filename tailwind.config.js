const{ fontfamily }  = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-mont)']
      },
      colors:{
        dark:"#1b1b1b",
        light:"#f5f5f5",
        primary:"#063e96",
        primaryDark:"#5BE609",
      },
      animation:{
        'spin-slow':'spin 3s linear infinite',
      },
      screens:{
          "2xl": { max: "1535px" },
          // => @media (max-width: 1535px) { ... }
      
          xl: { max: "1279px" },
          // => @media (max-width: 1279px) { ... }
      
          lg: { max: "1023px" },
          // => @media (max-width: 1023px) { ... }
      
          md: { max: "767px" },
          // => @media (max-width: 767px) { ... }
      
          sm: { max: "639px" },
          // => @media (max-width: 639px) { ... }
      
          xs: { max: "479px" },
          // => @media (max-width: 479px) { ... }
      }
    },
  },
  plugins: [],
}

