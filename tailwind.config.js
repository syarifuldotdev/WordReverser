/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#2f3136",
          secondary: "#36393f",
          accent: "#7289da",
          neutral: "#ffffff",
          "base-100": "#0d1117",
          info: "#66b2ff",
          success: "#adebad",
          warning: "#ffd966",
          error: "#ff3f3f",
        },
      },
    ],
  },
};
