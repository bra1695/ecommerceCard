module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C5BA1", // Exemple, à adapter
        secondary: "#F5A623",
        background: "#F8F9FA",
        textPrimary: "#212529",
        textSecondary: "#6C757D",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        'section': '80px',
        'gap': '16px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '24px',
      },
      boxShadow: {
        'card': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
