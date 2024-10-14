/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom: ["'Press Start 2P', cursive"],
				jaro: ["'Jaro', sans-serif"],
				Itim: [`"Itim", cursive`],
			},
			textStroke: {
				0.1: "0.1px",
				1: "1px",
				2: "2px",
			},
			dropShadow: {
				customShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".text-stroke-0.1": {
					"-webkit-text-stroke": "0.1px black",
				},
				".text-stroke-1": {
					"-webkit-text-stroke": "1px black",
				},
				".text-stroke-2": {
					"-webkit-text-stroke": "2px black",
				},
			});
		},
	],
};
