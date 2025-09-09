export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet: {
          300: '#A78BFA',
          400: '#8B5CF6',
          600: '#7C3AED',
        },
        orange: {
          300: '#FDBA74',
          500: '#F97316',
        },
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          400: '#94A3B8',
          800: '#1E293B',
          900: '#0F172A',
          950: '#0B0B10',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'Poppins', 'Space Grotesk', 'ui-sans-serif'],
        body: ['Inter', 'Manrope', 'General Sans', 'ui-sans-serif'],
      },
    },
  },
} satisfies import('tailwindcss/types/config').Config;
