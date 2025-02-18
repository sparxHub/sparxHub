/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: '#ffffff',
      },
      fontFamily: {
        'calibre-medium': ['Calibre Medium', 'sans-serif'],
        'calibre-regular': ['Calibre Regular', 'sans-serif'],
        'sfmono-regular': ['SF Mono Regular', 'monospace'],
        'calibre-semibold': ['Calibre Semibold', 'sans-serif'],
        'poppins-black': ['Poppins Black', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-black-italic': [
          'Poppins Black Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-bold': ['Poppins Bold', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-bold-italic': [
          'Poppins Bold Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-extra-bold': ['Poppins ExtraBold', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-extra-bold-italic': [
          'Poppins ExtraBold Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-extra-light': ['Poppins ExtraLight', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-extra-light-italic': [
          'Poppins ExtraLight Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-italic': ['Poppins Italic', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-light-italic': [
          'Poppins Light Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-medium': ['Poppins Medium', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-medium-italic': [
          'Poppins Medium Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-regular': ['Poppins Regular', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-semi-bold': ['Poppins SemiBold', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-semi-bold-italic': [
          'Poppins SemiBold Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
        'poppins-thin': ['Poppins Thin', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        'poppins-thin-italic': [
          'Poppins Thin Italic',
          'Helvetica',
          'Arial',
          'Lucida',
          'sans-serif',
        ],
      },
      textColor: {
        DEFAULT: '#ffffff',
      },
      colors: {
        greeny: {
          50: 'var(--color-greeny-50)',
          100: 'var(--color-greeny-100)',
          200: 'var(--color-greeny-200)',
          300: 'var(--color-greeny-300)',
          400: 'var(--color-greeny-400)',
          500: 'var(--color-greeny-500)',
          600: 'var(--color-greeny-600)',
          700: 'var(--color-greeny-700)',
          800: 'var(--color-greeny-800)',
          900: 'var(--color-greeny-900)',
        },
        yellow: {
          50: '#fbf3e1',
          100: '#f4e2b5',
          200: '#f0d697',
          300: '#edd088',
          400: '#ebca79',

          500: '#e9c46a', //default

          600: '#d2b05f',
          700: '#ba9d55',
          800: '#a3894a',
          900: '#2f2715',
        },

        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', //default
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        primary: 'var(--color-greeny)',
        on_primary: 'var(--color-white)',
        secondary: 'var(--color-yellow)',
        on_secondary: 'var(--color-yellow)',
      },
      // safelist: [
      //   {
      //     pattern:
      //       /bg-(primary|secondary|gray|yellow|greeny)-(50|100|200|300|400|500|600|700|800|900)/,
      //     variants: ["hover", "focus"],
      //   },
      //   {
      //     pattern:
      //       /border-(primary|secondary|gray|yellow|greeny)-(50|100|200|300|400|500|600|700|800|900)/,
      //     variants: ["hover", "focus"],
      //   },
      //   {
      //     pattern:
      //       /text-(primary|secondary|gray|yellow|greeny)-(50|100|200|300|400|500|600|700|800|900)/,
      //     variants: ["hover", "focus"],
      //   },
      // ],
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  mode: 'jit',
  purge: {
    content: ['./safelist.txt', './src/**/*.js'],
  },
  plugins: [
    // Enforce the generation of the following safelist combinations to address tree shaking during the cleaning process
    require('tailwind-safelist-generator')({
      patterns: [
        'bg-{colors}',
        'border-{colors}',
        'focus:text-{colors}',
        'focus:bg-{colors}',
        'hover:bg-{colors}',
      ],
    }),
  ],
}
