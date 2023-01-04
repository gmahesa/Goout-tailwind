/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      "bg-color": "#FAFAFA",
      "c-blue": "#3258E8",
      "t-grey": "#7B7B7B",
      "t-black": "#232631",
      "t-footer": "#A1A1A3",
    },
  },
  plugins: [require("flowbite/plugin")],
};
