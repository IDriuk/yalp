"use strict";var precacheConfig=[["/yalp/index.html","c8ea05546932c2d35e72661880c43e73"],["/yalp/static/css/main.49298169.css","bcce92ec3fd376b464da39e198847b1c"],["/yalp/static/js/main.f49c7d6a.js","66cb833f52467fc39aa28e08904cb897"],["/yalp/static/media/dryclean.8f8486bb.png","8f8486bb9e9ac631cc629acc79ce5631"],["/yalp/static/media/feed_hero_1.7711becb.jpg","7711becbf5bdcef00ad30447e8c48597"],["/yalp/static/media/feed_photo_big_1.596e6c65.jpg","596e6c658423d073f3c413bf463cac49"],["/yalp/static/media/feed_photo_big_2.87094256.jpg","87094256feb51c132991a2e699550f05"],["/yalp/static/media/feed_photo_single.7b8f72bd.jpg","7b8f72bdc54c12fe0db48539e31db060"],["/yalp/static/media/footer_cityscape.573fa19c.png","573fa19c843556eac5a998fc6d1f80f8"],["/yalp/static/media/hotels.b9245f29.png","b9245f29e643e187bd8ec21bb0af621d"],["/yalp/static/media/massage.133089f9.png","133089f94bbf213a5708027abb69634a"],["/yalp/static/media/movers.705be974.png","705be9748d047d85d6de2971eb06ff31"],["/yalp/static/media/pitch_android.a91a4a08.png","a91a4a087787b1aa9aa729e3de5743d7"],["/yalp/static/media/pitch_ios.960cce5c.png","960cce5c1917bdabc568aa735f2d866f"],["/yalp/static/media/stars.9b34e39c.png","9b34e39ccbeb1c01a8e5ce9462ff64c1"],["/yalp/static/media/top_photo.252051bf.jpg","252051bf4fce95657cdb397d4c3739e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/yalp/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});