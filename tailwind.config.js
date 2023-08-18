/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      fontSize: {
        sm: "10px",
        md: "14px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "30px",
      },
    },

    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#9f9f9f",
        glassMorphism: "rgba(255, 255, 255, 0.2)",
        ColorRound: "rgba(255, 255, 255, 0.1)",
        gradientFirst: "rgb(255 255 255 / 32%)",
        gradientSecound: "rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        "max-l": { max: "920px" },
        // => @media (max-width: 920px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
