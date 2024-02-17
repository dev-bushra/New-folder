module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        colors: "#ffffffff",
        blue_gray: {
          200: "#b4b9c3",
          300: "#9098a5",
          600: "#5e687c",
          700: "#3e4b63",
          900: "#0e1e3c",
        },
        gray: { 50: "#f8f9fa", 200: "#e7e9ec" },
        red: { 800: "#c62a1c" },
      },
      fontFamily: { inter: "Inter", plusjakartasans: "Plus Jakarta Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
