/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      screens: {
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        dekstop: "1440px",
      },
      maxWidth: {
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        dekstop: "1440px",
      },
      colors: {
        dark: {
          primary: "#181818",
          secondary: "#212121",
          accent: "#3D3D3D",
          textprimary: "#FFFFFF",
          textsecondary: "#AAAAAA",
          neutral: "#FFFFFF",
        },
        light: {
          primary: "#056676",
          secondary: "#5EAAA8",
          accent: "#A3D2CA",
          textprimary: "#EFF5F5",
          textsecondary: "#E8DED2",
          neutral: "#EFF5F5",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // require("tailwind-scrollbar"),
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.slate.600")} ${theme(
            "colors.slate.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "2px",
          width: "2px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.slate.600"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.slate.200"),
        },
      });
    }),
  ],
};
