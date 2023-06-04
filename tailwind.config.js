/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#121316",
        secondary: "#F5F5F7",
        tertiary: "#9A9A9A",
        "primary-100": "#0E0D10",
        "blue-violet": "#9246FF",
        "blue-violet-100": "#8641E8",
      },
    },
    screens: {
      mobile: "0px",
      sm_mobile: "320px",
      md_mobile: "425px",
      lg_mobile: "476px",
      tablet: "550px",
      sm_tablet: "640px",
      md_tablet: "768px",
      lg_tablet: "960px",
      laptop: "1024px",
      lg_laptop: "1280px",
      desktop: "1366px",
      sm_desktop: "1440px",
      md_desktop: "1536px",
      lg_desktop: "1920px",
      ultra_wide: "2560px",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
