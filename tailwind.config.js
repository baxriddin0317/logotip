/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            'primary': '#1F1534',
            'medium': '#7D7987', 
          },
          'mainColor': '#458FF6',
        }
      },
      backgroundImage: {
        'footer-img': "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)"
      },
      borderRadius: {
        '2.5xl': '20px'
      },
      boxShadow: {
        'card': '10px 40px 50px rgba(229, 233, 246, 0.4)'
      }
    },
  },
  plugins: [],
}
