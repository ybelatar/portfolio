import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
		'montserrat': ['Montserrat'],
      },
	  colors: {
		"primary-color": "var(--primary-color)",
		"secondary-color": "var(--secondary-color)",
		"background-color": "var(--background-color)",
		"border-color": "var(--border-color)",
		"text-color": "var(--text-color)",
		"link-color": "var(--link-color)",
	  },
    },
  },
  plugins: [],
} satisfies Config;