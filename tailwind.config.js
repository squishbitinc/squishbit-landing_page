/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        condensed: ['IBM Plex Sans Condensed', 'sans-serif'],
      },
      colors: {
        'blue': {
          '50': '#e9f0ff',
          '100': '#d7e2ff',
          '200': '#b8caff',
          '300': '#8da5ff',
          '400': '#6073ff',
          '500': '#3c43ff',
          '600': '#261aff',
          '700': '#1c0df2',
          '800': '#1910c3',
          '900': '#1b1798',
          '950': '#110e58',
        },
      },
    },
  },
  plugins: [],
} 