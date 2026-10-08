module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        paper: "#f3f0e8",
        ink: "#20221d",
        accent: "#e65e3d",
        muted: "#686960",
      },
    },
  },
  plugins: [],
};
