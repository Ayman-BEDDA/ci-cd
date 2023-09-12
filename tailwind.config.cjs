/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				clair: '#EBF0F2',
				bleupro: '#012340',
				devops: {
					50: '#f6f8f5',
					100: '#ecefe9',
					200: '#cdd5c6',
					300: '#b9c5b0',
					400: '#93a286',
					500: '#728364',
					600: '#5b6a4f',
					700: '#495540',
					800: '#3c4536',
					900: '#333a2d',
					950: '#191d16'
				},

				system: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065'
				},

				frontend: {
					50: '#faf5f2',
					100: '#f3e9e1',
					200: '#e8d4c6',
					300: '#d6b29b',
					400: '#c58d72',
					500: '#b97356',
					600: '#ab604b',
					700: '#8f4c3f',
					800: '#744038',
					900: '#5e3630',
					950: '#321b18'
				},
				backend: {
					50: '#fff6ed',
					100: '#ffe2c3',
					200: '#fed2aa',
					300: '#fdb274',
					400: '#fb883c',
					500: '#f96716',
					600: '#ea4c0c',
					700: '#c2370c',
					800: '#9a2d12',
					900: '#7c2712',
					950: '#431107'
				},
				data: {
					50: '#f4f8fa',
					100: '#e6eef3',
					200: '#d2e1eb',
					300: '#b3cedd',
					400: '#8fb3cb',
					500: '#789ebf',
					600: '#6186af',
					700: '#56749f',
					800: '#4a6083',
					900: '#3f5169',
					950: '#2a3341'
				}
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				professionnal: {
					primary: '#BF8563',
					secondary: '#D9631E',
					accent: '#8C4830',
					neutral: '#3D4451',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			},
			'halloween',
			{
				dark: {
					primary: '#EBF0F2',
					secondary: '#D9631E',
					accent: '#8C4830',
					neutral: '#3D4451',
					'base-100': '#121212',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		],
		darkTheme: 'halloween',
	}
};
