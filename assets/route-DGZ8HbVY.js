import{r as n,j as e}from"./jsx-runtime-BfF-YriY.js";import{u as B,g as C,b as R,H as I,a as T,t as V,B as M,T as N}from"./heading-DuWuYy4n.js";import{S as k,F as U}from"./section-DPzZL_YQ.js";import{b as O}from"./meta-ComCwlVX.js";import{D as H,V as L}from"./decoder-text-CBbvVh8v.js";import{u as q}from"./theme-provider-DaSEOLPE.js";import{u as $}from"./useScrollToHash-BNUDogQe.js";import{c as S}from"./config-Cy2OsFE5.js";import{u as W,V as E}from"./video-project-DCbFcunF.js";import{u as X}from"./useInViewport-HnXribzT.js";import{u as J}from"./useWindowSize-CCgmKmhO.js";import{o as Y,W as K,L as Q,f as Z,S as ee,p as ne,U as re,q as te,M as ie,c as se,a as oe,D as ae,A as ce,r as le}from"./three-EuvP5jSu.js";import{t as de}from"./throttle-BgiUmwhn.js";import{u as F}from"./use-spring-DrXv7nrg.js";import{L as D}from"./components-B-8TBCGT.js";import{D as me}from"./divider-CUzrRNR6.js";import{L as G}from"./link-BjE4gVPA.js";import"./index-1wBzyXpw.js";function ge(t,a,y){const f=n.useRef();n.useEffect(()=>{f.current=t}),n.useEffect(()=>{function l(){f.current()}if(a!==null){let r=setInterval(l,a);return()=>clearInterval(r)}},[a,y])}function ue(t){const a=n.useRef();return n.useEffect(()=>{a.current=t},[t]),a.current}const fe="_intro_bj3m1_1",pe="_text_bj3m1_21",ve="_name_bj3m1_75",xe="_title_bj3m1_151",_e="_row_bj3m1_159",he="_word_bj3m1_217",ye="_introTextReveal_bj3m1_1",we="_line_bj3m1_369",ze="_introLine_bj3m1_1",je="_scrollIndicator_bj3m1_467",be="_introScrollIndicator_bj3m1_1",Pe="_mobileScrollIndicator_bj3m1_601",Se="_introMobileScrollIndicator_bj3m1_1",x={intro:fe,text:pe,name:ve,title:xe,row:_e,word:he,introTextReveal:ye,line:we,introLine:ze,scrollIndicator:je,introScrollIndicator:be,mobileScrollIndicator:Pe,introMobileScrollIndicator:Se},Ie=`#define PHONG\r
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
`,Ne="_canvas_1553f_1",ke={canvas:Ne},A={stiffness:30,damping:20,mass:2},Le=t=>{const{theme:a}=q(),y=n.useRef(Date.now()),f=n.useRef(),l=n.useRef(),r=n.useRef(),i=n.useRef(),d=n.useRef(),w=n.useRef(),z=n.useRef(),j=n.useRef(),_=n.useRef(),c=n.useRef(),p=B(),m=X(f),h=J(),b=F(0,A),P=F(0,A);return n.useEffect(()=>{const{innerWidth:s,innerHeight:g}=window;return l.current=new Y(.8,.5),r.current=new K({canvas:f.current,antialias:!1,alpha:!0,powerPreference:"high-performance"}),r.current.setSize(s,g),r.current.setPixelRatio(1),r.current.outputColorSpace=Q,i.current=new Z(54,s/g,.1,100),i.current.position.z=52,d.current=new ee,j.current=new ne,j.current.onBeforeCompile=v=>{z.current=re.merge([v.uniforms,{time:{type:"f",value:0}}]),v.uniforms=z.current,v.vertexShader=Re,v.fragmentShader=Ie},n.startTransition(()=>{_.current=new te(32,128,128),c.current=new ie(_.current,j.current),c.current.position.z=0,c.current.modifier=Math.random(),d.current.add(c.current)}),()=>{se(d.current),oe(r.current)}},[]),n.useEffect(()=>{const s=new ae(16777215,a==="light"?1.8:2),g=new ce(16777215,a==="light"?2.7:.4);return s.position.z=200,s.position.x=100,s.position.y=100,w.current=[s,g],w.current.forEach(v=>d.current.add(v)),()=>{le(w.current)}},[a]),n.useEffect(()=>{const{width:s,height:g}=h,v=g+g*.3;r.current.setSize(s,v),i.current.aspect=s/v,i.current.updateProjectionMatrix(),p&&r.current.render(d.current,i.current),s<=C.mobile?(c.current.position.x=14,c.current.position.y=10):s<=C.tablet?(c.current.position.x=18,c.current.position.y=14):(c.current.position.x=22,c.current.position.y=16)},[p,h]),n.useEffect(()=>{const s=de(g=>{const v={x:g.clientX/window.innerWidth,y:g.clientY/window.innerHeight};b.set(v.y/2),P.set(v.x/2)},100);return!p&&m&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[m,p,b,P]),n.useEffect(()=>{let s;const g=()=>{s=requestAnimationFrame(g),z.current!==void 0&&(z.current.time.value=5e-5*(Date.now()-y.current)),c.current.rotation.z+=.001,c.current.rotation.x=b.get(),c.current.rotation.y=P.get(),r.current.render(d.current,i.current)};return!p&&m?g():r.current.render(d.current,i.current),()=>{cancelAnimationFrame(s)}},[m,p,b,P]),e.jsx(R,{in:!0,timeout:3e3,nodeRef:f,children:({visible:s,nodeRef:g})=>e.jsx("canvas",{"aria-hidden":!0,className:ke.canvas,"data-visible":s,ref:g,...t})})};function De({id:t,sectionRef:a,scrollIndicatorHidden:y,...f}){const{theme:l}=q(),{disciplines:r}=S,[i,d]=n.useState(0),w=ue(l),z=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),j=r.find((m,h)=>h===i),_=`${t}-title`,c=$();W(),ge(()=>{const m=(i+1)%r.length;d(m)},5e3,l),n.useEffect(()=>{w&&w!==l&&d(0)},[l,w]);const p=m=>{m.preventDefault(),c(m.currentTarget.href)};return e.jsx(k,{className:x.intro,as:"section",ref:a,id:t,"aria-labelledby":_,tabIndex:-1,...f,children:e.jsx(R,{in:!0,timeout:3e3,children:({visible:m,status:h})=>e.jsxs(e.Fragment,{children:[e.jsx(n.Suspense,{children:e.jsx(Le,{})}),e.jsxs("header",{className:x.text,children:[e.jsx("h1",{className:x.name,"data-visible":m,id:_,children:e.jsx(H,{text:S.name,delay:500})}),e.jsxs(I,{level:0,as:"h2",className:x.title,children:[e.jsx(L,{className:x.label,children:`${S.role} + ${z}`}),e.jsxs("span",{"aria-hidden":!0,className:x.row,children:[e.jsx("span",{className:x.word,"data-status":h,style:T({delay:V.base.durationXS}),children:S.role}),e.jsx("span",{className:x.line,"data-status":h})]}),e.jsx("div",{className:x.row,children:r.map(b=>e.jsx(R,{unmount:!0,in:b===j,timeout:{enter:3e3,exit:2e3},children:({status:P,nodeRef:s})=>e.jsx("span",{"aria-hidden":!0,ref:s,className:x.word,"data-plus":!0,"data-status":P,style:T({delay:V.base.durationL}),children:b})},b))})]})]}),e.jsx(D,{to:"/#personal-projects",className:x.scrollIndicator,"data-status":h,"data-hidden":y,onClick:p,children:e.jsx(L,{children:"Scroll to projects"})}),e.jsxs(D,{to:"/#personal-projects",className:x.mobileScrollIndicator,"data-status":h,"data-hidden":y,onClick:p,children:[e.jsx(L,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},l)})}const Ce="_profile_l7obs_1",Te="_content_l7obs_75",Ve="_column_l7obs_101",Me="_title_l7obs_119",Ee="_description_l7obs_141",Fe="_tag_l7obs_161",Ge="_tagText_l7obs_187",Ae="_image_l7obs_231",He="_svg_l7obs_241",qe="_button_l7obs_273",Be="_buttonGroup_l7obs_293",Ue="_pdfViewer_l7obs_325",Oe="_pdfFrame_l7obs_345",u={profile:Ce,content:Te,column:Ve,title:Me,description:Ee,tag:Fe,tagText:Ge,image:Ae,svg:He,button:qe,buttonGroup:Be,pdfViewer:Ue,pdfFrame:Oe},$e=({visible:t,titleId:a})=>e.jsxs(n.Fragment,{children:[e.jsx(I,{className:u.title,"data-visible":t,level:3,id:a,children:e.jsx(H,{text:"Hi there",start:t,delay:500})}),e.jsxs(N,{className:u.description,"data-visible":t,size:"l",as:"p",children:["I’m Diana, a Game & VR Developer and a senior computer engineer student at the ",e.jsx("strong",{children:"German University in Cairo (GUC)"}),".",e.jsx("br",{}),e.jsx("br",{}),"My work focuses on:",e.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px",marginBottom:"20px",listStyle:"disc"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"VR Projects"}),": Educational Multiplayer Simulations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplayer Games"}),": Using ",e.jsx("strong",{children:"Netcode for GameObjects (NGO)"})," and ",e.jsx("strong",{children:"Photon (PUN)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unity 2D and 3D Games"}),": Participating in game jams on itch.io."]})]}),"I also have experience with web development and machine learning. If you’re interested in the tools and software I use check out my ",e.jsx(G,{href:"/uses",children:"uses page"}),". Feel free to check my CV."]}),e.jsxs(N,{className:u.description,"data-visible":t,size:"l",as:"p",children:["I am always open to discussing new projects or creative ideas. For inquiries or collaborations, please reach out via email at ",e.jsx(G,{href:"mailto:daiana.rehan.dr@gmail.com",children:"daiana.rehan.dr@gmail.com"}),"."]})]}),We=({id:t,visible:a,sectionRef:y})=>{const[f,l]=n.useState(!1),r=`${t}-title`;return e.jsx(k,{className:u.profile,onFocus:()=>l(!0),onBlur:()=>l(!1),as:"section",id:t,ref:y,"aria-labelledby":r,tabIndex:-1,children:e.jsx(R,{in:a||f,timeout:0,children:({visible:i,nodeRef:d})=>e.jsxs("div",{className:u.content,ref:d,children:[e.jsxs("div",{className:u.column,children:[e.jsxs("div",{className:u.tag,"aria-hidden":!0,children:[e.jsx(me,{notchWidth:"64px",notchHeight:"8px",collapsed:!i,collapseDelay:1e3}),e.jsx("br",{}),e.jsx("div",{className:u.tagText,"data-visible":i,children:"About me"})]}),e.jsx("div",{className:u.pdfViewer,"data-visible":i,children:e.jsx("iframe",{src:"/portfolio/Diana-Rehan-CV.pdf",title:"Diana Rehan CV",className:u.pdfFrame})})]}),e.jsxs("div",{className:u.column,children:[e.jsx($e,{visible:i,titleId:r}),e.jsxs("div",{className:u.buttonGroup,"data-visible":i,children:[e.jsx(M,{secondary:!0,className:u.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",icon:"download",download:"Diana-Rehan-CV.pdf",children:"Download CV"}),e.jsx(M,{secondary:!0,className:u.button,"data-visible":i,href:"/portfolio/Diana-Rehan-CV.pdf",target:"_blank",icon:"link",children:"View CV"})]})]})]})})})},Xe="_home_1nqlm_1",Je="_sectionHeader_1nqlm_9",Ye="_newsSection_1nqlm_21",Ke="_newsBanner_1nqlm_33",Qe="_newsIcon_1nqlm_75",Ze="_newsContent_1nqlm_87",en="_newsTitle_1nqlm_99",nn="_newsText_1nqlm_109",rn="_newsLink_1nqlm_119",tn="_newsLinks_1nqlm_143",o={home:Xe,sectionHeader:Je,newsSection:Ye,newsBanner:Ke,newsIcon:Qe,newsContent:Ze,newsTitle:en,newsText:nn,newsLink:rn,newsLinks:tn},jn=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],bn=()=>O({title:"XR & Game Developer",description:`Portfolio of ${S.name} — a VR/XR developer and game developer working on immersive experiences.`}),Pn=()=>{const[t,a]=n.useState([]),[y,f]=n.useState(!1),l=n.useRef(),r=n.useRef(),i=n.useRef(),d=n.useRef();return n.useEffect(()=>{const w=[l,r,i,d],z=new IntersectionObserver((_,c)=>{_.forEach(p=>{if(p.isIntersecting){const m=p.target;if(c.unobserve(m),t.includes(m))return;a(h=>[...h,m])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),j=new IntersectionObserver(([_])=>{f(!_.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return w.forEach(_=>{z.observe(_.current)}),j.observe(l.current),()=>{z.disconnect(),j.disconnect()}},[t]),e.jsxs("div",{className:o.home,children:[e.jsx(De,{id:"intro",sectionRef:l,scrollIndicatorHidden:y}),e.jsx(k,{className:o.newsSection,children:e.jsxs("div",{className:o.newsBanner,children:[e.jsx("span",{className:o.newsIcon,children:"🏆"}),e.jsxs("div",{className:o.newsContent,children:[e.jsx(I,{level:4,as:"h3",className:o.newsTitle,children:"ITI Best VR Game — 1st Place Winner!"}),e.jsxs(N,{size:"s",className:o.newsText,children:[e.jsx("a",{href:"https://dianarehan.itch.io/protect-her",target:"_blank",rel:"noopener noreferrer",className:o.newsLink,children:e.jsx("strong",{children:"Protect Her"})})," won Best VR Game at the ITI Egypt Game Jam 2026."]}),e.jsx("div",{className:o.newsLinks,children:e.jsx("a",{href:"https://www.linkedin.com/posts/iti-game-development-academy_we-have-a-winner-egypt-game-jam-2026-activity-7429230601200824320-Xnby?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtokXAB8xJcpgX2bYsl6mmS3sI0rkxa7x4",target:"_blank",rel:"noopener noreferrer",className:o.newsLink,children:"Read more on LinkedIn →"})})]})]})}),e.jsx(k,{className:o.newsSection,children:e.jsxs("div",{className:o.newsBanner,children:[e.jsx("span",{className:o.newsIcon,children:"🏆"}),e.jsxs("div",{className:o.newsContent,children:[e.jsx(I,{level:4,as:"h3",className:o.newsTitle,children:"2nd Place at Global Game Jam 2026!"}),e.jsxs(N,{size:"s",className:o.newsText,children:["Our game ",e.jsx(D,{to:"/projects/unmasked",className:o.newsLink,children:e.jsx("strong",{children:"UNMASKED"})})," won 2nd place. Built in 48 hours with an amazing team."]}),e.jsx("div",{className:o.newsLinks,children:e.jsx("a",{href:"https://www.linkedin.com/posts/diana-rehan_%F0%9D%90%94%F0%9D%90%A7%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%9E%F0%9D%90%9D-2nd-place-at-global-game-activity-7423042343982854144-E7aJ",target:"_blank",rel:"noopener noreferrer",className:o.newsLink,children:"Read more on LinkedIn →"})})]})]})}),e.jsx("div",{className:o.sectionHeader,children:e.jsx(I,{level:2,as:"h2",align:"center",children:"Professional Work"})}),e.jsx(E,{id:"work-projects",sectionRef:r,visible:t.includes(r.current),index:1,title:"Dental VR Simulator Prototype",description:"A VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment.",videoId:"rVsoI9lu_0M",buttonText:"View Details",buttonLink:"/projects/dental-vr"}),e.jsx(E,{id:"vr-project-2",alternate:!0,sectionRef:i,visible:t.includes(i.current),index:2,title:"Pilot Training VR Simulator",description:"A Multiplayer VR flight training system designed for pilots using Netcode for GameObjects (NGO).",videoId:"zRXndIMaAxU",buttonText:"View Details",buttonLink:"/projects/pilot-vr"}),e.jsx(We,{sectionRef:d,visible:t.includes(d.current),id:"details"}),e.jsx(U,{})]})};export{Pn as default,jn as links,bn as meta};
