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
        DarkOrange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        Black: "hsl(0, 0%, 0%)",
      },
      animation: {
        zoom: "zoom 0.6s linear",
      },
      keyframes: {
        zoom: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
      screens: {
        sm2: { min: "420px" },
      },
    },
  },
  plugins: [],
};
