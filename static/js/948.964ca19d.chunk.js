"use strict";(self.webpackChunksverg84_github_io=self.webpackChunksverg84_github_io||[]).push([[948],{7066:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7313),l=n(3888),r=n(711),s=n(6830),i=n(6613),a=n(6123),c=n.n(a);const d={tooltip:"tooltip_tooltip__XFcmm",arrow:"tooltip_arrow__egyAh"};var p=n(6417);const h=o.createContext(null),u=()=>{const e=o.useContext(h);if(null==e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function f(e){let{children:t,...n}=e;const a=function(){let{initialOpen:e=!1,placement:t="top",open:n,onOpenChange:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[c,d]=o.useState(e),p=o.useRef(null),h=null!==n&&void 0!==n?n:c,u=null!==a&&void 0!==a?a:d,f=(0,l.YF)({placement:t,open:h,onOpenChange:u,strategy:"fixed",whileElementsMounted:r.Me,middleware:[(0,s.cv)(5),(0,r.RR)({crossAxis:t.includes("-"),fallbackAxisSideDirection:"start",padding:5}),(0,r.uY)({padding:5}),(0,i.x7)({element:p})]}),g=f.context,m=(0,l.XI)(g,{move:!1,enabled:null==n}),_=(0,l.KK)(g,{enabled:null==n}),w=(0,l.bQ)(g),x=(0,l.qs)(g,{role:"tooltip"}),v=(0,l.NI)([m,_,w,x]);return o.useMemo((()=>({arrowRef:p,open:h,setOpen:u,...v,...f})),[p,h,u,v,f])}(n);return(0,p.jsx)(h.Provider,{value:a,children:t})}const g=o.forwardRef((function(e,t){let{children:n,asChild:r=!1,...s}=e;const i=u(),a=n.ref,c=(0,l.qq)([i.refs.setReference,t,a]);return r&&o.isValidElement(n)?o.cloneElement(n,i.getReferenceProps({ref:c,...s,...n.props,"data-state":i.open?"open":"closed"})):(0,p.jsx)("button",{ref:c,"data-state":i.open?"open":"closed",...i.getReferenceProps(s),children:n})})),m=o.forwardRef((function(e,t){let{style:n,...o}=e;const r=u(),s=(0,l.qq)([r.refs.setFloating,t]),{isMounted:i,styles:a}=(0,l.Y_)(r.context);if(!i)return null;const{className:h,children:f,...g}=o;return(0,p.jsx)(l.ll,{children:(0,p.jsxs)("div",{className:c()(d.tooltip,d.show),ref:s,style:{...r.floatingStyles,...n,...a},...r.getFloatingProps(g),children:[(0,p.jsx)(l.Y$,{className:d.arrow,context:r.context,ref:r.arrowRef}),f]})})})),_={tooltip:"tooltip_tooltip__5pJPW"};function w(e){let{placement:t="top",trigger:n,content:o}=e;return(0,p.jsxs)(f,{placement:t,children:[(0,p.jsx)(g,{asChild:!0,children:(0,p.jsx)("span",{className:_.tooltip,children:n})}),(0,p.jsx)(m,{children:o})]})}},5948:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(6123),l=n.n(o);n(7313);const r={weather:"weather_weather__sTgh9",fadeInRight:"weather_fadeInRight__BTkxE",content:"weather_content__cg7XA",img:"weather_img__IL4NU"};var s=n(7066),i=n(8467),a=n(6417);function c(){const{weather:{className:e,...t}}=(0,i.f_)();return(0,a.jsx)("article",{className:l()(r.weather,e),children:(0,a.jsxs)("article",{className:r.content,children:[t.city,(0,a.jsx)(s.Z,{placement:"left",trigger:(0,a.jsx)("img",{alt:t.description,className:r.img,src:t.icon,width:64,height:64}),content:t.description}),t.fahrenheit,"\xb0F / ",t.celsius,"\xb0C"]})})}}}]);