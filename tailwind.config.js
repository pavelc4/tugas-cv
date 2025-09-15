/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js}", "./*.html"],
    theme: {
        extend: {
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                caramellatte: {
                    "color-scheme": "light",
                    primary: "oklch(0% 0 0)",
                    "primary-content": "oklch(100% 0 0)",
                    secondary: "oklch(22.45% 0.075 37.85)",
                    accent: "oklch(46.44% 0.111 37.85)",
                    neutral: "oklch(55% 0.195 38.402)",
                    "neutral-content": "oklch(98% 0.016 73.684)",
                    "base-100": "oklch(98% 0.016 73.684)",
                    "base-200": "oklch(95% 0.038 75.164)",
                    "base-300": "oklch(90% 0.076 70.697)",
                    info: "oklch(42% 0.199 265.638)",
                    success: "oklch(43% 0.095 166.913)",
                    warning: "oklch(82% 0.189 84.429)",
                    error: "oklch(70% 0.191 22.216)",
                },
            },
            {
                mytheme: {
                    primary: "#15369B",
                    "primary-content": "#fff",
                },
            },
            "light",
            "dark",
        ],
    },
};