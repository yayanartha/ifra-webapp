module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#057DC1',
        blue_button: '#144A90',
      },
    },
    fontFamily: {
      body: ['Poppins'],
    },
  },
  variants: {},
  plugins: [],
};
