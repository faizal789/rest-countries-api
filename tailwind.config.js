/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode :'class',
  theme: {
    extend: {
      colors: {
        "dark-mode-elements": "hsl(209, 23%, 22%)",
        "dark-mode-bg": "hsl(207, 26%, 17%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-bg": "hsl(0, 0%, 98%)",
        'white': "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        custom: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
