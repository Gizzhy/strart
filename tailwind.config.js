/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-image": "url('../assets/male.jpg')",
        "custom-image2": "url('../assets/female2.jpg')",
        "custom-bata1": "url('../assets/shoe1.jpg')",
        "custom-bata2": "url('../assets/shoe2.jpg')",
        "custom-bata3": "url('../assets/shoe3.jpg')",
        "custom-bata4": "url('../assets/shoe4.jpg')",
        "custom-bata5": "url('../assets/shoe5.jpg')",
        "custom-bata6": "url('../assets/shoe6.jpg')",
        "custom-bata7": "url('../assets/shoe7.jpg')",
        "custom-bata8": "url('../assets/shoe8.jpg')",
        "custom-men": "url('../assets/men.jpg')",
        "custom-women": "url('../assets/women.jpg')",
      },
      borderRadius: {
        "px-8": "8px",
        "px-10": "10px",
      },
      colors: {
        mine: "#ff9001",
        "custom-blue": "#2D404D",
        "custom-brown": "#4d3a2d",
        "custom-gray": "rgba(223, 223, 223, 0.26)",
        "custom-grey": "#f9f9f9",
      },
      padding: {
        2.4: "0.6rem",
      },
      animation: {
        "change-background": "changeBackground 12s infinite",
      },
      borderColor: {
        "custom-gray": "rgba(223, 223, 223, 0.26)",
      },
      borderWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
