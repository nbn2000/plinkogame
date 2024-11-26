/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/**.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      roboto: ["Roboto", "sans-serif"],
      keyframes: {
        dropdownOpen: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        dropdownClose: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
      },
      animation: {
        dropdownOpen: "dropdownOpen 0.2s ease-out",
        dropdownClose: "dropdownClose 0.2s ease-in",
      },
      boxShadow: {
        "bottom-only": "0 4px 6px rgba(0, 0, 0, 0.1)", // Adjust values as needed
      },
    },
  },

  plugins: [],
};
