/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './views/**/*.ejs', // Ensure this includes .ejs files, not .html
        './public/**/*.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: ['fantasy'],
    },
}