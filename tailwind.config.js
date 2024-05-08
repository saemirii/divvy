import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./partials/**/*.html", "./app.js", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      divvyLight: {
        "primary": "#074efd",
        "secondary": "#09101c",
        "accent": "#3e434d",
        "neutral": "#09101c",
        "base-100": "#f8fbff",
        "info": "#45cbf3",
        "success": "#93d293",
        "warning": "#e1c170",
        "error": "#ef4764",
      },
      divvyDark: {
        "primary": "#9a96d7",
        "secondary": "#c0bedc",
        "accent": "#a4a4e7",
        "neutral": "#060607",
        "base-100": "#121219",
        "info": "#9a96d7",
        "success": "#548f4f",
        "warning": "#dfb65f",
        "error": "#cb4b62",
      }
    },],
    darkTheme: "divvyDark"
  },
  plugins: [daisyui],
}

