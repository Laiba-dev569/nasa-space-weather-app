/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // root HTML
    "./src/**/*.{js,jsx,ts,tsx}" // scan all JS/TS files
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', "cursive"],
        bangers: ['"Bangers"', "cursive"],
      },
      colors: {
        auroraGreen: "#7FFFD4", // optional: custom comic colors
        auroraOrange: "#FFA500",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

