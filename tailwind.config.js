/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    // extend: {
    //   colors: {
    //     primary: {
    //       50: "#E7F6FE",
    //       100: "#CFEEFC",
    //       200: "#9ADBF9",
    //       300: "#6ACAF6",
    //       400: "#3AB8F3",
    //       500: "#0EA5E9",
    //       600: "#0B84BC",
    //       700: "#08628C",
    //       800: "#05405B",
    //       900: "#032230",
    //       950: "#011118",
    //     },
    //   },
    // },
    // fontFamily: {
    //   body: ["Inter"],
    // },
  },
  plugins: [require("flowbite/plugin")],
};
