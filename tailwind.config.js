/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#051830', // Custom ultra premium deep Navy
          light: '#0c2e56',
          dark: '#020b17',
          card: '#082343',
        },
        accent: {
          DEFAULT: '#e5b842', // Elegant SEPL gold
          light: '#ffd666',
          dark: '#b88d22',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
