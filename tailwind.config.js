/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Circular Std', 'sans-serif', 'Oswald'],
      'body': ['Circular Std', 'sans-serif', 'Open Sans'],
    }
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#610303",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#ffffff",
          "warning": "#ffffff",
          "error": "#ffffff",
          "white": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

