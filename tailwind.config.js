/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Lato", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
        "basic-grey": "rgb(243, 243, 243)",
        "hr-grey-1": "rgb(189, 189, 189)",
        "hr-grey-2": "rgba(15, 15, 15, 0.3)",
        "primary-text-color": "rgb(15, 15, 15)",
        "light-grey-text": "rgb(102,102,102)",
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
