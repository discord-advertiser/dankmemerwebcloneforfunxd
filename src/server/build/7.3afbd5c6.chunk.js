(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,n){e.exports=n.p+"b5bdba7c6cde4511a021c8c276861b0f.png"},101:function(e,t,n){e.exports=n.p+"0db60fcf17107d94fe2b26440bf88428.gif"},102:function(e,t,n){e.exports=n.p+"7dad32b9358fbe4630bc6031bfee4d47.gif"},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a={};n.r(a),n.d(a,"Overwatch",(function(){return o.a})),n.d(a,"Discord",(function(){return s.a})),n.d(a,"Spotify",(function(){return d.a})),n.d(a,"Twitter",(function(){return u.a})),n.d(a,"Website",(function(){return l.a})),n.d(a,"YouTube",(function(){return x.a})),n.d(a,"GitHub",(function(){return v.a})),n.d(a,"GitLab",(function(){return h.a})),n.d(a,"Reddit",(function(){return j.a})),n.d(a,"Twitch",(function(){return k.a})),n.d(a,"Insta",(function(){return P.a}));var c=n(0),r=n.n(c),i=(n(70),n(47)),o=n.n(i),f=n(48),s=n.n(f),p=n(49),d=n.n(p),b=n(50),u=n.n(b),g=n(51),l=n.n(g),m=n(52),x=n.n(m),y=n(53),v=n.n(y),O=n(54),h=n.n(O),w=n(55),j=n.n(w),E=n(56),k=n.n(E),N=n(57),P=n.n(N),D=n(58);const S=new Audio("/static/audio/uwu.wav");function L({name:e,avatar:t,social:n,about:c}){return r.a.createElement("div",{className:"staff-card"},r.a.createElement("div",{className:"staff-card-details"},r.a.createElement("img",{className:"staff-card-details-picture",src:t||D.a[e.toLowerCase().replace(/ /g,"-")],alt:e+"'s avatar",onClick:()=>{"Melmsie"===e?S.play():console.log("Go click Mel's avatar")}}),r.a.createElement("p",{className:"staff-card-details-name"},e),r.a.createElement("div",{className:"staff-card-details-about-container"},r.a.createElement("p",{className:c.length>120?"staff-card-details-about scroll":"staff-card-details-about",dangerouslySetInnerHTML:{__html:c}}))),r.a.createElement("div",{className:"staff-card-socials"},Object.entries(n).map(([t,n])=>r.a.createElement("a",{key:t,href:n},r.a.createElement("img",{className:"staff-card-socials-account",alt:`${e}'s ${t} link`,src:a[t]})))))}},241:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),c=n.n(a),r=(n(241),n(108)),i=n(107),o=(n(58),n(40));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(){const[e,t]=Object(a.useState)([]),[n,s]=Object(a.useState)([]);window.scroll(0,0),Object(a.useEffect)(()=>{Object(o.a)("nitropay-staff-bottom",{sizes:[[728,90],[970,90],[970,250]],renderVisibleOnly:!0},"desktop"),Object(o.a)("nitropay-staff-bottom",{sizes:[[320,50],[300,50],[300,250]],renderVisibleOnly:!0},"mobile"),r("/api/staff").then(({data:e})=>{t(e)}).catch(()=>{toast.dark("Our staff list was unable to be shown.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"})})},[]),Object(a.useEffect)(()=>{s(Object.entries(e))},[e]);const p=({social:e})=>0===Object.keys(e).length?-1:1;return c.a.createElement("div",{id:"staff"},c.a.createElement("div",{id:"staff-categories"},n.map(([e,t],n)=>c.a.createElement("div",{id:"staff-categories-"+e.toLowerCase().replace(/ /g,"-"),key:n},c.a.createElement("h1",{className:"staff-category-title"},e),c.a.createElement("div",{className:"staff-category-cards"},t.sort(()=>.5*Math.random()).sort((e,t)=>p(e)-p(t)).map((e,t)=>c.a.createElement(i.a,f({},e,{key:t}))))))),c.a.createElement("div",{id:"nitropay-staff-bottom",class:"nitropay"}))}},40:function(e,t,n){"use strict";function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=(e,t,n)=>{"desktop"===n?t.mediaQuery="(min-width: 1025px)":"mobile"===n&&(t.mediaQuery="(min-width: 768px) and (max-width: 1024px), (min-width: 320px) and (max-width: 767px)"),window.nitroAds&&window.nitroAds.createAd(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,refreshVisibleOnly:!0,report:{enabled:!0,wording:"Report Ad",position:"top-right"}},t))}},47:function(e,t,n){e.exports=n.p+"6a5e0952aaf3f0f08d136974b777e0d0.svg"},48:function(e,t,n){e.exports=n.p+"f8389ca1a741a115313bede9ac02e2c0.svg"},49:function(e,t,n){e.exports=n.p+"ded344c86c35138f7e53c6225ed98816.svg"},50:function(e,t,n){e.exports=n.p+"9be66c09991347ecc68ec5063d920ab7.svg"},51:function(e,t,n){e.exports=n.p+"d8851beea04ea75ca3febac546828318.svg"},52:function(e,t,n){e.exports=n.p+"f7f02af468d2e829ae42eade5689accd.svg"},53:function(e,t,n){e.exports=n.p+"d219fc5e66cd2e90747714476d460f31.svg"},54:function(e,t,n){e.exports=n.p+"d567e9a616e39c0944842fbb4da9f516.svg"},55:function(e,t,n){e.exports=n.p+"ac7b60ebdb785a784e379362b3a0e1b2.svg"},56:function(e,t,n){e.exports=n.p+"68f7b9f66e8ba664e2adbe0b81c0c18f.svg"},57:function(e,t,n){e.exports=n.p+"6d2ab22bcdee8ba006102c0eb8ad5502.png"},58:function(e,t,n){"use strict";const a={},c=n(71);c.keys().map(e=>a[e.slice(2).split(".")[0]]=c(e)),t.a=a},70:function(e,t,n){},71:function(e,t,n){var a={"./2pumpchump.png":72,"./abaddon.gif":73,"./aerielle.png":74,"./aetheryx.png":75,"./aiphey.png":76,"./auxim.gif":77,"./blair.gif":78,"./cece.gif":79,"./dauntless.jpg":80,"./devoxin.jpg":81,"./duckysoren.gif":82,"./faith.png":83,"./gxbriel.jpg":84,"./inblue.png":85,"./julia.png":86,"./kable-kompany.gif":87,"./melmsie.png":88,"./mistress-red.jpg":89,"./nunca.jpg":90,"./reese.png":91,"./samantha.gif":92,"./shiiiitak\xeb.png":93,"./sinister.png":94,"./smile.jpg":95,"./spurkeh.gif":96,"./terrarian.png":97,"./theprodigyhenry.png":98,"./tintin.gif":99,"./toto.png":100,"./xfastx.gif":101,"./yeng.gif":102};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=71},72:function(e,t,n){e.exports=n.p+"fee51643e2bb31af0780c1c8bb63aef4.png"},73:function(e,t,n){e.exports=n.p+"3adc385d31cd711ff1925738b25e5d2e.gif"},74:function(e,t,n){e.exports=n.p+"712bb3d47f2427cbeabf1f596f66be36.png"},75:function(e,t,n){e.exports=n.p+"7fbdb76a544220a0c7c6798f8bea1023.png"},76:function(e,t,n){e.exports=n.p+"4795fc64832831dc9c571728aafad65f.png"},77:function(e,t,n){e.exports=n.p+"9dedba447b4a9a15a3ad2595e9745992.gif"},78:function(e,t,n){e.exports=n.p+"6a8764fd3ab02420b6ed7c3b27a47ac4.gif"},79:function(e,t,n){e.exports=n.p+"43d06266d11f9efade5183e7723c7c9e.gif"},80:function(e,t,n){e.exports=n.p+"ad192b782127e0679d3ffe5d2c0ee5db.jpg"},81:function(e,t,n){e.exports=n.p+"891369adad61358fbde147eb4f8d7c32.jpg"},82:function(e,t,n){e.exports=n.p+"75c25e5d9666b5f8b943df219de315ad.gif"},83:function(e,t,n){e.exports=n.p+"7ad9861f47d10ec65e9850081e8abec2.png"},84:function(e,t,n){e.exports=n.p+"335531fb7ba07aa6c3d084942b8acede.jpg"},85:function(e,t,n){e.exports=n.p+"09e087e8508ae41582280257b3fa254a.png"},86:function(e,t,n){e.exports=n.p+"3a9550df56521d0dc6e4528e65c9bc92.png"},87:function(e,t,n){e.exports=n.p+"e6bcb2987332e274dd2d25c9a654d780.gif"},88:function(e,t,n){e.exports=n.p+"ac8d991f4bb8c804867147d7b613c821.png"},89:function(e,t,n){e.exports=n.p+"07ae074302f502e03657bfdd82eb3441.jpg"},90:function(e,t,n){e.exports=n.p+"474e76d7e0ad7b015a1a25e451ad120e.jpg"},91:function(e,t,n){e.exports=n.p+"7bb79e0dca8f7772f187a3a731b99831.png"},92:function(e,t,n){e.exports=n.p+"8a1de42878b52df25e0216ab1ffa7c68.gif"},93:function(e,t,n){e.exports=n.p+"b03acd8c9f7a35b82f5b45a767bcc421.png"},94:function(e,t,n){e.exports=n.p+"ca2cace685e80c175b8fd2e4ade695b8.png"},95:function(e,t,n){e.exports=n.p+"38d6453ea0d54faf9225312025208d78.jpg"},96:function(e,t,n){e.exports=n.p+"8c9a4331ffbd4aacbd8bc23b46e45383.gif"},97:function(e,t,n){e.exports=n.p+"5295c2391f509827dfe95d73cbf4d072.png"},98:function(e,t,n){e.exports=n.p+"696461a621cfbcb8156457b741365a81.png"},99:function(e,t,n){e.exports=n.p+"2b8fa13b72cde5940407e101fb2e252d.gif"}}]);