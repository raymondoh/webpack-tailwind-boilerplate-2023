/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  //content: ["./**/*.php"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
