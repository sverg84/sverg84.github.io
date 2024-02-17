"use strict";(self.webpackChunksverg84_github_io=self.webpackChunksverg84_github_io||[]).push([[147],{1770:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7313),s=t(1486),c=t(1616),r=t(2102),o=t(8253),l=t(3849),i=t(9152),u=t(6417);const d=a.lazy((async()=>await t.e(367).then(t.bind(t,2367))));function m(e){return(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(o.Z,{animation:"wave",as:"div",bg:"secondary",className:i.Z.glimmer}),children:(0,u.jsx)(d,{...e})})}const f={placeholder:"placeholder_placeholder__tA0wU",iframeLoading:"placeholder_iframeLoading__KPy1E"};function h(e){let{children:n,...t}=e;const[d,h]=a.useState(!0);return(0,u.jsx)(s.Z.Body,{as:"section",children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(l.Z,{className:i.Z.body,xs:1,children:[(0,u.jsx)(c.Z,{className:i.Z.imageColumn,xl:4,children:(0,u.jsx)(m,{...t})}),(0,u.jsxs)(c.Z,{xl:8,children:[n,d&&(0,u.jsx)(o.Z,{as:"div",animation:"wave",bg:"secondary",className:f.placeholder}),(0,u.jsx)("iframe",{className:d?f.iframeLoading:void 0,src:"https://open.spotify.com/embed/playlist/37i9dQZF1EVJHK7Q1TBABQ?utm_source=generator&theme=0",width:"100%",height:"152",allow:"encrypted-media;",loading:"lazy",onLoad:e=>{e.preventDefault(),h(!1)}})]})]})})})}},347:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(259),s=(t(7313),t(3298)),c=t(6417);function r(e){let{className:n,href:t,icon:r,label:o}=e;return(0,c.jsx)(s.Z,{"aria-label":o,className:n,href:t,target:"_blank",variant:"link",children:(0,c.jsx)(a.G,{icon:r,size:"2xl"})})}},3147:(e,n,t)=>{t.r(n),t.d(n,{Component:()=>ce});var a=t(7313);const s={background:"background_background__jno86",stars:"background_stars__SBhqV",animStar:"background_animStar__vPf6G",stars2:"background_stars2__qibmf",stars3:"background_stars3__sA9u9"};var c=t(7558),r=t(2009),o=t(6417);const l="#1B2735";function i(e){let{className:n,numStars:t}=e;const[s]=a.useContext(c.Z),i=a.useMemo((()=>(0,r.Z)(s)>2*(0,r.Z)(l)?s:"white"),[s]),u=a.useMemo((()=>{const e=()=>Math.floor(2e3*Math.random()+1),n=()=>"".concat(e(),"px ").concat(e(),"px ").concat(i);let a=n();for(let s=2;s<=t;s++)a="".concat(a,", ").concat(n());return a}),[i,t]);return(0,o.jsx)("div",{className:n,style:{boxShadow:u}})}const u=[{className:s.stars,numStars:700},{className:s.stars2,numStars:200},{className:s.stars3,numStars:100}];function d(){return(0,o.jsx)("div",{className:s.background,children:u.map((e=>(0,a.createElement)(i,{...e,key:e.className})))})}var m=t(1486),f=t(2102),h=t(2149),v=t(9670),p=t(914),x=t(347);function b(){return(0,o.jsx)(x.Z,{className:p.Z.discord,href:"https://discord.com/users/652354605497188370",icon:v.om,label:"Discord"})}var _=t(2572);function j(){return(0,o.jsx)(x.Z,{className:p.Z.facebook,href:"https://www.facebook.com/stephen.vergara.0/",icon:_.ne,label:"Facebook"})}var N=t(3651);function g(){return(0,o.jsx)(x.Z,{className:p.Z.steam,href:"https://steamcommunity.com/profiles/76561198060926980/",icon:N.vs,label:"Steam"})}function Z(){return(0,o.jsx)(m.Z.Footer,{children:(0,o.jsxs)(f.Z,{className:h.Z.buttons,children:[(0,o.jsx)(j,{}),(0,o.jsx)(g,{}),(0,o.jsx)(b,{})]})})}var y=t(3754),k=t(8318),C=t(4884);const w={header:"header_header__dljDF",wavy:"header_wavy__GVntJ"},S="88",E="Oh, Hello!";function M(){const e=(0,C.Z)(),n=(0,k.Z)(S);return(0,o.jsx)(y.Z,{as:"h2",className:w.header,style:{...n,...e},children:E.split("").map(((e,n,t)=>(0,o.jsx)("span",{children:e},e+(n>0?t[n-1]:""))))})}var B=t(9650);const R=function(e,n){const t=(0,a.useRef)(!0);(0,a.useEffect)((()=>{if(!t.current)return e();t.current=!1}),n)};var z=t(7058),D=t(7901),A=t(2891);const T=2**31-1;function F(e,n,t){const a=t-Date.now();e.current=a<=T?setTimeout(n,a):setTimeout((()=>F(e,n,t)),T)}function I(){const e=(0,D.Z)(),n=(0,a.useRef)();return(0,A.Z)((()=>clearTimeout(n.current))),(0,a.useMemo)((()=>{const t=()=>clearTimeout(n.current);return{set:function(a){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(t(),s<=T?n.current=setTimeout(a,s):F(n,a,Date.now()+s))},clear:t}}),[])}var P=t(6386),L=t(6123),V=t.n(L),O=t(2858);const G=(0,t(8864).Z)("carousel-caption");var K=t(8524);const H=a.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:s,...c}=e;const r=V()(s,(0,K.vE)(a,"carousel-item"));return(0,o.jsx)(t,{ref:n,...c,className:r})}));H.displayName="CarouselItem";const q=H;function Q(e,n){let t=0;return a.Children.map(e,(e=>a.isValidElement(e)?n(e,t++):e))}var U=t(7155),X=t(6280),J=t(9776);const W=a.forwardRef(((e,n)=>{let{defaultActiveIndex:t=0,...s}=e;const{as:c="div",bsPrefix:r,slide:l=!0,fade:i=!1,controls:u=!0,indicators:d=!0,indicatorLabels:m=[],activeIndex:f,onSelect:h,onSlide:v,onSlid:p,interval:x=5e3,keyboard:b=!0,onKeyDown:_,pause:j="hover",onMouseOver:N,onMouseOut:g,wrap:Z=!0,touch:y=!0,onTouchStart:k,onTouchMove:C,onTouchEnd:w,prevIcon:S=(0,o.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:E="Previous",nextIcon:M=(0,o.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:D="Next",variant:A,className:T,children:F,...L}=(0,O.Ch)({defaultActiveIndex:t,...s},{activeIndex:"onSelect"}),G=(0,K.vE)(r,"carousel"),H=(0,K.SC)(),q=(0,a.useRef)(null),[W,Y]=(0,a.useState)("next"),[$,ee]=(0,a.useState)(!1),[ne,te]=(0,a.useState)(!1),[ae,se]=(0,a.useState)(f||0);(0,a.useEffect)((()=>{ne||f===ae||(q.current?Y(q.current):Y((f||0)>ae?"next":"prev"),l&&te(!0),se(f||0))}),[f,ne,ae,l]),(0,a.useEffect)((()=>{q.current&&(q.current=null)}));let ce,re=0;!function(e,n){let t=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&n(e,t++)}))}(F,((e,n)=>{++re,n===f&&(ce=e.props.interval)}));const oe=(0,z.Z)(ce),le=(0,a.useCallback)((e=>{if(ne)return;let n=ae-1;if(n<0){if(!Z)return;n=re-1}q.current="prev",null==h||h(n,e)}),[ne,ae,h,Z,re]),ie=(0,B.Z)((e=>{if(ne)return;let n=ae+1;if(n>=re){if(!Z)return;n=0}q.current="next",null==h||h(n,e)})),ue=(0,a.useRef)();(0,a.useImperativeHandle)(n,(()=>({element:ue.current,prev:le,next:ie})));const de=(0,B.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&(H?le():ie())})),me="next"===W?"start":"end";R((()=>{l||(null==v||v(ae,me),null==p||p(ae,me))}),[ae]);const fe="".concat(G,"-item-").concat(W),he="".concat(G,"-item-").concat(me),ve=(0,a.useCallback)((e=>{(0,X.Z)(e),null==v||v(ae,me)}),[v,ae,me]),pe=(0,a.useCallback)((()=>{te(!1),null==p||p(ae,me)}),[p,ae,me]),xe=(0,a.useCallback)((e=>{if(b&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(H?ie(e):le(e));case"ArrowRight":return e.preventDefault(),void(H?le(e):ie(e))}null==_||_(e)}),[b,_,le,ie,H]),be=(0,a.useCallback)((e=>{"hover"===j&&ee(!0),null==N||N(e)}),[j,N]),_e=(0,a.useCallback)((e=>{ee(!1),null==g||g(e)}),[g]),je=(0,a.useRef)(0),Ne=(0,a.useRef)(0),ge=I(),Ze=(0,a.useCallback)((e=>{je.current=e.touches[0].clientX,Ne.current=0,"hover"===j&&ee(!0),null==k||k(e)}),[j,k]),ye=(0,a.useCallback)((e=>{e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-je.current,null==C||C(e)}),[C]),ke=(0,a.useCallback)((e=>{if(y){const n=Ne.current;Math.abs(n)>40&&(n>0?le(e):ie(e))}"hover"===j&&ge.set((()=>{ee(!1)}),x||void 0),null==w||w(e)}),[y,j,le,ie,ge,x,w]),Ce=null!=x&&!$&&!ne,we=(0,a.useRef)();(0,a.useEffect)((()=>{var e,n;if(!Ce)return;const t=H?le:ie;return we.current=window.setInterval(document.visibilityState?de:t,null!=(e=null!=(n=oe.current)?n:x)?e:void 0),()=>{null!==we.current&&clearInterval(we.current)}}),[Ce,le,ie,oe,x,de,H]);const Se=(0,a.useMemo)((()=>d&&Array.from({length:re},((e,n)=>e=>{null==h||h(n,e)}))),[d,re,h]);return(0,o.jsxs)(c,{ref:ue,...L,onKeyDown:xe,onMouseOver:be,onMouseOut:_e,onTouchStart:Ze,onTouchMove:ye,onTouchEnd:ke,className:V()(T,G,l&&"slide",i&&"".concat(G,"-fade"),A&&"".concat(G,"-").concat(A)),children:[d&&(0,o.jsx)("div",{className:"".concat(G,"-indicators"),children:Q(F,((e,n)=>(0,o.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[n]:"Slide ".concat(n+1),className:n===ae?"active":void 0,onClick:Se?Se[n]:void 0,"aria-current":n===ae},n)))}),(0,o.jsx)("div",{className:"".concat(G,"-inner"),children:Q(F,((e,n)=>{const t=n===ae;return l?(0,o.jsx)(J.Z,{in:t,onEnter:t?ve:void 0,onEntered:t?pe:void 0,addEndListener:U.Z,children:(n,s)=>a.cloneElement(e,{...s,className:V()(e.props.className,t&&"entered"!==n&&fe,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&he)})}):a.cloneElement(e,{className:V()(e.props.className,t&&"active")})}))}),u&&(0,o.jsxs)(o.Fragment,{children:[(Z||0!==f)&&(0,o.jsxs)(P.Z,{className:"".concat(G,"-control-prev"),onClick:le,children:[S,E&&(0,o.jsx)("span",{className:"visually-hidden",children:E})]}),(Z||f!==re-1)&&(0,o.jsxs)(P.Z,{className:"".concat(G,"-control-next"),onClick:ie,children:[M,D&&(0,o.jsx)("span",{className:"visually-hidden",children:D})]})]})]})}));W.displayName="Carousel";const Y=Object.assign(W,{Caption:G,Item:q});var $=t(1770);function ee(e){let{src:n}=e;return(0,o.jsx)($.Z,{src:n,children:(0,o.jsx)(m.Z.Text,{children:"Blep"})})}const ne=["/portrait-mode.jpg","/pinksuit.jpeg","/dokidoki.jpeg"];function te(){return(0,o.jsx)(Y,{controls:!1,fade:!0,indicators:!1,interval:4e3,wrap:!0,children:ne.map((e=>(0,o.jsx)(Y.Item,{children:(0,o.jsx)(ee,{src:e})},e)))})}function ae(){return(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(M,{}),(0,o.jsx)(m.Z.Body,{children:(0,o.jsx)(te,{})}),(0,o.jsx)(Z,{})]})}function se(){return(0,o.jsx)(ae,{})}function ce(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{})]})}},4884:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7313),s=t(7558);function c(){const[e]=a.useContext(s.Z);return{color:e}}},9670:(e,n)=>{var t="discord",a=[],s="f392",c="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z";n.DF={prefix:"fab",iconName:t,icon:[640,512,a,s,c]},n.om=n.DF},2572:(e,n)=>{var t="facebook",a=[62e3],s="f09a",c="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";n.DF={prefix:"fab",iconName:t,icon:[512,512,a,s,c]},n.ne=n.DF},3651:(e,n)=>{var t="steam",a=[],s="f1b6",c="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z";n.DF={prefix:"fab",iconName:t,icon:[496,512,a,s,c]},n.vs=n.DF},3298:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(6123),s=t.n(a),c=t(7313),r=t(6184),o=t(8524),l=t(6417);const i=c.forwardRef(((e,n)=>{let{as:t,bsPrefix:a,variant:c="primary",size:i,active:u=!1,disabled:d=!1,className:m,...f}=e;const h=(0,o.vE)(a,"btn"),[v,{tagName:p}]=(0,r.FT)({tagName:t,disabled:d,...f}),x=p;return(0,l.jsx)(x,{...v,...f,ref:n,disabled:d,className:s()(m,h,u&&"active",c&&"".concat(h,"-").concat(c),i&&"".concat(h,"-").concat(i),f.href&&d&&"disabled")})}));i.displayName="Button";const u=i},1616:(e,n,t)=>{t.d(n,{Z:()=>u,r:()=>l});var a=t(6123),s=t.n(a),c=t(7313),r=t(8524),o=t(6417);function l(e){let{as:n,bsPrefix:t,className:a,...c}=e;t=(0,r.vE)(t,"col");const o=(0,r.pi)(),l=(0,r.zG)(),i=[],u=[];return o.forEach((e=>{const n=c[e];let a,s,r;delete c[e],"object"===typeof n&&null!=n?({span:a,offset:s,order:r}=n):a=n;const o=e!==l?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=s&&u.push("offset".concat(o,"-").concat(s))})),[{...c,className:s()(a,...i,...u)},{as:n,bsPrefix:t,spans:i}]}const i=c.forwardRef(((e,n)=>{const[{className:t,...a},{as:c="div",bsPrefix:r,spans:i}]=l(e);return(0,o.jsx)(c,{...a,ref:n,className:s()(t,!i.length&&r)})}));i.displayName="Col";const u=i},8253:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7313),s=t(6123),c=t.n(s),r=t(8524),o=t(1616);function l(e){let{animation:n,bg:t,bsPrefix:a,size:s,...l}=e;a=(0,r.vE)(a,"placeholder");const[{className:i,...u}]=(0,o.r)(l);return{...u,className:c()(i,n?"".concat(a,"-").concat(n):a,s&&"".concat(a,"-").concat(s),t&&"bg-".concat(t))}}var i=t(3298),u=t(6417);const d=a.forwardRef(((e,n)=>{const t=l(e);return(0,u.jsx)(i.Z,{...t,ref:n,disabled:!0,tabIndex:-1})}));d.displayName="PlaceholderButton";const m=d,f=a.forwardRef(((e,n)=>{let{as:t="span",...a}=e;const s=l(a);return(0,u.jsx)(t,{...s,ref:n})}));f.displayName="Placeholder";const h=Object.assign(f,{Button:m})},3849:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(6123),s=t.n(a),c=t(7313),r=t(8524),o=t(6417);const l=c.forwardRef(((e,n)=>{let{bsPrefix:t,className:a,as:c="div",...l}=e;const i=(0,r.vE)(t,"row"),u=(0,r.pi)(),d=(0,r.zG)(),m="".concat(i,"-cols"),f=[];return u.forEach((e=>{const n=l[e];let t;delete l[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const a=e!==d?"-".concat(e):"";null!=t&&f.push("".concat(m).concat(a,"-").concat(t))})),(0,o.jsx)(c,{ref:n,...l,className:s()(a,i,...f)})}));l.displayName="Row";const i=l},9152:(e,n,t)=>{t.d(n,{Z:()=>a});const a={body:"aboutMeCardBody_body__px0Z-",base:"aboutMeCardBody_base__HWSO5",image:"aboutMeCardBody_image__r0pwR",glimmer:"aboutMeCardBody_glimmer__ztngv",imageColumn:"aboutMeCardBody_imageColumn__Decwz"}},2149:(e,n,t)=>{t.d(n,{Z:()=>a});const a={buttons:"footer_buttons__X-wEA",resume:"footer_resume__j2AKe"}},914:(e,n,t)=>{t.d(n,{Z:()=>a});const a={facebook:"linkButton_facebook__s7j9p",github:"linkButton_github__ltM-y",linkedin:"linkButton_linkedin__MRpaF",steam:"linkButton_steam__qizUa",discord:"linkButton_discord__zToU1"}}}]);