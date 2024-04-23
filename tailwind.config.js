import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app.js", "./src/**/*.js"],
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
        "base-100": "#eceff4",
        "info": "#6a96df",
        "success": "#4aa84a",
        "warning": "#e1c170",
        "error": "#ef5571",
      },
      divvyDark: {
        "primary": "#440aef",
        "secondary": "#a7a7c5",
        "accent": "#27272e",
        "neutral": "#060607",
        "base-100": "#121219",
        "info": "#5c5cd5",
        "success": "#7cc386",
        "warning": "#dfb65f",
        "error": "#ed5671",
      }
    },],
    darkTheme: "divvyDark"
  },
  plugins: [daisyui],
}

