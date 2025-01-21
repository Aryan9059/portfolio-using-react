import tailwindScrollbar from 'tailwind-scrollbar'
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extended:{
      fontFamily:{
        'sans': ['Inter','sans-serif']
      },
      colors:{
        'purple':"a97bff",
        'green':"3ddc84",
        "orange":"b06304",
        "red":"ff6347",
        "blue":"00bfff",
        "pink":"#b5b5f7",
      }
    }
  },
  plugins: [tailwindScrollbar]
  // ...
}