/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": "1366px",
      xl: "1200px",
      lg: "992px",
      md: "768px",
      sm: "640px",
    },
    extend: {
      textColor: {
        primary: "#3B71FE",
        gray: "#727272",
      },
      colors: {
        grey: "#f7f8fa",
        primary: "#3B71FE",
      },
      boxShadow: {
        custom: "0 1px 2px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.05)",
      },
      backgroundImage: {
        home_tour:
          "url(https://modtel.travelerwp.com/wp-content/uploads/2022/04/banner-search-form-min.png)",
      },
      backgroundColor: {
        "filter":"#f7f8fa"
      }
    },
  },
  plugins: [],
};
