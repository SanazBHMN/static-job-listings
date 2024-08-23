/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        backgroud: "hsl(180, 52%, 96%)",
        filterTablets: "hsl(180, 31%, 95%)",
        text: "hsl(180, 8%, 52%)",
        darkText: "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        headerMobile: "url(./src/assets/images/bg-header-mobile.svg)",
        headerDesktop: "url(./src/assets/images/bg-header-desktop.svg)",
      },
    },
  },
  plugins: [],
};
