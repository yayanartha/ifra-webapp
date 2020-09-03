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

        label: '#B2B2B2',
        text: '#2B2B2B',
      },
    },
    fontFamily: {
      body: ['Poppins'],
    },
  },
  variants: {},
  plugins: [],
};
