const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"1f5f456407c32bf9bfae1bf2310c2f23","url":"./card/extra.js"},{"revision":"d712291e8aa2dfa9748220e9ea82210f","url":"./card/gujian.js"},{"revision":"5e3610feb67053147de26b865a4f2e2d","url":"./card/guozhan.js"},{"revision":"9264106e4f4465fd204ed41374cef073","url":"./card/gwent.js"},{"revision":"cc0cbc2eb89b1a39ab601dc90be50b35","url":"./card/hearth.js"},{"revision":"7d4f95440f449a83afa049cfbc548627","url":"./card/huanlekapai.js"},{"revision":"0ca6369588ddbd29e6e7c09e9b75e582","url":"./card/mtg.js"},{"revision":"dc60d4046f5cfcebc1cf9e57caf47ab7","url":"./card/sp.js"},{"revision":"abe2c29d5ac4728cb57ecd5476557833","url":"./card/standard.js"},{"revision":"5f6b8a2a29b4e61ebd3d855f29275826","url":"./card/swd.js"},{"revision":"d7f886bbfb1d20f3943de75628c3c3c3","url":"./card/yingbian.js"},{"revision":"8b8913e03f4817be6cf87bf1fc3bbe5a","url":"./card/yongjian.js"},{"revision":"973345217be940f7d80089c5cbac369b","url":"./card/yunchou.js"},{"revision":"dabf5ad499af22be2111e3c19921c170","url":"./card/zhenfa.js"},{"revision":"3d5d54a19ba7f48c978c8aa400eb3fa9","url":"./card/zhulu.js"},{"revision":"f07bb674187537d6ad50f92c79650b8c","url":"./character/clan.js"},{"revision":"9b6b257aa8330e8296929b2a15de74e0","url":"./character/collab.js"},{"revision":"a11ddaa427cd057b34e3cffa29b5ca03","url":"./character/ddd.js"},{"revision":"47dca39c94684db73eb4bf46fd06f2bb","url":"./character/diy.js"},{"revision":"5249ab137b1a10636dc165576a65afdb","url":"./character/extra.js"},{"revision":"c1d3b705345f154161d146d882217d48","url":"./character/gujian.js"},{"revision":"fb95fef1f76f316f866a76f48c236a8c","url":"./character/gwent.js"},{"revision":"3654d4ecbbbd2cf0f3ed4b22673d9f53","url":"./character/hearth.js"},{"revision":"ff54f65a811fb1b22c67773e81d6c686","url":"./character/huicui.js"},{"revision":"7650147990af6618b06128b081bef5a8","url":"./character/jiange.js"},{"revision":"7906142e0f16ea6d681f14b8e22f7a01","url":"./character/jsrg.js"},{"revision":"311bb2830f8e25f242ee65444f506f7f","url":"./character/mobile.js"},{"revision":"7b1dadca7e35fe8c4cb537753285f452","url":"./character/mtg.js"},{"revision":"ba9c22c8ff41573aed28437a1a04e840","url":"./character/offline.js"},{"revision":"035e86fa43081853edd50a750ba392ce","url":"./character/old.js"},{"revision":"f75c8f72224805fc13159dd07eea6b8d","url":"./character/ow.js"},{"revision":"2c461f66bac9dd677bc44ee88688567d","url":"./character/rank.js"},{"revision":"c9139666640318e680f961cf7bfd5fff","url":"./character/refresh.js"},{"revision":"d80e5b3be65b905619b1a85306ebfd34","url":"./character/sb.js"},{"revision":"d0cd045da72107b6f7f2d3362f3d02bd","url":"./character/shenhua.js"},{"revision":"c2ed35c397e26b17722fba16286c02ca","url":"./character/shiji.js"},{"revision":"c7dfa560c5adbcac794f8178ce9014d0","url":"./character/sp.js"},{"revision":"3cd11990c9d616bc6d2861aee50213bb","url":"./character/sp2.js"},{"revision":"2448f316689d57c57750458c17e79eac","url":"./character/standard.js"},{"revision":"b2607e9d40bb56a9d5f43b26718b8dde","url":"./character/swd.js"},{"revision":"967c80e8892ce702faa48b0d0a7d4b04","url":"./character/tw.js"},{"revision":"47a2dfa2d741017e8cca69d778b29f7e","url":"./character/xiake.js"},{"revision":"46b626ecc0c4ced21b9c95268cc3b3b0","url":"./character/xianding.js"},{"revision":"86fdafba9b58b557ff0e87ce0d4bd611","url":"./character/xianjian.js"},{"revision":"38a31f998e5c89adeac0eb54022ffb63","url":"./character/xinghuoliaoyuan.js"},{"revision":"2e44eef75a8da1bb6dbf6a307aa2f593","url":"./character/yijiang.js"},{"revision":"8752b404a046750efbc6bd1a9377f0ab","url":"./character/yingbian.js"},{"revision":"ea443f74ba7c9149b2c158d9cce97118","url":"./character/yxs.js"},{"revision":"08ab38c4fc5bb75d762a15bfcf6d829e","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"89ea59b05e8b8c598de4d3b4a59e55a9","url":"./game/asset.js"},{"revision":"a9e18a22686db08cd1a8dde60b60608b","url":"./game/codemirror.js"},{"revision":"49c344bb9ddb2ccd8c2fafdffe5b9db3","url":"./game/config.js"},{"revision":"71d4dd0c91497dbb2a72e2a75b2f6a7d","url":"./game/core-js-bundle.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"2db5267865d9a015dbe4c16362a7f2a9","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"12c0717d3a55591cc54e5d45c18d502e","url":"./game/package.js"},{"revision":"ee5db24c5c3940996262b4f08c25e6d9","url":"./game/path.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"c1d413ad50343083ce52f317b07c5273","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"f0f1e3c8ba388d3cd589543e081cb9ea","url":"./game/source.js"},{"revision":"ef0e9573a0aea47d1558cee6e86291c8","url":"./game/src/lib/announce.js"},{"revision":"3f774c70a365469b9553d4a1223bc89e","url":"./game/update.js"},{"revision":"fb43307a41e2f51b5f66a2335118f7d6","url":"./index.html"},{"revision":"92f4086629efd9f959918ce49333fa0d","url":"./layout/default/codemirror.css"},{"revision":"9371a5a763d72334e8d9519974bed548","url":"./layout/default/layout.css"},{"revision":"312d22c50984449c469c95e2524fefb7","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"3e5bf745313d9dac45c0015121335f16","url":"./layout/mobile/layout.css"},{"revision":"8ac8205aee81a33f13bdf456d1181efc","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"854a089b6240dda88ee297851c8a63ec","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"13ff685820d9bc437b3476ee5942dac1","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"355b0c739b09ad27a16975fa2d52c299","url":"./mode/boss.js"},{"revision":"60821be37a09a4478d08502dc3a11b48","url":"./mode/brawl.js"},{"revision":"934390c49a03c450a156684710892d03","url":"./mode/chess.js"},{"revision":"4af42931be04dae32ae742717d198420","url":"./mode/connect.js"},{"revision":"deb3b4e0a5fd5ab6b9c0933d36dccae3","url":"./mode/doudizhu.js"},{"revision":"e138797b3ea910be5f54f824333ccc94","url":"./mode/guozhan.js"},{"revision":"f490fa13b21889cbc5f994ee05187d73","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"6eb9414102ed9ef4d0384bbc2ca1a708","url":"./mode/single.js"},{"revision":"1b90fc20bc4581bd57ccecb4b4c45e5f","url":"./mode/stone.js"},{"revision":"7b098fe5d20a4421feefa6e31287b607","url":"./mode/tafang.js"},{"revision":"bd8ef0f6f854e19f46d69f1b10f621d2","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"652922b6159a0d22541cfb88d63fa83e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Audios
workbox.routing.registerRoute(
  /\.(?:mp3|m4a|ogg|wav|aac)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "audio",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 360,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 15,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
