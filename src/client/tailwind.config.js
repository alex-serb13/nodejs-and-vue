/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,vue,ts}", "./index.html"],
  theme: {
    extend: {
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
