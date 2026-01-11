/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["MyCustomFont", "Poppins", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%)",
        "primary-gradient-hover":
          "linear-gradient(to right, #79CBCA 0%, #77A1D3 51%, #79CBCA 100%)",
      },
      backgroundSize: {
        200: "200% 100%",
      },
    },
  },
  plugins: [],
};
