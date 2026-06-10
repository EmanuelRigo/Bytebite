/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7942",
        secondary: "#E19D38",
        background: "#FBF6D8",
        surface: "#FEFEFE",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
