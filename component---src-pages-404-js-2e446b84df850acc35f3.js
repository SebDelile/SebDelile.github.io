"use strict";(self.webpackChunkseb_delile=self.webpackChunkseb_delile||[]).push([[883],{9783:function(e,a,r){r.d(a,{X:function(){return P}});var t=r(7294),n=r(9),o=r.p+"static/CaviarDreams-webfont-1d79cf44266336c54069f6ac8d2cf338.eot",i=r.p+"static/CaviarDreams-webfont-921ef7ca1af365ffb313d7ee39368e0b.woff",l=r.p+"static/CaviarDreams-webfont-d9ba717d3ea0850fc4a27d9fa7e5fea3.woff2",d=r.p+"static/CaviarDreams-webfont-9d9f8317bb6c880d5d97bad4c1dafb95.ttf",c=r.p+"static/CaviarDreams-webfont-ce239c677144f2ef23a9d9a87e8added.svg",s=function(e){var a=e.children;return t.createElement(t.Fragment,null,t.createElement(m,null),a)},m=(0,n.createGlobalStyle)(['*,*::after,*::before{margin:0;padding:0;box-sizing:border-box;}ul{list-style-type:none;}a{color:inherit;text-decoration:unset;cursor:pointer;}button{background-color:inherit;border:none;color:inherit;font:inherit;cursor:pointer;}dialog{border:none;color:inherit;background:unset;}@font-face{font-family:"caviar_dreamsregular";src:url(',");src:url(",') format("woff2"),url(',') format("woff"),url(',') format("truetype"),url(',') format("svg");font-weight:normal;font-style:normal;}body *{font-family:"DM Sans","sans-serif";}h1,h2{font-family:"caviar_dreamsregular","Zen Kurenaido",sans-serif;}body{--color-primary:#043B6B;--color-secondary:#DDDDDD;--color-background:#EEEEEE;--boxshadow-main:0 0 0.25rem 0.125rem rgba(0,0,0,0.5);--boxshadow-slight:0 0 0.25rem rgba(0,0,0,0.5);--boxshadow-drop:0 0.25rem 0.25rem rgba(0,0,0,0.5);--transition-duration:250ms}@keyframes infobulle-appears{from{opacity:0}to{opacity:1}}html,body{width:100%;height:100%;}#___gatsby,#gatsby-focus-wrapper{all:inherit;}.sr-only{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}'],o,l,i,d,c),f=r(5444),p=function(e){var a=e.className,r=(0,f.K2)("171958727").allSocialMediaDataJson.nodes;return t.createElement(u,{className:a},r.map((function(e){return t.createElement(g,{key:e.id,href:e.url,"aria-label":e.infobulle,target:"_blank",rel:"noopener noreferrer"},t.createElement(h,{src:e.icon.publicURL,alt:e.name+" icon"}))})))},u=n.default.div.withConfig({displayName:"SocialMedia__Wrapper",componentId:"sc-166a41a-0"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),g=n.default.a.withConfig({displayName:"SocialMedia__A",componentId:"sc-166a41a-1"})(["display:inline-block;position:relative;height:3.5rem;width:3.5rem;padding:1rem;&:hover > img,&:focus > img{transform:scale(1.25);}",""],(function(){return b})),h=n.default.img.withConfig({displayName:"SocialMedia__Icon",componentId:"sc-166a41a-2"})(["width:100%;height:100%;transform:scale(1);transition:transform 0.4s;"]),b="&:hover::after,\n&:focus::after,\n&:hover::before,\n&:focus::before {\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  animation: infobulle-appears 0s 0.4s both;\n}\n\n&:hover::after,\n&:focus::after {\n  content: attr(aria-label);\n  transform: translate(-25%);\n  z-index: 1;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: var(--color-secondary);\n  color: black;\n  box-shadow: 0 0 0.125rem black;\n}\n\n&:hover::before,\n&:focus::before {\n  content: '';\n  transform: translate(-50%, calc(-100% + 1px));\n  z-index: 2;\n  border-right : 0.5rem solid transparent;\n  border-bottom : 0.6rem solid var(--color-secondary);\n  border-left : 0.5rem solid transparent;\n}",w=function(){return t.createElement(v,null,t.createElement(_,null,"Sébastien Delile"),t.createElement(E,null," - développeur react.js"),t.createElement(k,null),t.createElement(x,null,["fr"].map((function(e){return t.createElement("option",{key:e,value:e},e)}))))},y=["30rem","48rem"],v=n.default.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-p94lo8-0"})(["position:sticky;z-index:100;top:0;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto auto;grid-template-areas:'name name' 'social-media lang-selection';justify-items:flex-start;align-items:center;align-content:end;gap:0;padding-top:1rem;background:var(--color-primary);color:var(--color-secondary);box-shadow:var(--boxshadow-main);@media only screen and (min-width:","){grid-template-columns:auto 1fr auto;grid-template-rows:auto auto;grid-template-areas:'name job job' 'social-media social-media lang-selection';}@media only screen and (min-width:","){grid-template-columns:auto 1fr auto auto;grid-template-rows:auto;grid-template-areas:'name job social-media lang-selection';align-content:center;padding-top:0;}"],y[0],y[1]),_=n.default.p.withConfig({displayName:"Header__Name",componentId:"sc-p94lo8-1"})(["grid-area:name;font-size:1.5rem;"]),E=n.default.p.withConfig({displayName:"Header__Job",componentId:"sc-p94lo8-2"})(["display:none;grid-area:job;font-size:1.25rem;padding-left:0.25rem;@media only screen and (min-width:","){display:block;}"],y[0]),x=n.default.select.withConfig({displayName:"Header__LangSelection",componentId:"sc-p94lo8-3"})(["grid-area:lang-selection;"]),k=(0,n.default)(p).withConfig({displayName:"Header__HeaderSocialMedia",componentId:"sc-p94lo8-4"})(["grid-area:social-media;position:relative;right:1rem;"]),C=function(){return t.createElement(N,null,t.createElement(D,null,"Page faite par mes soins en react.js puis générée avec Gatsby."),t.createElement(j,null,"2021 - tous droits réservés."),t.createElement(z,null))},I=["48rem"],N=n.default.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-n9brge-0"})(["display:grid;grid-template-columns:auto;grid-template-rows:repeat(3,auto);grid-template-areas:'social-media' 'recipe' 'disclaimer';justify-items:center;align-items:center;gap:0;padding-top:0.5rem;padding-bottom:2rem;background:var(--color-primary);color:var(--color-secondary);font-size:0.75rem;overflow-x:hidden;@media only screen and (min-width:","){grid-template-columns:1fr auto;grid-template-rows:repeat(2,auto);grid-template-areas:'recipe social-media' 'disclaimer social-media';justify-items:start;font-size:1rem;}"],I[0]),D=n.default.p.withConfig({displayName:"Footer__Recipe",componentId:"sc-n9brge-1"})(["grid-area:recipe;margin-top:0.5rem;text-align:center;@media only screen and (min-width:","){margin-top:1rem;}"],I[0]),j=n.default.p.withConfig({displayName:"Footer__Disclaimer",componentId:"sc-n9brge-2"})(["grid-area:disclaimer;margin-top:0.5rem;text-align:center;"]),z=(0,n.default)(p).withConfig({displayName:"Footer__FooterSocialMedia",componentId:"sc-n9brge-3"})(["grid-area:social-media;width:100%;max-width:22rem;justify-content:space-around;@media only screen and (min-width:","){width:unset;justify-content:center;align-self:start;}"],I[0]),S=function(){return t.createElement(F,null,t.createElement(M,null,"Work In Progress"))},F=n.default.div.withConfig({displayName:"WorkInProgressBadge__Wrapper",componentId:"sc-rad6lb-0"})(["z-index:200;position:fixed;top:calc(10rem / 1.414);right:0;width:10rem;transform:translate(0,-100%);"]),M=n.default.p.withConfig({displayName:"WorkInProgressBadge__P",componentId:"sc-rad6lb-1"})(["background:darkred;transform:rotate(45deg);transform-origin:bottom right;font-size:0.75rem;text-align:center;width:100%;padding:0.5rem 0;color:white;"]),P=function(e){var a=e.children,r=e.title;return t.createElement(t.Fragment,null,t.createElement(s,null),t.createElement("title",null,r),t.createElement(H,null,t.createElement(S,null),t.createElement(w,null),t.createElement(B,null,a),t.createElement(C,null)))},W=["20rem","90rem"],H=n.default.div.withConfig({displayName:"PageLayout__Wrapper",componentId:"sc-jl0371-0"})(["position:relative;min-height:100%;min-width:20rem;background:var(--color-background);display:flex;flex-direction:column;& > header,& > main,& > footer{padding-left:1rem;padding-right:1rem;flex-shrink:0;@media only screen and (min-width:","){padding-left:calc(100vw * 0.05);padding-right:calc(100vw * 0.05 - (100vw - 100%));}@media only screen and (min-width:","){padding-left:calc((100vw - 90rem * 0.9) / 2);padding-right:calc((100vw - 90rem * 0.9) / 2 - (100vw - 100%));}}"],W[0],W[1]),B=n.default.main.withConfig({displayName:"PageLayout__Main",componentId:"sc-jl0371-1"})(["flex-grow:1;"])},9616:function(e,a,r){r.r(a);var t=r(7294),n=r(5444),o=r(9783);a.default=function(){return t.createElement(o.X,{title:"Not Found"},t.createElement("h1",null,"Page non trouvée"),t.createElement("p",null,"Désolé, nous n'avons pas trouvé la page que vous demandez"),t.createElement(n.rU,{to:"/"},"Retourner à l'accueil"),".")}}}]);
//# sourceMappingURL=component---src-pages-404-js-2e446b84df850acc35f3.js.map