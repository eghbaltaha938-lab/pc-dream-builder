/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#050b1a', 900: '#0a1428', 800: '#0f1d3a', 700: '#16294f' },
        accent: { cyan: '#22d3ee', blue: '#3b82f6' },
      },
      fontFamily: { sans: ['Vazirmatn', 'Tahoma', 'sans-serif'] },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'none' } },
        glow: { '0%,100%': { opacity: '.5' }, '50%': { opacity: '1' } },
      },
      animation: { 'fade-up': 'fadeUp .5s ease both', glow: 'glow 4s ease-in-out infinite' },
    },
  },
  plugins: [],
};
