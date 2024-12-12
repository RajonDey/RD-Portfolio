/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // was "#050816"
        secondary: "#334155", // was "#aaa6c3"
        tertiary: "#eaeff0", // was "#151030"
        "black-100": "#efecda", // was "#100d25"
        "black-200": "#f6f6f6", // was "#090325"
        "white-100": "#050816", // was "#f3f3f3"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
