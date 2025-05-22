/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}', // if using app dir
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: "class", //Only apply dark mode styles if the dark class is manually added somewhere in the DOM.
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["var(--font-Poppins)"],
                Josefin: ["var(--font-Josefin)"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                "1000px": "1000px",
                "1100px": "1100px",
                "1200px": "1200px",
                "1300px": "1300px",
                "1500px": "1500px",
                "800px": "800px",
                "400px": "400px",
            },
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
