/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Inter"],
      },
      colors:{
        "primary":"#f8f8f8",
        "accent":"#299345",
        "accent-hover":"#97c93c",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      }
      }
    },
    daisyui:{
      themes: [
        {
          basket: {
            "primary":"#f8f8f8",
            "accent":"#299345",
            "accent-hover":"#97c93c",
            "neutral": "#3d4451",
            "base-100": "#ffffff",
          },
        },  
      ],
    },


  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ]
}
