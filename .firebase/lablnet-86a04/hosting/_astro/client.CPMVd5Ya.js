const __vite__fileDeps=["_astro/signals.module.B6EzhMgX.js","_astro/preload-helper.BiBI96sQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as fe}from"./preload-helper.BiBI96sQ.js";var F,d,ee,ae,S,K,_e,O,V,W,$,M={},te=[],ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function ne(_){var e=_.parentNode;e&&e.removeChild(_)}function C(_,e,t){var r,o,l,s={};for(l in e)l=="key"?r=e[l]:l=="ref"?o=e[l]:s[l]=e[l];if(arguments.length>2&&(s.children=arguments.length>3?F.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(l in _.defaultProps)s[l]===void 0&&(s[l]=_.defaultProps[l]);return E(_,s,r,o,null)}function E(_,e,t,r,o){var l={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++ee,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(l),l}function H(_){return _.children}function N(_,e){this.props=_,this.context=e}function x(_,e){if(e==null)return _.__?x(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?x(_):null}function oe(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return oe(_)}}function Q(_){(!_.__d&&(_.__d=!0)&&S.push(_)&&!I.__r++||K!==d.debounceRendering)&&((K=d.debounceRendering)||_e)(I)}function I(){var _,e,t,r,o,l,s,a;for(S.sort(O);_=S.shift();)_.__d&&(e=S.length,r=void 0,l=(o=(t=_).__v).__e,s=[],a=[],t.__P&&((r=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),q(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[l]:null,s,l??x(o),!!(32&o.__u),a),r.__v=o.__v,r.__.__k[r.__i]=r,ie(s,r,a),r.__e!=l&&oe(r)),S.length>e&&S.sort(O));I.__r=0}function re(_,e,t,r,o,l,s,a,f,i,c){var n,h,u,v,k,y=r&&r.__k||te,p=e.length;for(t.__d=f,pe(t,e,y),f=t.__d,n=0;n<p;n++)(u=t.__k[n])!=null&&typeof u!="boolean"&&typeof u!="function"&&(h=u.__i===-1?M:y[u.__i]||M,u.__i=n,q(_,u,h,o,l,s,a,f,i,c),v=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&J(h.ref,null,u),c.push(u.ref,u.__c||v,u)),k==null&&v!=null&&(k=v),65536&u.__u||h.__k===u.__k?(f&&!f.isConnected&&(f=x(h)),f=le(u,f,_)):typeof u.type=="function"&&u.__d!==void 0?f=u.__d:v&&(f=v.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=f,t.__e=k}function pe(_,e,t){var r,o,l,s,a,f=e.length,i=t.length,c=i,n=0;for(_.__k=[],r=0;r<f;r++)s=r+n,(o=_.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?E(null,o,null,null,null):z(o)?E(H,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?E(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=_,o.__b=_.__b+1,a=de(o,t,s,c),o.__i=a,l=null,a!==-1&&(c--,(l=t[a])&&(l.__u|=131072)),l==null||l.__v===null?(a==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):a!==s&&(a===s+1?n++:a>s?c>f-s?n+=a-s:n--:a<s?a==s-1&&(n=a-s):n=0,a!==r+n&&(o.__u|=65536))):(l=t[s])&&l.key==null&&l.__e&&!(131072&l.__u)&&(l.__e==_.__d&&(_.__d=x(l)),j(l,l,!1),t[s]=null,c--);if(c)for(r=0;r<i;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==_.__d&&(_.__d=x(l)),j(l,l))}function le(_,e,t){var r,o;if(typeof _.type=="function"){for(r=_.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=_,e=le(r[o],e,t));return e}_.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function de(_,e,t,r){var o=_.key,l=_.type,s=t-1,a=t+1,f=e[t];if(f===null||f&&o==f.key&&l===f.type&&!(131072&f.__u))return t;if(r>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||a<e.length;){if(s>=0){if((f=e[s])&&!(131072&f.__u)&&o==f.key&&l===f.type)return s;s--}if(a<e.length){if((f=e[a])&&!(131072&f.__u)&&o==f.key&&l===f.type)return a;a++}}return-1}function X(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ce.test(e)?t:t+"px"}function U(_,e,t,r,o){var l;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||X(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||X(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")l=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+l]=t,t?r?t.u=r.u:(t.u=V,_.addEventListener(e,l?$:W,l)):_.removeEventListener(e,l?$:W,l);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function Y(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=V++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function q(_,e,t,r,o,l,s,a,f,i){var c,n,h,u,v,k,y,p,g,b,L,P,G,T,R,m=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),l=[a=e.__e=t.__e]),(c=d.__b)&&c(e);e:if(typeof m=="function")try{if(p=e.props,g=(c=m.contextType)&&r[c.__c],b=c?g?g.props.value:c.__:r,t.__c?y=(n=e.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(p,b):(e.__c=n=new N(p,b),n.constructor=m,n.render=ve),g&&g.sub(n),n.props=p,n.state||(n.state={}),n.context=b,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,m.getDerivedStateFromProps(p,n.__s))),u=n.props,v=n.state,n.__v=e,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&p!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(p,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(p,n.__s,b)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=p,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(D){D&&(D.__=e)}),L=0;L<n._sb.length;L++)n.__h.push(n._sb[L]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(p,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,v,k)})}if(n.context=b,n.props=p,n.__P=_,n.__e=!1,P=d.__r,G=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,P&&P(e),c=n.render(n.props,n.state,n.context),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[]}else do n.__d=!1,P&&P(e),c=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++G<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(k=n.getSnapshotBeforeUpdate(u,v)),re(_,z(R=c!=null&&c.type===H&&c.key==null?c.props.children:c)?R:[R],e,t,r,o,l,s,a,f,i),n.base=e.__e,e.__u&=-161,n.__h.length&&s.push(n),y&&(n.__E=n.__=null)}catch(D){e.__v=null,f||l!=null?(e.__e=a,e.__u|=f?160:32,l[l.indexOf(a)]=null):(e.__e=t.__e,e.__k=t.__k),d.__e(D,e,t)}else l==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=he(t.__e,e,t,r,o,l,s,f,i);(c=d.diffed)&&c(e)}function ie(_,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)J(t[r],t[++r],t[++r]);d.__c&&d.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(l){l.call(o)})}catch(l){d.__e(l,o.__v)}})}function he(_,e,t,r,o,l,s,a,f){var i,c,n,h,u,v,k,y=t.props,p=e.props,g=e.type;if(g==="svg"?o="http://www.w3.org/2000/svg":g==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),l!=null){for(i=0;i<l.length;i++)if((u=l[i])&&"setAttribute"in u==!!g&&(g?u.localName===g:u.nodeType===3)){_=u,l[i]=null;break}}if(_==null){if(g===null)return document.createTextNode(p);_=document.createElementNS(o,g,p.is&&p),l=null,a=!1}if(g===null)y===p||a&&_.data===p||(_.data=p);else{if(l=l&&F.call(_.childNodes),y=t.props||M,!a&&l!=null)for(y={},i=0;i<_.attributes.length;i++)y[(u=_.attributes[i]).name]=u.value;for(i in y)if(u=y[i],i!="children"){if(i=="dangerouslySetInnerHTML")n=u;else if(i!=="key"&&!(i in p)){if(i=="value"&&"defaultValue"in p||i=="checked"&&"defaultChecked"in p)continue;U(_,i,null,u,o)}}for(i in p)u=p[i],i=="children"?h=u:i=="dangerouslySetInnerHTML"?c=u:i=="value"?v=u:i=="checked"?k=u:i==="key"||a&&typeof u!="function"||y[i]===u||U(_,i,u,y[i],o);if(c)a||n&&(c.__html===n.__html||c.__html===_.innerHTML)||(_.innerHTML=c.__html),e.__k=[];else if(n&&(_.innerHTML=""),re(_,z(h)?h:[h],e,t,r,g==="foreignObject"?"http://www.w3.org/1999/xhtml":o,l,s,l?l[0]:t.__k&&x(t,0),a,f),l!=null)for(i=l.length;i--;)l[i]!=null&&ne(l[i]);a||(i="value",v!==void 0&&(v!==_[i]||g==="progress"&&!v||g==="option"&&v!==y[i])&&U(_,i,v,y[i],o),i="checked",k!==void 0&&k!==_[i]&&U(_,i,k,y[i],o))}return _}function J(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){d.__e(r,t)}}function j(_,e,t){var r,o;if(d.unmount&&d.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||J(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,e)}r.base=r.__P=null}if(r=_.__k)for(o=0;o<r.length;o++)r[o]&&j(r[o],e,t||typeof _.type!="function");t||_.__e==null||ne(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function ve(_,e,t){return this.constructor(_,t)}function B(_,e,t){var r,o,l,s;d.__&&d.__(_,e),o=(r=typeof t=="function")?null:t&&t.__k||e.__k,l=[],s=[],q(e,_=(!r&&t||e).__k=C(H,null,[_]),o||M,M,e.namespaceURI,!r&&t?[t]:o?null:e.firstChild?F.call(e.childNodes):null,l,!r&&t?t:o?o.__e:e.firstChild,r,s),ie(l,_,s)}function se(_,e){B(_,e,se)}F=te.slice,d={__e:function(_,e,t,r){for(var o,l,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(_)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,r||{}),s=o.__d),s)return o.__E=o}catch(a){_=a}throw _}},ee=0,ae=function(_){return _!=null&&_.constructor==null},N.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Q(this))},N.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q(this))},N.prototype.render=H,S=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O=function(_,e){return _.__v.__b-e.__v.__b},I.__r=0,V=0,W=Y(!1),$=Y(!0);const ue=({value:_,name:e,hydrate:t=!0})=>_?C(t?"astro-slot":"astro-static-slot",{name:e,dangerouslySetInnerHTML:{__html:_}}):null;ue.shouldComponentUpdate=()=>!1;var Z=ue;const A=new Map;var ge=_=>async(e,t,{default:r,...o},{client:l})=>{if(!_.hasAttribute("ssr"))return;for(const[f,i]of Object.entries(o))t[f]=C(Z,{value:i,name:f});if(_.dataset.preactSignals){const{signal:f}=await fe(()=>import("./signals.module.B6EzhMgX.js"),__vite__mapDeps([0,1]));let i=JSON.parse(_.dataset.preactSignals);for(const[c,n]of Object.entries(i)){if(!A.has(n)){const h=f(t[c]);A.set(n,h)}t[c]=A.get(n)}}(l!=="only"?se:B)(C(e,t,r!=null?C(Z,{value:r}):r),_),_.addEventListener("astro:unmount",()=>B(null,_),{once:!0})};export{N as b,ge as c,d as l,ae as t};
