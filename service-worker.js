/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f67f0c7819b4ae79f723e0f93cd453b7"
  },
  {
    "url": "assets/css/0.styles.46ca355f.css",
    "revision": "652823b5638f6ccea5f7ab2bec45fb9b"
  },
  {
    "url": "assets/img/ABAC.65898cd8.svg",
    "revision": "65898cd8e222590a52de7faed74f1aef"
  },
  {
    "url": "assets/img/api.e9f8c58f.svg",
    "revision": "e9f8c58fa9da64cdda4348ecec07d5e3"
  },
  {
    "url": "assets/img/data_life_cycle.c5c3f545.svg",
    "revision": "c5c3f545d58bc65e0d5d2368b7499ad5"
  },
  {
    "url": "assets/img/database_extraction.c814b4fc.svg",
    "revision": "c814b4fcee5f85f20560fa7ac46064fa"
  },
  {
    "url": "assets/img/relation_diagram.ba3b7cbf.svg",
    "revision": "ba3b7cbfb1b908c59adfc21776437ab2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/webscraping.88223cb1.svg",
    "revision": "88223cb1f8ff7767300cbf1968dab084"
  },
  {
    "url": "assets/js/1.51fae515.js",
    "revision": "37868be5d5b83eebd229c90dd5d16f3f"
  },
  {
    "url": "assets/js/10.32cffbb8.js",
    "revision": "628832c5d1a158a8927d5f15b8f16527"
  },
  {
    "url": "assets/js/13.c830fb2b.js",
    "revision": "5a4e92bd0e53436b157fe29d584943f6"
  },
  {
    "url": "assets/js/14.eb9dfcd0.js",
    "revision": "918b3d14a0297b45e7f7b4a2a1dadc6a"
  },
  {
    "url": "assets/js/15.ca943a24.js",
    "revision": "e6744be6c7a0f8d47764d04e93ba0c83"
  },
  {
    "url": "assets/js/16.b99e3216.js",
    "revision": "0a09014b99cc9842a823c77769cd12ec"
  },
  {
    "url": "assets/js/17.63695308.js",
    "revision": "775be2204f498596084166a11ab25b10"
  },
  {
    "url": "assets/js/18.4cb119c6.js",
    "revision": "01b984cd1598200678d88ba910b67125"
  },
  {
    "url": "assets/js/19.753ef89d.js",
    "revision": "3126d7158dd735c32627391b68bf175a"
  },
  {
    "url": "assets/js/2.c6cfd3d8.js",
    "revision": "5b0515835352e0d10be1b7d02550e7ef"
  },
  {
    "url": "assets/js/20.0a6a8e3c.js",
    "revision": "5bbc14bdcfb3315c7336ebfce4bdfc37"
  },
  {
    "url": "assets/js/21.6f16b4b1.js",
    "revision": "f386e9d86eccc3eb85be8d05cc495cb8"
  },
  {
    "url": "assets/js/22.967d7b6f.js",
    "revision": "f17f1b3d1d62679d66de405fecc9b3fc"
  },
  {
    "url": "assets/js/23.6926fd8f.js",
    "revision": "f5b463adffec4f9daa419d507c540289"
  },
  {
    "url": "assets/js/24.12c0f6f6.js",
    "revision": "90991fdb88c327d26846bc43e6c0aa7c"
  },
  {
    "url": "assets/js/25.1d0e86c4.js",
    "revision": "b01819182f1ce9d4d6a8f43c9a71182d"
  },
  {
    "url": "assets/js/26.54c90cdc.js",
    "revision": "976e1ce622f242b6c05cbb6ad5d9c9af"
  },
  {
    "url": "assets/js/27.3b5ca33f.js",
    "revision": "2e72c3b88d09bd404031475fdec449ef"
  },
  {
    "url": "assets/js/28.9781996d.js",
    "revision": "aa6a93f752b44712b190d0c3a9e2e20d"
  },
  {
    "url": "assets/js/29.eff80217.js",
    "revision": "d6ba9e3fe5e0dd99cf4bc9af9070aa15"
  },
  {
    "url": "assets/js/3.648b61b6.js",
    "revision": "093e1728a001aac2def189fe2ccc139d"
  },
  {
    "url": "assets/js/30.598bf2cc.js",
    "revision": "3224fd0465c0ea49d42d6e4bad5d8ebd"
  },
  {
    "url": "assets/js/31.339cebd3.js",
    "revision": "2bf9c2859c71e334ae97191e2874e873"
  },
  {
    "url": "assets/js/32.879514e0.js",
    "revision": "3d34086cec505b27d68bc48a25bce889"
  },
  {
    "url": "assets/js/33.4a9f59ec.js",
    "revision": "f1711b9c1def2b0f80995cb59912d8ba"
  },
  {
    "url": "assets/js/34.dc9adaa5.js",
    "revision": "3bac24db21fc6613140fccadbbe602b3"
  },
  {
    "url": "assets/js/35.2e25a681.js",
    "revision": "1fe8d43a8457e576f2c346d7ac551233"
  },
  {
    "url": "assets/js/36.64d07051.js",
    "revision": "3ba18a1dd5f7e819110449f2fb04f36c"
  },
  {
    "url": "assets/js/37.165fcb64.js",
    "revision": "beb159b0676236adbf4ac1937e458302"
  },
  {
    "url": "assets/js/38.46340c5b.js",
    "revision": "3f96fedb627825f5c6ae2a7e067bc25f"
  },
  {
    "url": "assets/js/39.4ecd48f9.js",
    "revision": "cea2c60575f701ca3a581a2580b38e87"
  },
  {
    "url": "assets/js/4.1a6500a1.js",
    "revision": "8c142413e60b6c31a67a5524fa384881"
  },
  {
    "url": "assets/js/41.06698aab.js",
    "revision": "72df058511f6588ba0b2a2e249535fbf"
  },
  {
    "url": "assets/js/5.88a05775.js",
    "revision": "c84f794965c01c2cf49545de36ee1c39"
  },
  {
    "url": "assets/js/6.11570c6b.js",
    "revision": "0005ab6c784eedeaee129006159cbffa"
  },
  {
    "url": "assets/js/7.56c06c9d.js",
    "revision": "fdf4de3351faafe280455f4fe1e759a5"
  },
  {
    "url": "assets/js/8.cbc7fc26.js",
    "revision": "a713f825dcd022233c38b171d9c2fcf1"
  },
  {
    "url": "assets/js/9.cb757cd8.js",
    "revision": "aef67958c0327bd49f9a589973f0c0fd"
  },
  {
    "url": "assets/js/app.34c2b8f1.js",
    "revision": "acdd9b5cb34d39139064229990128b6b"
  },
  {
    "url": "assets/js/vendors~docsearch.6230cc17.js",
    "revision": "60bd84b8d30efa956ffe55d752ca92dc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "291a582a2d6ad405818dde5445f813a7"
  },
  {
    "url": "design/index.html",
    "revision": "e6080e225282732c76275be30b6d0d04"
  },
  {
    "url": "index.html",
    "revision": "0d23ca02eacb46ef6c22b642dd1375d0"
  },
  {
    "url": "intro/index.html",
    "revision": "2af87a0ff156af62917c86a949149e8f"
  },
  {
    "url": "license.html",
    "revision": "46786d47463140b51aa58fd09c3198f6"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "3acba75fbc76c7c2543c0dc65f1ec538"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "830c85b85e8037972f94990cc14a1c8c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8476b6798a28b5a80cd6b6db1334c0c3"
  },
  {
    "url": "software/index.html",
    "revision": "e29e750958f296f6415e5d608083e453"
  },
  {
    "url": "test/index.html",
    "revision": "850443e444fef95faa481c30e785cd88"
  },
  {
    "url": "use cases/index.html",
    "revision": "ec8eb202c65057b02125a541f7ac8564"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
