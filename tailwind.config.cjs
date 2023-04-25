/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,jsx,tsx}",
    "./globals/**/*.{js,ts,jsx,tsx}",
    "./app/views/**/*.erb",
    "./app/views/**/*.haml",
    "./app/views/**/*.html.erb",
    "./app/javascript/**/*.{vue,js,ts,jsx,tsx}",
    "./app/frontend/**/*.{vue,js,ts,jsx,tsx}",
    "./output.css",
  ],
  theme: {
    extend: {
      colors: {
        "c-base": "#222",
        primary: {
          50: "#f1f8fd",
          100: "#deeffb",
          200: "#c5e4f8",
          300: "#9dd4f3",
          400: "#6fbbeb",
          500: "#4d9fe4",
          600: "#3884d8",
          700: "#2f70c8",
          800: "#2c5aa1",
          900: "#284d80",
          950: "#1d304e",
        },

        secondary: {
          50: "#effefc",
          100: "#c7fff9",
          200: "#90fff3",
          300: "#51f7ec",
          400: "#1de4dd",
          500: "#04c8c3",
          600: "#00a8a8",
          700: "#057f80",
          800: "#0a6365",
          900: "#0d5354",
          950: "#002f33",
        },

        tertiary: {
          50: "#faf6fd",
          100: "#f4ecfb",
          200: "#e7d8f6",
          300: "#d7baed",
          400: "#bf91e1",
          500: "#a265d0",
          600: "#8646b3",
          700: "#703794",
          800: "#5e2f79",
          900: "#502b64",
          950: "#301240",
        },
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms",
      },
      zIndex: {
        "-1": -1,
        1: 1,
        5: 5,
      },
      inset: {
        "-100": "-100%",
      },
      screens: {
        tablet: "989px",
        "max-md": { max: "988px" },
        mb: { max: "500px" },
      },
      borderWidth: {
        6: "6px",
      },
      boxShadow: {
        alert: "0 6px 26px rgba(0, 0, 0, 0.1)",
        base: "0 3px 20px rgba(0, 0, 0, 0.05)",
      },
      minHeight: {
        24: "6rem",
        "3-5": "14px",
      },
      listStyleType: {
        circle: "circle",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
