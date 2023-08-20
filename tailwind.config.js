/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg-color": "#1c1c1c",
        "log-bg-color": "#2a2a2a",
        "menu-theme-color": "#778bdc",
      },
    },
  },
  plugins: [],
};
