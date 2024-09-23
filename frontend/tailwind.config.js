/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'catppuccin-base': '#1e1e2e',
        'catppuccin-text': '#cdd6f4',
        'catppuccin-sapphire': '#b4befe',
        'catppuccin-green': '#a6e3a1',
        'catppuccin-mauve': '#cba6f7',
        'catppuccin-maroon': '#eba0ac'
      }
    },
  },
  plugins: [],
};
