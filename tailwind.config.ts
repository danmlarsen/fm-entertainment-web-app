import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FC4747",
        },
        secondary: {
          900: "#10141E",
          700: "#161D2F",
          500: "#5A698F",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
