module.exports = {
  theme: {
    extend: {
      colors: {
        rotko: {
          500: "#b40000",
          600: "#9c0000",
          700: "#750000",
        },
      },
    },
    plugins: [
      require('tailwindcss-textshadow')
    ]
  },
};
