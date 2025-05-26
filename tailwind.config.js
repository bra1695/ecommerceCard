module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0': '0px',
        '-025': '2px',
        '-050': '4px',
        '-075': '6px',
        '100': '8px',
        '125': '10px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
        '600': '48px',
        '800': '64px',
        '1000': '80px',
      },
      colors: {
        background: {
          light: '#EBF2FC', // Default (light mode) background color
          dark: '#091540',    // Dark mode background color
        },
        neutral: {
          '900': '#091540',
          '800': '#202535',
          '700': '#2F364B',
          '600': '#535868',
          '300': '#C6C6C6',
          '200': '#D6E2F5',
          '100': '#EEEEEE',
          '0': '#FBFDFE',
        },
        red: {
          '400': '#F25C54',
          '500': '#DE4840',
          '700': '#C7231A',
        },
      },
      backgroundImage: (theme) => ({
        'light-gradient': "linear-gradient(180deg, #EBF2FC 0%, #EEFBF9 100%)",
        'dark-gradient': "linear-gradient(180deg, #04091B 0%, #091540 100%)",
      }),
    },
  },
  plugins: [],
};
