/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "colour-secondary-white-100-general": "#fff",
        "colour-logo-primary": "#37447e",
        lightgray: "#cdd1d4",
        "colour-main-blue-300": "#929ecc",
        "colour-main-grey-400": "#939ea4",
        "colour-main-blue-800": "#111b47",
        lavender: "#e7ecff",
        "colour-main-blue-900": "#091133",
        "colour-main-blue-400": "#6f7cb2",
        "colour-main-blue-700": "#222f65",
        "colour-main-grey-600": "#5d6970",
        "colour-main-blue-500": "#505f98",
        black: "#000",
        "roc-primary": "#0076ce",
        "blue-gray-900": "#0f172a",
        "fs-search-surface-bg": "#fafbfc",
        darkgray: "#aeb0b4",
        silver: "#bfbfbf",
        dimgray: "#616161",
        gray: "rgba(255, 255, 255, 0)",
        "fs-search-red": "#ff6666",
        "fs-search-table-bg": "#f4f4f4",
        "fs-search-banner-blue": "#ddf3ff",
        "fs-search-banner-purple": "#efd9f9",
      },
      spacing: {},
      fontFamily: {
        "bold-26": "Roboto",
        "open-sans": "'Open Sans'",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "10xs": "3px",
        "2xl": "21px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "7xl": "26px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      base: "16px",
      "31xl": "50px",
      lg: "18px",
      xl: "20px",
      "46xl": "65px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
