const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"12cf7bdfed121650a826becee6669c40","url":"./card/extra.js"},{"revision":"98f527af9991064985265b43c637be37","url":"./card/gujian.js"},{"revision":"044a6b65a6801c9958abb8a49ace2b37","url":"./card/guozhan.js"},{"revision":"115987f3f2bf0942717fe5e08e1543b2","url":"./card/gwent.js"},{"revision":"a63bcc74d1d547c4f4e7c7db9fa2bdc8","url":"./card/hearth.js"},{"revision":"44e23a58ff183f3a79fbe78f3ea9aff4","url":"./card/huanlekapai.js"},{"revision":"00529b34d0acfc15725e22f22ce37b05","url":"./card/mtg.js"},{"revision":"e280097f251362cbe7acb1c1f09d7cb1","url":"./card/sp.js"},{"revision":"504934177d1e28633c17242d4144c8f3","url":"./card/standard.js"},{"revision":"ea363b3132e4c319ea3b0d381c719340","url":"./card/swd.js"},{"revision":"27eb510921b0a6c24d179f279e7f7c00","url":"./card/yingbian.js"},{"revision":"fe7a206b08ca3d1e0941c69c5e94a53d","url":"./card/yongjian.js"},{"revision":"c1b7ea8883925349ca5f478b455f0c00","url":"./card/yunchou.js"},{"revision":"0e9e80f9e9fae84424ff1a2985d4f9c2","url":"./card/zhenfa.js"},{"revision":"45f2da905a90933bc8a58850de5c139b","url":"./card/zhulu.js"},{"revision":"56908194a99c210f6fc1dd250e0d8a29","url":"./character/clan.js"},{"revision":"e507985812d8ec64e36664a06a219a92","url":"./character/collab.js"},{"revision":"d547e804ab88857b348c91591cdf51ff","url":"./character/ddd.js"},{"revision":"5327003ad6a3057bcbe6c350fce5f829","url":"./character/diy.js"},{"revision":"122b52515890b2091623753fdf66f3d9","url":"./character/extra.js"},{"revision":"39c0b8238850a98b7b57fdde2d0a15ad","url":"./character/gujian.js"},{"revision":"1aca301fb1456302e467e587c8c01db7","url":"./character/gwent.js"},{"revision":"8e09bfe92c013e893566855b21e9e92a","url":"./character/hearth.js"},{"revision":"38b9092f8b804ed3ebf24c07288d8037","url":"./character/huicui.js"},{"revision":"503ff64db5ec2f863539c6b5764b95ee","url":"./character/jiange.js"},{"revision":"db2f40ac94a956d8ae117d41267e944f","url":"./character/jsrg.js"},{"revision":"c0bede109799f7d073583455234fd5a2","url":"./character/mobile.js"},{"revision":"11d35a35717140556917734de16e0721","url":"./character/mtg.js"},{"revision":"b586b534693bad5ab2e82e1dd21ee65f","url":"./character/offline.js"},{"revision":"99a3d674583acbc619d5d2018d5842b7","url":"./character/old.js"},{"revision":"84ea00b038d75d1c29c52d98eea7bedd","url":"./character/onlyOL.js"},{"revision":"2c6487baae243a1c14c6eb45cd90cac5","url":"./character/ow.js"},{"revision":"9734a4b6dceb721648eea2ef8673f717","url":"./character/rank.js"},{"revision":"9d653eafdac7a105e960918a5a2bcfba","url":"./character/refresh.js"},{"revision":"b9c8f2b355af4032ac595b7e1d48c9e8","url":"./character/sb.js"},{"revision":"d4dfe89f25204e4576cc4bc3d7d44901","url":"./character/shenhua.js"},{"revision":"d133ca7e7a0516280a99c525499b032e","url":"./character/shiji.js"},{"revision":"2c51502e60d16d46de8abd0353551ff7","url":"./character/sp.js"},{"revision":"9c6208b4b70f9a87f1ae70bc0e005f5e","url":"./character/sp2.js"},{"revision":"568459e3e32125883bfc2abeb4a42e49","url":"./character/standard.js"},{"revision":"4492b174fae3d359056a0f606cd2dcb5","url":"./character/swd.js"},{"revision":"0ef48860e97a09b655a4e37c42f41ef4","url":"./character/tw.js"},{"revision":"54106acc857d14d82a0557e05b32aec6","url":"./character/xiake.js"},{"revision":"5ebee8541fdb3acff08d052f12252990","url":"./character/xianding.js"},{"revision":"b0fbf042ba94df5f7d8c5181ac2a79f1","url":"./character/xianjian.js"},{"revision":"3514e7f125b1de8af53ad6e9f42c9350","url":"./character/xinghuoliaoyuan.js"},{"revision":"a9394b939504270ff128abbe52a82697","url":"./character/yijiang.js"},{"revision":"50c1306335a69989d62bf2b376d45383","url":"./character/yingbian.js"},{"revision":"1151a0a3e6137914467802ce732f7b98","url":"./character/yxs.js"},{"revision":"02c0fc273bf823d4f56beaa7561cdbc1","url":"./character/zhuogui.js"},{"revision":"ad51616a979db5436944fd92b83467a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"38d9244aab2b2a80b342b30a431a4df3","url":"./game/asset.js"},{"revision":"72283a81e824659dd7b9459b8ddfbca5","url":"./game/codemirror.js"},{"revision":"c7ca6b6ed524dd2cf798202ae4e40c81","url":"./game/config.js"},{"revision":"12f226433c14377782603bbda3b264a6","url":"./game/core-js-bundle.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"3eea1234306a36f4d3f588f81673b8ae","url":"./game/entry.js"},{"revision":"e57baf543c872e8d1affed86d217af7b","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"43ddefa284c581a40ee25bd558862cfc","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"f0720d70455b13e3617083b340c08b58","url":"./game/package.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"fba21875d4a340e2c672c90beb410853","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"84527b2483b6e8c0ec6062b7dd5a36f2","url":"./game/source.js"},{"revision":"35c50052f5f4d82c92a5855a1e5ff2b2","url":"./game/update.js"},{"revision":"69bfb27e62baed9c37cbefad36a87535","url":"./index.html"},{"revision":"92f4086629efd9f959918ce49333fa0d","url":"./layout/default/codemirror.css"},{"revision":"9371a5a763d72334e8d9519974bed548","url":"./layout/default/layout.css"},{"revision":"312d22c50984449c469c95e2524fefb7","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"3e5bf745313d9dac45c0015121335f16","url":"./layout/mobile/layout.css"},{"revision":"8ac8205aee81a33f13bdf456d1181efc","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"854a089b6240dda88ee297851c8a63ec","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"13ff685820d9bc437b3476ee5942dac1","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"aca73cd7230f13503d7524d2adf8e023","url":"./mode/boss.js"},{"revision":"917984087d1237cca5d4d7b62278f494","url":"./mode/brawl.js"},{"revision":"ffcf589eab99313befa47e52d6c5c8a7","url":"./mode/chess.js"},{"revision":"b97c1c5544fc8355182b3553db1d52e2","url":"./mode/connect.js"},{"revision":"d2c8165a9278ad8783b5d9f1a84f6f17","url":"./mode/doudizhu.js"},{"revision":"afddb9be080d0aeb53f57d91d0048fcc","url":"./mode/guozhan.js"},{"revision":"be79efb661a1c2cf9ae2a47395b63b84","url":"./mode/identity.js"},{"revision":"636fc3ca5e057df4f7e73a2da05772c4","url":"./mode/realtime.js"},{"revision":"a34107653045568a9c6d5d9012ddb9fb","url":"./mode/single.js"},{"revision":"57bd673e5d868e2748d18f03a53717fb","url":"./mode/stone.js"},{"revision":"525cff5acac2813cf04c936b48a329bf","url":"./mode/tafang.js"},{"revision":"4be196f20a61c19d44e90168053f5b19","url":"./mode/versus.js"},{"revision":"85ce70eba9ea8077d4987a1a5d231457","url":"./noname.js"},{"revision":"5dd94cc5d4e2f8e5c0beb2a9821f83c9","url":"./noname/ai/basic.js"},{"revision":"b1cf69d7d71b8c7fe88c5b8b612e6fd9","url":"./noname/ai/index.js"},{"revision":"58d0b1c81f341f142b5ba0887be756fd","url":"./noname/game/dynamic-style/index.js"},{"revision":"a8aa50a5883874ea12754a45071255de","url":"./noname/game/index.js"},{"revision":"d375e672e4386df7cea7feb12055633e","url":"./noname/game/promises.js"},{"revision":"e7696419170d760d896242419b56da8e","url":"./noname/get/index.js"},{"revision":"f31dc99ec21bd79210585d74f71e22c5","url":"./noname/get/is.js"},{"revision":"17bf07d3b954b4c1ff7863aca78967a1","url":"./noname/gnc/index.js"},{"revision":"ece4c54333c778e185d832a1ba9648f6","url":"./noname/gnc/is.js"},{"revision":"de2781fab1f0700a8807f725d6792a1c","url":"./noname/init/cordova.js"},{"revision":"e22b3376864a49a82566c2746547bfcf","url":"./noname/init/import.js"},{"revision":"bab06ead126cf6d6dbf2d2a0c7ed350f","url":"./noname/init/index.js"},{"revision":"0b1fed3c5123c5c17a1dec794af57c35","url":"./noname/init/node.js"},{"revision":"19960dbd118f8ddac291e78a5a4d484c","url":"./noname/init/onload.js"},{"revision":"55258b99bb3be97dbe675473e6c114a5","url":"./noname/init/polyfill.js"},{"revision":"f5cec484851dc7263cf2f0ba6ea33371","url":"./noname/library/announce/index.js"},{"revision":"5ef5f54967437713ac0fc639dfe86c7b","url":"./noname/library/cache/cacheContext.js"},{"revision":"db68db3ff0f7e2d5636a07a8ee927510","url":"./noname/library/cache/childNodesWatcher.js"},{"revision":"20bbfe91b70e589ac495f0a7354b58bc","url":"./noname/library/channel/index.js"},{"revision":"65bb006eabc2595a9358c8a34a3bb993","url":"./noname/library/crypt/md5.js"},{"revision":"76c010d62f0c5546ec57f3295d060fb4","url":"./noname/library/element/button.js"},{"revision":"a1b265708eba96dd06f61d8db4810c05","url":"./noname/library/element/card.js"},{"revision":"c5cc993ee89a89c6a77fc5cdb5c0f703","url":"./noname/library/element/client.js"},{"revision":"50ed16acd4a13b7cda019e8d8ba1ab6a","url":"./noname/library/element/content.js"},{"revision":"97a80653575f0275e0b1e39ca8076cdd","url":"./noname/library/element/contents.js"},{"revision":"6a2f8d169d3a1cfaf3bfed16cb5e6978","url":"./noname/library/element/control.js"},{"revision":"dae5de0ffc6a0ea68d1d448f2c4e0cd0","url":"./noname/library/element/dialog.js"},{"revision":"e41ec2b69896e67eab486131d7dd17cd","url":"./noname/library/element/gameEvent.js"},{"revision":"097b4ca09f79f29b9943a810e391c3a6","url":"./noname/library/element/gameEventPromise.js"},{"revision":"a1852be789a81f8959813a8f33c31a95","url":"./noname/library/element/index.js"},{"revision":"866db5c3745bd7a7d37580b722b596ba","url":"./noname/library/element/nodeWS.js"},{"revision":"abee4acb1c9b22cf8c764739c98813ae","url":"./noname/library/element/player.js"},{"revision":"f76c5491de3935e6d8fa762a21ff9f53","url":"./noname/library/element/vcard.js"},{"revision":"454ed78c72e13d1dc1e02070bc282b31","url":"./noname/library/experimental/index.js"},{"revision":"143af2da341471add3e0d0a255dc77c0","url":"./noname/library/experimental/symbol.js"},{"revision":"abb6623f1a6575177dbb4907eeb10d87","url":"./noname/library/index.js"},{"revision":"faaac62e2005e615b7017e5eb9701225","url":"./noname/library/init/index.js"},{"revision":"811e0df430a6e54808d09d0781fb1abe","url":"./noname/library/init/promises.js"},{"revision":"6d2ac918723e1fd4e20137ca01f5f211","url":"./noname/library/path.js"},{"revision":"8ddc0712d0edc66b288f5b1865eb2830","url":"./noname/library/update-urls.js"},{"revision":"d84e93c3817f53f1266138d0cc159028","url":"./noname/status/index.js"},{"revision":"e754d4f98226990f9bcb36ecd9e7aecd","url":"./noname/ui/index.js"},{"revision":"2b163159ba2b1ef544dd9458fb37f10e","url":"./noname/util/browser.js"},{"revision":"8db2906e2a7a14c533164e6389f11a57","url":"./noname/util/config.js"},{"revision":"04edb7d0a88da801300ceacc3f43b844","url":"./noname/util/index.js"},{"revision":"8c55dfd3231d7dc6af920faa8f0c9255","url":"./noname/util/mutex.js"},{"revision":"3b09a802283ac93738e1405171b46086","url":"./noname/util/struct/index.js"},{"revision":"c7229fa4675fdaa88edc1bca6d43926e","url":"./noname/util/struct/promise-error-handler/chrome.js"},{"revision":"82a895d1c2c4f7bb3cdc3fa9a85b1907","url":"./noname/util/struct/promise-error-handler/firefox.js"},{"revision":"0505f97ffe93dfde95c30bf7d68ffb50","url":"./noname/util/struct/promise-error-handler/index.js"},{"revision":"d345490fd4e1af3a0aacc3fb42b430c6","url":"./noname/util/struct/promise-error-handler/unknown.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"efd86be4081094b1e19f51a47e984b2d","url":"./service-worker.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"652922b6159a0d22541cfb88d63fa83e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"},{"revision":"b7668a23d45f036112bbadaab4d5a47c","url":"./tsconfig.json"}]);
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
