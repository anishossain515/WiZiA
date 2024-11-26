/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Aqua:'#0FF1F6',
        dark_teal:'#002228',
      },
      boxShadow:{
        glow: '0px 0px 16px 0px #53FFFC33'
      },
      fontFamily:{
        work_Sans:'"Work Sans", sans-serif'
      }
    },

  },
  darkMode: "class",
  plugins: [nextui()],
}

