const { darken } = require('polished')
const path = require('path')
const { WEBSITES_PATH } = require('./constant')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      yellow: '#F6E05E',
      primary: {
        100: 'var(--primary-color-100)',
        200: 'var(--primary-color-200)',
        300: 'var(--primary-color-300)',
        400: 'var(--primary-color-400)',
        500: 'var(--primary-color-500)',
        600: 'var(--primary-color-600)',
        700: 'var(--primary-color-700)',
        800: 'var(--primary-color-800)',
        900: 'var(--primary-color-900)',
      },
    },
  },
  plugins: [],
}
