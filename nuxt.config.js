const pkg = require('./package')


module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Hot Potato Video Tool',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Hot Potato Video Tool'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: pkg.description
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'css/web-thumbnail.png'
            },
            {
                name: 'google-site-verification',
                content: '556e705a365f879'
            },
            {
                name: 'msapplication-TileImage',
                content: 'css/favicon/icon.png'
            }
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700'},
            {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'},
            //{rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/fonts/font-awesome-4.7.0/css/font-awesome.min.css'},
            {rel: 'stylesheet', href: 'css/bootstrap-4-polyfill.css'},
            {rel: 'stylesheet', href: 'css/style.css'},
            {rel: 'stylesheet', href: 'css/nouislider.min.css'},
            {rel: 'icon', type: 'image/x-icon', href: 'css/favicon/favicon.ico'},
            {
                rel: 'stylesheet',
                href: '//use.fontawesome.com/releases/v5.8.1/css/all.css',
                crossorigin: 'anonymous',
                integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
            }

        ],
        script: [
            {type: 'text/javascript', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'},
            {type: 'text/javascript', src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js'},
            {type: 'text/javascript', src: 'https://apis.google.com/js/client.js'},
            {type: 'text/javascript', src: 'https://content.jwplatform.com/libraries/FxXAImPG.js'},
            {type: 'text/javascript', src: 'js/nouislider.js'},
            {type: 'text/javascript', src: 'https://apis.google.com/js/client.js'}

        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy',
        // Doc: https://bootstrap-vue.js.org/docs/
        //'bootstrap-vue/nuxt',
        //'@nuxtjs/pwa',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    generate: {
        routes: [
            '/',
        ]
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
