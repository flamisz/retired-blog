let mix = require('laravel-mix');

mix.postCss('src/styles.css', 'dist', [
    require('tailwindcss'),
])
