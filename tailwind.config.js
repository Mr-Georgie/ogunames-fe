/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
