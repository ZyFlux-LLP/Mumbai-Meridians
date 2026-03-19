import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'meridian-navy': '#001f3d',
        'meridian-sea-blue': '#005bb5',
        'meridian-accent': '#0074e4',
        'meridian-white': '#FFFFFF',
        'meridian-gold': '#D4AF37',
        'meridian-teal': '#004a8f',
        'sea-blue': '#00D4FF',
        'deep-ocean': '#001529',
        'deep-blue': '#001429',
      },
      fontFamily: {
        athletic: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        theme: '8px',
        custom: '8px',
      },
    },
  },
  plugins: [],
}
export default config
