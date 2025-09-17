/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // include your app directory
  ],
  presets: [require("nativewind/preset")], // 👈 add this line
  theme: {
    extend: {},
  },
  plugins: [],
};
