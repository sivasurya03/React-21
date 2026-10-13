/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chaff: '#F3EFE4',
        paper: '#FBF9F4',
        ink: '#13201B',
        mute: '#56605A',
        line: '#DCD6C6',
        moss: { DEFAULT: '#2B6A56', dark: '#1A4A3B', light: '#DFE7D8' },
        roast: { DEFAULT: '#0F2620', soft: '#173730', line: '#2A4B42', mute: '#9FB5AC' },
        ember: { DEFAULT: '#E8A23A', deep: '#9A5F0A', soft: '#F8E7C6' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 rgba(19,32,27,0.04), 0 12px 32px -16px rgba(19,32,27,0.18)',
        lift: '0 1px 0 rgba(19,32,27,0.04), 0 22px 44px -18px rgba(19,32,27,0.28)',
        float: '0 24px 60px -20px rgba(8,22,18,0.55)',
      },
    },
  },
  plugins: [],
}
