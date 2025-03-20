module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        montserratAlt: ["Montserrat Alternates", "sans-serif"],
        rubikMono: ["Rubik Mono One", "monospace"],
      },
      colors: {
        main: "#FAFAF2",
        mainDark: "#191819",
      },
    },
  },
  plugins: [],
};
