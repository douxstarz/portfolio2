/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#f4f9ff",
        lightpurple: "#fafbff",
        creams: "#fffcfd",
        pinks: "fff5fb",
        greys: "f1f0f0",
      },
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
};
