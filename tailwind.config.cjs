/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    colors: {
      primary: "#f9fafb",
      "primary-dark": "#111111",

      "primary-hover": "#e3e3e3",
      "primary-hover-dark": "#242424",

      "primary-content": "#000000",
      "primary-content-dark": "#FFFFFF",

      "secondary-content": "#333333",
      "secondary-content-dark": "#EAEAEA",

      "accent-content": "#444444",
      "accent-content-dark": "#888888",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
