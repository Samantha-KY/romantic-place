module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: 'rgb(var(--color-gold))',
          50: 'rgb(var(--color-gold) / 0.05)',
          100: 'rgb(var(--color-gold) / 0.1)',
          200: 'rgb(var(--color-gold) / 0.2)',
          300: 'rgb(var(--color-gold) / 0.3)',
          400: 'rgb(var(--color-gold) / 0.4)',
          500: 'rgb(var(--color-gold) / 0.5)',
          600: 'rgb(var(--color-gold) / 0.6)',
          700: 'rgb(var(--color-gold) / 0.7)',
          800: 'rgb(var(--color-gold) / 0.8)',
          900: 'rgb(var(--color-gold) / 0.9)',
        },
        green: {
          DEFAULT: 'rgb(var(--color-green))',
          50: 'rgb(var(--color-green) / 0.05)',
          100: 'rgb(var(--color-green) / 0.1)',
          200: 'rgb(var(--color-green) / 0.2)',
          300: 'rgb(var(--color-green) / 0.3)',
          400: 'rgb(var(--color-green) / 0.4)',
          500: 'rgb(var(--color-green) / 0.5)',
          600: 'rgb(var(--color-green) / 0.6)',
          700: 'rgb(var(--color-green) / 0.7)',
          800: 'rgb(var(--color-green) / 0.8)',
          900: 'rgb(var(--color-green) / 0.9)',
        },
      },
    },
  },
  plugins: [],
}

