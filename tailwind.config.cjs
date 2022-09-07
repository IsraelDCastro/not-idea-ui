module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,jsx,tsx}",
    "./globals/**/*.{js,ts,jsx,tsx}",
    './app/views/**/*.erb',
    './app/views/**/*.haml',
    './app/views/**/*.html.erb',
    './app/javascript/**/*.{vue,js,ts,jsx,tsx}',
    './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "c-base": "#222",
        primary: {
          50: "#CEE9FF",
          100: "#B7D8F7",
          200: "#A0C7EF",
          300: "#8AB5E7",
          400: "#73A4DF",
          500: "#5C93D8",
          600: "#4582D0",
          700: "#2F70C8",
          800: "#185FC0",
          900: "#014EB8"
        },
        secondary: {
          50: "#FFF9F5",
          100: "#FFE9DA",
          200: "#FFD8BF",
          300: "#FFC8A3",
          400: "#FFB888",
          500: "#FFA76D",
          600: "#FF9752",
          700: "#FF8736",
          800: "#FF761B",
          900: "#FF6600"
        },
        tertiary: {
          50: "#FAF6FE",
          100: "#E6DBEF",
          200: "#D3BFE0",
          300: "#BFA4D1",
          400: "#AB89C2",
          500: "#986DB2",
          600: "#8452A3",
          700: "#703794",
          800: "#5D1B85",
          900: "#490076"
        }
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms"
      },
      zIndex: {
        "-1": -1,
        1: 1,
        5: 5
      },
      inset: {
        "-100": "-100%"
      },
      screens: {
        tablet: "989px",
        "max-md": { max: "988px" },
        mb: { max: "500px" }
      },
      borderWidth: {
        6: "6px"
      },
      boxShadow: {
        alert: "0 6px 26px rgba(0, 0, 0, 0.1)",
        base: "0 3px 20px rgba(0, 0, 0, 0.05)"
      },
      minHeight: {
        24: "6rem",
        "3-5": "14px"
      },
      listStyleType: {
        circle: "circle"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
