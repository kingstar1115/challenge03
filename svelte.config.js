const sveltePreprocess = require('svelte-preprocess');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  // enable run-time checks when not in production
  dev: !production,
  // we'll extract any component CSS out into
  // a separate file - better for performance
  css: css => {
    css.write('public/build/bundle.css');
  },
  preprocess: sveltePreprocess({
    sourceMap: !production,
    defaults: {
      script: 'typescript',
      style: 'scss'
    },
    scss: {
      // We can use a path relative to the root because
      // svelte-preprocess automatically adds it to `includePaths`
      // if none is defined.
      prependData: `@import 'src/styles/_variables.scss';`,
      renderSync: true
    },
    postcss: {
      plugins: [require('autoprefixer')()]
    }
  }),
};
