/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "sm":"640px",

      "md":"768px",

      "lg":"1024px",

      "xl":"1280px",

      "2xl":"1536px",
    },
    extend: {
      backgroundImage: {
          'image1': "url('../assets/images/the-eminence-in-shadow-full-cast-of-characters.jpg')",
          
      }
    },
  },
  plugins: [],
}

