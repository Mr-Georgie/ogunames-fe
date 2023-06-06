/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Lato", "sans-serif"],
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
      colors: {
        "custom-orange": "rgb(245,154,23)",
        "hover-orange": "rgba(245, 154, 23, 0.9)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
};
