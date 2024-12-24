/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "gruvbox-dark-aqua": "#8ec07c",
        "gruvbox-dark-base": "#282828",
        "gruvbox-dark-base1": "#3c3836",
        "gruvbox-dark-blue": "#83a598",
        "gruvbox-dark-fg": "#ebdbb2",
        "gruvbox-dark-green": "#b8bb26",
        "gruvbox-dark-orange": "#fe8019",
        "gruvbox-dark-purple": "#d3869b",
        "gruvbox-dark-red": "#fb4934",
        "gruvbox-dark-yellow": "#fabd2f",
        // ---
        "gruvbox-aqua": "#427b58",
        "gruvbox-base": "#fbf1c7",
        "gruvbox-base1": "#ebdbb2",
        "gruvbox-blue": "#076678",
        "gruvbox-fg": "#282828",
        "gruvbox-green": "#79740e",
        "gruvbox-orange": "#af3a03",
        "gruvbox-purple": "#8f3f71",
        "gruvbox-red": "#9d0006",
        "gruvbox-yellow": "#b57614",
      },
    },
  },
  plugins: [],
};
