/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f1ff',
          200: '#b9e3ff',
          300: '#7ccfff',
          400: '#36b9ff',
          500: '#0c9fff',
          600: '#0077e6',
          700: '#0062bd',
          800: '#00529d',
          900: '#064682',
        },
        accent: {
          50: '#fff8f3',
          100: '#ffe8d8',
          200: '#ffd0b5',
          300: '#ffa97e',
          400: '#ff7d47',
          500: '#ff5c1f',
          600: '#ff4400',
          700: '#cc2d00',
          800: '#a12704',
          900: '#7a2309',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};