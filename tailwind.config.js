/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "custom-animation": "wiggle 1.5s ease-in-out infinite",
        barsAnimation: "barsAnimation 1.5s ease-in-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-20px) rotate(45deg)" },
          "100%": { transform: "rotate(45deg)", opacity: "0" },
        },
        barsAnimation: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
    screens: {
      xsm: {  max: "766px" },

      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      smT0: { max: "767px" },
      smTlg: { min: "640px", max: "1279px" },
      
      mdTxl: { min: "768px", max: "1535px" },
      
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
