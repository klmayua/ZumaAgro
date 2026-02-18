/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors based on your brand guidelines
        "forest-green": "#2D5A27",
        "meadow-green": "#5B8C5A",
        "earth-brown": "#8B7355",
        "sun-gold": "#E6B325",
        "corporate-navy": "#1C2B3D",
        "clean-white": "#FFFFFF",
        "light-gray": "#F5F7FA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        "heading-1": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-2": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-3": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
}