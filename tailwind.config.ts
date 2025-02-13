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
      },
      textIndent: {
        sm: '0.5rem',  // Pequeno recuo
        md: '1rem',    // Médio recuo
        lg: '2rem',    // Grande recuo
        xl: '3rem'     // Extra grande recuo
      }
    },
  },
  plugins: [],
} satisfies Config;
