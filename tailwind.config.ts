/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000",
          "100": "",
          "500": "#000",
          "900": "",
        },
        secondary: {
          DEFAULT: "#d2d2d2",
          "100": "",
          "500": "#d2d2d2",
          "900": "",
        },
        accent: {
          DEFAULT: "#8e8e8e",
          "100": "",
          "500": "#8e8e8e",
          "900": "",
        },
      },
    },
  },
  plugins: [],
};
