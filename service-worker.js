if(!self.define){let i,l={};const r=(r,s)=>(r=new URL(r+".js",s).href,l[r]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=l,document.head.appendChild(i)}else i=r,importScripts(r),l()})).then((()=>{let i=l[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(s,n)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let u={};const o=i=>r(i,e),f={module:{uri:e},exports:u,require:o};l[e]=Promise.all(s.map((i=>f[i]||o(i)))).then((i=>(n(...i),u)))}}define(["./workbox-79ffe3e0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/464.7d96227b.css",revision:null},{url:"/css/527.6a0bac56.css",revision:null},{url:"/css/718.7d96227b.css",revision:null},{url:"/css/910.7d96227b.css",revision:null},{url:"/css/992.7d96227b.css",revision:null},{url:"/css/app.c2ba6b06.css",revision:null},{url:"/css/chunk-vendors.a1a4cdc7.css",revision:null},{url:"/fonts/fa-brands-400.87a84e7a.woff2",revision:null},{url:"/fonts/fa-brands-400.8f295425.ttf",revision:null},{url:"/fonts/fa-regular-400.561c7c94.woff2",revision:null},{url:"/fonts/fa-regular-400.e9092185.ttf",revision:null},{url:"/fonts/fa-solid-900.3cfeed05.woff2",revision:null},{url:"/fonts/fa-solid-900.ab3a31af.ttf",revision:null},{url:"/fonts/fa-v4compatibility.0186d7ef.ttf",revision:null},{url:"/img/Coursera 5DZ79VRJSBK3-1.bd282d67.jpg",revision:null},{url:"/img/Coursera 8EWU75XUZ4XD-1.82597cf2.jpg",revision:null},{url:"/img/Coursera C9BQZMZYQMCT-1.d60c94f6.jpg",revision:null},{url:"/img/arrow-above.0227eaa3.svg",revision:null},{url:"/img/arrow-above.eec075b0.svg",revision:null},{url:"/img/arrow-right.252cf5fa.svg",revision:null},{url:"/img/arrow-right.e3f2a01b.svg",revision:null},{url:"/img/arrowup.2a8ea32f.svg",revision:null},{url:"/img/ash.4c6dc3cf.png",revision:null},{url:"/img/ash.a77c3cdb.png",revision:null},{url:"/img/avatar.ab143444.png",revision:null},{url:"/img/fiverr.97415d33.svg",revision:null},{url:"/img/github.7cccdc74.svg",revision:null},{url:"/img/github.ffceceec.svg",revision:null},{url:"/img/heart.de332e0b.gif",revision:null},{url:"/img/link.3cd5fcfd.svg",revision:null},{url:"/img/link.d4de88c8.svg",revision:null},{url:"/img/linkedin.34fcb1ed.svg",revision:null},{url:"/img/linkedin.8cc8b6ab.svg",revision:null},{url:"/img/muf.fad32ca9.png",revision:null},{url:"/img/resourcesr.46c33a45.png",revision:null},{url:"/img/resourcesr.fa4db953.png",revision:null},{url:"/img/twitter.9456845b.svg",revision:null},{url:"/img/u.8bf23a83.png",revision:null},{url:"/img/umer-removebg-resized.ccf37adf.png",revision:null},{url:"/img/umer-removebg.9d028427.png",revision:null},{url:"/img/umer.jpg",revision:"741e429fe7fa4781c4f1535dbd2b04df"},{url:"/img/upwork.13f305db.svg",revision:null},{url:"/img/zest.48d7838f.png",revision:null},{url:"/img/zest.ed6542bf.png",revision:null},{url:"/index.html",revision:"759a49c0ff76d6c0554468367517ddff"},{url:"/js/178.ac5c5e3b.js",revision:null},{url:"/js/464.da020228.js",revision:null},{url:"/js/527.2809f8a7.js",revision:null},{url:"/js/718.20ea3ab2.js",revision:null},{url:"/js/910.124906eb.js",revision:null},{url:"/js/938.5002407f.js",revision:null},{url:"/js/956.b75ce301.js",revision:null},{url:"/js/992.46bad0d2.js",revision:null},{url:"/js/app.ee9254e5.js",revision:null},{url:"/js/chunk-vendors.0f6d7cd0.js",revision:null},{url:"/manifest.json",revision:"1770c2524b653c4741436956a1f7f256"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/sitemap.xml",revision:"c9ecd178bb5fe896e7d38e634ea0f16c"}],{})}));
//# sourceMappingURL=service-worker.js.map
