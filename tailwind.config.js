/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#121212",
        "primary-400": "#1e1e1e",
        "primary-300": "#383838",
      },
    },
  },
  plugins: [],
};
