/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['ui-sans-serif', 'system-ui'],
				serif: ['ui-serif', 'Georgia'],
				mono: ['ui-monospace', 'SFMono-Regular'],
				display: ['Oswald'],
				body: ['"Open Sans"']
			},
			colors: {
				primary: {
					50: '#ebf5ff',
					100: '#fff1ee',
					200: '#ffe4de',
					300: '#ffd5cc',
					400: '#ffbcad',
					500: '#fe795d',
					600: '#ef562f',
					700: '#eb4f27',
					800: '#d3330a',
					900: '#d3330a'
				},
				blue: '#1fb6ff',
				purple: '#7e5bef',
				pink: '#ff49db',
				orange: '#ff7849',
				green: '#13ce66',
				yellow: '#ffc82c',
				'gray-dark': '#273444',
				gray: '#8492a6',
				'gray-light': '#d3dce6'
			}
		}
	}
};

module.exports = config;
