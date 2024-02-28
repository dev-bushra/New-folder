module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "0px", max: "550px" }, // Phone
      md: { min: "560px", max: "1050px" }, // Tablet
      lg: { min: "1060px", max: "1600px" }, // Laptop
    },
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
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
