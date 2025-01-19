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
        jet: "#343330",
        jordy: "#9AC4F8",
        tea: "#C7FFDA",
        violet: "#6A66A3",
        khaki: "#C7AC92"
      },
      fontFamily: {
        poppins:  ['var(--font-poppins)', 'sans-serif'],
        quantico: ["var(--font-quantico)", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
