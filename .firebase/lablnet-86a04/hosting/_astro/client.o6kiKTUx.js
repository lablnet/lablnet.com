import{c as f,a as d}from"./runtime-dom.esm-bundler.IZxkN1op.js";import{O as m,h as s,S as y}from"./runtime-core.esm-bundler.g1TQfZFf.js";const S=()=>{},A=m({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:n,value:t,hydrate:r}){if(!t)return()=>null;let o=r?"astro-slot":"astro-static-slot";return()=>s(o,{name:n,innerHTML:t})}}),v=n=>async(t,r,o,{client:i})=>{if(!n.hasAttribute("ssr"))return;const p=t.name?`${t.name} Host`:void 0,a={};for(const[e,l]of Object.entries(o))a[e]=()=>s(A,{value:l,name:e==="default"?void 0:e});const u=i!=="only",c=(u?f:d)({name:p,render(){let e=s(t,r,a);return b(t.setup)&&(e=s(y,null,e)),e}});await S(),c.mount(n,u),n.addEventListener("astro:unmount",()=>c.unmount(),{once:!0})};function b(n){const t=n?.constructor;return t&&t.name==="AsyncFunction"}export{v as default};
