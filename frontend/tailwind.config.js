/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#6a6a6b', // Your custom gray color
        },
      },
    },
  },
  plugins: [],
}

