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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
