module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        scale_up: {
          '0%': { transform: 'scale(1.2,1)' },
          '100%': { transform: 'scale(1,1)' },

        }
      },
      animation: {
        scale_up: 'scale_up 2s ease-in-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwind-scrollbar-hide')
  ],
}
