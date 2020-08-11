(this["webpackJsonpgabrieosl.github.io"]=this["webpackJsonpgabrieosl.github.io"]||[]).push([[0],{22:function(n){n.exports=JSON.parse('{"title":"Desenvolvedor Fullstack","viewMyWork":"Ver trabalhos","getInTouch":"Contato","home":"In\xedcio","projects":"Projetos","cv":"Baixar CV","about":"Sobre"}')},23:function(n){n.exports=JSON.parse('{"title":"Fullstack Developer","viewMyWork":"View my work","getInTouch":"Get in touch","home":"Home","projects":"Projects","cv":"Get my CV","about":"About"}')},24:function(n){n.exports=JSON.parse('{"title":"D\xe9veloppeur Fullstack","viewMyWork":"Voir mon travail","getInTouch":"Contacter","home":"Accueil","projects":"Projets","cv":"Voir mon CV","about":"\xc0 propos"}')},29:function(n,e,t){n.exports=t(42)},41:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(17),i=t.n(o),l=t(43),c=t(14),u=t(18),s=t(4),m=t(2),d=t(3);function p(){var n=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: 'Recursive', sans-serif;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html {\n    font-size: 18px;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased\n  }\n\n  body, input, button {\n    font-size: 1rem;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  @media all and (min-width: 769px) {\n    html {\n      font-size: 24px;\n    }\n  }\n  @media all and (min-width: 1921px) {\n    html {\n      font-size: 42px;\n    }\n  }\n"]);return p=function(){return n},n}var f=Object(m.b)(p()),g={background:"#ffffff",text:"#00171F",default:"#999999",primary:"#00A8E8",secondary:"#E84200",error:"#FF9F00",invert:0},h={background:"#00171F",text:"#ffffff",default:"#cccccc",primary:"#003459",secondary:"#592500",error:"#FF9F00",invert:1},b=Object(r.createContext)({});var x=function(n){var e=n.children,t=Object(r.useState)("light"),o=Object(s.a)(t,2),i=o[0],l=o[1],c=Object(r.useCallback)((function(){l((function(n){return"light"===n?"dark":"light"}))}),[]);return a.a.createElement(b.Provider,{value:{selectedTheme:i,toogleTheme:c}},a.a.createElement(m.a,{theme:"light"===i?g:h},e),a.a.createElement(f,null))},v=t(22),E=t(23),w=t(24);c.a.use(u.a).init({interpolation:{escapeValue:!1},lng:"en",fallbackLng:"en",resources:{en:{common:E},pt:{common:v},fr:{common:w}}});var j=function(n){var e=n.children;return a.a.createElement(l.a,{i18n:c.a},a.a.createElement(x,null,e))},k=t(7),O=t(44);function y(){var n=Object(d.a)(["\n  width: 28px;\n  height: 28px;\n\n  flex-shrink: 0;\n\n  background: ",";\n  border-radius: 50%;\n  border: 0;\n"]);return y=function(){return n},n}function z(){var n=Object(d.a)(["\n      transform: translateX(-30px);\n    "]);return z=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n\n  transition: 0.4s;\n\n  svg {\n    width: 20px;\n    height: 20px;\n    color: ",";\n    margin: 0 5px;\n    flex-shrink: 0;\n  }\n\n  ","\n"]);return T=function(){return n},n}function C(){var n=Object(d.a)(["\n  width: 58px;\n  height: 28px;\n  overflow: hidden;\n  z-index: 100;\n\n  background: ",";\n  border-radius: 14px;\n  border: 1px solid ",";\n  margin: 0 5px;\n  box-sizing: content-box;\n"]);return C=function(){return n},n}var N=m.d.button(C(),(function(n){return n.theme.background}),(function(n){return"".concat(n.theme.text,"16")})),S=m.d.div(T(),(function(n){return n.theme.text}),(function(n){return"light"===n.selectedTheme&&Object(m.c)(z())})),X=m.d.button(y(),(function(n){return n.theme.primary})),Y=function(){var n=function(){var n=Object(r.useContext)(b);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n}(),e=n.toogleTheme,t=n.selectedTheme;return a.a.createElement(N,{onClick:e},a.a.createElement(S,{selectedTheme:t},a.a.createElement(k.e,null),a.a.createElement(X,null),a.a.createElement(k.b,null)))},F=t(28);function V(){var n=Object(d.a)(["\n      background: ",";\n      width: ",";\n    "]);return V=function(){return n},n}function L(){var n=Object(d.a)(["\n      width: ",";\n    "]);return L=function(){return n},n}function M(){var n=Object(d.a)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 5px;\n  padding: 0 10px;\n  box-shadow: ",";\n  border: ",";\n  ",";\n\n  background: ",";\n  ",";\n\n  color: ",";\n"]);return M=function(){return n},n}var P=m.d.button(M(),(function(n){return n.width||"unset"}),(function(n){return n.height||"unset"}),(function(n){return"text"!==n.variant?"1px 1px 2px rgba(0,0,0,0.2)":"none"}),(function(n){return"outlined"===n.variant?"2px solid ".concat(n.theme[n.color]):0}),(function(n){return n.width&&Object(m.c)(L(),n.width)}),(function(n){return n.theme.background}),(function(n){return"filled"===n.variant&&Object(m.c)(V(),(function(e){return e.theme[n.color]}),n.width)}),(function(n){return"filled"===n.variant?"#fff":n.theme[n.color]})),H=function(n){var e=n.variant,t=void 0===e?"text":e,r=n.color,o=void 0===r?"default":r,i=n.width,l=n.height,c=n.children,u=Object(F.a)(n,["variant","color","width","height","children"]);return a.a.createElement(P,Object.assign({type:"button",variant:t,color:o,width:i,height:l},u),c)};function I(){var n=Object(d.a)(["\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 170px;\n\n  background: ",";\n  padding: 5px 0;\n  border-radius: 5px 0 5px 5px;\n\n  li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 0 0.5em;\n    cursor: pointer;\n\n    span {\n      font-size: 0.8em;\n    }\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return I=function(){return n},n}function A(){var n=Object(d.a)(["\n      background: ",";\n      border-radius: 5px 5px 0 0;\n    "]);return A=function(){return n},n}function J(){var n=Object(d.a)(["\n  ","\n  &:hover {\n    background: ",";\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n  }\n"]);return J=function(){return n},n}function D(){var n=Object(d.a)(["\n  position: relative;\n  z-index: 101;\n\n  display: flex;\n  align-items: center;\n\n  margin: 0 5px;\n"]);return D=function(){return n},n}var G=m.d.div(D()),W=Object(m.d)(H)(J(),(function(n){return n.isActive&&Object(m.c)(A(),(function(n){return n.theme.primary}))}),(function(n){return n.theme.primary})),_=m.d.ul(I(),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary})),q=[{flag:"\ud83c\uddec\ud83c\udde7",code:"en",language:"English"},{flag:"\ud83c\udde7\ud83c\uddf7",code:"pt",language:"Portugu\xeas"},{flag:"\ud83c\uddeb\ud83c\uddf7",code:"fr",language:"Fran\xe7ais"}],B=function(){var n=Object(O.a)("common").i18n,e=Object(r.useState)(!1),t=Object(s.a)(e,2),o=t[0],i=t[1],l=Object(r.useState)((function(){return q.find((function(e){return e.code===n.language}))||q[0]})),c=Object(s.a)(l,2),u=c[0],m=c[1],d=Object(r.useCallback)((function(e){m(e),i(!1),n.changeLanguage(e.code)}),[n]);return a.a.createElement(G,null,a.a.createElement(W,{variant:"text",color:"primary",height:"28px",onClick:function(){return i(!o)},isActive:o},a.a.createElement("h4",null,u.flag)),o&&a.a.createElement(_,null,q.map((function(n){return a.a.createElement("li",{onClick:function(){return d(n)}},a.a.createElement("span",null,n.language),a.a.createElement("h4",null,n.flag))}))))};function R(){var n=Object(d.a)(["\n  position: fixed;\n  width: 350px;\n  height: 100%;\n  top: 0;\n  right: 0;\n\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: ",";\n    margin: 0 0.7em;\n    font-size: 0.75em;\n  }\n\n  @media all and (min-width: 769px) {\n    position: static;\n    width: unset;\n    height: unset;\n\n    display: flex;\n    flex-direction: row;\n  }\n"]);return R=function(){return n},n}function U(){var n=Object(d.a)(["\n  background: none;\n  border: 0;\n\n  @media all and (min-width: 769px) {\n    display: none;\n  }\n"]);return U=function(){return n},n}function K(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  small {\n    margin-left: 10px;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n      transform: translateY(-100%);\n    "]);return Q=function(){return n},n}function Z(){var n=Object(d.a)(["\n  width: 100%;\n  height: ",";\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.4s;\n\n  /* background: none; */\n  background: ",";\n  padding: 0 20px;\n  box-shadow: 0 1px 1px ",";\n\n  ","\n\n  @media all and (max-width: 768px) {\n    height: 60px;\n  }\n"]);return Z=function(){return n},n}var $=m.d.div(Z(),(function(n){return"small"===n.headerSize?"60px":"120px"}),(function(n){return n.theme.background}),(function(n){return"".concat(n.theme.text,"16")}),(function(n){return!n.showHeader&&Object(m.c)(Q())})),nn=m.d.div(K(),(function(n){return n.theme.text})),en=m.d.button(U()),tn=m.d.nav(R(),(function(n){return n.showDrawer?"flex":"none"}),(function(n){return n.theme.text})),rn=function(){var n=Object(O.a)("common").t,e=Object(r.useState)(!1),t=Object(s.a)(e,2),o=t[0],i=t[1],l=Object(r.useState)(0),c=Object(s.a)(l,2),u=c[0],m=c[1],d=Object(r.useState)("large"),p=Object(s.a)(d,2),f=p[0],g=p[1],h=Object(r.useCallback)((function(){var n=document.documentElement.scrollTop;m((function(e){return n<e?g("large"):n>.8*window.innerHeight&&g("small"),n}))}),[]),b=Object(r.useMemo)((function(){return u>.5*window.innerHeight}),[u]);return Object(r.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[h]),a.a.createElement($,{headerSize:f,showHeader:b},a.a.createElement(nn,null,a.a.createElement("strong",null,"GL"),a.a.createElement("small",null,n("title"))),a.a.createElement(en,{onClick:function(){return i(!o)}},a.a.createElement(k.a,null)),a.a.createElement(tn,{showDrawer:o},a.a.createElement(Y,null),a.a.createElement("a",{href:"#home"},n("home")),a.a.createElement("a",{href:"#projects"},n("projects")),a.a.createElement("a",{href:"#about"},n("about")),a.a.createElement(B,null)))},an=t(11);function on(){var n=Object(d.a)(["\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 101;\n\n  list-style: none;\n  transition: all 0.09s ease-in;\n\n  li {\n    margin: 10px;\n    text-indent: -9999px;\n    position: absolute;\n    border: 1px solid ",";\n    border-radius: 50%;\n    background: ",";\n    transition: all 0.2s;\n    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n\n    &:hover {\n      border: 1px solid ",";\n    }\n    span {\n      display: block;\n      position: absolute;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n    }\n\n    &.sun {\n      width: 10%;\n      padding-top: 10%;\n\n      background: #fc3;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      border: none;\n      box-shadow: 0 0 500px 10px #c90;\n      z-index: 100;\n      transition: all 0.2s ease-in;\n\n      svg {\n        display: block;\n        position: absolute;\n        width: 25px;\n        height: 25px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        color: #fff;\n      }\n    }\n\n    &.mercury {\n      width: 20%;\n      padding-top: 20%;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      z-index: 99;\n\n      span {\n        background: #b6bac5;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.venus {\n      width: 30%;\n      padding-top: 30%;\n      top: 50%;\n      left: 50%;\n      z-index: 98;\n\n      span {\n        background: #bf8639;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.earth {\n      width: 40%;\n      padding-top: 40%;\n      top: 50%;\n      left: 50%;\n      z-index: 97;\n\n      span {\n        background: #06c;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n        &.moon {\n          width: 4px;\n          height: 4px;\n          background: #ccc;\n          top: 12px;\n          left: 12px;\n        }\n      }\n    }\n    &.mars {\n      width: 50%;\n      padding-top: 50%;\n      top: 50%;\n      left: 50%;\n      z-index: 96;\n\n      span {\n        background: #aa4200;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.asteroids_meteorids {\n      width: 58%;\n      padding-top: 58%;\n      top: 50%;\n      left: 50%;\n      z-index: 96;\n      z-index: 1;\n      background: url(http://neography.com/experiment/circles/solarsystem/asteroids_meteorids.png)\n        center no-repeat;\n      background-size: 100%;\n      border: none;\n    }\n\n    &.jupiter {\n      width: 60%;\n      padding-top: 60%;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      z-index: 95;\n      span {\n        background: #e0ae6f;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.saturn {\n      width: 75%;\n      padding-top: 75%;\n      top: 50%;\n      left: 50%;\n      z-index: 94;\n\n      span {\n        background: #dfd3a9;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n\n        &.ring {\n          position: absolute;\n          width: 14px;\n          height: 2px;\n          background: #5a4e34;\n          border: none;\n          left: 0;\n          top: 50%;\n          transform: translateX(-2px) translateY(-50%) rotate(45deg);\n        }\n      }\n    }\n\n    &.uranus {\n      width: 100%;\n      padding-top: 100%;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      z-index: 93;\n      span {\n        background: #82b3d1;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.neptune {\n      width: 150%;\n      padding-top: 150%;\n      top: 50%;\n      left: 50%;\n      z-index: 92;\n\n      span {\n        background: #77c2ec;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n\n    &.pluto {\n      width: 200%;\n      padding-top: 200%;\n      top: 50%;\n      left: 50%;\n      z-index: 91;\n\n      span {\n        background: #7c6a5c;\n        top: 50%;\n        left: 0%;\n        transform: translateX(-50%);\n      }\n    }\n  }\n\n  /* CSS3 Animations */\n  li {\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: ",";\n  }\n  li.earth span {\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: ",";\n  }\n  li.mercury {\n    animation-duration: 5s;\n  }\n  li.venus {\n    animation-duration: 8s;\n  }\n  li.earth {\n    animation-duration: 12s;\n  }\n  li.earth span {\n    animation-duration: 2s;\n  }\n  li.mars {\n    animation-duration: 20s;\n  }\n  li.asteroids_meteorids {\n    animation-duration: 50s;\n  }\n  li.jupiter {\n    animation-duration: 30s;\n  }\n  li.saturn {\n    animation-duration: 60s;\n  }\n  li.uranus {\n    animation-duration: 70s;\n  }\n  li.neptune {\n    animation-duration: 100s;\n  }\n  li.pluto {\n    animation-duration: 120s;\n  }\n"]);return on=function(){return n},n}function ln(){var n=Object(d.a)(["\n  flex: 1;\n  height: 100%;\n  z-index: 101;\n\n  display: flex;\n  align-items: center;\n\n  @media all and (max-width: 768px) {\n    height: 50%;\n    width: 100%;\n    transform: translateY(15%);\n  }\n"]);return ln=function(){return n},n}function cn(){var n=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(d.a)(["\n  from {\n    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n  }\n  to {\n    transform: translateX(-50%) translateY(-50%) rotate(360deg);\n  }\n"]);return un=function(){return n},n}var sn=Object(m.e)(un()),mn=Object(m.e)(cn()),dn=m.d.div(ln()),pn=m.d.ul(on(),(function(n){return"".concat(n.theme.text,"16")}),(function(n){return n.theme.background}),(function(n){return"".concat(n.theme.text,"64")}),(function(n){return n.isPlaying?sn:null}),(function(n){return n.isPlaying?mn:null})),fn=(t(41),function(){var n=Object(r.useState)(!0),e=Object(s.a)(n,2),t=e[0],o=e[1];return a.a.createElement(dn,null,a.a.createElement(pn,{isPlaying:t},a.a.createElement("li",{className:"sun",onClick:function(){return o(!t)}},t?a.a.createElement(k.c,null):a.a.createElement(k.d,null),a.a.createElement("span",null,"Sun")),a.a.createElement("li",{className:"mercury"},a.a.createElement("span",null,"Mercury")),a.a.createElement("li",{className:"venus"},a.a.createElement("span",null,"Venus")),a.a.createElement("li",{className:"earth"},a.a.createElement("span",null,"Earth",a.a.createElement("span",{className:"moon"},"Moon"))),a.a.createElement("li",{className:"mars"},a.a.createElement("span",null,"Mars")),a.a.createElement("li",{className:"asteroids_meteorids"},a.a.createElement("span",null,"Asteroids & Meteorids")),a.a.createElement("li",{className:"jupiter"},a.a.createElement("span",null,"Jupiter")),a.a.createElement("li",{className:"saturn"},a.a.createElement("span",null,"Saturn &",a.a.createElement("span",{className:"ring"},"Ring"))),a.a.createElement("li",{className:"uranus"},a.a.createElement("span",null,"Uranus")),a.a.createElement("li",{className:"neptune"},a.a.createElement("span",null,"Neptune")),a.a.createElement("li",{className:"pluto"},a.a.createElement("span",null,"Pluto"))))});function gn(){var n=Object(d.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 2rem;\n  height: 1.3rem;\n  transform: none;\n\n  background: red;\n  border-radius: 10px;\n"]);return gn=function(){return n},n}function hn(){var n=Object(d.a)(["\n      svg {\n        opacity: 0;\n      }\n\n      span {\n        transform: translateY(400%) scale(4);\n      }\n    "]);return hn=function(){return n},n}function bn(){var n=Object(d.a)(["\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 22px);\n  z-index: 900;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: none;\n  border: none;\n  margin: 0.5rem;\n  color: ",";\n\n  svg {\n    margin-bottom: -5px;\n    width: 44px;\n    height: 44px;\n    animation: "," 1s infinite;\n  }\n\n  span {\n    font-size: 0.5rem;\n    transition: 0.4s;\n  }\n\n  ","\n"]);return bn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  from {\n    transform: translateY(-20%);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-20%);\n  }\n"]);return xn=function(){return n},n}function vn(){var n=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 900;\n\n  display: flex;\n\n  margin: 20px;\n"]);return vn=function(){return n},n}function En(){var n=Object(d.a)(["\n  flex: 1;\n  z-index: 102;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 40px;\n\n  div.buttons {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 30px;\n\n    > button {\n      margin: 10px;\n      font-size: 0.75rem;\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    height: 50%;\n    /* justify-content: flex-end; */\n  }\n"]);return En=function(){return n},n}function wn(){var n=Object(d.a)(["\n  height: 100%;\n  overflow: hidden;\n\n  z-index: 500;\n  display: flex;\n  align-items: center;\n\n  background: ",";\n  color: ",";\n\n  @media all and (max-width: 768px) {\n    flex-direction: column-reverse;\n  }\n"]);return wn=function(){return n},n}var jn=m.d.div(wn(),(function(n){return n.theme.background}),(function(n){return n.theme.text})),kn=m.d.div(En()),On=m.d.div(vn()),yn=Object(m.e)(xn()),zn=m.d.button.attrs({type:"button"})(bn(),(function(n){return n.theme.text}),yn,(function(n){return n.makeItTitle&&Object(m.c)(hn())})),Tn=(m.d.div(gn()),function(){var n=Object(O.a)("common").t,e=Object(r.useState)(!0),t=Object(s.a)(e,2),o=t[0],i=t[1];return Object(r.useEffect)((function(){function n(){return console.log(document.documentElement.scrollTop),document.documentElement.scrollTop>60?i(!0):i(!1)}return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),a.a.createElement(jn,null,a.a.createElement(On,null,a.a.createElement(Y,null),a.a.createElement(B,null)),a.a.createElement(kn,null,a.a.createElement("div",{className:"titles"},a.a.createElement("h4",null,"Gabriel Lima"),a.a.createElement("h1",null,n("title"))),a.a.createElement("div",{className:"buttons"},a.a.createElement(H,{variant:"filled",color:"primary",height:"2em",width:"9em",onClick:function(){return window.scrollTo({top:2*window.innerHeight-120,behavior:"smooth"})}},a.a.createElement("span",null,n("viewMyWork"))),a.a.createElement(H,{variant:"outlined",color:"default",height:"2em",width:"9em",onClick:function(){return window.scrollTo({top:3*window.innerHeight,behavior:"smooth"})}},a.a.createElement("span",null,n("getInTouch"))))),a.a.createElement(fn,null),a.a.createElement(zn,{makeItTitle:o,onClick:function(){return window.scrollTo({top:window.innerHeight-60,behavior:"smooth"})}},a.a.createElement(an.a,null),a.a.createElement("span",null,"Skills")))});function Cn(){var n=Object(d.a)(["\n  width: 6em;\n  height: 6em;\n\n  background: none;\n  border-radius: 0.2rem;\n  margin: 1rem;\n\n  img {\n    width: 6em;\n    height: 6em;\n\n    &.invert {\n      filter: ",";\n    }\n  }\n\n  span {\n    position: absolute;\n    display: none;\n    width: 100%;\n    width: 6em;\n    height: 6em;\n    text-align: center;\n    text-transform: capitalize;\n    color: ",";\n  }\n\n  &:hover {\n    img {\n      opacity: 0.5;\n    }\n    span {\n      display: block;\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    width: 3em;\n    height: 3em;\n\n    img {\n      width: 3em;\n      height: 3em;\n    }\n\n    span {\n      position: absolute;\n      display: block;\n      /* width: 3em; */\n      height: 3em;\n      text-align: center;\n      text-transform: capitalize;\n      font-size: 0.6em;\n      color: ",";\n    }\n  }\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(d.a)(["\n  height: calc(100% - 60px);\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 4rem;\n  padding-top: 6rem;\n  background: ",";\n\n  @media all and (max-width: 768px) {\n    padding: 0.5rem;\n    padding-top: 3rem;\n  }\n"]);return Nn=function(){return n},n}var Sn=m.d.div(Nn(),(function(n){return n.theme.background})),Xn=m.d.div(Cn(),(function(n){return"invert(".concat(n.theme.invert,")")}),(function(n){return n.theme.text}),(function(n){return n.theme.text})),Yn=function(){return a.a.createElement(Sn,null,a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/javascript.svg",alt:"javascript"}),a.a.createElement("span",null,"javascript")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/typescript-icon.svg",alt:"typescript"}),a.a.createElement("span",null,"typescript")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/nodejs-icon.svg",alt:"nodejs"}),a.a.createElement("span",null,"nodejs")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/express.svg",alt:"express",className:"invert"}),a.a.createElement("span",null,"express")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/nextjs.svg",alt:"nextjs",className:"invert"}),a.a.createElement("span",null,"nextjs")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/docker-icon.svg",alt:"docker"}),a.a.createElement("span",null,"docker")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/mongodb.svg",alt:"mongodb"}),a.a.createElement("span",null,"mongodb")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/postgresql.svg",alt:"postgresql"}),a.a.createElement("span",null,"postgres")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/react.svg",alt:"react"}),a.a.createElement("span",null,"react")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/redux.svg",alt:"redux"}),a.a.createElement("span",null,"redux")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/redux-saga.svg",alt:"saga"}),a.a.createElement("span",null,"saga")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/material-ui.svg",alt:"material"}),a.a.createElement("span",null,"material")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/aws.svg",alt:"aws"}),a.a.createElement("span",null,"aws")),a.a.createElement(Xn,null,a.a.createElement("img",{src:"https://cdn.svgporn.com/logos/firebase.svg",alt:"firebase"}),a.a.createElement("span",null,"firebase")))};function Fn(){var n=Object(d.a)(["\n  flex: 1;\n  width: 4rem;\n  height: 8rem;\n\n  background: red;\n  border-radius: 0.2rem;\n  margin: 0.5rem;\n"]);return Fn=function(){return n},n}function Vn(){var n=Object(d.a)(["\n  height: calc(100% - 60px);\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 2rem;\n  background: cyan;\n  /* background: ","; */\n"]);return Vn=function(){return n},n}var Ln=m.d.div(Vn(),(function(n){return n.theme.background})),Mn=m.d.div(Fn()),Pn=function(){return a.a.createElement(Ln,null,a.a.createElement(Mn,null),a.a.createElement(Mn,null),a.a.createElement(Mn,null),a.a.createElement(Mn,null),a.a.createElement(Mn,null))};function Hn(){var n=Object(d.a)(["\n  height: 100%;\n\n  padding-top: 120px;\n  /* background: ","; */\n  background: blue;\n"]);return Hn=function(){return n},n}var In=m.d.div(Hn(),(function(n){return n.theme.background})),An=function(){return a.a.createElement(In,null)};function Jn(){var n=Object(d.a)(["\n      transform: translateY(0);\n    "]);return Jn=function(){return n},n}function Dn(){var n=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 2rem;\n  height: 2rem;\n  z-index: 900;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: ",";\n  color: ",";\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  margin: 30px;\n  transform: translateY(200%);\n  transition: 0.3s;\n  border: 0;\n\n  svg {\n    height: 40px;\n    width: 40px;\n  }\n\n  ","\n"]);return Dn=function(){return n},n}var Gn=m.d.button.attrs({type:"button"})(Dn(),(function(n){return n.theme.primary}),(function(n){return n.theme.background}),(function(n){return n.isVisible&&Object(m.c)(Jn())})),Wn=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],o=e[1],i=Object(r.useCallback)((function(){var n=document.documentElement.scrollTop;o(n>.5*window.innerHeight)}),[]);return Object(r.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}})),a.a.createElement(Gn,{isVisible:t,onClick:function(){return document.documentElement.scrollTo({top:0,behavior:"smooth"})}},a.a.createElement(an.b,null))},_n=function(){return a.a.createElement(j,null,a.a.createElement(rn,null),a.a.createElement(Tn,null),a.a.createElement(Yn,null),a.a.createElement(Pn,null),a.a.createElement(An,null),a.a.createElement(Wn,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_n,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ec327ae3.chunk.js.map