const mix = require('laravel-mix');

/**
 * Laravel Mix plugins
 */
require('laravel-mix-purgecss');

/**
 * Base configuration
 */
mix
  .setPublicPath('public')
  .browserSync({
    proxy: null,
    server: 'public'
  });

/**
 * Scripts
 */
mix.react('resources/js/main.js', 'public/js');

/**
 * Styles
 */
mix
  .postCss('resources/css/main.css', 'public/css', [
    require('postcss-import')(),
    require('tailwindcss')(),
    require('postcss-preset-env')({ stage: 0 }),
  ])
  .purgeCss({
    content: [
      './public/**/*.html',
      './resources/js/**/*.js',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g || []),
  });
