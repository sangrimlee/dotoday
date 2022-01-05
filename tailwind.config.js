const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      logo: ['Gilroy', 'system-ui'],
      sans: ['"Noto Sans KR"', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.black,
      neutral: colors.neutral,
      red: '#FF4C4C',
      brand: '#1CD265',
    },
    extend: {},
  },
  plugins: [],
};
