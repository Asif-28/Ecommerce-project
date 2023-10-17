/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/1": "100%",
        "3/4": "75%",
        "9/16": "56.25%",
      },
    },
  },
  plugins: [],
};
