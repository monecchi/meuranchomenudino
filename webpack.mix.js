let mix = require('laravel-mix');

mix.override((config) => {
    delete config.watchOptions;
});

mix.setPublicPath('public')
    .sass('resources/scss/app.scss', 'public/css')
    .combine([
        'resources/js/mr-app-config.js',
        'resources/js/mr-app-log.js'
    ], 'public/js/mr-app-config.min.js')
    .combine([
        'resources/js/app.js',
    ], 'public/js/app.min.js');

    // Autoprefix options
mix.options({
    autoprefixer: { remove: false }
});

// Options
// mix.options({
//     postCss: [
//         require('autoprefixer')({
//             grid: true,
//         }),
//     ],
//     processCssUrls: false,
//     cssNano: {
//         discardComments: {
//             removeAll: true,
//         },
//     }
// });

// Live reload
// mix.browserSync({
//     browser: 'Google Chrome',
//     proxy: false,
//     server: {
//         baseDir: './',
//     },
//     files: [
//         '**/*.html',
//         '**/*.js',
//         '**/*.css'
//     ]
// });


// Production settings

if (mix.inProduction()) {

}
