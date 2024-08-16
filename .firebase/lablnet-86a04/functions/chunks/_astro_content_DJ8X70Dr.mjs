import { q as removeBase, o as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, s as prependForwardSlash } from './astro/assets-service_Cm66OWsT.mjs';
import { c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';
import { u as unflatten } from './parse_D_DrAez1.mjs';

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:!1,immutable:!1};function m(e,t,o=g){const n=[],r=[];let s=!0;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=!0;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:!1,notLeaf:!0,notRoot:!0,isFirst:!1,isLast:!1,update:function(e,t=!1){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=!1);},delete:function(e){delete d.parent.node[d.key],e&&(h=!1);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=!1);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=!1;},block:function(){h=!1;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=!0,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return !1;t=t[n];}return !0}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:!0,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  params.set("importer", filePath);
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      const map = unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CONTACT_URL": "https://contact.lablnet.com/", "PUBLIC_RECAPTCHA_TOKEN": "6LcevvYhAAAAAG1MMRgl_fKqtGx6ZNv8KdnLSLic", "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = rawEntry.filePath ? updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap) : rawEntry.data;
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      if (entry2.filePath) {
        const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
        entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('./cryptography_B6Gmz2t3.mjs'),"/src/content/certificates/opensource.md": () => import('./opensource__EfvhVkh.mjs'),"/src/content/certificates/python.md": () => import('./python_Bn7Z_-ig.mjs'),"/src/content/companies/alphasofthub.md": () => import('./alphasofthub_lic-m-iG.mjs'),"/src/content/companies/alphaz.md": () => import('./alphaz_D74rUnED.mjs'),"/src/content/companies/direct.md": () => import('./direct_CyIo7Ufs.mjs'),"/src/content/companies/fiverr.md": () => import('./fiverr_BtRiSY-N.mjs'),"/src/content/companies/mennr.md": () => import('./mennr_THlTiKwk.mjs'),"/src/content/companies/projects.md": () => import('./projects_BxA8xhz2.mjs'),"/src/content/companies/resourcesr.md": () => import('./resourcesr_20yYjLqe.mjs'),"/src/content/companies/riphah.md": () => import('./riphah_Di_Et-VI.mjs'),"/src/content/companies/upwork.md": () => import('./upwork_BYPlwiWS.mjs'),"/src/content/educations/bachelor.md": () => import('./bachelor_C5R1iiV_.mjs'),"/src/content/educations/college.md": () => import('./college_D5tgTThn.mjs'),"/src/content/educations/school.md": () => import('./school_7Of9bur_.mjs'),"/src/content/projects/alphaz_app.md": () => import('./alphaz_app_BY-YVcY3.mjs'),"/src/content/projects/alphaz_com.md": () => import('./alphaz_com_BaOFTeS5.mjs'),"/src/content/projects/alphaz_framework.md": () => import('./alphaz_framework_Dxt2Wu3O.mjs'),"/src/content/projects/alphaz_website.md": () => import('./alphaz_website_BrmJ9WvP.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('./ash_alphasofthub_CWjp14Oc.mjs'),"/src/content/projects/ash_covid19.md": () => import('./ash_covid19_rR-OKCo3.mjs'),"/src/content/projects/ash_oldsite.md": () => import('./ash_oldsite_D-fut_L3.mjs'),"/src/content/projects/ash_validity.md": () => import('./ash_validity_x3cn3CZi.mjs'),"/src/content/projects/ash_webharvest.md": () => import('./ash_webharvest_D2QQCoKM.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('./direct_ lumberjackgame_BSL1j84M.mjs'),"/src/content/projects/direct_ainda.md": () => import('./direct_ainda_CBviEouy.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('./direct_spendbtc_Cg4l3F7q.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('./fiverr_bkash_UrpBM2_1.mjs'),"/src/content/projects/freelance_php.md": () => import('./freelance_php_C0f-JeB8.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('./mennr_crunchbase_C7wfl-VJ.mjs'),"/src/content/projects/other_alibabascraper.md": () => import('./other_alibabascraper_DqSQv2O2.mjs'),"/src/content/projects/others_board.md": () => import('./others_board_BBSPeuLz.mjs'),"/src/content/projects/others_easytools.md": () => import('./others_easytools_CSyPZL5A.mjs'),"/src/content/projects/others_fontpicker.md": () => import('./others_fontpicker_B0p-x226.mjs'),"/src/content/projects/others_prayertimes.md": () => import('./others_prayertimes_B7ldhGJu.mjs'),"/src/content/projects/others_resume.md": () => import('./others_resume_CQsKV7tp.mjs'),"/src/content/projects/others_snake.md": () => import('./others_snake_BFMF0DVD.mjs'),"/src/content/projects/others_tictactoe.md": () => import('./others_tictactoe_D2FUKCWN.mjs'),"/src/content/projects/others_upworkvis.md": () => import('./others_upworkvis_CU2fXEa9.mjs'),"/src/content/projects/others_weather.md": () => import('./others_weather_BDB1Dc2T.mjs'),"/src/content/projects/resourcesr_app.md": () => import('./resourcesr_app_Bt-OjEib.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('./resourcesr_cli_YEwbDoDs.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('./resourcesr_lite_CK2XiIZA.mjs'),"/src/content/projects/resourcesr_web.md": () => import('./resourcesr_web_D6SbiiZI.mjs'),"/src/content/projects/riu_alumni.md": () => import('./riu_alumni_CT0E1cSg.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('./upwork_ pythonconsulting_XE0n7iEJ.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('./upwork_alertsystem_D5czAci-.mjs'),"/src/content/projects/upwork_amazon.md": () => import('./upwork_amazon_PWlmiLaS.mjs'),"/src/content/projects/upwork_autotrader-scraper.md": () => import('./upwork_autotrader-scraper_BBUC62NP.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('./upwork_bungalowsoftware_BL3PftiF.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('./upwork_collaboration-app_9eb7xJ86.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('./upwork_democraticai_DtnKpkHk.mjs'),"/src/content/projects/upwork_df.md": () => import('./upwork_df_a0S6TPXP.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('./upwork_github_action_app_BSJikAdq.mjs'),"/src/content/projects/upwork_google-contact-sync.md": () => import('./upwork_google-contact-sync_B09Zz_k_.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('./upwork_leadcrm_CrwBin54.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('./upwork_munacjny_DiZ9EudK.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('./upwork_parkinglot_DNV7R_vM.mjs'),"/src/content/projects/upwork_replay.md": () => import('./upwork_replay_BR0ehjqJ.mjs'),"/src/content/projects/upwork_robotmk-curriculum.md": () => import('./upwork_robotmk-curriculum_DR3WKA-b.mjs'),"/src/content/projects/upwork_shine-hr.md": () => import('./upwork_shine-hr_DBjjfhwR.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('./upwork_weareappointments_D8cNPV7_.mjs'),"/src/content/skills/frameworks.md": () => import('./frameworks_CozBttEw.mjs'),"/src/content/skills/languages.md": () => import('./languages_DqFxy86a.mjs'),"/src/content/skills/tools.md": () => import('./tools_CfpFC2Kj.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"educations":{"type":"content","entries":{"bachelor":"/src/content/educations/bachelor.md","college":"/src/content/educations/college.md","school":"/src/content/educations/school.md"}},"certificates":{"type":"content","entries":{"opensource":"/src/content/certificates/opensource.md","python":"/src/content/certificates/python.md","cryptography":"/src/content/certificates/cryptography.md"}},"companies":{"type":"content","entries":{"alphasofthub":"/src/content/companies/alphasofthub.md","alphaz":"/src/content/companies/alphaz.md","direct":"/src/content/companies/direct.md","fiverr":"/src/content/companies/fiverr.md","mennr":"/src/content/companies/mennr.md","projects":"/src/content/companies/projects.md","riphah":"/src/content/companies/riphah.md","resourcesr":"/src/content/companies/resourcesr.md","upwork":"/src/content/companies/upwork.md"}},"skills":{"type":"content","entries":{"languages":"/src/content/skills/languages.md","frameworks":"/src/content/skills/frameworks.md","tools":"/src/content/skills/tools.md"}},"projects":{"type":"content","entries":{"alphaz_com":"/src/content/projects/alphaz_com.md","alphaz":"/src/content/projects/alphaz_app.md","alphaz_framework":"/src/content/projects/alphaz_framework.md","alphaz_web":"/src/content/projects/alphaz_website.md","ash_oldsite":"/src/content/projects/ash_oldsite.md","validity_ash":"/src/content/projects/ash_validity.md","alphasofthub_ash":"/src/content/projects/ash_alphasofthub.md","covid19_ash":"/src/content/projects/ash_covid19.md","webharvest":"/src/content/projects/ash_webharvest.md","direct_lumberjackgame":"/src/content/projects/direct_ lumberjackgame.md","direct_ainda":"/src/content/projects/direct_ainda.md","direct_spendbtc":"/src/content/projects/direct_spendbtc.md","freelance_php":"/src/content/projects/freelance_php.md","mennr_crunchbase":"/src/content/projects/mennr_crunchbase.md","alibabascraper":"/src/content/projects/other_alibabascraper.md","fiverr_bkash":"/src/content/projects/fiverr_bkash.md","board":"/src/content/projects/others_board.md","easytools":"/src/content/projects/others_easytools.md","fontpicker":"/src/content/projects/others_fontpicker.md","prayers_time":"/src/content/projects/others_prayertimes.md","resume":"/src/content/projects/others_resume.md","snack":"/src/content/projects/others_snake.md","tictactoe":"/src/content/projects/others_tictactoe.md","upwork_visualization":"/src/content/projects/others_upworkvis.md","weather":"/src/content/projects/others_weather.md","resourcesr":"/src/content/projects/resourcesr_app.md","resourcesr_cli":"/src/content/projects/resourcesr_cli.md","resourcesr_lite":"/src/content/projects/resourcesr_lite.md","resourcesr_web":"/src/content/projects/resourcesr_web.md","alumni_riu":"/src/content/projects/riu_alumni.md","upwork_alertsystem":"/src/content/projects/upwork_alertsystem.md","upwork_pythonconsulting":"/src/content/projects/upwork_ pythonconsulting.md","autotrader-scraper":"/src/content/projects/upwork_autotrader-scraper.md","upwork_bungalowsoftware":"/src/content/projects/upwork_bungalowsoftware.md","democraticai":"/src/content/projects/upwork_democraticai.md","collaboration-app":"/src/content/projects/upwork_collaboration-app.md","upwork_df":"/src/content/projects/upwork_df.md","github-action-and-github-app":"/src/content/projects/upwork_github_action_app.md","upwork_amazon":"/src/content/projects/upwork_amazon.md","google-contact-sync":"/src/content/projects/upwork_google-contact-sync.md","leadcrm":"/src/content/projects/upwork_leadcrm.md","upwork_munacjny":"/src/content/projects/upwork_munacjny.md","in-out-parking":"/src/content/projects/upwork_parkinglot.md","replay-connect":"/src/content/projects/upwork_replay.md","website-authentication-and-automation":"/src/content/projects/upwork_robotmk-curriculum.md","upwork_weareappointments":"/src/content/projects/upwork_weareappointments.md","shine-hr":"/src/content/projects/upwork_shine-hr.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('./cryptography_DFQAZknh.mjs'),"/src/content/certificates/opensource.md": () => import('./opensource_D0fsZAWr.mjs'),"/src/content/certificates/python.md": () => import('./python_wb2wcY9x.mjs'),"/src/content/companies/alphasofthub.md": () => import('./alphasofthub_C0tlKf8G.mjs'),"/src/content/companies/alphaz.md": () => import('./alphaz_DeUcS5N3.mjs'),"/src/content/companies/direct.md": () => import('./direct_CNswSzC3.mjs'),"/src/content/companies/fiverr.md": () => import('./fiverr_BTrFQ7MJ.mjs'),"/src/content/companies/mennr.md": () => import('./mennr_DE8V37gj.mjs'),"/src/content/companies/projects.md": () => import('./projects_BGVOcUIJ.mjs'),"/src/content/companies/resourcesr.md": () => import('./resourcesr_DR45UasP.mjs'),"/src/content/companies/riphah.md": () => import('./riphah_AVEgDcZu.mjs'),"/src/content/companies/upwork.md": () => import('./upwork_HjhA4wB1.mjs'),"/src/content/educations/bachelor.md": () => import('./bachelor_-TSewnCQ.mjs'),"/src/content/educations/college.md": () => import('./college_BidUibeL.mjs'),"/src/content/educations/school.md": () => import('./school_DIQjKHNh.mjs'),"/src/content/projects/alphaz_app.md": () => import('./alphaz_app_Cys3_KR3.mjs'),"/src/content/projects/alphaz_com.md": () => import('./alphaz_com_BFKfwvdT.mjs'),"/src/content/projects/alphaz_framework.md": () => import('./alphaz_framework_3HIxn1bs.mjs'),"/src/content/projects/alphaz_website.md": () => import('./alphaz_website_bqt9r5Od.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('./ash_alphasofthub_D3x91lBF.mjs'),"/src/content/projects/ash_covid19.md": () => import('./ash_covid19_G8MyM1FH.mjs'),"/src/content/projects/ash_oldsite.md": () => import('./ash_oldsite_CaQ7J-_e.mjs'),"/src/content/projects/ash_validity.md": () => import('./ash_validity_Bujo8fmY.mjs'),"/src/content/projects/ash_webharvest.md": () => import('./ash_webharvest_Cc6IH1QM.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('./direct_ lumberjackgame_DHgXkUfY.mjs'),"/src/content/projects/direct_ainda.md": () => import('./direct_ainda_CqDQC1z1.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('./direct_spendbtc_CLw7KKgK.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('./fiverr_bkash_bnYW08Lq.mjs'),"/src/content/projects/freelance_php.md": () => import('./freelance_php_BzyxtteQ.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('./mennr_crunchbase_CgoRuf7R.mjs'),"/src/content/projects/other_alibabascraper.md": () => import('./other_alibabascraper_B7RykqEA.mjs'),"/src/content/projects/others_board.md": () => import('./others_board_BHDkGOtt.mjs'),"/src/content/projects/others_easytools.md": () => import('./others_easytools_DGiwgbcc.mjs'),"/src/content/projects/others_fontpicker.md": () => import('./others_fontpicker_B639ciXx.mjs'),"/src/content/projects/others_prayertimes.md": () => import('./others_prayertimes_JqauYlnJ.mjs'),"/src/content/projects/others_resume.md": () => import('./others_resume_-jU40xsy.mjs'),"/src/content/projects/others_snake.md": () => import('./others_snake_CsBn-8Fq.mjs'),"/src/content/projects/others_tictactoe.md": () => import('./others_tictactoe_mz4oYbJF.mjs'),"/src/content/projects/others_upworkvis.md": () => import('./others_upworkvis_DEt99YJv.mjs'),"/src/content/projects/others_weather.md": () => import('./others_weather_tb8i10ED.mjs'),"/src/content/projects/resourcesr_app.md": () => import('./resourcesr_app_CDpxm12p.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('./resourcesr_cli_Bw2sN9Qx.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('./resourcesr_lite_0Sp4cROG.mjs'),"/src/content/projects/resourcesr_web.md": () => import('./resourcesr_web_BZBOOIsV.mjs'),"/src/content/projects/riu_alumni.md": () => import('./riu_alumni_Cuu6jki5.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('./upwork_ pythonconsulting_C1MJ9BQZ.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('./upwork_alertsystem_vwxQlhRI.mjs'),"/src/content/projects/upwork_amazon.md": () => import('./upwork_amazon_BevA4pZU.mjs'),"/src/content/projects/upwork_autotrader-scraper.md": () => import('./upwork_autotrader-scraper_5ZbqKY44.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('./upwork_bungalowsoftware_CrQWE4T1.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('./upwork_collaboration-app_CRnxIj_K.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('./upwork_democraticai_p2-D_7jj.mjs'),"/src/content/projects/upwork_df.md": () => import('./upwork_df_DfZpZuFS.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('./upwork_github_action_app_Dp3SbBhl.mjs'),"/src/content/projects/upwork_google-contact-sync.md": () => import('./upwork_google-contact-sync_BOEWriqU.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('./upwork_leadcrm_BwYVvRhT.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('./upwork_munacjny_yKbVSmGX.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('./upwork_parkinglot_DZwTRMJm.mjs'),"/src/content/projects/upwork_replay.md": () => import('./upwork_replay_9fFmK2mV.mjs'),"/src/content/projects/upwork_robotmk-curriculum.md": () => import('./upwork_robotmk-curriculum_DukIrsOV.mjs'),"/src/content/projects/upwork_shine-hr.md": () => import('./upwork_shine-hr_CHmwrr_3.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('./upwork_weareappointments_D2e5T78D.mjs'),"/src/content/skills/frameworks.md": () => import('./frameworks_4JWYg0p2.mjs'),"/src/content/skills/languages.md": () => import('./languages_DA3BZsQS.mjs'),"/src/content/skills/tools.md": () => import('./tools_z0B4wHhP.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

export { getCollection as a, getEntry as g };
