import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blue: '0 4px 6px rgba(59, 130, 246, 0.5)', // blue-500
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        breathing: 'breathing 2s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jet: "#343330",
        jordy: "#9AC4F8",
        tea: "#C7FFDA",
        violet: "#6A66A3",
        khaki: "#C7AC92"
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
