module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          xs: "0px",
          sm: "600px",
          md: "960px",
          lg: "1170px",
          xl: "1920px",
        },
        colors: {
          blackgrey: "#262424",
          bluesky: "#33AACF",
          prehead_gray: "#5E6282",
          subs_cta: '#FF946D'
        },
        fontSize: {
          xxs: "8px",
          "84": "84px"
        },
        maxWidth: {
          '90%': "90%",
          "150%": "150%"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };