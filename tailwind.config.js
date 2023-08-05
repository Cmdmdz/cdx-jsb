/** @type {import('tailwindcss').Config} */

import { colors, fontFamily } from 'tailwindcss/defaultTheme'

import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            sans: [
                'var(--font-kanit)',
                'var(--font-poppins)',
                ...fontFamily.sans
            ],
            kanit: ['var(--font-kanit)', ...fontFamily.serif],
            popins: ['var(--font-poppins)', ...fontFamily.serif]
        },
        extend: {
            colors: {
                ...colors,
                primary: { DEFAULT: '#C1222F', light: '#ea5455' },
                red: {
                    ...colors.red,
                    dark: '#c1232f'
                },
                white: '#ffffff'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'landing-md': 'url(/images/landing-background.png)',
                landing: 'url(/images/landing-background-mobile.png)',
                news: 'url(/images/news-background.png)',
                'text-stop-gambling': 'url(/images/text-background.png)',
                'text-stop-gambling-xl':
                    'url(/images/text-background-desktop.png)'
            }
        }
    },
    plugins: []
})
