/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": 'rgba(102, 16, 83, 0.698)',
        "google": "#df4930",
        "facebook": "#507cc0",
        "github": "black",
        "input": "#333",
        
      },
    },
    
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    },
    fontFamily: {
      custom: ['Roboto Condensed', 'sans-serif']
    },
  },
  plugins: [],
}
