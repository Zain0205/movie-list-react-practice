/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      animation: {
        kedip: "kedip .5s ease-in-out 1",
      },
      keyframes: {
        kedip: {
          "100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
