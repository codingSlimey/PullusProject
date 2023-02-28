/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#307C31",
        "grey" : "#EDEDED",
        "placeholder" : "#2e602f80",
        "green" : "#81C341"
      },
      backgroundImage: {
        'fade': "linear-gradient(90deg, #81C341 0%, #2E602F 73.44%) "
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
