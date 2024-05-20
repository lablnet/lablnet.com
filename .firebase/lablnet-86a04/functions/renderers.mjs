import { options, h as h$1, Fragment, Component } from 'preact';
import { Suspense } from 'preact/compat';
import { defineComponent, h as h$2, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

var o=/[\s\n\\/='"\0<>]/,n$1=/^(xlink|xmlns|xml)([A-Z])/,a=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,i=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,l=/["&<]/;function s$1(e){if(0===e.length||!1===l.test(e))return e;for(var t=0,r=0,o="",n="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;default:continue}r!==t&&(o+=e.slice(t,r)),o+=n,t=r+1;}return r!==t&&(o+=e.slice(t,r)),o}var c={},p=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),u=/[A-Z]/g;function f(e){var t="";for(var r in e){var o=e[r];if(null!=o&&""!==o){var n="-"==r[0]?r:c[r]||(c[r]=r.replace(u,"-$&").toLowerCase()),a=";";"number"!=typeof o||n.startsWith("--")||p.has(n)||(a="px;"),t=t+n+":"+o+a;}}return t||void 0}var _$1,d,h,m,v=[],g=Array.isArray,y=Object.assign;function b(o,n){var a=options.__s;options.__s=!0,_$1=options.__b,d=options.diffed,h=options.__r,m=options.unmount;var i=h$1(Fragment,null);i.__k=[o];try{return C(o,n||k,!1,void 0,i)}finally{options.__c&&options.__c(o,v),options.__s=a,v.length=0;}}function x(){this.__d=!0;}var k={};function w(e,t){var r,o=e.type,n=!0;return e.__c?(n=!1,(r=e.__c).state=r.__s):r=new o(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=k),null==r.__s&&(r.__s=r.state),o.getDerivedStateFromProps?r.state=y({},r.state,o.getDerivedStateFromProps(r.props,r.state)):n&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!n&&r.componentWillUpdate&&r.componentWillUpdate(),h&&h(e),r.render(r.props,r.state,t)}function C(t,l,c,p,u){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":s$1(t+"");if(g(t)){var v="";u.__k=t;for(var b=0;b<t.length;b++){var k=t[b];null!=k&&"boolean"!=typeof k&&(v+=C(k,l,c,p,u));}return v}if(void 0!==t.constructor)return "";t.__=u,_$1&&_$1(t);var A,L,D,E=t.type,T=t.props,Z=l;if("function"==typeof E){if(E===Fragment){if(T.tpl){for(var F="",U=0;U<T.tpl.length;U++)if(F+=T.tpl[U],T.exprs&&U<T.exprs.length){var W=T.exprs[U];if(null==W)continue;"object"!=typeof W||void 0!==W.constructor&&!g(W)?F+=W:F+=C(W,l,c,p,t);}return F}if(T.UNSTABLE_comment)return "\x3c!--"+s$1(T.UNSTABLE_comment||"")+"--\x3e";L=T.children;}else {if(null!=(A=E.contextType)){var $=l[A.__c];Z=$?$.props.value:A.__;}if(E.prototype&&"function"==typeof E.prototype.render)L=w(t,Z),D=t.__c;else {t.__c=D={__v:t,props:T,context:Z,setState:x,forceUpdate:x,__d:!0,__h:[]};for(var j=0;D.__d&&j++<25;)D.__d=!1,h&&h(t),L=E.call(D,T,Z);D.__d=!0;}if(null!=D.getChildContext&&(l=y({},l,D.getChildContext())),(E.getDerivedStateFromError||D.componentDidCatch)&&options.errorBoundaries){var M="";L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L;try{return M=C(L,l,c,p,t)}catch(e){return E.getDerivedStateFromError&&(D.__s=E.getDerivedStateFromError(e)),D.componentDidCatch&&D.componentDidCatch(e,{}),D.__d&&(L=w(t,l),null!=(D=t.__c).getChildContext&&(l=y({},l,D.getChildContext())),M=C(L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L,l,c,p,t)),M}finally{d&&d(t),t.__=void 0,m&&m(t);}}}var z=C(L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L,l,c,p,t);return d&&d(t),t.__=void 0,m&&m(t),z}var H,q="<"+E,B="";for(var I in T){var N=T[I];switch(I){case"children":H=N;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in T)continue;I="for";break;case"className":if("class"in T)continue;I="class";break;case"defaultChecked":I="checked";break;case"defaultSelected":I="selected";break;case"defaultValue":case"value":switch(I="value",E){case"textarea":H=N;continue;case"select":p=N;continue;case"option":p!=N||"selected"in T||(q+=" selected");}break;case"dangerouslySetInnerHTML":B=N&&N.__html;continue;case"style":"object"==typeof N&&(N=f(N));break;case"acceptCharset":I="accept-charset";break;case"httpEquiv":I="http-equiv";break;default:if(n$1.test(I))I=I.replace(n$1,"$1:$2").toLowerCase();else {if(o.test(I))continue;"-"!==I[4]&&"draggable"!==I||null==N?c?i.test(I)&&(I="panose1"===I?"panose-1":I.replace(/([A-Z])/g,"-$1").toLowerCase()):a.test(I)&&(I=I.toLowerCase()):N+="";}}null!=N&&!1!==N&&"function"!=typeof N&&(q=!0===N||""===N?q+" "+I:q+" "+I+'="'+s$1(N+"")+'"');}if(o.test(E))throw new Error(E+" is not a valid HTML tag name in "+q+">");return B||("string"==typeof H?B=s$1(H):null!=H&&!1!==H&&!0!==H&&(B=C(H,l,"svg"===E||"foreignObject"!==E&&c,p,t))),d&&d(t),t.__=void 0,m&&m(t),!B&&S.has(E)?q+"/>":q+">"+B+"</"+E+">"}var S=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),A=b;

function _(e,t){for(let r in t)e[r]=t[r];return e}function n(e,t){return Array.isArray(t)?t.reduce(n,e):null!=t&&!1!==t&&e.push(t),e}function s(p,i,l,c){if(null==p||"object"!=typeof p)return Promise.resolve();let a=p.type,u=p.props,m=[];if(l=l||{},p.__=c,"function"==typeof a&&a!==Fragment&&a!==Suspense){let e,o=p.__c=new Component(u,l);o.__d=!0,o.__v=p,void 0===o.state&&(o.state={});let n=!1,m=a.contextType,d=m&&l[m.__c],h=null!=m?d?d.props.value:m.__p||m.__:l;return p.__=c,a.prototype&&"function"==typeof a.prototype.render?(n=!0,o=p.__c=new a(u,h),o.__d=!0,o.__v=p,o.props=u,o.context=h,void 0===o.state&&(o.state={}),a.getDerivedStateFromProps?o.state=_(_({},o.state),a.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&o.componentWillMount(),e=()=>{try{return options.render&&options.render(p),options.__r&&options.__r(p),Promise.resolve(o.render(o.props,o.state,o.context))}catch(t){return t&&t.then?t.then(e,e):Promise.reject(t)}}):e=()=>{try{const e=options.__s;options.__s=!0,options.render&&options.render(p),options.__r&&options.__r(p);const t=Promise.resolve(a.call(p.__c,u,h));return options.__s=e,t}catch(t){return t&&t.then?t.then(e,e):Promise.reject(t)}},options.__b&&options.__b(p),(i?(i(p,n?o:void 0)||Promise.resolve()).then(e):e()).then(e=>(o.getChildContext&&(l=_(_({},l),o.getChildContext())),Array.isArray(e)?(p.__k=[],Promise.all(e.map(e=>(p.__k.push(e),s(e,i,l,p))))):s(e,i,l,p)))}return options.__b&&options.__b(p),u&&n(m=[],u.children).length?(p.__k=[],Promise.all(m.map(e=>(p.__k.push(e),s(e,i,l,p))))):Promise.resolve()}

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml$1 = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h$1(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml$1.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml$1;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
async function check$1(Component$1, props, children) {
  if (typeof Component$1 !== "function") return false;
  if (Component$1.name === "QwikComponent") return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = await renderToStaticMarkup$1.call(this, Component$1, props, children, void 0);
      if (typeof html !== "string") {
        return false;
      }
      return html == "" ? false : !/<undefined>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const vNode = h$1(
    Component,
    newProps,
    children != null ? h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value: children
    }) : children
  );
  await s(vNode);
  const html = A(vNode);
  return { attrs, html };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError) return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1,
  supportsAstroStaticSlot: true
};

const setup = () => {};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
		hydrate: {
			type: Boolean,
			default: true,
		},
	},
	setup({ name, value, hydrate }) {
		if (!value) return () => null;
		let tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
		return () => h$2(tagName, { name, innerHTML: value });
	},
});

function check(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup(Component, inputProps, slotted, metadata) {
	const slots = {};
	const props = { ...inputProps };
	delete props.slot;
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			h$2(StaticHtml, {
				value,
				name: key === 'default' ? undefined : key,
				// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
				hydrate: metadata.astroStaticSlot ? !!metadata.hydrate : true,
			});
	}
	const app = createSSRApp({ render: () => h$2(Component, props, slots) });
	await setup();
	const html = await renderToString(app);
	return { html };
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer1 }),];

export { renderers };
