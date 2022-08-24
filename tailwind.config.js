/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "'Joan', sans - serif",
				nunito: "'Nunito Sans', sans - serif",
				alumini: "'Alumni Sans Collegiate One', sans-serif",
				roboto: "'Roboto', sans-serif",
			},
			colors: {
				DDarkBlue: "hsl(209, 23%, 22%)",
				DVeryDarkBlue: "hsl(207, 26%, 17%)",
				LVeryDarkBlue: "hsl(200, 15%, 8%)",
				LDarkGrey: "hsl(0, 0%, 52%)",
				LVeryLightGray: "hsl(0, 0%, 98%)",
			},
		},
	},
	plugins: [],
};
