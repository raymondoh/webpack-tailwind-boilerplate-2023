/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3caebd",
          50: "#f0fbfb",
          100: "#d8f2f5",
          200: "#b6e6eb",
          300: "#84d3dc",
          400: "#3caebd",
          500: "#2f9bab",
          600: "#2a7e90",
          700: "#286676",
          800: "#285562",
          900: "#254854",
          950: "#142f38",
        },
        "brand-neutral": {
          DEFAULT: "#101820",
          50: "#f4f7fb",
          100: "#e9eff5",
          200: "#cedde9",
          300: "#a2c1d7",
          400: "#709fc0",
          500: "#4e84a9",
          600: "#3c6a8d",
          700: "#315573",
          800: "#2c4960",
          900: "#293e51",
          950: "#101820",
        },
        gray: {
          DEFAULT: "#202020",
          5: "#f9f9f9", // Lightest shade
          10: "#e9e9e9",
          15: "#d9d9d9",
          25: "#c9c9c9",
          50: "#b8b8b8",
          100: "#a8a8a8",
          200: "#4d4d4d",
          300: "#444444",
          400: "#3b3b3b",
          500: "#323232",
          600: "#292929",
          700: "#202020",
          750: "#232323",
          800: "#212121",
          850: "#1e1e1e",
          900: "#1c1c1c",
          950: "#1a1a1a", // Darkest shade
          // Additional lighter shades for text
          "text-100": "#D6D6D6", // Light gray
          "text-200": "#E0E0E0", // Lighter gray
          "text-300": "#EAEAEA", // Even lighter gray
          "text-400": "#F4F4F4", // Very light gray, approaching white
          "text-500": "#FCFCFC", // Off-white, softer than pure white
          // Backgrounds: Use bg-gray-50 for the lightest shade, progressing to bg-gray-950 for the darkest.
          //Text: For lighter text colors, particularly on dark backgrounds, use text-gray-text-100, text-gray-text-200, etc.
        },
        secondary: {
          light: "#94fce7",
          DEFAULT: "#6be1c7",
          dark: "#4bbfa4",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "red-hat-display": ['"Red Hat Display"', "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.63rem", { lineHeight: "1.35" }],
        "3xl": ["2.63rem", { lineHeight: "1.24" }],
        "4xl": ["3.5rem", { lineHeight: "1.18" }],
        "5xl": ["4rem", { lineHeight: "1.16" }],
        "6xl": ["5.5rem", { lineHeight: "1.11" }],
      },
      translate: ["group-hover"],
      borderWidth: {
        1: "1px",
      },
      // outline: {
      //   blue: "2px solid rgba(0, 112, 244, 0.5)",
      // },
      spacing: {
        128: "32rem",
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      inset: {
        // "1/2": "50%",
        // full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      // minWidth: {
      //   10: "2.5rem",
      // },
      scale: {
        // 98: ".98",
      },
      animation: {
        // blob: "blob 7s infinite",
        // float: "float 5s ease-in-out infinite",
        //endless: "endless 20s linear infinite",
        // pulse: "pulse 2s 3 ease-in-out",
        // ring: "ring 1.5s ease-in-out infinite",
      },
      keyframes: {
        // ring: {
        //   "0%": { transform: "scale(0.33)" },
        //   "80%, 100%": { transform: "scale(1)" },
        // },
        // float: {
        //   "0%, 100%": { transform: "translateY(0)" },
        //   "50%": { transform: "translateY(-10%)" },
        // },
        // endless: {
        //   "0%": { transform: "translateY(0)" },
        //   "100%": { transform: "translateY(-245px)" },
        // },
        blob: {
          // "0%": {
          //   transform: "translate(0px, 0px) scale(1)",
          // },
          // "33%": {
          //   transform: "translate(30px, -50px) scale(1.1)",
          // },
          // "66%": {
          //   transform: "translate(20px, 20px) scale(0.9)",
          // },
          // "100%": {
          //   transform: "translate(0px, 0px) scale(1)",
          // },
        },
        pulse: {
          // "0%, 100%": { transform: "scale(1)" },
          // "50%": { transform: "scale(1.1)" },
        },
      },
      backgroundImage: {
        // shape:
        //   "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>...</svg>')",
        // graphpaper: "url('/src/images/icons/graph-paper.svg')",
        // jigsaw: "url('/src/images/icons/jigsaw.svg')",
        "diagonal-lines": "url('/src/images/icons/diagonal-lines.svg')",
        texture: "url('/src/images/icons/texture.svg')",
        "light-diagonal-divided":
          "linear-gradient(to bottom right, #dcdcdc 50%, #f0f0f0  50%)",
        // "logo-icon": "url('/src/images/icons/logo-icon.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
