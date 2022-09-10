const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif", ...fontFamily.sans],
      mono: ["JetBrains Mono, monospace", ...fontFamily.mono],
    },
    extend: {
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

        pop: "#2563eb",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
