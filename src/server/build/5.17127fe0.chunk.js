(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){e.exports=a.p+"b5bdba7c6cde4511a021c8c276861b0f.png"},101:function(e,t,a){e.exports=a.p+"0db60fcf17107d94fe2b26440bf88428.gif"},102:function(e,t,a){e.exports=a.p+"7dad32b9358fbe4630bc6031bfee4d47.gif"},107:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n={};a.r(n),a.d(n,"Overwatch",(function(){return i.a})),a.d(n,"Discord",(function(){return d.a})),a.d(n,"Spotify",(function(){return f.a})),a.d(n,"Twitter",(function(){return u.a})),a.d(n,"Website",(function(){return m.a})),a.d(n,"YouTube",(function(){return h.a})),a.d(n,"GitHub",(function(){return x.a})),a.d(n,"GitLab",(function(){return w.a})),a.d(n,"Reddit",(function(){return O.a})),a.d(n,"Twitch",(function(){return P.a})),a.d(n,"Insta",(function(){return k.a}));var r=a(0),o=a.n(r),c=(a(70),a(47)),i=a.n(c),s=a(48),d=a.n(s),p=a(49),f=a.n(p),l=a(50),u=a.n(l),b=a(51),m=a.n(b),g=a(52),h=a.n(g),y=a(53),x=a.n(y),v=a(54),w=a.n(v),E=a(55),O=a.n(E),j=a(56),P=a.n(j),D=a(57),k=a.n(D),S=a(58);const T=new Audio("/static/audio/uwu.wav");function N({name:e,avatar:t,social:a,about:r}){return o.a.createElement("div",{className:"staff-card"},o.a.createElement("div",{className:"staff-card-details"},o.a.createElement("img",{className:"staff-card-details-picture",src:t||S.a[e.toLowerCase().replace(/ /g,"-")],alt:e+"'s avatar",onClick:()=>{"Melmsie"===e?T.play():console.log("Go click Mel's avatar")}}),o.a.createElement("p",{className:"staff-card-details-name"},e),o.a.createElement("div",{className:"staff-card-details-about-container"},o.a.createElement("p",{className:r.length>120?"staff-card-details-about scroll":"staff-card-details-about",dangerouslySetInnerHTML:{__html:r}}))),o.a.createElement("div",{className:"staff-card-socials"},Object.entries(a).map(([t,a])=>o.a.createElement("a",{key:t,href:a},o.a.createElement("img",{className:"staff-card-socials-account",alt:`${e}'s ${t} link`,src:n[t]})))))}},119:function(e,t,a){},236:function(e,t,a){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a(116),i=(a(111),a(68));a(119);function s(e){const[t,a]=Object(n.useState)("Admin Panel"),[o,c]=Object(n.useState)(""),[i,s]=Object(n.useState)(e.defaultDropdown),[d,p]=Object(n.useState)(""),[f,l]=Object(n.useState)("Placeholder"),[u,b]=Object(n.useState)("Submit");return Object(n.useEffect)(()=>{a(e.title),c(e.dropdownHeader),s(e.defaultDropdown),l(e.textAreaHeader),b(e.buttonText)},[e]),r.a.createElement("div",{className:"admin-panel"},r.a.createElement("h3",null,t),r.a.createElement("div",{className:"admin-panel-input-group"},r.a.createElement("label",null,o),r.a.createElement("select",{value:i,onChange:e=>s(e.target.value)},e.options&&e.options.map(e=>r.a.createElement("option",{value:e,key:e},e)))),r.a.createElement("input",{type:"text",placeholder:f,onChange:e=>p(e.target.value)}),r.a.createElement("p",{className:"admin-panel-button",onClick:()=>e.action({dropdownVal:i,textVal:d})},u))}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class l extends r.a.PureComponent{render(){return r.a.createElement(s,{title:this.props.title,dropdownHeader:"Ban Type",textAreaHeader:"User ID",defaultDropdown:"appeal",options:this.props.options.concat("appeal","lootbox"),action:this.action.bind(this),buttonText:this.props.buttonText})}async action(e){if(!e.textVal)return alert("enter a user id dumb cunt");const t=await fetch("/api/admin"+this.props.getEndpoint(e),p(p({},this.props.getFetchParams(e)),{},{credentials:"same-origin",headers:{"Content-Type":"application/json"}}));200!==t.status?alert("Unknown HTTP response code: "+t.status):this.props.finish(e,t)}}f(l,"defaultProps",{getFetchParams:e=>({method:"POST",body:JSON.stringify({type:e.dropdownVal,id:e.textVal})}),options:[]});var u=l,b=[r.a.memo(()=>r.a.createElement(u,{title:"Ban User",buttonText:"Hammer",getEndpoint:()=>"/ban",finish:({dropdownVal:e,textVal:t})=>alert(`Successfully ${e} banned ${t}`)})),r.a.memo(()=>r.a.createElement(u,{title:"Unban User",buttonText:"Unhammer",getEndpoint:()=>"/unban",finish:({dropdownVal:e,textVal:t})=>alert(`Successfully ${e} unbanned ${t}`)})),r.a.memo(()=>r.a.createElement(u,{title:"Check User Ban",buttonText:"Check",options:["any"],getFetchParams:()=>({method:"GET"}),getEndpoint:({dropdownVal:e,textVal:t})=>`/checkBan?type=${e}&id=${t}`,finish:async({textVal:e},t)=>{const a=await t.json();if(!a[0])return alert(e+" is a good boye and has no bans");alert(`${e} has the following bans:\n\n${a.join("\n")}`)}}))],m=({children:e})=>r.a.createElement("div",{className:"backdrop"},e);class g extends r.a.Component{render(){return r.a.createElement(m,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-child"},this.props.component)))}}a(236);var h=a(19),y=a.n(h);const x=document.querySelector("#modals");document.addEventListener("keydown",e=>{"Escape"===e.code&&document.querySelector(".backdrop")&&y.a.unmountComponentAtNode(x)}),document.addEventListener("mousedown",e=>{"modal"===e.path[0].className&&y.a.unmountComponentAtNode(x)});var v=a(237),w=a.n(v),E={iconStyle:"triangle",indentWidth:2,displayDataTypes:!1,theme:{base00:"#23272a",base01:"#41323f",base02:"#4f424c",base03:"#776e71",base04:"#8d8687",base05:"#a39e9b",base06:"#b9b6b0",base07:"#e7e9db",base08:"#ef6155",base09:"#f99b15",base0A:"#fec418",base0B:"#48b685",base0C:"#5bc4bf",base0D:"#06b6ef",base0E:"#815ba4",base0F:"#e96ba8"}};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class k extends n.PureComponent{async action(e){const t=await fetch(`/api/admin/findTransaction?${e.dropdownVal}=${e.textVal}`,{credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e.map(e=>({date:new Date(e.times.create),orderID:e.orderID,captureID:e.captureID,purchase:{type:e.item.name,quantity:+e.item.quantity,total:e.amount.total},payer:["name","paypalEmail","discordEmail","paypalID","userID"].reduce((t,a)=>P(P({},t),{},{[a]:e.payer[a]}),{})})));var a;a=r.a.createElement(w.a,O({src:t},E)),y.a.render(r.a.createElement(g,{component:a}),x)}render(){return r.a.createElement(s,{title:"Find Payment",dropdownHeader:"By",textAreaHeader:"Value",defaultDropdown:"Discord ID",options:["Discord ID","PayPal E-Mail","Full Name","Payment ID"],action:this.action.bind(this),buttonText:"Find"})}}var S=a(108),T=a(107);a(58);t.default=Object(o.b)(e=>e.login,null)((function(e){const[t,a]=Object(n.useState)(!1),[o,s]=Object(n.useState)(""),[d,p]=Object(n.useState)(""),[f,l]=Object(n.useState)(""),[u,m]=Object(n.useState)("");return Object(n.useEffect)(()=>{if(e.loggedIn&&e.isModerator&&a(!0),e.loggedIn&&!e.isModerator)return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");e.loggedIn&&S("/api/staff?id="+e.id).then(({data:e})=>{e=e[0],s(e.name),p(e.about),l(e.avatar),m(e.social)}).catch(()=>c.b.dark("Your staff card data was not able to be shown.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"}))},[e]),r.a.createElement("div",{id:"control"},t&&e.loggedIn?t?r.a.createElement("div",{id:"control-admin"},r.a.createElement("div",{id:"control-admin-header"},r.a.createElement("h1",{id:"control-admin-header-title"},"Hey, ",o),r.a.createElement("p",{id:"control-admin-header-note"},"This is your control panel. The main place for you to manage users and check payments. You are also able to edit the appearance of your staff card.")),r.a.createElement("div",{id:"control-admin-panels"},b.map((e,t)=>r.a.createElement(e,{key:t})),r.a.createElement(k,null))):"":r.a.createElement("div",{id:"control-login"},r.a.createElement("div",{id:"control-login-content"},r.a.createElement("h1",{id:"control-login-content-title"},"Restricted"),r.a.createElement("p",{id:"control-login-content-body"},"The page you are trying to access is restricted. Please login to continue"),r.a.createElement(i.a,null))),t?r.a.createElement(T.a,{name:o,about:d,social:u,avatar:f}):"",r.a.createElement(c.a,null))}))},47:function(e,t,a){e.exports=a.p+"6a5e0952aaf3f0f08d136974b777e0d0.svg"},48:function(e,t,a){e.exports=a.p+"f8389ca1a741a115313bede9ac02e2c0.svg"},49:function(e,t,a){e.exports=a.p+"ded344c86c35138f7e53c6225ed98816.svg"},50:function(e,t,a){e.exports=a.p+"9be66c09991347ecc68ec5063d920ab7.svg"},51:function(e,t,a){e.exports=a.p+"d8851beea04ea75ca3febac546828318.svg"},52:function(e,t,a){e.exports=a.p+"f7f02af468d2e829ae42eade5689accd.svg"},53:function(e,t,a){e.exports=a.p+"d219fc5e66cd2e90747714476d460f31.svg"},54:function(e,t,a){e.exports=a.p+"d567e9a616e39c0944842fbb4da9f516.svg"},55:function(e,t,a){e.exports=a.p+"ac7b60ebdb785a784e379362b3a0e1b2.svg"},56:function(e,t,a){e.exports=a.p+"68f7b9f66e8ba664e2adbe0b81c0c18f.svg"},57:function(e,t,a){e.exports=a.p+"6d2ab22bcdee8ba006102c0eb8ad5502.png"},58:function(e,t,a){"use strict";const n={},r=a(71);r.keys().map(e=>n[e.slice(2).split(".")[0]]=r(e)),t.a=n},68:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function o(){return r.a.createElement("a",{id:"discord--login",href:"/oauth/login?redirect="+window.location.pathname,rel:"noopener noreferrer"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 245 240"},r.a.createElement("path",{fill:"#ffffff",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),r.a.createElement("path",{fill:"#ffffff",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})),"Login with Discord")}},70:function(e,t,a){},71:function(e,t,a){var n={"./2pumpchump.png":72,"./abaddon.gif":73,"./aerielle.png":74,"./aetheryx.png":75,"./aiphey.png":76,"./auxim.gif":77,"./blair.gif":78,"./cece.gif":79,"./dauntless.jpg":80,"./devoxin.jpg":81,"./duckysoren.gif":82,"./faith.png":83,"./gxbriel.jpg":84,"./inblue.png":85,"./julia.png":86,"./kable-kompany.gif":87,"./melmsie.png":88,"./mistress-red.jpg":89,"./nunca.jpg":90,"./reese.png":91,"./samantha.gif":92,"./shiiiitak\xeb.png":93,"./sinister.png":94,"./smile.jpg":95,"./spurkeh.gif":96,"./terrarian.png":97,"./theprodigyhenry.png":98,"./tintin.gif":99,"./toto.png":100,"./xfastx.gif":101,"./yeng.gif":102};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=71},72:function(e,t,a){e.exports=a.p+"fee51643e2bb31af0780c1c8bb63aef4.png"},73:function(e,t,a){e.exports=a.p+"3adc385d31cd711ff1925738b25e5d2e.gif"},74:function(e,t,a){e.exports=a.p+"712bb3d47f2427cbeabf1f596f66be36.png"},75:function(e,t,a){e.exports=a.p+"7fbdb76a544220a0c7c6798f8bea1023.png"},76:function(e,t,a){e.exports=a.p+"4795fc64832831dc9c571728aafad65f.png"},77:function(e,t,a){e.exports=a.p+"9dedba447b4a9a15a3ad2595e9745992.gif"},78:function(e,t,a){e.exports=a.p+"6a8764fd3ab02420b6ed7c3b27a47ac4.gif"},79:function(e,t,a){e.exports=a.p+"43d06266d11f9efade5183e7723c7c9e.gif"},80:function(e,t,a){e.exports=a.p+"ad192b782127e0679d3ffe5d2c0ee5db.jpg"},81:function(e,t,a){e.exports=a.p+"891369adad61358fbde147eb4f8d7c32.jpg"},82:function(e,t,a){e.exports=a.p+"75c25e5d9666b5f8b943df219de315ad.gif"},83:function(e,t,a){e.exports=a.p+"7ad9861f47d10ec65e9850081e8abec2.png"},84:function(e,t,a){e.exports=a.p+"335531fb7ba07aa6c3d084942b8acede.jpg"},85:function(e,t,a){e.exports=a.p+"09e087e8508ae41582280257b3fa254a.png"},86:function(e,t,a){e.exports=a.p+"3a9550df56521d0dc6e4528e65c9bc92.png"},87:function(e,t,a){e.exports=a.p+"e6bcb2987332e274dd2d25c9a654d780.gif"},88:function(e,t,a){e.exports=a.p+"ac8d991f4bb8c804867147d7b613c821.png"},89:function(e,t,a){e.exports=a.p+"07ae074302f502e03657bfdd82eb3441.jpg"},90:function(e,t,a){e.exports=a.p+"474e76d7e0ad7b015a1a25e451ad120e.jpg"},91:function(e,t,a){e.exports=a.p+"7bb79e0dca8f7772f187a3a731b99831.png"},92:function(e,t,a){e.exports=a.p+"8a1de42878b52df25e0216ab1ffa7c68.gif"},93:function(e,t,a){e.exports=a.p+"b03acd8c9f7a35b82f5b45a767bcc421.png"},94:function(e,t,a){e.exports=a.p+"ca2cace685e80c175b8fd2e4ade695b8.png"},95:function(e,t,a){e.exports=a.p+"38d6453ea0d54faf9225312025208d78.jpg"},96:function(e,t,a){e.exports=a.p+"8c9a4331ffbd4aacbd8bc23b46e45383.gif"},97:function(e,t,a){e.exports=a.p+"5295c2391f509827dfe95d73cbf4d072.png"},98:function(e,t,a){e.exports=a.p+"696461a621cfbcb8156457b741365a81.png"},99:function(e,t,a){e.exports=a.p+"2b8fa13b72cde5940407e101fb2e252d.gif"}}]);