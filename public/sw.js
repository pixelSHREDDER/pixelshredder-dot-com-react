if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>i(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"baac14cc08208adb07db3c5b68d3f828"},{url:"/_next/static/89iOIOxerYOGreDF2S7H4/_buildManifest.js",revision:"5e2834f2958a3ca1665379fdfbda871a"},{url:"/_next/static/89iOIOxerYOGreDF2S7H4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/114-4ab4c4b0554fe697.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/222-36a7bb1bb12d739a.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/310-44e007749d7dde8a.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/685-36af59fa586dd4ca.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/about-me/page-d813dab3d1c2182c.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/about-this-site/page-5f17cc79471f6346.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/layout-aea85f8a6cf726e8.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/not-found-6a45aa609bf57cd7.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/page-e8c83b7c711bcbb0.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/error-5780e5aaa8f579a2.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/layout-a9323607306d915b.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/loading-e179b0e5c9416200.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/not-found-547f1b4b641126a1.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/page-17a7ddfe5a032347.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/error-f5454175fb14403e.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/loading-614fd3797e19f19c.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/projects/page-0d99840adafe3cb0.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/business/page-a8a68fa831fe5403.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/civic-engagement-and-grassroots-politics/page-ad02d8b433788677.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/game-development/page-a196fb70ccdbef87.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/page-a1bdf2522442dba4.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/web-and-graphic-design/page-ee478424014777f4.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/app/resumes/web-development/page-6605c9ecaf666b58.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/bf6a786c-256359ac86a4f9a6.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/main-7f9706e0e53ca251.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/main-app-b17590dff932348d.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/pages/_error-f97029588ae2a47b.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-64c4101a0ddc27fc.js",revision:"89iOIOxerYOGreDF2S7H4"},{url:"/_next/static/css/21e9b736bf4f195c.css",revision:"21e9b736bf4f195c"},{url:"/_next/static/css/6cd56611c0564f58.css",revision:"6cd56611c0564f58"},{url:"/_next/static/css/7d2f7c7fb616546a.css",revision:"7d2f7c7fb616546a"},{url:"/_next/static/css/8edf445ec6dba13d.css",revision:"8edf445ec6dba13d"},{url:"/_next/static/css/91ce6a24422a1a4b.css",revision:"91ce6a24422a1a4b"},{url:"/_next/static/media/a8868439c77a009b-s.p.woff2",revision:"26e275d2a704363cd144ca67aa8a4373"},{url:"/android-chrome-192x192.png",revision:"302c64728c96bc9959f89f265b78c354"},{url:"/android-chrome-512x512.png",revision:"5121d8dffdf504d46cb67319ca32feb9"},{url:"/apple-touch-icon.png",revision:"8580b4cf49b1f06040c5d275addaac78"},{url:"/favicon-16x16.png",revision:"6c5dd28b1591b97d8638f827326665fd"},{url:"/favicon-32x32.png",revision:"a70908913d72014c8e19a2eee547d235"},{url:"/favicon.ico",revision:"436de4932d81233b2d65d5697e7cf5b4"},{url:"/images/github-mark-white.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"/images/icons8-bomb-90.png",revision:"e4cdf9a09a7407608759f28b4deff609"},{url:"/images/icons8-css-logo.svg",revision:"ce0e24d8d3b69f1e097b308eef9390b5"},{url:"/images/icons8-html-logo.svg",revision:"bb430f73c7efe6380e550293d3e6c21e"},{url:"/images/icons8-javascript.svg",revision:"490f2ce40cdfb8bbb9b6bb34e6137b84"},{url:"/images/icons8-mongodb.svg",revision:"409452f1b3c56ada4efdcfbd39ff1142"},{url:"/images/icons8-nextjs.svg",revision:"47a99732c517be2db31468f881d3e7ec"},{url:"/images/icons8-php-logo.svg",revision:"2f089537ca7099fd2ba050259ab4d2fd"},{url:"/images/icons8-react.svg",revision:"3f484ac376dad3567906d5317cd4e24b"},{url:"/images/icons8-typescript.svg",revision:"acddcbc0b3eb600c7d519c1c3f253cf7"},{url:"/images/icons8-unity.svg",revision:"7582a3c091eff966b750202ab272f300"},{url:"/images/icons8-wordpress.svg",revision:"8f2f7ccbb4005d5647885e5640172fc4"},{url:"/images/linkedin-01.svg",revision:"be62b4e31de27878e30b9b9fb9ad6863"},{url:"/images/mike-devine-headshot.jpg",revision:"070b3b405f7090740dbfdb9e7a20dcfd"},{url:"/images/startup.svg",revision:"4e89a427e4d0b67351e3b654a2df413c"},{url:"/images/tv-bezel.svg",revision:"f66bc23627147adfd2e03432f390bd95"},{url:"/images/tv-frame.svg",revision:"8d136d74d5a8356beb24012972c24a5d"},{url:"/images/tv-glow.svg",revision:"aaf33e03d6d624491b85807733887d6a"},{url:"/images/welcome-to-mikeintosh.png",revision:"545e3fc25a3aefea776816eb87dc3c4d"},{url:"/site.webmanifest",revision:"174cca6361e21e2ee6e5c0f12f180625"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
