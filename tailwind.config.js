/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        monokaiBlue: "#78CEE9",
        test: "#9CD57B",
      },
      maxWidth: {
        "1/2": "50%",
      },
      keyframes: {
        expandDown: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.5" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        collapseUp: {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0" },
        },
      },
      animation: {
        expandDown: "expandDown 0.5s ease-out forwards",
        collapseUp: "collapseUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
