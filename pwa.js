// register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log(
        "Service Worker registration successful with scope: ",
        registration.scope
      );
    })
    .catch(function (err) {
      console.log("Service Worker registration failed: ", err);
    });
}

// handle back button (see https://stackoverflow.com/a/56217749 )
function isFullscreenOrStandalone() {
  const isFullscreen =
    !!navigator.fullscreen ||
    window.matchMedia("(display-mode: fullscreen)").matches;
  const isStandalone =
    !!navigator.standalone ||
    window.matchMedia("(display-mode: standalone)").matches;
  return isFullscreen || isStandalone;
}

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

function defineNotificationTipStyle() {
  const css = `#screen-bottom {
  display: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  z-index: 99;
}

#screen-bottom.show {
  display: block;
}

#notification-tip {
  display: inline-block;
  position: static;
  margin-bottom: 7%;
  padding: 15px;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  text-shadow: none;
  color: black;
  background: white;
  opacity: 0.9;
  visibility: hidden;
}

#notification-tip.show {
  visibility: visible;
  animation: notification-tip-fadeout 0.6s 1.4s forwards;
}

@keyframes notification-tip-fadeout {
  from {opacity: 0.9;}
  to {opacity: 0;}
}`;

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
}

function handleBackEvents() {
  if (window.performance.getEntriesByType("navigation")[0].type == "navigate") {
    // only push history when navigating rather than refreshing
    window.history.pushState({ name: "noname-prehome" }, "");
  }
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      // create notification tip element
      const div_bottom = document.createElement("div");
      div_bottom.id = "screen-bottom";
      const div_tip = document.createElement("div");
      div_tip.id = "notification-tip";
      div_tip.appendChild(document.createTextNode("再按一次返回键退出"));
      div_bottom.appendChild(div_tip);
      document.body.appendChild(div_bottom);

      // handle back button
      window.onpopstate = function (e) {
        div_bottom.classList.add("show");
        div_tip.classList.add("show"); // show the notification tip
        setTimeout(() => {
          div_bottom.classList.remove("show");
          div_tip.classList.remove("show"); // hide the notification tip
          window.history.pushState({ name: "noname-prehome" }, "");
        }, 2000);
      };
    },
    false
  );
}

var isAndroidApp = isAndroid() && isFullscreenOrStandalone();
var isIOSApp = isIOS() && isFullscreenOrStandalone();
if (isAndroidApp) {
  defineNotificationTipStyle();
  handleBackEvents();
}
