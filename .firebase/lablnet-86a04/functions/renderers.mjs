import { options, h as h$1, Fragment, Component } from 'preact';
import { defineComponent, h as h$2, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

var r=/[\s\n\\/='"\0<>]/,o=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/,a=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|spel|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c=/["&<]/;function l(e){if(0===e.length||!1===c.test(e))return e;for(var t=0,n=0,r="",o="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=o,t=n+1;}return n!==t&&(r+=e.slice(t,n)),r}var s={},u=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),f=/[A-Z]/g;function p(e){var t="";for(var n in e){var r=e[n];if(null!=r&&""!==r){var o="-"==n[0]?n:s[n]||(s[n]=n.replace(f,"-$&").toLowerCase()),i=";";"number"!=typeof r||o.startsWith("--")||u.has(o)||(i="px;"),t=t+o+":"+r+i;}}return t||void 0}function h(){this.__d=!0;}function d(e,t){return {__v:e,context:t,props:e.props,setState:h,forceUpdate:h,__d:!0,__h:new Array(0)}}function _(e,t,n){if(!e.s){if(n instanceof v){if(!n.s)return void(n.o=_.bind(null,e,t));1&t&&(t=n.s),n=n.v;}if(n&&n.then)return void n.then(_.bind(null,e,t),_.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e);}}var v=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{_(r,1,i(this.v));}catch(e){_(r,2,e);}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?_(r,1,t?t(o):o):n?_(r,1,n(o)):_(r,2,o);}catch(e){_(r,2,e);}},r},e}();function m(e){return e instanceof v&&1&e.s}function y(e,t,n){for(var r;;){var o=e();if(m(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!m(i)){r=1;break}i=i.s;}var a; }var c=new v,l=_.bind(null,c,2);return (0===r?o.then(u):1===r?i.then(s):a.then(f)).then(void 0,l),c;function s(r){i=r;do{if(!(o=e())||m(o)&&!o.v)return void _(c,1,i);if(o.then)return void o.then(u).then(void 0,l);m(i=n())&&(i=i.v);}while(!i||!i.then);i.then(s).then(void 0,l);}function u(e){e?(i=n())&&i.then?i.then(s).then(void 0,l):s(i):_(c,1,i);}function f(){(o=e())?o.then?o.then(u).then(void 0,l):u(o):_(c,1,i);}}function g(e,t){try{var n=e();}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,n)}var b,k,x,w,C=function(r,o){try{var i=options.__s;options.__s=!0,b=options.__b,k=options.diffed,x=options.__r,w=options.unmount;var a=h$1(Fragment,null);return a.__k=[r],Promise.resolve(g(function(){return Promise.resolve(P(r,o||A,!1,void 0,a,!0,void 0)).then(function(e){var t,n=function(){if(L(e)){var n=function(){var e=o.join(T);return t=1,e},r=0,o=e,i=y(function(){return !!o.some(function(e){return e&&"function"==typeof e.then})&&r++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(e){o=e.flat();})});return i&&i.then?i.then(n):n()}}();return n&&n.then?n.then(function(n){return t?n:e}):t?n:e})},function(t,n){if(options.__c&&options.__c(r,S),options.__s=i,S.length=0,t)throw n;return n}))}catch(e){return Promise.reject(e)}},A={},S=[],L=Array.isArray,E=Object.assign,T="";function D(e,t){var n,r=e.type,o=!0;return e.__c?(o=!1,(n=e.__c).state=n.__s):n=new r(e.props,t),e.__c=n,n.__v=e,n.props=e.props,n.context=t,n.__d=!0,null==n.state&&(n.state=A),null==n.__s&&(n.__s=n.state),r.getDerivedStateFromProps?n.state=E({},n.state,r.getDerivedStateFromProps(n.props,n.state)):o&&n.componentWillMount?(n.componentWillMount(),n.state=n.__s!==n.state?n.__s:n.state):!o&&n.componentWillUpdate&&n.componentWillUpdate(),x&&x(e),n.render(n.props,n.state,t)}function P(t,c,s,u,f,h,_){if(null==t||!0===t||!1===t||t===T)return T;var v=typeof t;if("object"!=v)return "function"==v?T:"string"==v?l(t):t+T;if(L(t)){var m,y=T;f.__k=t;for(var g=0;g<t.length;g++){var C=t[g];if(null!=C&&"boolean"!=typeof C){var S,j=P(C,c,s,u,f,h,_);"string"==typeof j?y+=j:(m||(m=[]),y&&m.push(y),y=T,L(j)?(S=m).push.apply(S,j):m.push(j));}}return m?(y&&m.push(y),m):y}if(void 0!==t.constructor)return T;t.__=f,b&&b(t);var Z=t.type,F=t.props;if("function"==typeof Z){var M,W,$,z=c;if(Z===Fragment){if("tpl"in F){for(var H=T,q=0;q<F.tpl.length;q++)if(H+=F.tpl[q],F.exprs&&q<F.exprs.length){var B=F.exprs[q];if(null==B)continue;"object"!=typeof B||void 0!==B.constructor&&!L(B)?H+=B:H+=P(B,c,s,u,t,h,_);}return H}if("UNSTABLE_comment"in F)return "\x3c!--"+l(F.UNSTABLE_comment)+"--\x3e";W=F.children;}else {if(null!=(M=Z.contextType)){var I=c[M.__c];z=I?I.props.value:M.__;}var N=Z.prototype&&"function"==typeof Z.prototype.render;if(N)W=D(t,z),$=t.__c;else {t.__c=$=d(t,z);for(var O=0;$.__d&&O++<25;)$.__d=!1,x&&x(t),W=Z.call($,F,z);$.__d=!0;}if(null!=$.getChildContext&&(c=E({},c,$.getChildContext())),N&&options.errorBoundaries&&(Z.getDerivedStateFromError||$.componentDidCatch)){W=null!=W&&W.type===Fragment&&null==W.key&&null==W.props.tpl?W.props.children:W;try{return P(W,c,s,u,t,h,_)}catch(e){return Z.getDerivedStateFromError&&($.__s=Z.getDerivedStateFromError(e)),$.componentDidCatch&&$.componentDidCatch(e,A),$.__d?(W=D(t,c),null!=($=t.__c).getChildContext&&(c=E({},c,$.getChildContext())),P(W=null!=W&&W.type===Fragment&&null==W.key&&null==W.props.tpl?W.props.children:W,c,s,u,t,h,_)):T}finally{k&&k(t),t.__=null,w&&w(t);}}}W=null!=W&&W.type===Fragment&&null==W.key&&null==W.props.tpl?W.props.children:W;try{var R=P(W,c,s,u,t,h,_);return k&&k(t),t.__=null,options.unmount&&options.unmount(t),R}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function e(){try{return P(W,c,s,u,t,h,_)}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function(){return P(W,c,s,u,t,h,_)},e)}})}}var G,J="<"+Z,Q=T;for(var X in F){var Y=F[X];if("function"!=typeof Y){switch(X){case"children":G=Y;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in F)continue;X="for";break;case"className":if("class"in F)continue;X="class";break;case"defaultChecked":X="checked";break;case"defaultSelected":X="selected";break;case"defaultValue":case"value":switch(X="value",Z){case"textarea":G=Y;continue;case"select":u=Y;continue;case"option":u!=Y||"selected"in F||(J+=" selected");}break;case"dangerouslySetInnerHTML":Q=Y&&Y.__html;continue;case"style":"object"==typeof Y&&(Y=p(Y));break;case"acceptCharset":X="accept-charset";break;case"httpEquiv":X="http-equiv";break;default:if(o.test(X))X=X.replace(o,"$1:$2").toLowerCase();else {if(r.test(X))continue;"-"!==X[4]&&"draggable"!==X||null==Y?s?a.test(X)&&(X="panose1"===X?"panose-1":X.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(X)&&"spellcheck"===(X=X.toLowerCase())&&(Y=""+Y):Y+=T;}}null!=Y&&!1!==Y&&(J=!0===Y||Y===T?J+" "+X:J+" "+X+'="'+("string"==typeof Y?l(Y):Y+T)+'"');}}if(r.test(Z))throw new Error(Z+" is not a valid HTML tag name in "+J+">");if(Q||("string"==typeof G?Q=l(G):null!=G&&!1!==G&&!0!==G&&(Q=P(G,c,"svg"===Z||"foreignObject"!==Z&&s,u,t,h,_))),k&&k(t),t.__=null,w&&w(t),!Q&&U.has(Z))return J+"/>";var ee="</"+Z+">",te=J+">";return L(Q)?[te].concat(Q,[ee]):"string"!=typeof Q?[te,Q,ee]:te+Q+ee}var U=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

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
  const html = await C(vNode);
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
const renderer = {
  name: "@astrojs/preact",
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1,
  supportsAstroStaticSlot: true
};
var server_default = renderer;

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
	name: '@astrojs/vue',
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer1 }),];

export { renderers };
