if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),d={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts("fallback-fWDpFCJu8cSoqj4I9rNml.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/591-dc3eb767c375032b.js",revision:"dc3eb767c375032b"},{url:"/_next/static/chunks/664-d32e4e6ee1468c97.js",revision:"d32e4e6ee1468c97"},{url:"/_next/static/chunks/795-f80e2d6cd415c081.js",revision:"f80e2d6cd415c081"},{url:"/_next/static/chunks/framework-7a7e500878b44665.js",revision:"7a7e500878b44665"},{url:"/_next/static/chunks/main-d3a63d56a192cdfa.js",revision:"d3a63d56a192cdfa"},{url:"/_next/static/chunks/pages/_app-160b1489f81666d2.js",revision:"160b1489f81666d2"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-7885f3e5c3f30f00.js",revision:"7885f3e5c3f30f00"},{url:"/_next/static/chunks/pages/about-me-316e71d8ae5cf889.js",revision:"316e71d8ae5cf889"},{url:"/_next/static/chunks/pages/about-this-site-e2b5ced8ef966fba.js",revision:"e2b5ced8ef966fba"},{url:"/_next/static/chunks/pages/index-f15d3c9534a2f700.js",revision:"f15d3c9534a2f700"},{url:"/_next/static/chunks/pages/resumes-c64f69e3f2f6e8ec.js",revision:"c64f69e3f2f6e8ec"},{url:"/_next/static/chunks/pages/resumes/business-82bc5de69b9875e6.js",revision:"82bc5de69b9875e6"},{url:"/_next/static/chunks/pages/resumes/civic-engagement-and-grassroots-politics-6330ebfbdcde0096.js",revision:"6330ebfbdcde0096"},{url:"/_next/static/chunks/pages/resumes/game-development-cdd4948b7b6cd66d.js",revision:"cdd4948b7b6cd66d"},{url:"/_next/static/chunks/pages/resumes/web-and-graphic-design-36197ee21c8c0a73.js",revision:"36197ee21c8c0a73"},{url:"/_next/static/chunks/pages/resumes/web-development-7bafa14d0ede763a.js",revision:"7bafa14d0ede763a"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/0d628a23b20bf6ef.css",revision:"0d628a23b20bf6ef"},{url:"/_next/static/css/90ee510ea6a89537.css",revision:"90ee510ea6a89537"},{url:"/_next/static/fWDpFCJu8cSoqj4I9rNml/_buildManifest.js",revision:"efd6fbe150c31eb52a1e5b20d088b854"},{url:"/_next/static/fWDpFCJu8cSoqj4I9rNml/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/31dd38bdb4daced8-s.woff2",revision:"f73d708ec96ee9a1529da3fc3a19f617"},{url:"/_next/static/media/3511decdf5d10790-s.woff2",revision:"fdecb4b272000f23b3834018b3948b31"},{url:"/_next/static/media/60c1b9efbca49fe9-s.woff2",revision:"402b95e6a9996cd78478be754ec479bb"},{url:"/_next/static/media/61cd2e7f311e7836-s.woff2",revision:"efad942e66cbfb70f34d3464138bfe28"},{url:"/_next/static/media/999f4d94c8b14f83-s.woff2",revision:"12faead930981cbd7eb1c7a7349e6332"},{url:"/_next/static/media/9b8c15de1de72117-s.p.woff2",revision:"6fb0b09a8f49ac61224f379739698ffc"},{url:"/_next/static/media/a8868439c77a009b-s.p.woff2",revision:"26e275d2a704363cd144ca67aa8a4373"},{url:"/_next/static/media/f36ad5a94261c3ca-s.p.woff2",revision:"bf11a0538c3cc8fc78669d821fe7c938"},{url:"/_next/static/media/fd428b69af9ef976-s.woff2",revision:"418198dd0dc09e9ee645f9e46b9a3b3d"},{url:"/_offline",revision:"fWDpFCJu8cSoqj4I9rNml"},{url:"/android-chrome-192x192.png",revision:"302c64728c96bc9959f89f265b78c354"},{url:"/android-chrome-512x512.png",revision:"5121d8dffdf504d46cb67319ca32feb9"},{url:"/apple-touch-icon.png",revision:"8580b4cf49b1f06040c5d275addaac78"},{url:"/favicon-16x16.png",revision:"6c5dd28b1591b97d8638f827326665fd"},{url:"/favicon-32x32.png",revision:"a70908913d72014c8e19a2eee547d235"},{url:"/favicon.ico",revision:"436de4932d81233b2d65d5697e7cf5b4"},{url:"/images/github-mark-white.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"/images/linkedin-01.svg",revision:"be62b4e31de27878e30b9b9fb9ad6863"},{url:"/images/mike-devine-headshot.jpg",revision:"070b3b405f7090740dbfdb9e7a20dcfd"},{url:"/images/startup.svg",revision:"4e89a427e4d0b67351e3b654a2df413c"},{url:"/images/tv-bezel.svg",revision:"f66bc23627147adfd2e03432f390bd95"},{url:"/images/tv-frame.svg",revision:"8d136d74d5a8356beb24012972c24a5d"},{url:"/images/tv-glow.svg",revision:"aaf33e03d6d624491b85807733887d6a"},{url:"/images/welcome-to-mikeintosh.png",revision:"545e3fc25a3aefea776816eb87dc3c4d"},{url:"/site.webmanifest",revision:"174cca6361e21e2ee6e5c0f12f180625"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
