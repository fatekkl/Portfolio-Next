import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue_primary:  "#347785",
        green_secondary: "#99CFB3",
        jet: "#2C2C2C",
        gold:  "#EBEDC5",
        vine: "#8C3E62",
        silver: "#E8E6F0"
      },
      fontFamily: {
        poppins:  ['var(--font-poppins)', 'sans-serif'],
        quantico: ["var(--font-quantico)", "sans-serif"]
      },
      dropShadow: {
        'custom-eb': '0px 0px 20px #EBEBEB', // Define uma sombra com a cor EBEBEB
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
