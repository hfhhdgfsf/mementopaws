/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FEFCF9',
          100: '#FDF8F0',
          200: '#FBF3E6',
          300: '#F5E6D3',
          400: '#ECD5B8',
        },
        beige: {
          50: '#F9F5F0',
          100: '#F0E8DB',
          200: '#E8D5C4',
          300: '#D4BFA8',
          400: '#BFA98C',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2C2C2C',
          800: '#1F1F1F',
          900: '#141414',
        },
        walnut: {
          50: '#F7F3EF',
          100: '#EBE0D4',
          200: '#D4C1AC',
          300: '#B8987A',
          400: '#8C6C52',
          500: '#5C4033',
          600: '#4A3329',
          700: '#3A2720',
          800: '#2C1D17',
          900: '#1C110E',
        },
        candlelight: {
          50: '#FFFDF8',
          100: '#FFF9E6',
          200: '#FFF3CC',
          300: '#F5E6D3',
          400: '#ECD5B8',
          500: '#D4B896',
        },
        rose: {
          muted: '#D4A5A5',
          soft: '#E8C4C4',
          warm: '#C49595',
        },
        sage: {
          muted: '#A3B5A6',
          soft: '#B8C8BA',
          dark: '#7A8D7D',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FDF8F0 0%, #F5E6D3 50%, #E8D5C4 100%)',
        'gradient-candle': 'linear-gradient(to bottom, #FDF8F0 0%, #F5E6D3 100%)',
        'gradient-charcoal': 'linear-gradient(to bottom, #2C2C2C 0%, #1F1F1F 100%)',
        'gradient-soft-fade': 'linear-gradient(to bottom, transparent 0%, rgba(253, 248, 240, 0.9) 100%)',
        'gradient-radial-warm': 'radial-gradient(ellipse at center, rgba(245, 230, 211, 0.5) 0%, transparent 70%)',
      },
      boxShadow: {
        'soft': '0 2px 30px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 40px rgba(0, 0, 0, 0.06)',
        'elegant': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04), 0 12px 40px rgba(0, 0, 0, 0.04)',
        'hover': '0 8px 60px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 20px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
