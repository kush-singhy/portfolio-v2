/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gabarito', 'sans-serif'],
      },
      colors: {
        highlight: {
          blue: '#CBE7FF',
          pink: 'rgb(249, 220, 248)',
          green: '#ABE2CB',
        },
        surface: {
          DEFAULT: '#F3F4F6',
          border: '#E7E8E9',
        },
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
