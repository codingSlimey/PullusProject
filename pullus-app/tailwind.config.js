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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
