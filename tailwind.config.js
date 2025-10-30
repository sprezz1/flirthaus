/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Noir Romance Palette
				primary: '#121212', // Rich Black
				secondary: '#7C1D3C', // Deep Burgundy
				'accent-pearl': '#F8F4F0', // Pearl
				'accent-copper': '#B87761', // Copper
				background: '#FAFAFA', // Light Gray
				'text-dark': '#3D3D3D', // Warm Gray
				'text-light': '#FFFFFF', // White
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
			},
			fontSize: {
				xs: '0.75rem', // 12px
				sm: '0.875rem', // 14px
				base: '1rem', // 16px
				lg: '1.125rem', // 18px
				xl: '1.25rem', // 20px
				'2xl': '1.5rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem', // 36px
				'5xl': '3rem', // 48px
				'6xl': '3.75rem', // 60px
				'7xl': '4.5rem', // 72px
			},
			spacing: {
				1: '0.25rem', // 4px
				2: '0.5rem', // 8px
				3: '0.75rem', // 12px
				4: '1rem', // 16px
				5: '1.25rem', // 20px
				6: '1.5rem', // 24px
				8: '2rem', // 32px
				10: '2.5rem', // 40px
				12: '3rem', // 48px
				16: '4rem', // 64px
				20: '5rem', // 80px
				24: '6rem', // 96px
			},
			borderRadius: {
				sm: '0.25rem', // 4px
				DEFAULT: '0.5rem', // 8px
				md: '0.5rem', // 8px
				lg: '0.75rem', // 12px
				xl: '1rem', // 16px
				'2xl': '1.5rem', // 24px
				full: '9999px',
			},
			boxShadow: {
				sm: '0 1px 3px rgba(18, 18, 18, 0.12)',
				DEFAULT: '0 4px 12px rgba(18, 18, 18, 0.15)',
				md: '0 4px 12px rgba(18, 18, 18, 0.15)',
				lg: '0 10px 30px rgba(18, 18, 18, 0.2)',
				xl: '0 20px 40px rgba(18, 18, 18, 0.25)',
			},
			transitionDuration: {
				fast: '150ms',
				base: '250ms',
				slow: '350ms',
			},
		},
	},
	plugins: [],
}
