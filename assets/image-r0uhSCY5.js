import{r as e,j as s}from"./jsx-runtime-DexIYAB0.js";import{c as D,a as E,n as P,u as H,B as q,I as A}from"./heading-DVwRxDUd.js";import{u as G}from"./theme-provider-CqGlrrJY.js";import{u as J}from"./useInViewport-BTZhtN2x.js";import{r as K}from"./image-BvwpLhe9.js";function Q(){const[t,a]=e.useState(!1);return e.useEffect(()=>{a(!0)},[]),t}const U="_image_1yz75_3",X="_container_1yz75_83",Y="_elementWrapper_1yz75_97",Z="_placeholder_1yz75_141",$="_element_1yz75_97",O="_button_1yz75_207",l={image:U,container:X,elementWrapper:Y,placeholder:Z,element:$,button:O},re=({className:t,style:a,reveal:o,delay:r=0,raised:I,src:g,srcSet:c,placeholder:_,...u})=>{const[d,R]=e.useState(!1),{theme:i}=G(),m=e.useRef(),f=g||c.split(" ")[0],v=J(m,!W(f)),p=e.useCallback(()=>{R(!0)},[]);return s.jsx("div",{className:D(l.image,t),"data-visible":v||d,"data-reveal":o,"data-raised":I,"data-theme":i,style:E({delay:P(r)},a),ref:m,children:s.jsx(ee,{delay:r,onLoad:p,loaded:d,inViewport:v,reveal:o,src:f,srcSet:c,placeholder:_,...u})})},ee=({onLoad:t,loaded:a,inViewport:o,srcSet:r,placeholder:I,delay:g,src:c,alt:_,play:u=!0,restartOnPause:d,reveal:R,sizes:i,width:m,height:f,noPauseButton:v,cover:p,...V})=>{const h=H(),[F,k]=e.useState(!0),[M,x]=e.useState(!h),[b,N]=e.useState(),[z,B]=e.useState(!1),C=e.useRef(),n=e.useRef(),y=W(c),T=o,L=Q();e.useEffect(()=>{y&&r?(async()=>{const j=await K({srcSet:r,sizes:i});N(j)})():y&&N(c)},[y,i,c,r]),e.useEffect(()=>{if(!n.current||!b)return;const S=()=>{x(!0),n.current.play()},j=()=>{x(!1),n.current.pause()};u||(j(),d&&(n.current.currentTime=0)),!z&&(o?o&&!h&&u&&S():j())},[o,u,h,d,z,b]);const w=S=>{S.preventDefault(),B(!0),n.current.paused?(x(!0),n.current.play()):(x(!1),n.current.pause())};return s.jsxs("div",{className:l.elementWrapper,"data-reveal":R,"data-visible":o||a,style:E({delay:P(g+1e3)}),children:[y&&L&&s.jsxs(e.Fragment,{children:[s.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:l.element,"data-loaded":a,"data-cover":p,autoPlay:!h,onLoadStart:t,src:b,"aria-label":_,ref:n,...V}),!v&&s.jsxs(q,{className:l.button,onClick:w,children:[s.jsx(A,{icon:M?"pause":"play"}),M?"Pause":"Play"]})]}),!y&&s.jsx("img",{className:l.element,"data-loaded":a,"data-cover":p,onLoad:t,decoding:"async",src:T?c:void 0,srcSet:T?r:void 0,width:m,height:f,alt:_,sizes:i,...V}),F&&s.jsx("img",{"aria-hidden":!0,className:l.placeholder,"data-loaded":a,"data-cover":p,style:E({delay:P(g)}),ref:C,src:I,width:m,height:f,onTransitionEnd:()=>k(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function W(t){return typeof t=="string"&&t.includes(".mp4")}export{re as I};
