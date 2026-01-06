import{r as l,j as n}from"./jsx-runtime-BfF-YriY.js";import{c as y,g as r,t as m,h as i}from"./heading-DuWuYy4n.js";const w="/portfolio/assets/gotham-bold-italic-C_msAlmW.woff2",g="/portfolio/assets/gotham-bold-D1kvQ7KV.woff2",k="/portfolio/assets/gotham-book-italic-Bm2IEtSK.woff2",$="/portfolio/assets/gotham-book-Bnaws0Ef.woff2",G="/portfolio/assets/gotham-medium-italic-Dok430ou.woff2",b="/portfolio/assets/gotham-medium-0VT3RO8I.woff2",T="/portfolio/assets/ipa-gothic-DimHCOud.woff2",c=l.createContext({}),S=({theme:t="dark",children:e,className:h,as:u="div",toggleTheme:d,...p})=>{const s=x(),f=!s.theme;return n.jsxs(c.Provider,{value:{theme:t,toggleTheme:d||s.toggleTheme},children:[f&&e,!f&&n.jsx(u,{className:y(h),"data-theme":t,...p,children:e})]})};function x(){return l.useContext(c)}function o(t){return t.replace(/\s\s+/g," ")}function a(t){return o(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function j(){return o(Object.keys(r).map(t=>`
        @media (max-width: ${r[t]}px) {
          :root {
            ${a(m[t])}
          }
        }
      `).join(`
`))}const I=o(`
  @layer theme, base, components, layout;
`),P=o(`
  :root {
    ${a(m.base)}
  }

  ${j()}

  [data-theme='dark'] {
    ${a(i.dark)}
  }

  [data-theme='light'] {
    ${a(i.light)}
  }
`),v=o(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${k}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${b}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${G}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${g}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${w}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${T}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),E=o(`
  ${I}

  @layer theme {
    ${P}
    ${v}
  }
`);export{b as G,S as T,$ as a,E as t,x as u};
