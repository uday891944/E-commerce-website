/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f2',
          100: '#f2ebe4',
          200: '#e5d7ca',
          300: '#d9c3b0',
          400: '#c2a288',
          500: '#ab8464',
          600: '#8d6a50',
          700: '#735543',
          800: '#5f473a',
          900: '#503c33',
          950: '#2c211c',
        },
        accent: {
          50: '#f6f9f7',
          100: '#e7f1ea',
          200: '#cfe2d5',
          300: '#a7c9b4',
          400: '#7aaa8e',
          500: '#588e6f',
          600: '#427156',
          700: '#365c47',
          800: '#2f4b3b',
          900: '#283e32',
          950: '#13231b',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        kenBurns: 'kenBurns 20s ease-in-out forwards',
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};