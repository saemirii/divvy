import handlebars from 'vite-plugin-handlebars';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [handlebars({
    partialDirectory: "./partials"
  })]
}