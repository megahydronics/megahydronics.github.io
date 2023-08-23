/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    safelist: ['w-4', 'h-4', 'w-5', 'h-5', 'w-6', 'h-6', 'w-7', 'h-7', 'w-8', 'h-8'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar')({ nocompatible: true })
    ]
}
