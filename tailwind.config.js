/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        // Deep forest green — dignified, trustworthy, rooted in nature
        brand: {
          50:  '#f1f8f3',
          100: '#d9ede0',
          200: '#b1dbbf',
          300: '#7dc198',
          400: '#47a26d',
          500: '#268355',
          600: '#1a6843',
          700: '#155337',
          800: '#12422c',
          900: '#0e3524',
          950: '#081e14',
        },
        // Refined gold — prestige, warmth, achievement
        ocean: {
          50:  '#fdf9ee',
          100: '#faf0ce',
          200: '#f4de95',
          300: '#ecc754',
          400: '#e4b030',
          500: '#d4931c',
          600: '#ba7314',
          700: '#995516',
          800: '#7d4319',
          900: '#683819',
          950: '#3c1e0a',
        },
        // Warm neutral backgrounds
        sand: {
          50:  '#faf8f4',
          100: '#f3efe6',
          200: '#e4d9c7',
          300: '#d0bc9f',
          400: '#bb9a77',
          500: '#a87f5c',
          600: '#906750',
          700: '#775045',
          800: '#62433b',
          900: '#513933',
        },
        // Slate tones for text
        ink: {
          900: '#171f1b',
          800: '#232e28',
          700: '#334039',
          600: '#4d5e55',
          500: '#687870',
          400: '#8d9e96',
        },
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':  'fade-in 0.8s ease both',
        float:      'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
