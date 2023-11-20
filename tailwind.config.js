/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-some-slow': 'spin 4s linear infinite',
        'spin-fast': 'spin 2s linear infinite',
        'spin-very-slow': 'spin 15s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
      },
    },
  },
  plugins: [],
};
