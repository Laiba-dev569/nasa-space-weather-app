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
        auroraGreen: "#7FFFD4",
        auroraOrange: "#FFA500",
        spaceDark: "#0B0F19",
        solarOrange: "#FF5722",
        solarRed: "#E91E63",
        neonBlue: "#00E5FF",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 10px rgba(255, 87, 34, 0.4)" },
          "100%": { boxShadow: "0 0 25px rgba(255, 87, 34, 0.8), 0 0 10px rgba(255, 87, 34, 0.6) inset" }
        }
      },
    },
  },
  plugins: [],
};

