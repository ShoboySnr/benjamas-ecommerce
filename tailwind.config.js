module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Archivo', 'sans-serif'],
      body: ['Archivo', 'sans-serif'],
    },
    extend: {
      colors: {
        app: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
