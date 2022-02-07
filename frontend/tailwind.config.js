module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clappys-grey': '#eeeee6',
        'clappys-yellow': '#fbbf24'
      }
    },

  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}
