git init
touch .gitignore
/node_modules
npm-debug.log
yarn-error.log


1. yarn init
2. yarn add tailwindcss --dev
https://next.tailwindcss.com/docs/controlling-file-size
simple:
1. create styles.css
@tailwind base;

@tailwind components;

@tailwind utilities;

2.npx tailwind build styles.css -o output.css

laravel mix:
https://laravel-mix.com/docs/4.0/installation
1. yarn add laravel-mix --dev
2. cp node_modules/laravel-mix/setup/webpack.mix.js ./