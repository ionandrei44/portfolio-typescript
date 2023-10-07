/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#00ADB5",
        textPrimary: "#EEE",
        textSecondary: "rgba(238, 238, 238, 0.75)",
        accent: "rgba(57, 62, 70, 0.75)",
        hoverSecondary: "#027378",
        hoverPrimary: "#292d33",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
