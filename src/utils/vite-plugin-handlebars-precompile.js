import Handlebars from "handlebars";

export default function handlebars() {
    const fileRegexp = /\.hbs$|\.handlebars$/;

    return {
        name: 'vite-plugin-handlebars-precompile',
        transform(str, path) {
            if(!fileRegexp.test(path)) {
                return;
            }

            console.log(str)

            // language=javascript
            const code = `
                import Handlebars from 'handlebars/runtime';

                export default Handlebars.template(${Handlebars.precompile(str)})
            `

            return {
                code
            }
        }
    }
}
