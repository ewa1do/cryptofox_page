/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#FFFFFF',
                complement: '#000000',
                accent: '#1f7a8c',
                accent_shade: '#196270',
                royalBlue: '#14213D',
                gold: '#FCA311',
                gold_shade: '#e3930f',
                gray: '#E5E5E5',
                shade: '#1a1a1a',
            },
        },
    },
    plugins: [],
}
