importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b5bc8188d84d429f78e.js",
    "revision": "03a1569e8e82cfb394c0254e70bad44e"
  },
  {
    "url": "/_nuxt/3b63dea55b96318599b2.js",
    "revision": "e4293cd280344ee3cabc034c8dd42cb8"
  },
  {
    "url": "/_nuxt/5c88ee7aded72b62c0f8.js",
    "revision": "8f07666a3edd6e80a604ad44697941db"
  },
  {
    "url": "/_nuxt/917644a4b1991531ed81.js",
    "revision": "9ddbecd5c0501824c6983ef8c67ba688"
  },
  {
    "url": "/_nuxt/c40133765d75f3dbf990.js",
    "revision": "a96eb70a405e10097f3ead2d3915654d"
  }
], {
  "cacheId": "hotpotato-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
