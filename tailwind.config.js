/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0px 0px 30px 0px rgba(0, 0, 0, 0.3)',
        'md': '0px 0px 15px 0px rgba(0, 0, 0, 0.3)',
        'full': '0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3) inset'
      }, 
      fontSize: {
        md: '1.08rem',
      },
      screens: {
        'xl': '1820px',
        'lg': '1300px',
      },
      scale: {
        '115': '1.125',
      }
  },

  plugins: [],
}
}
