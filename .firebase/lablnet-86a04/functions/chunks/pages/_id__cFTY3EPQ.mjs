import { A as AstroError, i as UnknownContentCollectionError, d as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, f as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, h as addAttribute, e as renderSlot } from '../astro_Ohu8eKR9.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_7DdHun6X.mjs';
import { marked } from 'marked';
import { $ as $$Layout } from './404_gsirSl3u.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { getApps, initializeApp, cert } from 'firebase-admin/app';

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
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_Nzd72jV2.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource_TYQyUgka.mjs'),"/src/content/certificates/python.md": () => import('../python_N3JoxfaY.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_jDii3wW1.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_cF-gIEC9.mjs'),"/src/content/companies/direct.md": () => import('../direct_WPNMKJkz.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_KMODazHZ.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_guh-GfFA.mjs'),"/src/content/companies/projects.md": () => import('../projects_XsMBgv6_.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_f0nJDqmd.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_r3yKcgFz.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_HNVPnIl2.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_amdo1Pf9.mjs'),"/src/content/educations/college.md": () => import('../college_XEJVqBVp.mjs'),"/src/content/educations/school.md": () => import('../school__LG_krUS.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_9gbV-rG4.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_pzjbz8E7.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_5r7xSnT4.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_lPRfeUV8.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub_7V3mnFoX.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_3YGqEFGc.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_z_60HOwk.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_rdTbiWzd.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_fnCgBjU5.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_PyPIcz2b.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_BbRaeMtz.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_3nYWqzbw.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_JsCv0Dqs.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_-Q3rVPZ0.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_WUqKsv-1.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_CBHgUCdY.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools_LWoDBFYl.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_XkiwqwG_.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_FfdasRGa.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_03T2_5qI.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_oRND-0Od.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_cln8KTA2.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_V8VmCHVc.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_pFVGVNRR.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_Lsffzkpa.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_W5oP7r2A.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_c_WxC2fR.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_BWvEgkCS.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_7_X7zbkU.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_AmgwCjfl.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_YGE_RTxU.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_He6cvIXR.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_-PUiYeD7.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_o3GTZwZv.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_gfIg1cOQ.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_5cJ2uwo5.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_Kxxxu6lW.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_eNbVmWG0.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_sXS-x2iU.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_bhpM7jUx.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_jF2k1GsZ.mjs'),"/src/content/skills/languages.md": () => import('../languages_k7Jouq23.mjs'),"/src/content/skills/tools.md": () => import('../tools_mfTyVnA8.mjs')});
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
lookupMap = {"certificates":{"type":"content","entries":{"cryptography":"/src/content/certificates/cryptography.md","python":"/src/content/certificates/python.md","opensource":"/src/content/certificates/opensource.md"}},"companies":{"type":"content","entries":{"alphasofthub":"/src/content/companies/alphasofthub.md","direct":"/src/content/companies/direct.md","alphaz":"/src/content/companies/alphaz.md","resourcesr":"/src/content/companies/resourcesr.md","projects":"/src/content/companies/projects.md","mennr":"/src/content/companies/mennr.md","fiverr":"/src/content/companies/fiverr.md","upwork":"/src/content/companies/upwork.md","riphah":"/src/content/companies/riphah.md"}},"skills":{"type":"content","entries":{"frameworks":"/src/content/skills/frameworks.md","tools":"/src/content/skills/tools.md","languages":"/src/content/skills/languages.md"}},"educations":{"type":"content","entries":{"bachelor":"/src/content/educations/bachelor.md","college":"/src/content/educations/college.md","school":"/src/content/educations/school.md"}},"projects":{"type":"content","entries":{"alphaz":"/src/content/projects/alphaz_app.md","alphaz_com":"/src/content/projects/alphaz_com.md","alphasofthub_ash":"/src/content/projects/ash_alphasofthub.md","alphaz_framework":"/src/content/projects/alphaz_framework.md","ash_oldsite":"/src/content/projects/ash_oldsite.md","covid19_ash":"/src/content/projects/ash_covid19.md","alphaz_web":"/src/content/projects/alphaz_website.md","webharvest":"/src/content/projects/ash_webharvest.md","direct_spendbtc":"/src/content/projects/direct_spendbtc.md","direct_lumberjackgame":"/src/content/projects/direct_ lumberjackgame.md","direct_ainda":"/src/content/projects/direct_ainda.md","validity_ash":"/src/content/projects/ash_validity.md","fiverr_bkash":"/src/content/projects/fiverr_bkash.md","mennr_crunchbase":"/src/content/projects/mennr_crunchbase.md","board":"/src/content/projects/others_board.md","easytools":"/src/content/projects/others_easytools.md","freelance_php":"/src/content/projects/freelance_php.md","fontpicker":"/src/content/projects/others_fontpicker.md","snack":"/src/content/projects/others_snake.md","prayers_time":"/src/content/projects/others_prayertimes.md","resume":"/src/content/projects/others_resume.md","tictactoe":"/src/content/projects/others_tictactoe.md","upwork_visualization":"/src/content/projects/others_upworkvis.md","weather":"/src/content/projects/others_weather.md","resourcesr_lite":"/src/content/projects/resourcesr_lite.md","resourcesr":"/src/content/projects/resourcesr_app.md","resourcesr_web":"/src/content/projects/resourcesr_web.md","resourcesr_cli":"/src/content/projects/resourcesr_cli.md","upwork_pythonconsulting":"/src/content/projects/upwork_ pythonconsulting.md","upwork_alertsystem":"/src/content/projects/upwork_alertsystem.md","alumni_riu":"/src/content/projects/riu_alumni.md","upwork_bungalowsoftware":"/src/content/projects/upwork_bungalowsoftware.md","collaboration-app":"/src/content/projects/upwork_collaboration-app.md","democraticai":"/src/content/projects/upwork_democraticai.md","github-action-and-github-app":"/src/content/projects/upwork_github_action_app.md","leadcrm":"/src/content/projects/upwork_leadcrm.md","upwork_munacjny":"/src/content/projects/upwork_munacjny.md","in-out-parking":"/src/content/projects/upwork_parkinglot.md","replay-connect":"/src/content/projects/upwork_replay.md","upwork_weareappointments":"/src/content/projects/upwork_weareappointments.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_N_KBaHS0.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource_5vmWoAJP.mjs'),"/src/content/certificates/python.md": () => import('../python_D2E8U_0l.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_1LAd_pby.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_nIhIago8.mjs'),"/src/content/companies/direct.md": () => import('../direct_5PlARRjG.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_YoLRr8d4.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_EVuPQ6MP.mjs'),"/src/content/companies/projects.md": () => import('../projects_oNKOUcYf.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_leM_64ym.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_sMMcQz_P.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_B_uVQ4UQ.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_-qSoU3ip.mjs'),"/src/content/educations/college.md": () => import('../college_yzI1WpWC.mjs'),"/src/content/educations/school.md": () => import('../school_Crf459MY.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_F4cvNtYL.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_yQvIqV3z.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_N8YfmhXk.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_2bhXxiDH.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub_ZCfRXLnh.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_VBHBsxXS.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_PjezzCCz.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_emxeALAW.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_Uf4XJ9pA.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_FMOnH64O.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_DavH7UkI.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_ZyGinul4.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_5KFL7Hw5.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_oXE1HXSz.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_TuJns1-h.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_7q4F65FN.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools_AU-0G5sz.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_JokkgRBK.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_aUN8ZWNp.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_I_MEkILs.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_4lYFU9UL.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_eQCW_4dG.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_JqlWyKFM.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_OeQzSK9b.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_i-qMzjkf.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_ZHPYmdsj.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_ztqrDhMd.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_oG7LyHVQ.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_odcymY60.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_vKR7AkhE.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_kMyhxauM.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_S_VX6dwD.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_3VoxhzS9.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_knkZGb37.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_E2IfE-iY.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_9svoG1_n.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_MFB0_Law.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_zzku9908.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_WyLUYKP9.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_EQYG8pBU.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_NLm2iSHu.mjs'),"/src/content/skills/languages.md": () => import('../languages_xJA0-8o_.mjs'),"/src/content/skills/tools.md": () => import('../tools_de5OBZ8l.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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

const $$Astro$1 = createAstro();
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, subtitle, coverPic = null } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <section class="py-10 px-5"> ${coverPic && renderTemplate`<section class="hero container max-w-screen-lg mx-auto pb-10"> <img class="rounded object-cover !m-0"${addAttribute(coverPic, "src")}> </section>`} <section> ${title && renderTemplate`<div class="container"> <h1 class="title dark:text-gray-300">${title}</h1> ${subtitle && renderTemplate`<p class="prose ml-2 text-justify mb-6 dark:text-gray-300">${subtitle}</p>`} </div>`} <hr class="mt-9 mb-4"> ${renderSlot($$result, $$slots["default"])} </section> </section> </div>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostLayout.astro", void 0);

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_PROJECT_ID,
  private_key_id: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_PRIVATE_KEY_ID,
  private_key: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_PRIVATE_KEY,
  client_email: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_CLIENT_EMAIL,
  client_id: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_CLIENT_ID,
  auth_uri: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_AUTH_URI,
  token_uri: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_TOKEN_URI,
  auth_provider_x509_cert_url: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_AUTH_CERT_URL,
  client_x509_cert_url: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FB_CLIENT_CERT_URL
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

export { $$PostLayout as $, _id_ as _, getEntry as a, compareByDate as c, df as d, getCollection as g };
