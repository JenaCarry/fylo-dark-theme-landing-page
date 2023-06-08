/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        introEmail: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonials: "hsl(219, 30%, 18%)",
        btn: {
          100: "hsl(176, 68%, 64%)",
          200: "hsl(198, 60%, 50%)",
        },
        error: "hsl(0, 100%, 63%)",
      },
      backgroundImage: {
        gradient: "linear-gradient(140deg, #63E1D9 -50%, #34A0CD 100%);",
        quotes: "url('../images/bg-quotes.png')",
      },
      content: {
        arrow: 'url("../images/icon-arrow.svg")',
      },
    },
  },
  plugins: [],
};
