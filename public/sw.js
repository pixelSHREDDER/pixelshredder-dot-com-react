if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"10e35f4444302d8362af8ce14b91c5b0"},{url:"/_next/static/KJAqtlDEVgEX7nK-CNQn2/_buildManifest.js",revision:"59e3741ec8c864ff4338331a98e790b6"},{url:"/_next/static/KJAqtlDEVgEX7nK-CNQn2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/114-982897ddb367c614.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/222-6abd3a8ad74a9464.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/310-d0780a1bac68d0e3.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/685-d87603b70626551c.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/about-me/page-7ab629090645d4b1.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/layout-6cd833ea42bf0aca.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/not-found-4a2919a0e0b4e4e9.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/page-da4adf3965c74968.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/error-47132aa2212b6c27.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/layout-daed69c2cb1d5141.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/loading-a43a745a862731f4.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/not-found-bdad8d876420d3d1.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/page-0cc421fd5e600495.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/error-75c93c3b77ad2edc.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/loading-6f665e46e5e8b37f.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/projects/page-38df8bde14752e18.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/business/page-c3d3aea2fa4c8e38.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/civic-engagement-and-grassroots-politics/page-aff8a5bc21fc063d.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/game-development/page-a8f75f088aed571c.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/page-84c391ce56bdd1d8.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/web-and-graphic-design/page-b02837d9019a9205.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/app/resumes/web-development/page-31e25ffb9f724a47.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/bf6a786c-910c47c74be4645e.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/main-93bb09dbe1951eb2.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/main-app-b17590dff932348d.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/pages/_error-f97029588ae2a47b.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-85c47a39a75b5774.js",revision:"KJAqtlDEVgEX7nK-CNQn2"},{url:"/_next/static/css/0f771e230a3a5dcc.css",revision:"0f771e230a3a5dcc"},{url:"/_next/static/css/2b4720803f26f1e4.css",revision:"2b4720803f26f1e4"},{url:"/_next/static/css/4154cdbe8a45f417.css",revision:"4154cdbe8a45f417"},{url:"/_next/static/css/4c65787aec573da6.css",revision:"4c65787aec573da6"},{url:"/_next/static/css/b1a016168084a846.css",revision:"b1a016168084a846"},{url:"/_next/static/media/a8868439c77a009b-s.p.woff2",revision:"26e275d2a704363cd144ca67aa8a4373"},{url:"/_next/static/media/icons8-css-logo.5ab1674b.svg",revision:"ce0e24d8d3b69f1e097b308eef9390b5"},{url:"/_next/static/media/icons8-html-logo.1a75bde4.svg",revision:"bb430f73c7efe6380e550293d3e6c21e"},{url:"/_next/static/media/icons8-javascript.8148b1a6.svg",revision:"490f2ce40cdfb8bbb9b6bb34e6137b84"},{url:"/_next/static/media/icons8-mongodb.7d4f7146.svg",revision:"409452f1b3c56ada4efdcfbd39ff1142"},{url:"/_next/static/media/icons8-nextjs.64fec363.svg",revision:"47a99732c517be2db31468f881d3e7ec"},{url:"/_next/static/media/icons8-react.098ccd82.svg",revision:"3f484ac376dad3567906d5317cd4e24b"},{url:"/_next/static/media/icons8-typescript.e6a9ddf1.svg",revision:"acddcbc0b3eb600c7d519c1c3f253cf7"},{url:"/_next/static/media/icons8-unity.0feead44.svg",revision:"7582a3c091eff966b750202ab272f300"},{url:"/android-chrome-192x192.png",revision:"302c64728c96bc9959f89f265b78c354"},{url:"/android-chrome-512x512.png",revision:"5121d8dffdf504d46cb67319ca32feb9"},{url:"/apple-touch-icon.png",revision:"8580b4cf49b1f06040c5d275addaac78"},{url:"/favicon-16x16.png",revision:"6c5dd28b1591b97d8638f827326665fd"},{url:"/favicon-32x32.png",revision:"a70908913d72014c8e19a2eee547d235"},{url:"/favicon.ico",revision:"436de4932d81233b2d65d5697e7cf5b4"},{url:"/images/github-mark-white.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"/images/icons8-bomb-90.png",revision:"e4cdf9a09a7407608759f28b4deff609"},{url:"/images/linkedin-01.svg",revision:"be62b4e31de27878e30b9b9fb9ad6863"},{url:"/images/mike-devine-headshot.jpg",revision:"070b3b405f7090740dbfdb9e7a20dcfd"},{url:"/images/noun-date-1360181.svg",revision:"9a8bc5d2a61b3a71aa09c8a0f55096b3"},{url:"/images/noun-search-settings-4841336.svg",revision:"b9c5674ab02d9c9acb7b432c83455030"},{url:"/images/startup.svg",revision:"4e89a427e4d0b67351e3b654a2df413c"},{url:"/images/tv-bezel.svg",revision:"f66bc23627147adfd2e03432f390bd95"},{url:"/images/tv-frame.svg",revision:"8d136d74d5a8356beb24012972c24a5d"},{url:"/images/tv-glow.svg",revision:"aaf33e03d6d624491b85807733887d6a"},{url:"/images/welcome-to-mikeintosh.png",revision:"545e3fc25a3aefea776816eb87dc3c4d"},{url:"/site.webmanifest",revision:"174cca6361e21e2ee6e5c0f12f180625"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
