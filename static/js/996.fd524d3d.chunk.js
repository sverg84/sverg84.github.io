"use strict";(self.webpackChunksverg84_github_io=self.webpackChunksverg84_github_io||[]).push([[996],{4996:(e,n,t)=>{t.r(n),t.d(n,{Component:()=>$});var r=t(2791),a=t(8025);const s={background:"background_background__jno86",stars:"background_stars__SBhqV",animStar:"background_animStar__vPf6G",stars2:"background_stars2__qibmf",stars3:"background_stars3__sA9u9"};var c=t(184);const o=[{className:s.stars,numStars:700},{className:s.stars2,numStars:200},{className:s.stars3,numStars:100}];function l(e){let{className:n,numStars:t}=e;const{color:s}=r.useContext(a.Z),o=r.useMemo((()=>{const e=()=>Math.floor(2e3*Math.random()+1),n=()=>"".concat(e(),"px ").concat(e(),"px ").concat(s);let r=n();for(let a=2;a<=t;a++)r="".concat(r,", ").concat(n());return r}),[s,t]);return(0,c.jsx)("div",{className:n,style:{boxShadow:o}})}function i(){return(0,c.jsx)("div",{className:s.background,children:o.map((e=>(0,r.createElement)(l,{...e,key:e.className})))})}var u=t(5364),d=t(8957),m=t(7022),h=t(775),v=t(280),x=t(5943),f=t(1791);function b(){return(0,c.jsx)(f.Z,{className:x.Z.discord,href:"https://discord.com/users/652354605497188370",icon:v.om})}var p=t(4018);function _(){return(0,c.jsx)(f.Z,{className:x.Z.steam,href:"https://steamcommunity.com/profiles/76561198060926980/",icon:p.vs})}function Z(){return(0,c.jsx)(d.Z.Footer,{children:(0,c.jsxs)(m.Z,{className:h.Z.buttons,children:[(0,c.jsx)(_,{}),(0,c.jsx)(b,{})]})})}var j=t(7469),g=t(7093),k=t(4769);const N={header:"header_header__dljDF",wavy:"header_wavy__GVntJ"},C="88",y="Oh, Hello!";function M(){const e=(0,k.Z)(),n=(0,g.Z)(C);return(0,c.jsx)(j.Z,{as:"h2",className:N.header,style:{...n,...e},children:y.split("").map(((e,n,t)=>(0,c.jsx)("span",{children:e},e+(n>0?t[n-1]:""))))})}var S=t(9007);const w=function(e,n){const t=(0,r.useRef)(!0);(0,r.useEffect)((()=>{if(!t.current)return e();t.current=!1}),n)};var E=t(7904),A=t(9726),B=t(6445),I=t(1694),z=t.n(I),R=t(8580);const D=(0,t(6543).Z)("carousel-caption");var O=t(162);const L=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:r,className:a,...s}=e;const o=z()(a,(0,O.vE)(r,"carousel-item"));return(0,c.jsx)(t,{ref:n,...s,className:o})}));L.displayName="CarouselItem";const T=L;function F(e,n){let t=0;return r.Children.map(e,(e=>r.isValidElement(e)?n(e,t++):e))}var H=t(933),P=t(7202),V=t(5007);const q=r.forwardRef(((e,n)=>{let{defaultActiveIndex:t=0,...a}=e;const{as:s="div",bsPrefix:o,slide:l=!0,fade:i=!1,controls:u=!0,indicators:d=!0,indicatorLabels:m=[],activeIndex:h,onSelect:v,onSlide:x,onSlid:f,interval:b=5e3,keyboard:p=!0,onKeyDown:_,pause:Z="hover",onMouseOver:j,onMouseOut:g,wrap:k=!0,touch:N=!0,onTouchStart:C,onTouchMove:y,onTouchEnd:M,prevIcon:I=(0,c.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:D="Previous",nextIcon:L=(0,c.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:T="Next",variant:q,className:G,children:K,...U}=(0,R.Ch)({defaultActiveIndex:t,...a},{activeIndex:"onSelect"}),X=(0,O.vE)(o,"carousel"),J=(0,O.SC)(),W=(0,r.useRef)(null),[Y,Q]=(0,r.useState)("next"),[$,ee]=(0,r.useState)(!1),[ne,te]=(0,r.useState)(!1),[re,ae]=(0,r.useState)(h||0);(0,r.useEffect)((()=>{ne||h===re||(W.current?Q(W.current):Q((h||0)>re?"next":"prev"),l&&te(!0),ae(h||0))}),[h,ne,re,l]),(0,r.useEffect)((()=>{W.current&&(W.current=null)}));let se,ce=0;!function(e,n){let t=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&n(e,t++)}))}(K,((e,n)=>{++ce,n===h&&(se=e.props.interval)}));const oe=(0,E.Z)(se),le=(0,r.useCallback)((e=>{if(ne)return;let n=re-1;if(n<0){if(!k)return;n=ce-1}W.current="prev",null==v||v(n,e)}),[ne,re,v,k,ce]),ie=(0,S.Z)((e=>{if(ne)return;let n=re+1;if(n>=ce){if(!k)return;n=0}W.current="next",null==v||v(n,e)})),ue=(0,r.useRef)();(0,r.useImperativeHandle)(n,(()=>({element:ue.current,prev:le,next:ie})));const de=(0,S.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&(J?le():ie())})),me="next"===Y?"start":"end";w((()=>{l||(null==x||x(re,me),null==f||f(re,me))}),[re]);const he="".concat(X,"-item-").concat(Y),ve="".concat(X,"-item-").concat(me),xe=(0,r.useCallback)((e=>{(0,P.Z)(e),null==x||x(re,me)}),[x,re,me]),fe=(0,r.useCallback)((()=>{te(!1),null==f||f(re,me)}),[f,re,me]),be=(0,r.useCallback)((e=>{if(p&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(J?ie(e):le(e));case"ArrowRight":return e.preventDefault(),void(J?le(e):ie(e))}null==_||_(e)}),[p,_,le,ie,J]),pe=(0,r.useCallback)((e=>{"hover"===Z&&ee(!0),null==j||j(e)}),[Z,j]),_e=(0,r.useCallback)((e=>{ee(!1),null==g||g(e)}),[g]),Ze=(0,r.useRef)(0),je=(0,r.useRef)(0),ge=(0,A.Z)(),ke=(0,r.useCallback)((e=>{Ze.current=e.touches[0].clientX,je.current=0,"hover"===Z&&ee(!0),null==C||C(e)}),[Z,C]),Ne=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?je.current=0:je.current=e.touches[0].clientX-Ze.current,null==y||y(e)}),[y]),Ce=(0,r.useCallback)((e=>{if(N){const n=je.current;Math.abs(n)>40&&(n>0?le(e):ie(e))}"hover"===Z&&ge.set((()=>{ee(!1)}),b||void 0),null==M||M(e)}),[N,Z,le,ie,ge,b,M]),ye=null!=b&&!$&&!ne,Me=(0,r.useRef)();(0,r.useEffect)((()=>{var e,n;if(!ye)return;const t=J?le:ie;return Me.current=window.setInterval(document.visibilityState?de:t,null!=(e=null!=(n=oe.current)?n:b)?e:void 0),()=>{null!==Me.current&&clearInterval(Me.current)}}),[ye,le,ie,oe,b,de,J]);const Se=(0,r.useMemo)((()=>d&&Array.from({length:ce},((e,n)=>e=>{null==v||v(n,e)}))),[d,ce,v]);return(0,c.jsxs)(s,{ref:ue,...U,onKeyDown:be,onMouseOver:pe,onMouseOut:_e,onTouchStart:ke,onTouchMove:Ne,onTouchEnd:Ce,className:z()(G,X,l&&"slide",i&&"".concat(X,"-fade"),q&&"".concat(X,"-").concat(q)),children:[d&&(0,c.jsx)("div",{className:"".concat(X,"-indicators"),children:F(K,((e,n)=>(0,c.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[n]:"Slide ".concat(n+1),className:n===re?"active":void 0,onClick:Se?Se[n]:void 0,"aria-current":n===re},n)))}),(0,c.jsx)("div",{className:"".concat(X,"-inner"),children:F(K,((e,n)=>{const t=n===re;return l?(0,c.jsx)(V.Z,{in:t,onEnter:t?xe:void 0,onEntered:t?fe:void 0,addEndListener:H.Z,children:(n,a)=>r.cloneElement(e,{...a,className:z()(e.props.className,t&&"entered"!==n&&he,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&ve)})}):r.cloneElement(e,{className:z()(e.props.className,t&&"active")})}))}),u&&(0,c.jsxs)(c.Fragment,{children:[(k||0!==h)&&(0,c.jsxs)(B.Z,{className:"".concat(X,"-control-prev"),onClick:le,children:[I,D&&(0,c.jsx)("span",{className:"visually-hidden",children:D})]}),(k||h!==ce-1)&&(0,c.jsxs)(B.Z,{className:"".concat(X,"-control-next"),onClick:ie,children:[L,T&&(0,c.jsx)("span",{className:"visually-hidden",children:T})]})]})]})}));q.displayName="Carousel";const G=Object.assign(q,{Caption:D,Item:T});var K=t(8188);function U(e){let{src:n}=e;return(0,c.jsx)(K.Z,{src:n,children:(0,c.jsx)(d.Z.Text,{children:"Blep"})})}const X=["/portrait-mode.jpg","/pinksuit.jpeg","/dokidoki.jpeg"];function J(){return(0,c.jsx)(G,{controls:!1,fade:!0,indicators:!1,interval:4e3,wrap:!0,children:X.map((e=>(0,c.jsx)(G.Item,{children:(0,c.jsx)(U,{src:e})},e)))})}function W(){return(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(M,{}),(0,c.jsx)(d.Z.Body,{children:(0,c.jsx)(J,{})}),(0,c.jsx)(Z,{})]})}function Y(){return(0,c.jsx)(u.Z,{children:(0,c.jsx)(W,{})})}var Q=t(9430);function $(){return(0,c.jsx)(Q.Z,{background:(0,c.jsx)(i,{}),children:(0,c.jsx)(Y,{})})}},9430:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(2791),a=t(8025),s=t(1694),c=t.n(s),o=t(7022),l=t(2677),i=t(2251),u=t(1087),d=t(2982),m=t(7093);const h={brand:"navbar_brand__zDvLc",navbar:"navbar_navbar__pEuvw",rightContent:"navbar_rightContent__ikOZ0"};var v=t(5),x=t(5088),f=t(9806),b=t(192),p=t(4849);const _={fallback:"colorPicker_fallback__pvhTA"};var Z=t(9415),j=t(184);const g=(0,Z.Z)((()=>t.e(154).then(t.bind(t,1154))));function k(){return(0,j.jsx)(b.Z,{align:"end",className:_.icon,renderMenuOnMount:!1,title:(0,j.jsx)(f.G,{icon:x.q2,bounce:!0}),onMouseEnter:()=>{g.preload()},children:(0,j.jsx)(r.Suspense,{fallback:(0,j.jsx)("div",{className:_.fallback,children:(0,j.jsx)(p.Z,{animation:"border",variant:"secondary"})}),children:(0,j.jsx)(g,{})})})}function N(e){let{breadcrumbs:n}=e;const t=(0,m.Z)();return(0,j.jsx)(i.Z,{expand:!1,sticky:"top",style:t,children:(0,j.jsxs)(o.Z,{className:c()(v.Z.page,h.navbar),children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(u.rU,{className:h.brand,to:"/",children:d.Z})}),(0,j.jsxs)(l.Z,{className:h.rightContent,children:[n,(0,j.jsx)(k,{})]})]})})}function C(e){let{background:n,breadcrumbs:t,children:s}=e;const[c,o]=(0,r.useState)("#2e3134");return(0,j.jsxs)(a.Z.Provider,{value:{color:c,setColor:o},children:[n,(0,j.jsx)(N,{breadcrumbs:t}),s]})}},5364:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(1694),a=t.n(r);t(2791);const s={body:"pageBody_body__aNOKo"};var c=t(5),o=t(184);function l(e){let{children:n}=e;return(0,o.jsx)("div",{className:a()(c.Z.page,s.body),children:n})}},8188:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(2791),a=t(8957),s=t(2677),c=t(7022),o=t(9743),l=t(6638),i=t(5267),u=t(184);const d=r.lazy((async()=>await t.e(217).then(t.bind(t,1217))));function m(e){return(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(i.Z,{animation:"wave",as:"div",bg:"secondary",className:l.Z.glimmer}),children:(0,u.jsx)(d,{...e})})}function h(e){let{children:n,...t}=e;return(0,u.jsx)(a.Z.Body,{children:(0,u.jsx)(c.Z,{children:(0,u.jsxs)(o.Z,{className:l.Z.body,xs:1,children:[(0,u.jsx)(s.Z,{className:l.Z.imageColumn,xl:4,children:(0,u.jsx)(m,{...t})}),(0,u.jsx)(s.Z,{xl:8,children:n})]})})})}},1791:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(9806),a=(t(2791),t(3360)),s=t(2381),c=t(184);function o(e){let{className:n,href:t,icon:o}=e;const{isHovering:l,...i}=(0,s.Z)();return(0,c.jsx)(a.Z,{className:n,href:t,target:"_blank",variant:"link",...i,children:(0,c.jsx)(r.G,{icon:o,size:"2xl"})})}},2982:(e,n,t)=>{t.d(n,{Z:()=>r});const r="Stephen Vergara"},8025:(e,n,t)=>{t.d(n,{Z:()=>r});const r=(0,t(2791).createContext)({color:"#2e3134",setColor:()=>{}})},7093:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2791),a=t(8025),s=t(5791);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{color:n}=r.useContext(a.Z),t=(0,s.Z)();return{backgroundColor:"".concat(n).concat(e),color:t}}},4769:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(2791),a=t(8025);function s(){const{color:e}=r.useContext(a.Z);return{color:e}}},2381:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(2791);function a(){const[e,n]=r.useState(!1);return{isHovering:e,onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)}}}},5791:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(2791),a=t(8025);const s=128,c=.299,o=.587,l=.114;function i(){const{color:e}=r.useContext(a.Z);return r.useMemo((()=>{const n=Math.floor((e.length-1)/3),t=((e,n)=>e.match(new RegExp(".{".concat(n,"}"),"g")))(e.slice(1),n),[r,a,i]=(null!==t&&void 0!==t?t:[]).map((e=>parseInt(e.repeat(2/e.length),16)));return Math.round((null!==r&&void 0!==r?r:0)*c+(null!==a&&void 0!==a?a:0)*o+(null!==i&&void 0!==i?i:0)*l)>s?"black":"white"}),[e])}},9415:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(2791);function a(e){return Object.assign(r.lazy(e),{preload:e})}},280:(e,n)=>{var t="discord",r=[],a="f392",s="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z";n.DF={prefix:"fab",iconName:t,icon:[640,512,r,a,s]},n.om=n.DF},4018:(e,n)=>{var t="steam",r=[],a="f1b6",s="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z";n.DF={prefix:"fab",iconName:t,icon:[496,512,r,a,s]},n.vs=n.DF},6638:(e,n,t)=>{t.d(n,{Z:()=>r});const r={body:"aboutMeCardBody_body__px0Z-",base:"aboutMeCardBody_base__HWSO5",image:"aboutMeCardBody_image__r0pwR",glimmer:"aboutMeCardBody_glimmer__ztngv",imageColumn:"aboutMeCardBody_imageColumn__Decwz"}},775:(e,n,t)=>{t.d(n,{Z:()=>r});const r={buttons:"footer_buttons__X-wEA",resume:"footer_resume__j2AKe"}},5943:(e,n,t)=>{t.d(n,{Z:()=>r});const r={github:"linkButton_github__ltM-y",linkedin:"linkButton_linkedin__MRpaF",steam:"linkButton_steam__qizUa",discord:"linkButton_discord__zToU1"}},5:(e,n,t)=>{t.d(n,{Z:()=>r});const r={page:"pageMargin_page__oYkHI"}}}]);
//# sourceMappingURL=996.fd524d3d.chunk.js.map