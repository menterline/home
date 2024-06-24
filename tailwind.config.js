/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
