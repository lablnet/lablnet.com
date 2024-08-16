import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CnPJ2UiL.mjs';
import { manifest } from './manifest_CSPDky9-.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/project/_id_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/share/_id_.astro.mjs');
const _page5 = () => import('./pages/share.astro.mjs');
const _page6 = () => import('./pages/_slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.14.2_@types+node@22.3.0_rollup@4.20.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/project/[id].astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/share/[id].astro", _page4],
    ["src/pages/share.astro", _page5],
    ["src/pages/[slug]/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/lablnet/projects/lablnet/lablnet.com/dist/client/",
    "server": "file:///Users/lablnet/projects/lablnet/lablnet.com/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
