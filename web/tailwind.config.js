/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    colors: {
      "theme-bg": "#202020",
      "theme-text": "#ffffff",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Noto Serif", "serif"]
    }
  }
};
