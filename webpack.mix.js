const mix = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});


mix.js('src/app.js', 'dist')
   .sass('src/app.scss', 'dist')
   .setPublicPath('dist');