module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif'],
        firaCode: ['Fira Code', 'monospace'],
        rubikMono: ['Rubik Mono One', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1rem)' },
        },
        'float-less': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.7rem)' },
        },
        'shift-left': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-1.5rem)' },
        },
        'shift-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(1.6rem)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-less': 'float-less 3s ease-in-out infinite',
        'shift-left': 'shift-left 4s ease-in-out infinite',
        'shift-right': 'shift-right 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
