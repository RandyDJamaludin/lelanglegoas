"use strict";var precacheConfig=[["/index.html","c945cf7078947fac071dba92e31a1e02"],["/static/css/main.510c06f7.css","15738ad60cdf86ece379b19f5316a572"],["/static/js/main.6f0ed7ca.js","a8f3fcc0ec4c5be79e774ec8b0c26369"],["/static/media/Ban1.8d91fde1.jpg","8d91fde16ac85f86a45cd56bf8dd7f80"],["/static/media/Ban1.fa7f5b30.jpg","fa7f5b30ee01a6c5dd1994d6551b1811"],["/static/media/Ban2.57ed89ad.jpg","57ed89ad463c6a0d75dda5c61d4a88c4"],["/static/media/Ban2.f6e1d189.jpg","f6e1d189ef30a7bb7e8cf8a1add9b21e"],["/static/media/Ban3.4a749e98.jpg","4a749e989bc52fa0bfa12b3c3dde6e8b"],["/static/media/Ban3.fc419b68.jpg","fc419b683828e4bb61b876d2ae1f65f1"],["/static/media/Ban4.4afa68dd.jpg","4afa68dd45796490a08fd66da8e81cc6"],["/static/media/Ban4.837d6ba6.jpg","837d6ba6158e2b56094493d9881a48de"],["/static/media/bannerabout.3e4a28be.jpg","3e4a28be6ca98a1c2ebd9153ebb54874"],["/static/media/download.b5264e14.png","b5264e143153f2075028d42c8851977f"],["/static/media/figure.45c4c007.png","45c4c0078bef3a504059bca9707a7eb4"],["/static/media/icon1.9957697b.png","9957697b97db7111d173e30a41c3a522"],["/static/media/icon2.67822bf4.png","67822bf4a14282d29ce91c2c8088f335"],["/static/media/icon3.d16d433a.png","d16d433a859bb6409542f495f226561d"],["/static/media/icon4.c941407c.png","c941407cac5f100106e1a85d22aa39a7"],["/static/media/icon5.0a18d90c.png","0a18d90c1fe72579ddddfd158ee1f024"],["/static/media/icon6.2a4d99e5.png","2a4d99e51f692f3a3e5e048de114762f"],["/static/media/icon7.bbd66f28.png","bbd66f28d407bec6485eead74e7c558f"],["/static/media/legoas-white.5ccd08b3.png","5ccd08b37244a06795461c19bdecf152"],["/static/media/persetujuan.ff0b1c46.png","ff0b1c4696fefb2dbcdebdb8a63d27e7"],["/static/media/section-ex5.b0047bc7.jpg","b0047bc70f17652592453edf66c09258"],["/static/media/section2.b5cd0170.jpeg","b5cd0170f5ea0be65f0c8d82bbb551a1"],["/static/media/transfer.f34471f1.png","f34471f1fcc852be6bf4ca49195fd93f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});