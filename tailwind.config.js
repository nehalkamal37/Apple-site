/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
theme: {
  extend: {
     lineHeight: {
      relaxed: '1.625',  // already exists
      normal: '1.5',
    },
  /*  colors: {
     
      gray: {
        700: '#374151', // dark enough for text
        800: '#1f2937',
        900: '#111827',
      
    },
    lineHeight: {
      relaxed: '1.625',
    },
  



        primary: {
          50: '#f0f9f6',
          100: '#d0ece3',
          200: '#a3d9cc',
          300: '#76c6b5',
          400: '#4bb3a0',
          500: '#2a9d89', // main brand color
          600: '#1e8a78',
          700: '#166e60',
          800: '#105249',
          900: '#0a3631',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      */
     // tailwind.config.js

      colors: {
        // PRIMARY BRAND COLORS
        primary: {
          50:  '#eef6fc',
          100: '#dbeffc',
          200: '#b7ddf8',
          300: '#87c5f1',
          400: '#4aa5e4',
          500: '#1e88e5',  // AA on white
          600: '#1565c0',  // AAA on white
          700: '#0d47a1',  // AAA on white
          800: '#08306b',
          900: '#04224a',
        },
        secondary: {
          50:  '#f9f6ef',
          100: '#f4e9d2',
          200: '#e7d2a9',
          300: '#d6b676',
          400: '#c49c4f',
          500: '#b38b3d',
          600: '#8e6f2d',
          700: '#6b5220',
          800: '#4a3714',
          900: '#2d210b',
        },

        // TEXT NEUTRALS
        gray: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',  // AA on white
          700: '#404040',  // AAA on white
          800: '#262626',  // AAA on white
          900: '#171717',
        },

        // STATUS COLORS
        success: {
          500: '#2e7d32',  // AA on white
        },
        warning: {
          500: '#ed6c02',  // AA on white
        },
        error: {
          500: '#d32f2f',  // AA on white
        },
      },
    
      fontFamily: {
        sans: [
          'SF Pro Display',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};