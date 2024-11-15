/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gruvbox-base': '#282828',
        'gruvbox-fg': '#ebdbb2',
        'gruvbox-yellow': '#fabd2f',
        'gruvbox-blue': '#83a598',
        'gruvbox-purple': '#d3869b',
        'gruvbox-aqua': '#8ec07c'
      }
    },
  },
  plugins: [],
};
