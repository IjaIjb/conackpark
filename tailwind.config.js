/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        modak: ["Modak", "system-ui"]
    },
    },
  },
  plugins: [],
}

