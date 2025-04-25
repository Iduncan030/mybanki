/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#E6E9F0',
            DEFAULT: '#161A1E',
            red: '#DD0101',
            green: '#01DD4C',
            blue: {
                10: '#4C84FF',
                50: '#2D69EB',
            },
            gray: {
                10: '#52585E',
                20: '#8A939C',
                30: '#C1CFDD',
            },
        },
        spacing: {
            5: '5px',
            10: '10px',
            15: '15px',
            30: '30px',
            60: '60px',
            90: '90px',
            120: '120px',
            150: '150px',
        },
        borderRadius: {
            normal: '5px',
            large: '10px',
        },
        fontFamily: {
            body: ['Montserrat'],
            title: ['Rubik'],
        },
        fontSize: {
            small: '11.386px',
            h4: '25.4209px',
            h3: '38.0132px',
            h2: '56.8429px',
            h1: '85px',
            xl: '292.14px',
            '2xl': '396.03px',
        },
        extend: {
            backgroundImage: {
                'hero-section': "url('./public/bg.webp')",
            },
        },
    },
    plugins: [],
};
