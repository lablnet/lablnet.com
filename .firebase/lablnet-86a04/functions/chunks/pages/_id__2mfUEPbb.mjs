import { A as AstroError, i as UnknownContentCollectionError, c as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, e as renderComponent, u as unescapeHTML, m as maybeRenderHead, g as addAttribute, d as renderSlot, h as createAstro } from '../astro_D8mEBU6v.mjs';
import { $ as $$Layout } from './404_D787L4vU.mjs';
import { AsyncResource } from 'async_hooks';
import { p as prependForwardSlash } from '../astro/assets-service_BIj-IH1G.mjs';
import { marked } from 'marked';
import { getFirestore } from 'firebase-admin/firestore';
import { getApps, initializeApp, cert } from 'firebase-admin/app';

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
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (function_, resolve, arguments_) => {
		activeCount++;

		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		queue.enqueue(
			AsyncResource.bind(run.bind(undefined, function_, resolve, arguments_)),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
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
	});

	return generator;
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
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
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
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
    if (!Object.assign({"PUBLIC_CONTACT_URL": "https://contact.lablnet.com/", "PUBLIC_RECAPTCHA_TOKEN": "6LcevvYhAAAAAG1MMRgl_fKqtGx6ZNv8KdnLSLic", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
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
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
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
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
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
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_B6Gmz2t3.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource__EfvhVkh.mjs'),"/src/content/certificates/python.md": () => import('../python_Bn7Z_-ig.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_lic-m-iG.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_D74rUnED.mjs'),"/src/content/companies/direct.md": () => import('../direct_CyIo7Ufs.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_BtRiSY-N.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_THlTiKwk.mjs'),"/src/content/companies/projects.md": () => import('../projects_BxA8xhz2.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_20yYjLqe.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_Di_Et-VI.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_BYPlwiWS.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_C5R1iiV_.mjs'),"/src/content/educations/college.md": () => import('../college_D5tgTThn.mjs'),"/src/content/educations/school.md": () => import('../school_7Of9bur_.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_BY-YVcY3.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_BaOFTeS5.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_Dxt2Wu3O.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_BrmJ9WvP.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub_CWjp14Oc.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_rR-OKCo3.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_D-fut_L3.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_x3cn3CZi.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_D2QQCoKM.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_BSL1j84M.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_CBviEouy.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_Cg4l3F7q.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_UrpBM2_1.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_C0f-JeB8.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_C7wfl-VJ.mjs'),"/src/content/projects/other_alibabascraper.md": () => import('../other_alibabascraper_DqSQv2O2.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_BBSPeuLz.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools_CSyPZL5A.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_B0p-x226.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_B7ldhGJu.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_CQsKV7tp.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_BFMF0DVD.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_D2FUKCWN.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_CU2fXEa9.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_BDB1Dc2T.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_Bt-OjEib.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_YEwbDoDs.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_CK2XiIZA.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_D6SbiiZI.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_CT0E1cSg.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_XE0n7iEJ.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_D5czAci-.mjs'),"/src/content/projects/upwork_autotrader-scraper.md": () => import('../upwork_autotrader-scraper_BBUC62NP.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_BL3PftiF.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_9eb7xJ86.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_DtnKpkHk.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_BSJikAdq.mjs'),"/src/content/projects/upwork_google-contact-sync.md": () => import('../upwork_google-contact-sync_B09Zz_k_.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_CrwBin54.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_DiZ9EudK.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_C_Mf2s74.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_BR0ehjqJ.mjs'),"/src/content/projects/upwork_robotmk-curriculum.md": () => import('../upwork_robotmk-curriculum_DR3WKA-b.mjs'),"/src/content/projects/upwork_shine-hr.md": () => import('../upwork_shine-hr_DBjjfhwR.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_D8cNPV7_.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_CozBttEw.mjs'),"/src/content/skills/languages.md": () => import('../languages_DqFxy86a.mjs'),"/src/content/skills/tools.md": () => import('../tools_CfpFC2Kj.mjs')});
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
lookupMap = {"certificates":{"type":"content","entries":{"opensource":"/src/content/certificates/opensource.md","python":"/src/content/certificates/python.md","cryptography":"/src/content/certificates/cryptography.md"}},"companies":{"type":"content","entries":{"alphaz":"/src/content/companies/alphaz.md","alphasofthub":"/src/content/companies/alphasofthub.md","fiverr":"/src/content/companies/fiverr.md","mennr":"/src/content/companies/mennr.md","projects":"/src/content/companies/projects.md","resourcesr":"/src/content/companies/resourcesr.md","direct":"/src/content/companies/direct.md","riphah":"/src/content/companies/riphah.md","upwork":"/src/content/companies/upwork.md"}},"educations":{"type":"content","entries":{"bachelor":"/src/content/educations/bachelor.md","college":"/src/content/educations/college.md","school":"/src/content/educations/school.md"}},"skills":{"type":"content","entries":{"frameworks":"/src/content/skills/frameworks.md","languages":"/src/content/skills/languages.md","tools":"/src/content/skills/tools.md"}},"projects":{"type":"content","entries":{"alphaz":"/src/content/projects/alphaz_app.md","alphaz_com":"/src/content/projects/alphaz_com.md","alphaz_web":"/src/content/projects/alphaz_website.md","alphasofthub_ash":"/src/content/projects/ash_alphasofthub.md","covid19_ash":"/src/content/projects/ash_covid19.md","ash_oldsite":"/src/content/projects/ash_oldsite.md","validity_ash":"/src/content/projects/ash_validity.md","direct_lumberjackgame":"/src/content/projects/direct_ lumberjackgame.md","direct_ainda":"/src/content/projects/direct_ainda.md","direct_spendbtc":"/src/content/projects/direct_spendbtc.md","webharvest":"/src/content/projects/ash_webharvest.md","alphaz_framework":"/src/content/projects/alphaz_framework.md","freelance_php":"/src/content/projects/freelance_php.md","fiverr_bkash":"/src/content/projects/fiverr_bkash.md","board":"/src/content/projects/others_board.md","easytools":"/src/content/projects/others_easytools.md","fontpicker":"/src/content/projects/others_fontpicker.md","resume":"/src/content/projects/others_resume.md","snack":"/src/content/projects/others_snake.md","prayers_time":"/src/content/projects/others_prayertimes.md","alibabascraper":"/src/content/projects/other_alibabascraper.md","mennr_crunchbase":"/src/content/projects/mennr_crunchbase.md","tictactoe":"/src/content/projects/others_tictactoe.md","upwork_visualization":"/src/content/projects/others_upworkvis.md","weather":"/src/content/projects/others_weather.md","resourcesr":"/src/content/projects/resourcesr_app.md","resourcesr_lite":"/src/content/projects/resourcesr_lite.md","resourcesr_cli":"/src/content/projects/resourcesr_cli.md","resourcesr_web":"/src/content/projects/resourcesr_web.md","alumni_riu":"/src/content/projects/riu_alumni.md","upwork_pythonconsulting":"/src/content/projects/upwork_ pythonconsulting.md","upwork_alertsystem":"/src/content/projects/upwork_alertsystem.md","autotrader-scraper":"/src/content/projects/upwork_autotrader-scraper.md","upwork_bungalowsoftware":"/src/content/projects/upwork_bungalowsoftware.md","collaboration-app":"/src/content/projects/upwork_collaboration-app.md","democraticai":"/src/content/projects/upwork_democraticai.md","github-action-and-github-app":"/src/content/projects/upwork_github_action_app.md","google-contact-sync":"/src/content/projects/upwork_google-contact-sync.md","upwork_munacjny":"/src/content/projects/upwork_munacjny.md","in-out-parking":"/src/content/projects/upwork_parkinglot.md","leadcrm":"/src/content/projects/upwork_leadcrm.md","replay-connect":"/src/content/projects/upwork_replay.md","website-authentication-and-automation":"/src/content/projects/upwork_robotmk-curriculum.md","shine-hr":"/src/content/projects/upwork_shine-hr.md","upwork_weareappointments":"/src/content/projects/upwork_weareappointments.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_CqTEHPw4.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource_DoB3o_dt.mjs'),"/src/content/certificates/python.md": () => import('../python_BLs5k0sg.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_qef5qwwf.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_5o0XF6sM.mjs'),"/src/content/companies/direct.md": () => import('../direct_2NVj7JPO.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_CG2-3nv5.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_ChowlIkQ.mjs'),"/src/content/companies/projects.md": () => import('../projects_Z5WEmaYg.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_CskNI9Za.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_ChUsaPyH.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_BfOY4r1k.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_DsZKyi7b.mjs'),"/src/content/educations/college.md": () => import('../college_CoDywWKA.mjs'),"/src/content/educations/school.md": () => import('../school_CZeXdAvZ.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_CZVQAaUi.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_DaZWtimR.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_BI2wFqAi.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_LpM0y5Uc.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub_DdJ1qZ9v.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_DMR7mmMG.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_DyzmsMj9.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_Dfm99pQt.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_DzwTmUV2.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_B_8VVxYx.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_04E6bHun.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_DMqbtpUl.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_DJ3oWDkX.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_Ikf7YJJB.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_BZNDIlbd.mjs'),"/src/content/projects/other_alibabascraper.md": () => import('../other_alibabascraper_DjMet6xN.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_DnuJpIuq.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools_gc2gSccX.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_AW3rwI5y.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_CcTgWcMF.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_D9GQRWUm.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_C_1_a0Tr.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_B1cHJAjH.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_C0MWdMet.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_D8El3zhY.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_BAIm0nZv.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_PeMmswKl.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_C6VH_Dec.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_DXVOY9B6.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_DrL0lIAK.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_BeDrcDge.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_B4V3rxYU.mjs'),"/src/content/projects/upwork_autotrader-scraper.md": () => import('../upwork_autotrader-scraper_DplqJXLu.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_B_oGK7yf.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_CPd3cWsY.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_8YjimbOO.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_BtkaoF4x.mjs'),"/src/content/projects/upwork_google-contact-sync.md": () => import('../upwork_google-contact-sync_Cwqx9qwx.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_Dt3VEOku.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_Bls3yfF4.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_DoJwXTHD.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_C8bHwDvZ.mjs'),"/src/content/projects/upwork_robotmk-curriculum.md": () => import('../upwork_robotmk-curriculum_BLz-6DLZ.mjs'),"/src/content/projects/upwork_shine-hr.md": () => import('../upwork_shine-hr_DesNA_YY.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_CRAyLGAo.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_2YThpgLE.mjs'),"/src/content/skills/languages.md": () => import('../languages_CgijA6Dx.mjs'),"/src/content/skills/tools.md": () => import('../tools_BjXglQkb.mjs')});
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
});

const $$Astro$2 = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, subtitle, coverPic = null } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <section class="py-10 px-5"> ${coverPic && renderTemplate`<section class="hero container max-w-screen-lg mx-auto pb-10"> <img class="rounded object-cover !m-0"${addAttribute(coverPic, "src")}> </section>`} <section> ${title && renderTemplate`<div class="container"> <h1 class="title dark:text-gray-300">${title}</h1> ${subtitle && renderTemplate`<p class="prose ml-2 text-justify mb-6 dark:text-gray-300">${subtitle}</p>`} </div>`} <hr class="mt-9 mb-4"> ${renderSlot($$result, $$slots["default"])} </section> </section> </div>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostLayout.astro", void 0);

const $$Astro$1 = createAstro();
async function getStaticPaths() {
  let companies = await getCollection("companies", (p) => !p.data.draft);
  return companies.map((entity) => ({
    params: { id: entity.id }
  }));
}
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const project = await getEntry("projects", id);
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.data.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": "Project" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": project.data.subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "coverPic": project.data.coverPic, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} ${maybeRenderHead()}<div class="mt-4 prose dark:text-gray-300"> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/project/[id].astro", void 0);

const $$file$1 = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/project/[id].astro";
const $$url$1 = "/project/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const df = new Intl.DateTimeFormat(void 0, {
  month: "short",
  year: "numeric"
});
const compareByDate = (a, b) => {
  if (!b.data.endDate && !a.data.endDate) {
    return +b.data.startDate - +a.data.startDate;
  }
  if (!b.data.endDate) {
    return 1;
  }
  if (!a.data.endDate) {
    return -1;
  }
  return +b.data.endDate - +a.data.endDate;
};

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "lablnet-86a04",
  private_key_id: "3c596a84ca4e7d56597f091d41e09bb1b232455c",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIWHhsA2excisG\nsU9Nmb/IBcF2/eyEfZF7dFfcD03/7uy9X8++HUrMD9qHqMRZrhtzUYqhoJIC8jLr\n9x7aPo7QbnKB+iG3RlLJ3OHosa5CR6oJCJ7GIYdeF8ZWvAr5m42DOz4b4Ddh+V37\nd47uDv9kkDmHs14KE+KInwd1KIbm4qprvs2xUBl34qgt10pJyjIcua5ZPZJhNQvV\n2YcTiWL7kIN1bzNil671owD3K64XqtWLeKAL6Ff4jQKDuI5KCciRg3HT7Z0OjsQ+\n4JL6YTqoX2klm2K8SHmY382+fVlRsUtP/oTe4U70QQLrhU2AqT3ohhqzN/YSK0Hj\noELEJSzDAgMBAAECggEASyLW4tdyE5v4I/XqgnVndfomoNxBUD0RiyXKb5bzz0jJ\nU4pzzF6K9zX45Ii4PtPrqpeJsO0Z5W31CAbxdLMid2v8mN94tpXypY8n0E+WxXe/\n/sxTU4YukOzErzGtwggDDhTxSZ4Q1zcg9pbTrVdFk+79DHYKDih//HH754Xv9fWh\nPyZe4yRP0K5PCuHLcHygFDddOK1vbIaYJgoCQsqgOcnLkiYUrcyZNNqoyVMZOv9O\neky4GHCvDMm0yvXET2mSRzWGG/eEaSvmDxWBSk27HDsKoZQmMr/OIQ37BKqPCmDt\n42keDQrWh049rnrx8/D87LZkhERCK/jq9XRJAgYLSQKBgQDnySeQXQPVy5EukBaR\ntVyYknejKKmNQRZGG+gik1H9cz/+3UlQ4OCVc6ymo4/jfgQfBLcRcbpyMvTNKe/1\nmJESrhZgfE5WNsp3YCUs1fcGlj4jJxarOsfAUxS1o2e1Y7yWLCMqT5EeaqdJBU12\nsPH324CP1Q5vcxc2fr+h69hwawKBgQDdRnv98JT/Oh7JAdfhyUViaXMMvxfkFmr5\n8Y+GP961ISMmJsHEPX14U56VkhvNyVAKLvX8Luac/OYVximdcjQB1giccVuaQ8H+\n+3kliUYv56ykERTRrmzgx84VKsUGz4w/JgXy4uukTN6WzorI1GH59nfzRwS6aR02\nAXE72MXrCQKBgQC2NiwkEPsy1xUKxbr4UNq6Fmp2mUCxCrm347hZdfa+iBuG/+7i\n5eWnl4fieDJlZGtY9xvzWrR3khdgMdex+n4RcUmmEBKFNA12St7uoEXRp8qxV8k6\nUrs1NhrRr+OXdRCL/aanXGV4w98+SCzdYbzWXHh0mcj/VDqrXHjJkd5UgQKBgGOD\nqYvhQQEwAFxiKdbvj/bcedOHtZTsyBu0mdnEq8JGLuqfj5FUHjOZV77owPxhx09t\nI0/RQAHmcwvj3R9kFyOkQKcrDAlq47prGmbZP+mXhbsbu4M5sNm+wl4eqBGSEf7s\neMxtZZC0yX6FUUFU0uN6ByQwEl5Lm8mICIbjzM8RAoGBAI51Q4sTbJAnrTGWy0NO\ngeyRrXXJ8KEoHvs71kBbuF8SRWFfNXUSlrTHuPyD+DdNFx9aUYQXOBmiAruKLXnz\nGnzQNw5Skzhih3AzhmqegEtgfx5mP48iK4oj4eAjhtil+/dx3gdM64k7f79cW4/t\nX1ls1/4cxB4EmBWy3VKIRNhm\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-jzfx9@lablnet-86a04.iam.gserviceaccount.com",
  client_id: "112081111171351177610",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jzfx9%40lablnet-86a04.iam.gserviceaccount.com"
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const friendsRef = db.collection("share");
  const docSnap = await friendsRef.doc(id).get();
  const data = docSnap.data();
  if (!docSnap.exists) {
    return Astro2.redirect("/404");
  }
  let projects = await getCollection("projects", (p) => data.projects.includes(p.slug));
  projects.sort(compareByDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shared Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": "Shared Projects", "subtitle": "" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="prose">${unescapeHTML(marked(data.message))}</div> <hr class="my-8"> ${projects.map(async (project) => {
    const { Content } = await project.render();
    let endDate = project.data.endDate ? df.format(project.data.endDate) : "Present";
    let subtitle = `${df.format(project.data.startDate)} - ${endDate}`;
    return renderTemplate`<div> ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} <div class="mt-4 prose dark:text-gray-300"> ${renderComponent($$result3, "Content", Content, {})} </div> <hr class="mt-12 mb-4"> </div>`;
  })}` })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/share/[id].astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/share/[id].astro";
const $$url = "/share/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostLayout as $, _id_$1 as _, getEntry as a, _id_ as b, compareByDate as c, df as d, getCollection as g };
