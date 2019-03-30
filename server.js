const spdy = require('spdy')
const { Nuxt, Builder } = require( 'nuxt' )
const express = require('express')
const path = require('path')
const fs = require('fs')
const isProd = ( process.env.NODE_ENV === 'production' )
const port = process.env.PORT || 3000
const app = express()
const config = require( './nuxt.config.js' )
config.dev = !isProd
const nuxt = new Nuxt(config)
// Render every route with Nuxt.js
app.use( nuxt.render)

app.get('*', (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", "*")
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization")
    //res.setHeader('Access-Control-Allow-Credentials', 'true')
    res
        .status(200)
})
const options = {
    key: fs.readFileSync('./key.pem'),
    cert:  fs.readFileSync('./cert.pem')
}
console.log(options)
// We instantiate nuxt.js with the options

function listen() {
    spdy
        .createServer(options, app)
        .listen(port, (error) => {
            if (error) {
                console.error(error)
                return process.exit(1)
            } else {
                console.log('Listening on port: ' + port + '.')
            }
        })
}
if ( config.dev) {
    new Builder(nuxt).build()
        .then(
            listen()
        )
} else {
    listen()
}

