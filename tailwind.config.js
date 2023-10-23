/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        "2xl": { min: "1070px", max: "2960px" },
        xl: { min: "830px", max: "1069px" },
        lg: { min: "775px", max: "829px" },
        md: { min: "598px", max: "774px" },
        dsm: { max: "640px" },
        sm: { max: "368px" },

       
      },
    },
  },
  plugins: [],
}