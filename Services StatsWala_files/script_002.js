window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme21"]=window.wsb["Theme21"]||window.radpack("@widget/LAYOUT/bs-layout21-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-59508\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"muli\",\"default\",\"\"],\"colors\":[\"#eae7e5\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"d41ec6c9-970b-4fd3-9d08-3549e7a3d091\":{\"pageId\":\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a4563633-1215-4898-b8fe-410887783873\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a4563633-1215-4898-b8fe-410887783873\",\"name\":\"About Us\",\"href\":\"/about-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"bbc100e0-2b8f-4b3e-8ffc-81172e35bf73\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"bbc100e0-2b8f-4b3e-8ffc-81172e35bf73\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"e0d442a9-89c4-460b-b1c1-69df1bb8b2fb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e0d442a9-89c4-460b-b1c1-69df1bb8b2fb\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"e882e81f-6962-4329-8894-ca153c32410c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e882e81f-6962-4329-8894-ca153c32410c\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#eae7e5\",\"meta\":{\"primary\":\"rgb(234, 231, 229)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"muli\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":25,\"primary\":{\"id\":\"muli\",\"name\":\"Muli\",\"url\":\"//fonts.googleapis.com/css?family=Muli:400&display=swap\",\"family\":\"'Muli', sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme21\",\"paintJob\":\"CUSTOM\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"left\":true,\"toggleId\":\"n-59507-navId-mobile\",\"uniqueId\":\"n-59507\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"6acd2ea1-3d80-40ef-bfc1-8eed2235a026\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"6acd2ea1-3d80-40ef-bfc1-8eed2235a026\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-59513\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"n-5950759511-navBarId\",\"widgetId\":\"6acd2ea1-3d80-40ef-bfc1-8eed2235a026\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"6acd2ea1-3d80-40ef-bfc1-8eed2235a026\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(w),i&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,I),h(s,n,s.length,I),h(d,n,s.length,f),f(p)}else s.forEach(f),I(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function w(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function I(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-59512\",\"containerId\":\"n-5950759511-navBarId\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-59529\",\"targetId\":\"dynamic-tagline-59530\",\"fontSizes\":[\"xxlarge\",\"medium\",\"small\",\"xsmall\"],\"maxLines\":4}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"muli\",\"default\",\"\"],\"colors\":[\"#eae7e5\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"d41ec6c9-970b-4fd3-9d08-3549e7a3d091\":{\"pageId\":\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"78d4cd1e-857c-4e9b-a1eb-06df1c336558\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a4563633-1215-4898-b8fe-410887783873\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a4563633-1215-4898-b8fe-410887783873\",\"name\":\"About Us\",\"href\":\"/about-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"bbc100e0-2b8f-4b3e-8ffc-81172e35bf73\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"bbc100e0-2b8f-4b3e-8ffc-81172e35bf73\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"e0d442a9-89c4-460b-b1c1-69df1bb8b2fb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e0d442a9-89c4-460b-b1c1-69df1bb8b2fb\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"e882e81f-6962-4329-8894-ca153c32410c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e882e81f-6962-4329-8894-ca153c32410c\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#eae7e5\",\"meta\":{\"primary\":\"rgb(234, 231, 229)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"muli\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":25,\"primary\":{\"id\":\"muli\",\"name\":\"Muli\",\"url\":\"//fonts.googleapis.com/css?family=Muli:400&display=swap\",\"family\":\"'Muli', sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme21\"}");
Core.utils.renderBootstrap({elId:'bs-3',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"StatsWala\",\"reamazeBrandId\":\"317d9162-ddd9-4efe-ab19-903349052c23\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"statswala.in\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"8d0f3e5b-c50e-11ee-8333-3417ebe725e0\",\"websiteId\":\"317d9162-ddd9-4efe-ab19-903349052c23\",\"id\":\"bcdb7cab-d412-4c91-b3d2-3cc057ab99d2\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#eae7e5\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"bcdb7cab-d412-4c91-b3d2-3cc057ab99d2\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"bcdb7cab-d412-4c91-b3d2-3cc057ab99d2\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"e28fc0b2-a3a8-4256-953a-b733cb692b9b\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-59506').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about1","wam_site_businessCategory":"itservices","wam_site_theme":"layout21","wam_site_locale":"en-IN","wam_site_fontPack":"muli","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"commerce","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);