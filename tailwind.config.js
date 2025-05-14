/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient: "hsla(176, 45%, 66%, 1)",
      },
    },
  },
  plugins: [],
};