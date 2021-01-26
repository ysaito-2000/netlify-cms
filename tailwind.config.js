module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['Open Sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss-neumorphism'],
};
