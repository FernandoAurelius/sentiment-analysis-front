/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 12s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out 2s infinite',
        'float-slow': 'float 15s ease-in-out 1s infinite',
        'pulse-subtle': 'pulse-subtle 3s infinite',
      },
      keyframes: {
        gradient: {
          'to': { 'background-position': '200% center' },
        },
        float: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-10px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        'pulse-subtle': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      blur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
