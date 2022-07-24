module.exports = {
  content: ["./src/**/*.{html, js, jsx, ts, tsx}"],
  theme: {
    colors: {
      //primary: "#E7760E",
      //secondary: "#4A4A4A",
      //black: "#000000",
      //white: "#FFFFFF",
      dark_gray: "#333333", // main texts & heading 
      secondary_dark_gray: "#5E5E5E", // para texts
      light_gray: "#6C6C6C", // texts on light orange backgrounds
      secondary_light_gray: "F5F5F5", // stroke color for white bg cards
      orange: "#FE793D", // main orange color
      secondary_orange: "#FFE6DB", // stroke orange color for light-orange backgrounds
      light_orange: "#FFF0E9", // light orange color for backgrounds
      secondary_light_orange: "#FFF9F6", // color for linear gradient
      green: "#5BAB5E", // green color for indicators and etc.
    },
      extend: {},
  },
  plugins: [],
}