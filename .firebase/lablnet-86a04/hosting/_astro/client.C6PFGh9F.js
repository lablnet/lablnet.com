const __vite__fileDeps=["_astro/signals.module.B2EHD4X6.js","_astro/preload-helper.ygWHROA3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as f_}from"./preload-helper.ygWHROA3.js";var A,d,__,c_,w,K,e_,W,V,R,$,E={},t_=[],a_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function S(e,_){for(var t in _)e[t]=_[t];return e}function n_(e){var _=e.parentNode;_&&_.removeChild(e)}function C(e,_,t){var r,o,l,s={};for(l in _)l=="key"?r=_[l]:l=="ref"?o=_[l]:s[l]=_[l];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)s[l]===void 0&&(s[l]=e.defaultProps[l]);return N(e,s,r,o,null)}function N(e,_,t,r,o){var l={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++__,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(l),l}function F(e){return e.children}function U(e,_){this.props=e,this.context=_}function P(e,_){if(_==null)return e.__?P(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?P(e):null}function o_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return o_(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!H.__r++||K!==d.debounceRendering)&&((K=d.debounceRendering)||e_)(H)}function H(){var e,_,t,r,o,l,s,c;for(w.sort(W);e=w.shift();)e.__d&&(_=w.length,r=void 0,l=(o=(t=e).__v).__e,s=[],c=[],t.__P&&((r=S({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),G(t.__P,r,o,t.__n,t.__P.ownerSVGElement!==void 0,32&o.__u?[l]:null,s,l??P(o),!!(32&o.__u),c),r.__v=o.__v,r.__.__k[r.__i]=r,i_(s,r,c),r.__e!=l&&o_(r)),w.length>_&&w.sort(W));H.__r=0}function r_(e,_,t,r,o,l,s,c,f,i,a){var n,h,u,v,b,y=r&&r.__k||t_,p=_.length;for(t.__d=f,p_(t,_,y),f=t.__d,n=0;n<p;n++)(u=t.__k[n])!=null&&typeof u!="boolean"&&typeof u!="function"&&(h=u.__i===-1?E:y[u.__i]||E,u.__i=n,G(e,u,h,o,l,s,c,f,i,a),v=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&q(h.ref,null,u),a.push(u.ref,u.__c||v,u)),b==null&&v!=null&&(b=v),65536&u.__u||h.__k===u.__k?(f&&!f.isConnected&&(f=P(h)),f=l_(u,f,e)):typeof u.type=="function"&&u.__d!==void 0?f=u.__d:v&&(f=v.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=f,t.__e=b}function p_(e,_,t){var r,o,l,s,c,f=_.length,i=t.length,a=i,n=0;for(e.__k=[],r=0;r<f;r++)s=r+n,(o=e.__k[r]=(o=_[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,null):z(o)?N(F,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,c=d_(o,t,s,a),o.__i=c,l=null,c!==-1&&(a--,(l=t[c])&&(l.__u|=131072)),l==null||l.__v===null?(c==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):c!==s&&(c===s+1?n++:c>s?a>f-s?n+=c-s:n--:c<s?c==s-1&&(n=c-s):n=0,c!==r+n&&(o.__u|=65536))):(l=t[s])&&l.key==null&&l.__e&&!(131072&l.__u)&&(l.__e==e.__d&&(e.__d=P(l)),j(l,l,!1),t[s]=null,a--);if(a)for(r=0;r<i;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==e.__d&&(e.__d=P(l)),j(l,l))}function l_(e,_,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,_=l_(r[o],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function d_(e,_,t,r){var o=e.key,l=e.type,s=t-1,c=t+1,f=_[t];if(f===null||f&&o==f.key&&l===f.type&&!(131072&f.__u))return t;if(r>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||c<_.length;){if(s>=0){if((f=_[s])&&!(131072&f.__u)&&o==f.key&&l===f.type)return s;s--}if(c<_.length){if((f=_[c])&&!(131072&f.__u)&&o==f.key&&l===f.type)return c;c++}}return-1}function X(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||a_.test(_)?t:t+"px"}function M(e,_,t,r,o){var l;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||X(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||X(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")l=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+l]=t,t?r?t.u=r.u:(t.u=V,e.addEventListener(_,l?$:R,l)):e.removeEventListener(_,l?$:R,l);else{if(o)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function Y(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=V++;else if(_.t<t.u)return;return t(d.event?d.event(_):_)}}}function G(e,_,t,r,o,l,s,c,f,i){var a,n,h,u,v,b,y,p,g,k,T,x,J,D,I,m=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),l=[c=_.__e=t.__e]),(a=d.__b)&&a(_);_:if(typeof m=="function")try{if(p=_.props,g=(a=m.contextType)&&r[a.__c],k=a?g?g.props.value:a.__:r,t.__c?y=(n=_.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?_.__c=n=new m(p,k):(_.__c=n=new U(p,k),n.constructor=m,n.render=v_),g&&g.sub(n),n.props=p,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=S({},n.__s)),S(n.__s,m.getDerivedStateFromProps(p,n.__s))),u=n.props,v=n.state,n.__v=_,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&p!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(p,k),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(p,n.__s,k)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=p,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(L){L&&(L.__=_)}),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[],n.__h.length&&s.push(n);break _}n.componentWillUpdate!=null&&n.componentWillUpdate(p,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,v,b)})}if(n.context=k,n.props=p,n.__P=e,n.__e=!1,x=d.__r,J=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(_),a=n.render(n.props,n.state,n.context),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[]}else do n.__d=!1,x&&x(_),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++J<25);n.state=n.__s,n.getChildContext!=null&&(r=S(S({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(b=n.getSnapshotBeforeUpdate(u,v)),r_(e,z(I=a!=null&&a.type===F&&a.key==null?a.props.children:a)?I:[I],_,t,r,o,l,s,c,f,i),n.base=_.__e,_.__u&=-161,n.__h.length&&s.push(n),y&&(n.__E=n.__=null)}catch(L){_.__v=null,f||l!=null?(_.__e=c,_.__u|=f?160:32,l[l.indexOf(c)]=null):(_.__e=t.__e,_.__k=t.__k),d.__e(L,_,t)}else l==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=h_(t.__e,_,t,r,o,l,s,f,i);(a=d.diffed)&&a(_)}function i_(e,_,t){_.__d=void 0;for(var r=0;r<t.length;r++)q(t[r],t[++r],t[++r]);d.__c&&d.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(l){l.call(o)})}catch(l){d.__e(l,o.__v)}})}function h_(e,_,t,r,o,l,s,c,f){var i,a,n,h,u,v,b,y=t.props,p=_.props,g=_.type;if(g==="svg"&&(o=!0),l!=null){for(i=0;i<l.length;i++)if((u=l[i])&&"setAttribute"in u==!!g&&(g?u.localName===g:u.nodeType===3)){e=u,l[i]=null;break}}if(e==null){if(g===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,p.is&&p),l=null,c=!1}if(g===null)y===p||c&&e.data===p||(e.data=p);else{if(l=l&&A.call(e.childNodes),y=t.props||E,!c&&l!=null)for(y={},i=0;i<e.attributes.length;i++)y[(u=e.attributes[i]).name]=u.value;for(i in y)u=y[i],i=="children"||(i=="dangerouslySetInnerHTML"?n=u:i==="key"||i in p||M(e,i,null,u,o));for(i in p)u=p[i],i=="children"?h=u:i=="dangerouslySetInnerHTML"?a=u:i=="value"?v=u:i=="checked"?b=u:i==="key"||c&&typeof u!="function"||y[i]===u||M(e,i,u,y[i],o);if(a)c||n&&(a.__html===n.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(n&&(e.innerHTML=""),r_(e,z(h)?h:[h],_,t,r,o&&g!=="foreignObject",l,s,l?l[0]:t.__k&&P(t,0),c,f),l!=null)for(i=l.length;i--;)l[i]!=null&&n_(l[i]);c||(i="value",v!==void 0&&(v!==e[i]||g==="progress"&&!v||g==="option"&&v!==y[i])&&M(e,i,v,y[i],!1),i="checked",b!==void 0&&b!==e[i]&&M(e,i,b,y[i],!1))}return e}function q(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){d.__e(r,t)}}function j(e,_,t){var r,o;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||q(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,_)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&j(r[o],_,t||typeof e.type!="function");t||e.__e==null||n_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function v_(e,_,t){return this.constructor(e,t)}function B(e,_,t){var r,o,l,s;d.__&&d.__(e,_),o=(r=typeof t=="function")?null:t&&t.__k||_.__k,l=[],s=[],G(_,e=(!r&&t||_).__k=C(F,null,[e]),o||E,E,_.ownerSVGElement!==void 0,!r&&t?[t]:o?null:_.firstChild?A.call(_.childNodes):null,l,!r&&t?t:o?o.__e:_.firstChild,r,s),i_(l,e,s)}function s_(e,_){B(e,_,s_)}A=t_.slice,d={__e:function(e,_,t,r){for(var o,l,s;_=_.__;)if((o=_.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},__=0,c_=function(e){return e!=null&&e.constructor==null},U.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},t),this.props)),e&&S(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),Q(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},U.prototype.render=F,w=[],e_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(e,_){return e.__v.__b-_.__v.__b},H.__r=0,V=0,R=Y(!1),$=Y(!0);const u_=({value:e,name:_,hydrate:t=!0})=>e?C(t?"astro-slot":"astro-static-slot",{name:_,dangerouslySetInnerHTML:{__html:e}}):null;u_.shouldComponentUpdate=()=>!1;var Z=u_;const O=new Map;var g_=e=>async(_,t,{default:r,...o},{client:l})=>{if(!e.hasAttribute("ssr"))return;for(const[f,i]of Object.entries(o))t[f]=C(Z,{value:i,name:f});if(e.dataset.preactSignals){const{signal:f}=await f_(()=>import("./signals.module.B2EHD4X6.js"),__vite__mapDeps([0,1]));let i=JSON.parse(e.dataset.preactSignals);for(const[a,n]of Object.entries(i)){if(!O.has(n)){const h=f(t[a]);O.set(n,h)}t[a]=O.get(n)}}(l!=="only"?s_:B)(C(_,t,r!=null?C(Z,{value:r}):r),e),e.addEventListener("astro:unmount",()=>B(null,e),{once:!0})};export{g_ as c,U as k,d as l,c_ as t};
