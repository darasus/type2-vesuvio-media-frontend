const { darken } = require('polished')
const path = require('path')
const { WEBSITES_PATH } = require('./constant')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  plugins: [],
}
