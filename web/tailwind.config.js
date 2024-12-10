/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gruvbox-aqua": "#8ec07c",
        "gruvbox-base": "#282828",
        "gruvbox-base1": "#3c3836",
        "gruvbox-blue": "#83a598",
        "gruvbox-fg": "#ebdbb2",
        "gruvbox-green": "#b8bb26",
        "gruvbox-orange": "#fe8019",
        "gruvbox-purple": "#d3869b",
        "gruvbox-red": "#fb4934",
        "gruvbox-yellow": "#fabd2f",
      },
    },
  },
  plugins: [],
};
