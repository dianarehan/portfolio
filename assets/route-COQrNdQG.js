import{r as n,j as e}from"./jsx-runtime-BfF-YriY.js";import{u as A,g as L,b as S,H as R,a as V,t as N,B as C,T as q}from"./heading-DuWuYy4n.js";import{S as H,F as U}from"./section-jZwhkyrl.js";import{b as $}from"./meta-ComCwlVX.js";import{D as F,V as I}from"./decoder-text-CBbvVh8v.js";import{u as G}from"./theme-provider-DaSEOLPE.js";import{u as W}from"./useScrollToHash-BNUDogQe.js";import{c as j}from"./config-Cy2OsFE5.js";import{u as B,V as D}from"./video-project-_Whvum72.js";import{u as O}from"./useInViewport-HnXribzT.js";import{u as X}from"./useWindowSize-CCgmKmhO.js";import{o as Y,W as J,L as K,f as Q,S as Z,p as ee,U as ne,q as re,M as te,c as ie,a as oe,D as ce,A as se,r as ae}from"./three-EuvP5jSu.js";import{t as le}from"./throttle-BgiUmwhn.js";import{u as k}from"./use-spring-DrXv7nrg.js";import{L as M}from"./components-B-8TBCGT.js";import{D as de}from"./divider-CUzrRNR6.js";import{L as ue}from"./link-BjE4gVPA.js";import"./index-1wBzyXpw.js";function ge(t,c,h){const f=n.useRef();n.useEffect(()=>{f.current=t}),n.useEffect(()=>{function a(){f.current()}if(c!==null){let r=setInterval(a,c);return()=>clearInterval(r)}},[c,h])}function fe(t){const c=n.useRef();return n.useEffect(()=>{c.current=t},[t]),c.current}const me="_intro_vzhcp_1",pe="_text_vzhcp_17",ve="_name_vzhcp_71",xe="_title_vzhcp_147",_e="_row_vzhcp_155",he="_word_vzhcp_213",ye="_introTextReveal_vzhcp_1",ze="_line_vzhcp_365",be="_introLine_vzhcp_1",Pe="_scrollIndicator_vzhcp_463",we="_introScrollIndicator_vzhcp_1",je="_mobileScrollIndicator_vzhcp_597",Se="_introMobileScrollIndicator_vzhcp_1",v={intro:me,text:pe,name:ve,title:xe,row:_e,word:he,introTextReveal:ye,line:ze,introLine:be,scrollIndicator:Pe,introScrollIndicator:we,mobileScrollIndicator:je,introMobileScrollIndicator:Se},Ie=`#define PHONG\r
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
`,Le="_canvas_1pqfq_1",Ve={canvas:Le},T={stiffness:30,damping:20,mass:2},Ne=t=>{const{theme:c}=G(),h=n.useRef(Date.now()),f=n.useRef(),a=n.useRef(),r=n.useRef(),i=n.useRef(),l=n.useRef(),y=n.useRef(),z=n.useRef(),b=n.useRef(),x=n.useRef(),s=n.useRef(),m=A(),d=O(f),_=X(),P=k(0,T),w=k(0,T);return n.useEffect(()=>{const{innerWidth:o,innerHeight:u}=window;return a.current=new Y(.8,.5),r.current=new J({canvas:f.current,antialias:!1,alpha:!0,powerPreference:"high-performance"}),r.current.setSize(o,u),r.current.setPixelRatio(1),r.current.outputColorSpace=K,i.current=new Q(54,o/u,.1,100),i.current.position.z=52,l.current=new Z,b.current=new ee,b.current.onBeforeCompile=p=>{z.current=ne.merge([p.uniforms,{time:{type:"f",value:0}}]),p.uniforms=z.current,p.vertexShader=Re,p.fragmentShader=Ie},n.startTransition(()=>{x.current=new re(32,128,128),s.current=new te(x.current,b.current),s.current.position.z=0,s.current.modifier=Math.random(),l.current.add(s.current)}),()=>{ie(l.current),oe(r.current)}},[]),n.useEffect(()=>{const o=new ce(16777215,c==="light"?1.8:2),u=new se(16777215,c==="light"?2.7:.4);return o.position.z=200,o.position.x=100,o.position.y=100,y.current=[o,u],y.current.forEach(p=>l.current.add(p)),()=>{ae(y.current)}},[c]),n.useEffect(()=>{const{width:o,height:u}=_,p=u+u*.3;r.current.setSize(o,p),i.current.aspect=o/p,i.current.updateProjectionMatrix(),m&&r.current.render(l.current,i.current),o<=L.mobile?(s.current.position.x=14,s.current.position.y=10):o<=L.tablet?(s.current.position.x=18,s.current.position.y=14):(s.current.position.x=22,s.current.position.y=16)},[m,_]),n.useEffect(()=>{const o=le(u=>{const p={x:u.clientX/window.innerWidth,y:u.clientY/window.innerHeight};P.set(p.y/2),w.set(p.x/2)},100);return!m&&d&&window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[d,m,P,w]),n.useEffect(()=>{let o;const u=()=>{o=requestAnimationFrame(u),z.current!==void 0&&(z.current.time.value=5e-5*(Date.now()-h.current)),s.current.rotation.z+=.001,s.current.rotation.x=P.get(),s.current.rotation.y=w.get(),r.current.render(l.current,i.current)};return!m&&d?u():r.current.render(l.current,i.current),()=>{cancelAnimationFrame(o)}},[d,m,P,w]),e.jsx(S,{in:!0,timeout:3e3,nodeRef:f,children:({visible:o,nodeRef:u})=>e.jsx("canvas",{"aria-hidden":!0,className:Ve.canvas,"data-visible":o,ref:u,...t})})};function Ce({id:t,sectionRef:c,scrollIndicatorHidden:h,...f}){const{theme:a}=G(),{disciplines:r}=j,[i,l]=n.useState(0),y=fe(a),z=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),b=r.find((d,_)=>_===i),x=`${t}-title`,s=W();B(),ge(()=>{const d=(i+1)%r.length;l(d)},5e3,a),n.useEffect(()=>{y&&y!==a&&l(0)},[a,y]);const m=d=>{d.preventDefault(),s(d.currentTarget.href)};return e.jsx(H,{className:v.intro,as:"section",ref:c,id:t,"aria-labelledby":x,tabIndex:-1,...f,children:e.jsx(S,{in:!0,timeout:3e3,children:({visible:d,status:_})=>e.jsxs(e.Fragment,{children:[e.jsx(n.Suspense,{children:e.jsx(Ne,{})}),e.jsxs("header",{className:v.text,children:[e.jsx("h1",{className:v.name,"data-visible":d,id:x,children:e.jsx(F,{text:j.name,delay:500})}),e.jsxs(R,{level:0,as:"h2",className:v.title,children:[e.jsx(I,{className:v.label,children:`${j.role} + ${z}`}),e.jsxs("span",{"aria-hidden":!0,className:v.row,children:[e.jsx("span",{className:v.word,"data-status":_,style:V({delay:N.base.durationXS}),children:j.role}),e.jsx("span",{className:v.line,"data-status":_})]}),e.jsx("div",{className:v.row,children:r.map(P=>e.jsx(S,{unmount:!0,in:P===b,timeout:{enter:3e3,exit:2e3},children:({status:w,nodeRef:o})=>e.jsx("span",{"aria-hidden":!0,ref:o,className:v.word,"data-plus":!0,"data-status":w,style:V({delay:N.base.durationL}),children:P})},P))})]})]}),e.jsx(M,{to:"/#personal-projects",className:v.scrollIndicator,"data-status":_,"data-hidden":h,onClick:m,children:e.jsx(I,{children:"Scroll to projects"})}),e.jsxs(M,{to:"/#personal-projects",className:v.mobileScrollIndicator,"data-status":_,"data-hidden":h,onClick:m,children:[e.jsx(I,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},a)})}const De="_profile_l7obs_1",ke="_content_l7obs_75",Me="_column_l7obs_101",Te="_title_l7obs_119",Ee="_description_l7obs_141",He="_tag_l7obs_161",Fe="_tagText_l7obs_187",Ge="_image_l7obs_231",Ae="_svg_l7obs_241",qe="_button_l7obs_273",Ue="_buttonGroup_l7obs_293",$e="_pdfViewer_l7obs_325",We="_pdfFrame_l7obs_345",g={profile:De,content:ke,column:Me,title:Te,description:Ee,tag:He,tagText:Fe,image:Ge,svg:Ae,button:qe,buttonGroup:Ue,pdfViewer:$e,pdfFrame:We},Be=({visible:t,titleId:c})=>e.jsxs(n.Fragment,{children:[e.jsx(R,{className:g.title,"data-visible":t,level:3,id:c,children:e.jsx(F,{text:"Hi there",start:t,delay:500})}),e.jsxs(q,{className:g.description,"data-visible":t,size:"l",as:"p",children:["I’m Diana, a Game & VR Developer and a senior computer engineer student at the ",e.jsx("strong",{children:"German University in Cairo (GUC)"}),". My portfolio includes some of the ",e.jsx("strong",{children:"professional projects"})," I have worked on, as well as ",e.jsx("strong",{children:"games"})," I have developed during ",e.jsx("strong",{children:"game jams"})," in my free time. I have also some experience with web development and machine learning. If you’re interested in the tools and software I use check out my ",e.jsx(ue,{href:"/uses",children:"uses page"}),". Feel free to check my CV below."]})]}),Oe=({id:t,visible:c,sectionRef:h})=>{const[f,a]=n.useState(!1),r=`${t}-title`;return e.jsx(H,{className:g.profile,onFocus:()=>a(!0),onBlur:()=>a(!1),as:"section",id:t,ref:h,"aria-labelledby":r,tabIndex:-1,children:e.jsx(S,{in:c||f,timeout:0,children:({visible:i,nodeRef:l})=>e.jsxs("div",{className:g.content,ref:l,children:[e.jsx("div",{className:g.column,children:e.jsxs("div",{className:g.tag,"aria-hidden":!0,children:[e.jsx(de,{notchWidth:"64px",notchHeight:"8px",collapsed:!i,collapseDelay:1e3}),e.jsx("br",{}),e.jsx("div",{className:g.tagText,"data-visible":i,children:"About me"})]})}),e.jsxs("div",{className:g.column,children:[e.jsx(Be,{visible:i,titleId:r}),e.jsxs("div",{className:g.buttonGroup,"data-visible":i,children:[e.jsx(C,{secondary:!0,className:g.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",icon:"download",download:"Diana-Rehan-CV.pdf",children:"Download CV"}),e.jsx(C,{secondary:!0,className:g.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",target:"_blank",icon:"link",children:"View CV"})]}),e.jsx("div",{className:g.pdfViewer,"data-visible":i,children:e.jsx("iframe",{src:"/portfolio/Diana-Rehan-CV.pdf",title:"Diana Rehan CV",className:g.pdfFrame})})]})]})})})},Xe="_home_16hv7_1",Ye="_sectionHeader_16hv7_9",E={home:Xe,sectionHeader:Ye},pn=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],vn=()=>$({title:"XR & Game Developer",description:`Portfolio of ${j.name} — a VR/XR developer and game developer working on immersive experiences.`}),xn=()=>{const[t,c]=n.useState([]),[h,f]=n.useState(!1),a=n.useRef(),r=n.useRef(),i=n.useRef(),l=n.useRef();return n.useEffect(()=>{const y=[a,r,i,l],z=new IntersectionObserver((x,s)=>{x.forEach(m=>{if(m.isIntersecting){const d=m.target;if(s.unobserve(d),t.includes(d))return;c(_=>[..._,d])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),b=new IntersectionObserver(([x])=>{f(!x.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return y.forEach(x=>{z.observe(x.current)}),b.observe(a.current),()=>{z.disconnect(),b.disconnect()}},[t]),e.jsxs("div",{className:E.home,children:[e.jsx(Ce,{id:"intro",sectionRef:a,scrollIndicatorHidden:h}),e.jsx("div",{className:E.sectionHeader,children:e.jsx(R,{level:2,as:"h2",align:"center",children:"Professional Work"})}),e.jsx(D,{id:"work-projects",sectionRef:r,visible:t.includes(r.current),index:1,title:"Dental VR Simulator Prototype",description:"An immersive VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment.",videoId:"rVsoI9lu_0M",buttonText:"View Details",buttonLink:"/projects/dental-vr"}),e.jsx(D,{id:"vr-project-2",alternate:!0,sectionRef:i,visible:t.includes(i.current),index:2,title:"Pilot Training VR Simulator",description:"A comprehensive VR flight training system designed to prepare pilots to master jet engine mechanics and aircraft systems.",videoId:"zRXndIMaAxU",buttonText:"View Details",buttonLink:"/projects/pilot-vr"}),e.jsx(Oe,{sectionRef:l,visible:t.includes(l.current),id:"details"}),e.jsx(U,{})]})};export{xn as default,pn as links,vn as meta};
