import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#111111",
                surface: "#1a1a1a",
                primary: "#FFD700",
                secondary: "#A0A0A0",
            },
            fontFamily: {
                sans: ["var(--font-noto-sans-jp)", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
