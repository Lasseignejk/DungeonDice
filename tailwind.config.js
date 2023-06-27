/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				backgroundGray: "#2b2b2b",
				textGray: "#dedfe0",
				dkGrayBack: "#141414",
				grayTransparent: "rgba(20,20,20,.3)",
			},
		},
	},
	plugins: [],
};
