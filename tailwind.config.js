/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        
      },
      boxShadow: {
        custom: '0vh 0vh 10px 0px #444549;'
      },
    },
    // darkMode: "class",
    // plugins: [nextui()]

  },
  plugins: [
   
  ],
};
