if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>i(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2072643a9952c036bc2ad8bc6efec490"},{url:"/_next/static/Ju7bQ-Zo7znNuTeMglnSW/_buildManifest.js",revision:"057afa89846a242c8d41bb25e1c0a732"},{url:"/_next/static/Ju7bQ-Zo7znNuTeMglnSW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/244-bf033d65e51aec27.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/26-f0d58519be0f7d4c.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/385-855ee14604496130.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/465-6b120b73c84a673b.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/724-aecf68f9602e8018.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/964-83975c0b3ac7e818.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/about-me/page-a9e6c9e937d6ca8a.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/layout-0bd73629c1028a7b.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/not-found-aa02419327db2ffc.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/page-887ac1af96e5c3aa.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/%5Bslug%5D/error-306cd79bfab6ebcf.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/%5Bslug%5D/layout-1c7ca97e288b52b6.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/%5Bslug%5D/loading-741dd36bf8a3b3e8.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/%5Bslug%5D/not-found-b89e2791a7b3b80b.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/%5Bslug%5D/page-ced8d220bd6d9afc.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/error-9717fd4c405c6f83.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/loading-dfddbfb58a16a843.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/projects/page-e68a891d685c87e4.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/business/page-e23eb65e5f7f8e4d.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/civic-engagement-and-grassroots-politics/page-656d263c30356cc0.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/game-development/page-924676ce3fa0a517.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/page-ad595af0c96b72f6.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/web-and-graphic-design/page-6c093dff21115e85.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/(mikeintosh)/resumes/web-development/page-8cb69330b08ff3c4.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/_not-found-181db064056b7b2f.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/%5Bslug%5D/error-4e70e8a3437bf972.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/%5Bslug%5D/layout-2f014d3c02d52477.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/%5Bslug%5D/loading-57ce51174f0a4d86.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/%5Bslug%5D/not-found-3811dffc28b29f4f.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/%5Bslug%5D/page-cbed9a42d590433a.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/error-db973aee60497446.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/layout-98de623ae8890f99.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/loading-cf7d147fcd786172.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/app/articles/page-953da8c1f010abf5.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/bf6a786c-4d8ea9791689ad45.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/main-33bcac472369e116.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/main-app-af1e78fd65ea0f9c.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-44cdc5c1e68cc2e9.js",revision:"Ju7bQ-Zo7znNuTeMglnSW"},{url:"/_next/static/css/143ee455b36d188c.css",revision:"143ee455b36d188c"},{url:"/_next/static/css/2c7fc6f8f25ee83c.css",revision:"2c7fc6f8f25ee83c"},{url:"/_next/static/css/368e517731fa5da4.css",revision:"368e517731fa5da4"},{url:"/_next/static/css/39e2b16d6ca9088c.css",revision:"39e2b16d6ca9088c"},{url:"/_next/static/css/47b79ed03a72cb6e.css",revision:"47b79ed03a72cb6e"},{url:"/_next/static/css/4b2f4589a0bbcc5a.css",revision:"4b2f4589a0bbcc5a"},{url:"/_next/static/css/4dbc10f089e825f8.css",revision:"4dbc10f089e825f8"},{url:"/_next/static/css/4e1cdf5f7dc28d5b.css",revision:"4e1cdf5f7dc28d5b"},{url:"/_next/static/css/589e81f362f4c937.css",revision:"589e81f362f4c937"},{url:"/_next/static/css/5add391890376f63.css",revision:"5add391890376f63"},{url:"/_next/static/css/5b5517843967bf2a.css",revision:"5b5517843967bf2a"},{url:"/_next/static/css/64b3c4fdbeb115cc.css",revision:"64b3c4fdbeb115cc"},{url:"/_next/static/css/694bcff58fe3207e.css",revision:"694bcff58fe3207e"},{url:"/_next/static/css/69fb79dba981544e.css",revision:"69fb79dba981544e"},{url:"/_next/static/css/802c1437da432d2d.css",revision:"802c1437da432d2d"},{url:"/_next/static/css/8be4a46f54b49b2d.css",revision:"8be4a46f54b49b2d"},{url:"/_next/static/css/9df4020952f12914.css",revision:"9df4020952f12914"},{url:"/_next/static/css/9e0df18c85e841fc.css",revision:"9e0df18c85e841fc"},{url:"/_next/static/css/a8967d05fc878b49.css",revision:"a8967d05fc878b49"},{url:"/_next/static/css/b807d60ef8fd16f0.css",revision:"b807d60ef8fd16f0"},{url:"/_next/static/css/ba485ba8a1543984.css",revision:"ba485ba8a1543984"},{url:"/_next/static/css/dc64e0b241e9d020.css",revision:"dc64e0b241e9d020"},{url:"/_next/static/css/f7def26450250a16.css",revision:"f7def26450250a16"},{url:"/_next/static/media/08709ad63e94c8dc-s.p.woff2",revision:"354b513f913519858cbb7a4520fafc78"},{url:"/_next/static/media/118bf6d367285d36-s.woff2",revision:"f2425e218d91fc6979786f4b267b7b25"},{url:"/_next/static/media/194e68b1ff4d40ee-s.woff2",revision:"4669e81d91999fb5beb09b0db0580f94"},{url:"/_next/static/media/1abb2415750be312-s.woff2",revision:"df1855be309fcfac4137c2c7a587ab4c"},{url:"/_next/static/media/21633f890e359fee-s.woff2",revision:"cb99b126275a25f969a1a17428869eb4"},{url:"/_next/static/media/293d9d85a89f760b-s.woff2",revision:"5568baada3de241152dfdcfc15bfdbf0"},{url:"/_next/static/media/3a8dc5763a8ae4b2-s.p.woff2",revision:"3d5fc7758046950deb331db2ea1bb354"},{url:"/_next/static/media/47124bda5734331b-s.woff2",revision:"4adc53ec8dfdf1f18642002fda777b38"},{url:"/_next/static/media/8976b37f8037a4c0-s.woff2",revision:"981e5326f318811beab9171f2af3255c"},{url:"/_next/static/media/8f1c77913c1cf7cb-s.woff2",revision:"7f614e99b343dcb15ff595457eb2cfd9"},{url:"/_next/static/media/9c526da3fdc4ac93-s.woff2",revision:"720060411c9cc14a53c5ec1e514d7e7c"},{url:"/_next/static/media/a8868439c77a009b-s.p.woff2",revision:"26e275d2a704363cd144ca67aa8a4373"},{url:"/_next/static/media/ada9171bd6839183-s.woff2",revision:"9e6ef6d2be89be13d2ce186ef7fccc46"},{url:"/_next/static/media/aefa312f0ff0f860-s.woff2",revision:"d4faf263c15f5f09975d5c0ced734320"},{url:"/_next/static/media/b94157c21e18e701-s.woff2",revision:"14faf047a69583cc240bc7d1b8aac1cb"},{url:"/_next/static/media/d364c42434837330-s.woff2",revision:"998b1320fd70ef6ded72784a7f86e2b2"},{url:"/_next/static/media/e9ed9197b1d41e00-s.p.woff2",revision:"20c36042027fb7fddcd4ba3d5924f65b"},{url:"/_next/static/media/ec4a340d7d92ca39-s.woff2",revision:"3b542c7620fe7f86661f8e863ff1e4da"},{url:"/_next/static/media/icons8-adobe-illustrator.caa33c6d.svg",revision:"2eb56ee68098fbd5805b162b8701e1aa"},{url:"/_next/static/media/icons8-adobe-photoshop.52965e9b.svg",revision:"ec7ef04cfb9efd48529148edc4b6f174"},{url:"/_next/static/media/icons8-css-logo.5ab1674b.svg",revision:"ce0e24d8d3b69f1e097b308eef9390b5"},{url:"/_next/static/media/icons8-express-js.fc233fc2.svg",revision:"4732f6bad0211edcf4346a276e030277"},{url:"/_next/static/media/icons8-html-logo.1a75bde4.svg",revision:"bb430f73c7efe6380e550293d3e6c21e"},{url:"/_next/static/media/icons8-javascript.8148b1a6.svg",revision:"490f2ce40cdfb8bbb9b6bb34e6137b84"},{url:"/_next/static/media/icons8-jquery.ff578f43.svg",revision:"4e95d6d59947f17c6be4b07b29ab8a2b"},{url:"/_next/static/media/icons8-material-ui.ef41bf46.svg",revision:"861aadad40cdf2f50b56641552ccdfa8"},{url:"/_next/static/media/icons8-mongodb.7d4f7146.svg",revision:"409452f1b3c56ada4efdcfbd39ff1142"},{url:"/_next/static/media/icons8-nextjs.64fec363.svg",revision:"47a99732c517be2db31468f881d3e7ec"},{url:"/_next/static/media/icons8-php-logo.305978eb.svg",revision:"2f089537ca7099fd2ba050259ab4d2fd"},{url:"/_next/static/media/icons8-react.098ccd82.svg",revision:"3f484ac376dad3567906d5317cd4e24b"},{url:"/_next/static/media/icons8-redux.1c05af58.svg",revision:"19e2aff13a76c2ca197ec9f29293b433"},{url:"/_next/static/media/icons8-typescript.e6a9ddf1.svg",revision:"acddcbc0b3eb600c7d519c1c3f253cf7"},{url:"/_next/static/media/icons8-unity.0feead44.svg",revision:"7582a3c091eff966b750202ab272f300"},{url:"/_next/static/media/icons8-wordpress.82b076cd.svg",revision:"8f2f7ccbb4005d5647885e5640172fc4"},{url:"/android-chrome-192x192.png",revision:"302c64728c96bc9959f89f265b78c354"},{url:"/android-chrome-512x512.png",revision:"5121d8dffdf504d46cb67319ca32feb9"},{url:"/apple-touch-icon.png",revision:"8580b4cf49b1f06040c5d275addaac78"},{url:"/favicon-16x16.png",revision:"6c5dd28b1591b97d8638f827326665fd"},{url:"/favicon-32x32.png",revision:"a70908913d72014c8e19a2eee547d235"},{url:"/favicon.ico",revision:"436de4932d81233b2d65d5697e7cf5b4"},{url:"/images/github-mark-white.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"/images/icons8-auth0.png",revision:"135ba27c11bdf0c36f2dbaefb576e748"},{url:"/images/icons8-bomb-90.png",revision:"e4cdf9a09a7407608759f28b4deff609"},{url:"/images/icons8-kinect-24.png",revision:"126ec2ad7ea5bbc21117b43409f002e7"},{url:"/images/linkedin-01.svg",revision:"be62b4e31de27878e30b9b9fb9ad6863"},{url:"/images/mike-devine-headshot.jpg",revision:"070b3b405f7090740dbfdb9e7a20dcfd"},{url:"/images/noun-date-1360181.svg",revision:"9a8bc5d2a61b3a71aa09c8a0f55096b3"},{url:"/images/noun-search-settings-4841336.svg",revision:"b9c5674ab02d9c9acb7b432c83455030"},{url:"/images/quarkxpress-icon.png",revision:"003938e1ca2e6d773d00179d222c2f1c"},{url:"/images/startup.svg",revision:"4e89a427e4d0b67351e3b654a2df413c"},{url:"/images/tv-bezel.svg",revision:"f66bc23627147adfd2e03432f390bd95"},{url:"/images/tv-frame.svg",revision:"8d136d74d5a8356beb24012972c24a5d"},{url:"/images/tv-glow.svg",revision:"aaf33e03d6d624491b85807733887d6a"},{url:"/images/welcome-to-mikeintosh.png",revision:"545e3fc25a3aefea776816eb87dc3c4d"},{url:"/site.webmanifest",revision:"174cca6361e21e2ee6e5c0f12f180625"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
