export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          950: '#020617'
        },
        accent: {
          blue: '#0f62fe',
          cyan: '#00bcd4',
          orange: '#ff6b35'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.6s ease-out'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}