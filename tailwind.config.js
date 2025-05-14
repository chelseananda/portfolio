/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#00d1b2',
          secondary: '#ffffff',
          muted: '#a1a1a1',
          background: '#0a0a0a',
          card: '#1c1c1c',
          btnHover: '#00b3a4',
        },
        fontFamily: {
          sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  