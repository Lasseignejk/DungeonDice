/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				backgroundGray: "#262626",
				textGray: "#dedfe0",
			}
		},
	},
	plugins: [],
};
