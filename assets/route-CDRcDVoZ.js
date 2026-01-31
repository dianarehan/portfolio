import{r as n,j as e}from"./jsx-runtime-BfF-YriY.js";import{u as U,g as V,b as I,H as R,a as C,t as T,B as M,T as L}from"./heading-DuWuYy4n.js";import{S as k,F as B}from"./section-DPzZL_YQ.js";import{b as O}from"./meta-ComCwlVX.js";import{D as A,V as N}from"./decoder-text-CBbvVh8v.js";import{u as H}from"./theme-provider-DaSEOLPE.js";import{u as $}from"./useScrollToHash-BNUDogQe.js";import{c as S}from"./config-Cy2OsFE5.js";import{u as W,V as F}from"./video-project-DCbFcunF.js";import{u as X}from"./useInViewport-HnXribzT.js";import{u as J}from"./useWindowSize-CCgmKmhO.js";import{o as Y,W as K,L as Q,f as Z,S as ee,p as ne,U as re,q as te,M as ie,c as oe,a as se,D as ae,A as ce,r as le}from"./three-EuvP5jSu.js";import{t as de}from"./throttle-BgiUmwhn.js";import{u as E}from"./use-spring-DrXv7nrg.js";import{L as D}from"./components-B-8TBCGT.js";import{D as me}from"./divider-CUzrRNR6.js";import{L as G}from"./link-BjE4gVPA.js";import"./index-1wBzyXpw.js";function ue(t,s,y){const g=n.useRef();n.useEffect(()=>{g.current=t}),n.useEffect(()=>{function c(){g.current()}if(s!==null){let r=setInterval(c,s);return()=>clearInterval(r)}},[s,y])}function ge(t){const s=n.useRef();return n.useEffect(()=>{s.current=t},[t]),s.current}const fe="_intro_bj3m1_1",pe="_text_bj3m1_21",ve="_name_bj3m1_75",xe="_title_bj3m1_151",_e="_row_bj3m1_159",he="_word_bj3m1_217",ye="_introTextReveal_bj3m1_1",we="_line_bj3m1_369",ze="_introLine_bj3m1_1",be="_scrollIndicator_bj3m1_467",je="_introScrollIndicator_bj3m1_1",Pe="_mobileScrollIndicator_bj3m1_601",Se="_introMobileScrollIndicator_bj3m1_1",v={intro:fe,text:pe,name:ve,title:xe,row:_e,word:he,introTextReveal:ye,line:we,introLine:ze,scrollIndicator:be,introScrollIndicator:je,mobileScrollIndicator:Pe,introMobileScrollIndicator:Se},Ie=`#define PHONG\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform vec3 specular;\r
uniform float shininess;\r
uniform float opacity;\r
\r
uniform float time;\r
varying vec2 vUv;\r
varying vec3 newPosition;\r
varying float noise;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <alphahash_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_phong_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\r
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\r
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\r
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r
  vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <alphahash_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
	// accumulation\r
	#include <lights_phong_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	#include <aomap_fragment>\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <opaque_fragment>\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\r
}\r
`,Re=`#define PHONG\r
\r
//\r
// GLSL textureless classic 3D noise "cnoise",\r
// with an RSL-style periodic variant "pnoise".\r
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r
// Version: 2011-10-11\r
//\r
// Many thanks to Ian McEwan of Ashima Arts for the\r
// ideas for permutation and gradient selection.\r
//\r
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r
// Distributed under the MIT license. See LICENSE file.\r
// https://github.com/ashima/webgl-noise\r
//\r
vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+1.0)*x);\r
}\r
\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}\r
\r
// Classic Perlin noise\r
float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); // Integer part for indexing\r
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
// Classic Perlin noise, periodic variant\r
float pnoise(vec3 P, vec3 rep)\r
{\r
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
float turbulence(vec3 p) {\r
  float w = 100.0;\r
  float t = -.5;\r
  for (float f = 1.0 ; f <= 10.0 ; f++) {\r
    float power = pow(2.0, f);\r
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\r
  }\r
  return t;\r
}\r
\r
// START\r
uniform float time;\r
varying vec2 vUv;\r
varying float noise;\r
\r
varying vec3 vViewPosition;\r
\r
#include <common>\r
#include <batching_pars_vertex>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
	#include <batching_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
  vUv = uv;\r
\r
  noise = turbulence(0.01 * position + normal + time * 0.8);\r
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\r
}\r
`,Ne="_canvas_1553f_1",Le={canvas:Ne},q={stiffness:30,damping:20,mass:2},De=t=>{const{theme:s}=H(),y=n.useRef(Date.now()),g=n.useRef(),c=n.useRef(),r=n.useRef(),i=n.useRef(),l=n.useRef(),w=n.useRef(),z=n.useRef(),b=n.useRef(),x=n.useRef(),a=n.useRef(),f=U(),d=X(g),_=J(),j=E(0,q),P=E(0,q);return n.useEffect(()=>{const{innerWidth:o,innerHeight:m}=window;return c.current=new Y(.8,.5),r.current=new K({canvas:g.current,antialias:!1,alpha:!0,powerPreference:"high-performance"}),r.current.setSize(o,m),r.current.setPixelRatio(1),r.current.outputColorSpace=Q,i.current=new Z(54,o/m,.1,100),i.current.position.z=52,l.current=new ee,b.current=new ne,b.current.onBeforeCompile=p=>{z.current=re.merge([p.uniforms,{time:{type:"f",value:0}}]),p.uniforms=z.current,p.vertexShader=Re,p.fragmentShader=Ie},n.startTransition(()=>{x.current=new te(32,128,128),a.current=new ie(x.current,b.current),a.current.position.z=0,a.current.modifier=Math.random(),l.current.add(a.current)}),()=>{oe(l.current),se(r.current)}},[]),n.useEffect(()=>{const o=new ae(16777215,s==="light"?1.8:2),m=new ce(16777215,s==="light"?2.7:.4);return o.position.z=200,o.position.x=100,o.position.y=100,w.current=[o,m],w.current.forEach(p=>l.current.add(p)),()=>{le(w.current)}},[s]),n.useEffect(()=>{const{width:o,height:m}=_,p=m+m*.3;r.current.setSize(o,p),i.current.aspect=o/p,i.current.updateProjectionMatrix(),f&&r.current.render(l.current,i.current),o<=V.mobile?(a.current.position.x=14,a.current.position.y=10):o<=V.tablet?(a.current.position.x=18,a.current.position.y=14):(a.current.position.x=22,a.current.position.y=16)},[f,_]),n.useEffect(()=>{const o=de(m=>{const p={x:m.clientX/window.innerWidth,y:m.clientY/window.innerHeight};j.set(p.y/2),P.set(p.x/2)},100);return!f&&d&&window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[d,f,j,P]),n.useEffect(()=>{let o;const m=()=>{o=requestAnimationFrame(m),z.current!==void 0&&(z.current.time.value=5e-5*(Date.now()-y.current)),a.current.rotation.z+=.001,a.current.rotation.x=j.get(),a.current.rotation.y=P.get(),r.current.render(l.current,i.current)};return!f&&d?m():r.current.render(l.current,i.current),()=>{cancelAnimationFrame(o)}},[d,f,j,P]),e.jsx(I,{in:!0,timeout:3e3,nodeRef:g,children:({visible:o,nodeRef:m})=>e.jsx("canvas",{"aria-hidden":!0,className:Le.canvas,"data-visible":o,ref:m,...t})})};function ke({id:t,sectionRef:s,scrollIndicatorHidden:y,...g}){const{theme:c}=H(),{disciplines:r}=S,[i,l]=n.useState(0),w=ge(c),z=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),b=r.find((d,_)=>_===i),x=`${t}-title`,a=$();W(),ue(()=>{const d=(i+1)%r.length;l(d)},5e3,c),n.useEffect(()=>{w&&w!==c&&l(0)},[c,w]);const f=d=>{d.preventDefault(),a(d.currentTarget.href)};return e.jsx(k,{className:v.intro,as:"section",ref:s,id:t,"aria-labelledby":x,tabIndex:-1,...g,children:e.jsx(I,{in:!0,timeout:3e3,children:({visible:d,status:_})=>e.jsxs(e.Fragment,{children:[e.jsx(n.Suspense,{children:e.jsx(De,{})}),e.jsxs("header",{className:v.text,children:[e.jsx("h1",{className:v.name,"data-visible":d,id:x,children:e.jsx(A,{text:S.name,delay:500})}),e.jsxs(R,{level:0,as:"h2",className:v.title,children:[e.jsx(N,{className:v.label,children:`${S.role} + ${z}`}),e.jsxs("span",{"aria-hidden":!0,className:v.row,children:[e.jsx("span",{className:v.word,"data-status":_,style:C({delay:T.base.durationXS}),children:S.role}),e.jsx("span",{className:v.line,"data-status":_})]}),e.jsx("div",{className:v.row,children:r.map(j=>e.jsx(I,{unmount:!0,in:j===b,timeout:{enter:3e3,exit:2e3},children:({status:P,nodeRef:o})=>e.jsx("span",{"aria-hidden":!0,ref:o,className:v.word,"data-plus":!0,"data-status":P,style:C({delay:T.base.durationL}),children:j})},j))})]})]}),e.jsx(D,{to:"/#personal-projects",className:v.scrollIndicator,"data-status":_,"data-hidden":y,onClick:f,children:e.jsx(N,{children:"Scroll to projects"})}),e.jsxs(D,{to:"/#personal-projects",className:v.mobileScrollIndicator,"data-status":_,"data-hidden":y,onClick:f,children:[e.jsx(N,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},c)})}const Ve="_profile_l7obs_1",Ce="_content_l7obs_75",Te="_column_l7obs_101",Me="_title_l7obs_119",Fe="_description_l7obs_141",Ee="_tag_l7obs_161",Ge="_tagText_l7obs_187",qe="_image_l7obs_231",Ae="_svg_l7obs_241",He="_button_l7obs_273",Ue="_buttonGroup_l7obs_293",Be="_pdfViewer_l7obs_325",Oe="_pdfFrame_l7obs_345",u={profile:Ve,content:Ce,column:Te,title:Me,description:Fe,tag:Ee,tagText:Ge,image:qe,svg:Ae,button:He,buttonGroup:Ue,pdfViewer:Be,pdfFrame:Oe},$e=({visible:t,titleId:s})=>e.jsxs(n.Fragment,{children:[e.jsx(R,{className:u.title,"data-visible":t,level:3,id:s,children:e.jsx(A,{text:"Hi there",start:t,delay:500})}),e.jsxs(L,{className:u.description,"data-visible":t,size:"l",as:"p",children:["I’m Diana, a Game & VR Developer and a senior computer engineer student at the ",e.jsx("strong",{children:"German University in Cairo (GUC)"}),".",e.jsx("br",{}),e.jsx("br",{}),"My work focuses on:",e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"20px",listStyle:"disc"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"VR Projects"}),": Educational Multiplayer Simulations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplayer Games"}),": Using ",e.jsx("strong",{children:"Netcode for GameObjects (NGO)"})," and ",e.jsx("strong",{children:"Photon (PUN)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unity 2D and 3D Games"}),": Participating in game jams on itch.io."]})]}),"I also have experience with web development and machine learning. If you’re interested in the tools and software I use check out my ",e.jsx(G,{href:"/uses",children:"uses page"}),". Feel free to check my CV."]}),e.jsxs(L,{className:u.description,"data-visible":t,size:"l",as:"p",children:["I am always open to discussing new projects or creative ideas. For inquiries or collaborations, please reach out via email at ",e.jsx(G,{href:"mailto:daiana.rehan.dr@gmail.com",children:"daiana.rehan.dr@gmail.com"}),"."]})]}),We=({id:t,visible:s,sectionRef:y})=>{const[g,c]=n.useState(!1),r=`${t}-title`;return e.jsx(k,{className:u.profile,onFocus:()=>c(!0),onBlur:()=>c(!1),as:"section",id:t,ref:y,"aria-labelledby":r,tabIndex:-1,children:e.jsx(I,{in:s||g,timeout:0,children:({visible:i,nodeRef:l})=>e.jsxs("div",{className:u.content,ref:l,children:[e.jsxs("div",{className:u.column,children:[e.jsxs("div",{className:u.tag,"aria-hidden":!0,children:[e.jsx(me,{notchWidth:"64px",notchHeight:"8px",collapsed:!i,collapseDelay:1e3}),e.jsx("br",{}),e.jsx("div",{className:u.tagText,"data-visible":i,children:"About me"})]}),e.jsx("div",{className:u.pdfViewer,"data-visible":i,children:e.jsx("iframe",{src:"/portfolio/Diana-Rehan-CV.pdf",title:"Diana Rehan CV",className:u.pdfFrame})})]}),e.jsxs("div",{className:u.column,children:[e.jsx($e,{visible:i,titleId:r}),e.jsxs("div",{className:u.buttonGroup,"data-visible":i,children:[e.jsx(M,{secondary:!0,className:u.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",icon:"download",download:"Diana-Rehan-CV.pdf",children:"Download CV"}),e.jsx(M,{secondary:!0,className:u.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",target:"_blank",icon:"link",children:"View CV"})]})]})]})})})},Xe="_home_1nqlm_1",Je="_sectionHeader_1nqlm_9",Ye="_newsSection_1nqlm_21",Ke="_newsBanner_1nqlm_33",Qe="_newsIcon_1nqlm_75",Ze="_newsContent_1nqlm_87",en="_newsTitle_1nqlm_99",nn="_newsText_1nqlm_109",rn="_newsLink_1nqlm_119",tn="_newsLinks_1nqlm_143",h={home:Xe,sectionHeader:Je,newsSection:Ye,newsBanner:Ke,newsIcon:Qe,newsContent:Ze,newsTitle:en,newsText:nn,newsLink:rn,newsLinks:tn},bn=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],jn=()=>O({title:"XR & Game Developer",description:`Portfolio of ${S.name} — a VR/XR developer and game developer working on immersive experiences.`}),Pn=()=>{const[t,s]=n.useState([]),[y,g]=n.useState(!1),c=n.useRef(),r=n.useRef(),i=n.useRef(),l=n.useRef();return n.useEffect(()=>{const w=[c,r,i,l],z=new IntersectionObserver((x,a)=>{x.forEach(f=>{if(f.isIntersecting){const d=f.target;if(a.unobserve(d),t.includes(d))return;s(_=>[..._,d])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),b=new IntersectionObserver(([x])=>{g(!x.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return w.forEach(x=>{z.observe(x.current)}),b.observe(c.current),()=>{z.disconnect(),b.disconnect()}},[t]),e.jsxs("div",{className:h.home,children:[e.jsx(ke,{id:"intro",sectionRef:c,scrollIndicatorHidden:y}),e.jsx(k,{className:h.newsSection,children:e.jsxs("div",{className:h.newsBanner,children:[e.jsx("span",{className:h.newsIcon,children:"🏆"}),e.jsxs("div",{className:h.newsContent,children:[e.jsx(R,{level:4,as:"h3",className:h.newsTitle,children:"2nd Place at Global Game Jam 2026!"}),e.jsxs(L,{size:"s",className:h.newsText,children:["Our game ",e.jsx(D,{to:"/projects/unmasked",className:h.newsLink,children:e.jsx("strong",{children:"UNMASKED"})})," won 2nd place. Built in 48 hours with an amazing team."]}),e.jsx("div",{className:h.newsLinks,children:e.jsx("a",{href:"https://www.linkedin.com/posts/diana-rehan_%F0%9D%90%94%F0%9D%90%A7%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%9E%F0%9D%90%9D-2nd-place-at-global-game-activity-7423042343982854144-E7aJ",target:"_blank",rel:"noopener noreferrer",className:h.newsLink,children:"Read more on LinkedIn →"})})]})]})}),e.jsx("div",{className:h.sectionHeader,children:e.jsx(R,{level:2,as:"h2",align:"center",children:"Professional Work"})}),e.jsx(F,{id:"work-projects",sectionRef:r,visible:t.includes(r.current),index:1,title:"Dental VR Simulator Prototype",description:"A VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment.",videoId:"rVsoI9lu_0M",buttonText:"View Details",buttonLink:"/projects/dental-vr"}),e.jsx(F,{id:"vr-project-2",alternate:!0,sectionRef:i,visible:t.includes(i.current),index:2,title:"Pilot Training VR Simulator",description:"A Multiplayer VR flight training system designed for pilots using Netcode for GameObjects (NGO).",videoId:"zRXndIMaAxU",buttonText:"View Details",buttonLink:"/projects/pilot-vr"}),e.jsx(We,{sectionRef:l,visible:t.includes(l.current),id:"details"}),e.jsx(B,{})]})};export{Pn as default,bn as links,jn as meta};
