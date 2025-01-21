
import daisyui from 'daisyui'
import flowbite from 'flowbite-react/tailwind'


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
   
  ],
  theme: {

    
    
    extend: {
      colors: {
        primary: '#3498db', // Change primary color to a custom blue
        secondary: '#e74c3c', // Change secondary color to a custom red
      },
      keyframes: {
        move1: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(200px) translateY(1000px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        move2: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-1000px) translateY(-500px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        move3: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-1000px) translateY(-50px)' },
          '100%': { transform: 'translateX(-1000px) translateY(-50px)' },
        },
      },
      animation: {
        move1: 'move1 4s infinite ease-in-out',
        move2: 'move2 4s infinite ease-in-out',
        move3: 'move3 4s infinite linear',
      },
    },
     
    },
  
  
  plugins: [
    daisyui,
    flowbite.plugin(),
    
],

daisyui: {
  themes: ["cupcake","dark"],
  
}


}


