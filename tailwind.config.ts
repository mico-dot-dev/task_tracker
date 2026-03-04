import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{ts,tsx,js,jsx}", "./app/components/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				foreground: 'var(--color-foreground)',
				background: 'var(--color-background)',
			},
		},
	},
	plugins: [],
};

export default config;
