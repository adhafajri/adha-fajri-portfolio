/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2-5xl': ['32px', '40px'],
      },
      colors: {
        'white': '#FDFFFA',
        'black': '#23252A',
        'orange': '#FF5943',
        'yellow': '#FED20D',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}
