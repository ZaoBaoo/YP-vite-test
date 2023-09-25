import { defineConfig } from 'vite';
// import handlebars from 'vite-plugin-handlebars';
import handlebars from './src/utils/vite-plugin-handlebars-precompile.js';

export default defineConfig({
    // plugins: [handlebars({
    //     partialDirectory: 'src/partials',
    //     context: {
    //         username: 'Daniil Yurkin'
    //     }
    // })],
    plugins: [handlebars()]
})


