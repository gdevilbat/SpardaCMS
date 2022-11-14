const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        },
    })
    .alias({ '^': path.resolve('Modules') })
    .alias({ '@': path.resolve('resources/js') })
    .alias({ '%' : path.resolve('public')})
    .js('resources/js/app.js', 'public/js').vue(3)
    .sass('resources/sass/app.scss', 'public/css/app.css', )
    .options({
        // Don't perform any css url rewriting by default
        processCssUrls: true,
    })
    .extract(['vue','bootstrap','bootstrap-vue','vuetify','lodash'])
    .version();