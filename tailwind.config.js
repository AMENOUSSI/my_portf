/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
     
      spacing:{
        "big":"40rem",
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px"
      }
    },
    fontFamily:{
      nunito:['Nunito','Sans-serif'],
      lobster:['Lobster']
    }
    /*colors:{
      "mycolor":"#555",
    }*/
  },
  plugins: [],
}

