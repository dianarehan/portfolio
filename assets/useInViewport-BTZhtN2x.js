import{r as s}from"./jsx-runtime-DexIYAB0.js";function p(r,c,e={},n=!0){const[i,a]=s.useState(!1),[o,b]=s.useState(!1);return s.useEffect(()=>{if(!(r!=null&&r.current))return;const t=new IntersectionObserver(([v])=>{const{isIntersecting:u,target:I}=v;a(u),u&&c&&(t.unobserve(I),b(!0))},e);return!o&&n&&t.observe(r.current),()=>t.disconnect()},[r,c,e,o,n]),i}export{p as u};
