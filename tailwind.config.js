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
        "primary": "#0034ff",
        "secondary": "#09101c",
        "accent": "#09101c",
        "neutral": "#09101c",
        "base-100": "#f8fbff",
        "info": "#6a96df",
        "success": "#4aa84a",
        "warning": "#e1c170",
        "error": "#ef5571",
      },
      divvyDark: {
        "primary": "#9a96d7",
        "secondary": "#c0bedc",
        "accent": "#27272e",
        "neutral": "#060607",
        "base-100": "#121219",
        "info": "#9a96d7",
        "success": "#7cc386",
        "warning": "#dfb65f",
        "error": "#ed5671",
      }
    },],
    darkTheme: "divvyDark"
  },
  plugins: [daisyui],
}

