/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Almost_White: "hsl(0, 0%, 98%)",
                c_Medium_Gray: "hsl(0, 0%, 41%)",
                c_Almost_Black: "hsl(0, 0%, 8%)",
            },
            fontFamily: {
                epilogue: ["Epilogue", "sans-serif"]
            }
        },
    },
    plugins: [],
}

