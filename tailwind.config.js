module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			animation: {
				slideDown: "slideDown .75s ease-out forwards",
			},
			keyframes: {
				slideDown: {
					"0%": {
						top: "-100%"
					},
					"100%": {
						top: 0
					}
				}
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
