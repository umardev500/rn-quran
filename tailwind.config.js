/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        cgsc: ['Carrois Gothic SC', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        uthmanic_hafs: ['KFGQPC Uthmanic Script HAFS', 'sans-serif'],
        uthman: ['KFGQPC Sindhi Naskh Regular', 'sans-serif'],
        rc: [' Roboto Condensed Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
