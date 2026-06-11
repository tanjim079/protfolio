/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F6FFF',
        secondary: '#1F2937',
        accent: '#06B6D4',
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8'
        },
        light: {
          bg: '#F9FAFB',
          card: '#FFFFFF',
          text: '#1F2937',
          muted: '#6B7280'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1)',
        'card-dark': '0 4px 6px -1px rgba(0,0,0,0.5)',
        'card-dark-hover': '0 10px 15px -3px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
