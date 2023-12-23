/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#FAF0F2",
        background: "#1B090D",
        primary: "#B03B54",
        secondary: "#220B10",
        accent: "#DB5E7A",
      },
    },
  },
  plugins: [],
};
