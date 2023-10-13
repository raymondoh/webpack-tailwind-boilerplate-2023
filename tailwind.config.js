/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  //content: ["./**/*.php"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: ["Poppins, sans-serif"], // font-headline // for text color only
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
