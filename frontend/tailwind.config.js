/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gruvbox-dark': '#282828',
        'gruvbox-foreground': '#fbf1c7',
        'gruvbox-yellow': '#fabd2f'
      }
    },
  },
  plugins: [],
};
