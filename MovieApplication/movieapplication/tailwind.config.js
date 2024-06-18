module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#212426',
          800: '#1f2123',
          700: '#343739',
        },
        orange: {
          400: '#f9d3b4',
        },
      },
    },
  },
  plugins: [],
};
