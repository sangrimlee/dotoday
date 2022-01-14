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
      white: colors.white,
      neutral: colors.neutral,
      red: '#FF4C4C',
      yellow: '#FBE303',
      brand: '#1CD265',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        landingLogo: {
          '0%': {
            opacity: 0,
            transform: 'translateX(6.5rem) scale(0)',
          },
          '50%': {
            opacity: 1,
            transform: 'translateX(6.5rem) scale(1)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        landingLogoText: {
          '0%': {
            opacity: 0,
          },
          '50%': { opacity: 0, transform: 'translateX(6.5rem)' },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-in',
        'landing-logo': 'landingLogo 1.25s ease',
        'landing-logo-text': 'landingLogoText 1.25s ease',
      },
    },
  },
  plugins: [],
};
