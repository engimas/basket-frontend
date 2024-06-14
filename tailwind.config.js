/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
    },
    extend: {
      colors:{
        "primary":"#232323",
        "accent":"#299345",
        "accent-hover":"#97c93c",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      }
      }
    },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ]
}
