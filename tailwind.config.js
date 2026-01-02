
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f', // Main background
          800: '#112240', // Secondary background (cards)
          700: '#233554', // Borders/Lines
        },
        neon: {
          red: '#ff0055',
          hover: '#ff3366',
        },
        slate: {
          light: '#ccd6f6', // Primary text
          dim: '#8892b0',   // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
