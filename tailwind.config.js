export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' if you prefer media query
  theme: {
    extend: {
      colors: {
        'lightYellow': 'hsl(31, 66%, 93%)',
        'darkYellow': 'hsl(39, 100%, 71%)',
        'lightPurple': 'hsl(254, 88%, 90%)',
        'darkPurple': 'hsl(256, 67%, 59%)',
        'customWhite': 'hsl(0, 0%, 100%)',
        'customBlack': 'hsl(0, 0%, 7%)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
