// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        royalPurple: "#C9A0DC",
        rosePink: "#FF6B9D",
        turquoise: "#4ECDC4",
        amberGold: "#FFB84D",
        deepNavy: "#0A0E1A",
      },
      fontFamily : {
        poppins : ['poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}