/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fa1e8c",
        secondary: "#fff",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
