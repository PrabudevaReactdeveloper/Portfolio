/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        PrimaryColor:'#060417',
        SecondaryColor:'#7c66e3',
        ActiveColor:'#9279f4',
        TextColor:'#ffffff',
        grayColor:'#9ca3af'
      }
    },
  },
  plugins: [],
}

