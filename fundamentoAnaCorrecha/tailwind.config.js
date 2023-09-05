/** @type {import('tailwindcss').Config} */ 
module.exports = { 
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  darkMode: 'class', 
  theme: {
    extend: {
      // Configuración del tema normal
    },
    dark: {
      // Configuración del tema oscuro
      backgroundColor: '#1a202c',
      textColor: '#f7fafc',
    },
  },
  plugins: [], 
  
} 
