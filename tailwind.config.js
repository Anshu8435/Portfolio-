/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#dcff4e',
          light: '#eaff80',
          dark: '#b0d926',
        },
        surface: {
          DEFAULT: '#10110f',
          muted: '#181915',
          card: '#151613',
          border: '#2a2d24',
        },
      },
      fontFamily: {
        mono: ['DM Mono', 'monospace'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

