"use strict";var precacheConfig=[["/yalp/index.html","a5261447a94bdcfdb6be42a80f34e903"],["/yalp/static/css/main.9da620d0.css","fff1a2efe4170849dbcf922072b0100e"],["/yalp/static/js/main.1091aaaf.js","ca1d225b44938f032c3afc20cc96ba97"],["/yalp/static/media/bluestonelane.6921882a.jpg","6921882a3bbaec6e7b2d97cf99f05070"],["/yalp/static/media/dryclean.8f8486bb.png","8f8486bb9e9ac631cc629acc79ce5631"],["/yalp/static/media/hotels.b9245f29.png","b9245f29e643e187bd8ec21bb0af621d"],["/yalp/static/media/jsDmbW9Eaqgyc0Kbw4TUvg.7711becb.jpg","7711becbf5bdcef00ad30447e8c48597"],["/yalp/static/media/kaya.67c7adfe.jpg","67c7adfe411a37b9e3a44e95e9c319b4"],["/yalp/static/media/massage.133089f9.png","133089f94bbf213a5708027abb69634a"],["/yalp/static/media/movers.705be974.png","705be9748d047d85d6de2971eb06ff31"],["/yalp/static/media/pastapopup.e43d465a.jpg","e43d465afd934c3d761a505a4a9e7785"],["/yalp/static/media/photo_EiZICTpAxWEmpvhDnduYdw.7b8f72bd.jpg","7b8f72bdc54c12fe0db48539e31db060"],["/yalp/static/media/photo_dLinn6rjkWYrtnMDTvDisQ.87094256.jpg","87094256feb51c132991a2e699550f05"],["/yalp/static/media/photo_tSaWNHKlJc4iOuGjvCRMmQ.596e6c65.jpg","596e6c658423d073f3c413bf463cac49"],["/yalp/static/media/pitch_android.a91a4a08.png","a91a4a087787b1aa9aa729e3de5743d7"],["/yalp/static/media/pitch_ios.960cce5c.png","960cce5c1917bdabc568aa735f2d866f"],["/yalp/static/media/stars.9b34e39c.png","9b34e39ccbeb1c01a8e5ce9462ff64c1"],["/yalp/static/media/top_photo.252051bf.jpg","252051bf4fce95657cdb397d4c3739e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/yalp/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});