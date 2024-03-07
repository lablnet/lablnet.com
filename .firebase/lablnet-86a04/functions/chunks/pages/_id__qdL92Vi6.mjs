import { A as AstroError, i as UnknownContentCollectionError, d as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, f as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, h as addAttribute, e as renderSlot } from '../astro_Ohu8eKR9.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_7DdHun6X.mjs';
import { marked } from 'marked';
import { $ as $$Layout } from './404_cHsX9yog.mjs';
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
    if (!Object.assign({"PUBLIC_CONTACT_URL": "https://contact.lablnet.com/", "PUBLIC_RECAPTCHA_TOKEN": "6LcevvYhAAAAAG1MMRgl_fKqtGx6ZNv8KdnLSLic", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_aQtXVAWH.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource_B-nppodF.mjs'),"/src/content/certificates/python.md": () => import('../python_5xcj8Kon.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_6iTRl7gX.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_v39N9vEt.mjs'),"/src/content/companies/direct.md": () => import('../direct_ktPq_HFV.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_W49nNLaH.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_AixeAfKk.mjs'),"/src/content/companies/projects.md": () => import('../projects__YgqAYqk.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_DxeBnZKn.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_WSMPwZZo.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_MSmIxWTG.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_X1e73mb6.mjs'),"/src/content/educations/college.md": () => import('../college_ZPnfPTog.mjs'),"/src/content/educations/school.md": () => import('../school_Dw9FUdds.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_uD9_BJF1.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_Zmn0Eqfe.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_Mnp2oy3X.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_0Ja-ihXt.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub__MHoTnpb.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_Mq7YcJj0.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_8rNo-rn8.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_weanqc6c.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_iAvlrGDx.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_tf_GeY8F.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_5HObzlbC.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_ubt-ry8_.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_gdcFtXEs.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_29yPHInO.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_CPivaOo2.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_jB-B7xHZ.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools_jOvWCbPB.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_QzroneES.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_QZv7DDqt.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_EWubUvYA.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_KMRnKFyX.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_vPcGNikQ.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_v4YJBfZA.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_eNWmBMe3.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_3rW5cHs4.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_HbcelwWN.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_65DIdVGf.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_yL3FzrwC.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_IOn6i6Ec.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_CAXZGrm-.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_cnCKNFip.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_Jq4MnhX-.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_jflSfleH.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_Cx_SbKEi.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_rCKPkaHt.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_cTv_CLCY.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_7twtNoRd.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_6p0DzoHc.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_r0_H102J.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_-GtfmoFJ.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_Yxq0cQnt.mjs'),"/src/content/skills/languages.md": () => import('../languages_ayjB26-g.mjs'),"/src/content/skills/tools.md": () => import('../tools_yg1J29nr.mjs')});
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
lookupMap = {"certificates":{"type":"content","entries":{"cryptography":"/src/content/certificates/cryptography.md","python":"/src/content/certificates/python.md","opensource":"/src/content/certificates/opensource.md"}},"companies":{"type":"content","entries":{"alphaz":"/src/content/companies/alphaz.md","direct":"/src/content/companies/direct.md","fiverr":"/src/content/companies/fiverr.md","alphasofthub":"/src/content/companies/alphasofthub.md","projects":"/src/content/companies/projects.md","mennr":"/src/content/companies/mennr.md","resourcesr":"/src/content/companies/resourcesr.md","upwork":"/src/content/companies/upwork.md","riphah":"/src/content/companies/riphah.md"}},"educations":{"type":"content","entries":{"bachelor":"/src/content/educations/bachelor.md","college":"/src/content/educations/college.md","school":"/src/content/educations/school.md"}},"skills":{"type":"content","entries":{"frameworks":"/src/content/skills/frameworks.md","languages":"/src/content/skills/languages.md","tools":"/src/content/skills/tools.md"}},"projects":{"type":"content","entries":{"alphaz":"/src/content/projects/alphaz_app.md","alphaz_com":"/src/content/projects/alphaz_com.md","alphaz_framework":"/src/content/projects/alphaz_framework.md","alphaz_web":"/src/content/projects/alphaz_website.md","alphasofthub_ash":"/src/content/projects/ash_alphasofthub.md","covid19_ash":"/src/content/projects/ash_covid19.md","ash_oldsite":"/src/content/projects/ash_oldsite.md","validity_ash":"/src/content/projects/ash_validity.md","direct_lumberjackgame":"/src/content/projects/direct_ lumberjackgame.md","webharvest":"/src/content/projects/ash_webharvest.md","direct_ainda":"/src/content/projects/direct_ainda.md","direct_spendbtc":"/src/content/projects/direct_spendbtc.md","fiverr_bkash":"/src/content/projects/fiverr_bkash.md","freelance_php":"/src/content/projects/freelance_php.md","board":"/src/content/projects/others_board.md","mennr_crunchbase":"/src/content/projects/mennr_crunchbase.md","easytools":"/src/content/projects/others_easytools.md","fontpicker":"/src/content/projects/others_fontpicker.md","prayers_time":"/src/content/projects/others_prayertimes.md","resume":"/src/content/projects/others_resume.md","snack":"/src/content/projects/others_snake.md","tictactoe":"/src/content/projects/others_tictactoe.md","upwork_visualization":"/src/content/projects/others_upworkvis.md","weather":"/src/content/projects/others_weather.md","resourcesr":"/src/content/projects/resourcesr_app.md","resourcesr_cli":"/src/content/projects/resourcesr_cli.md","upwork_pythonconsulting":"/src/content/projects/upwork_ pythonconsulting.md","upwork_bungalowsoftware":"/src/content/projects/upwork_bungalowsoftware.md","upwork_alertsystem":"/src/content/projects/upwork_alertsystem.md","alumni_riu":"/src/content/projects/riu_alumni.md","resourcesr_web":"/src/content/projects/resourcesr_web.md","resourcesr_lite":"/src/content/projects/resourcesr_lite.md","collaboration-app":"/src/content/projects/upwork_collaboration-app.md","github-action-and-github-app":"/src/content/projects/upwork_github_action_app.md","democraticai":"/src/content/projects/upwork_democraticai.md","upwork_munacjny":"/src/content/projects/upwork_munacjny.md","in-out-parking":"/src/content/projects/upwork_parkinglot.md","leadcrm":"/src/content/projects/upwork_leadcrm.md","replay-connect":"/src/content/projects/upwork_replay.md","upwork_weareappointments":"/src/content/projects/upwork_weareappointments.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/certificates/cryptography.md": () => import('../cryptography_v8MoS0nz.mjs'),"/src/content/certificates/opensource.md": () => import('../opensource_D35ccbxX.mjs'),"/src/content/certificates/python.md": () => import('../python_yQH6mGSl.mjs'),"/src/content/companies/alphasofthub.md": () => import('../alphasofthub_oT_W32X7.mjs'),"/src/content/companies/alphaz.md": () => import('../alphaz_2r8v-mdY.mjs'),"/src/content/companies/direct.md": () => import('../direct_KgeC2LLT.mjs'),"/src/content/companies/fiverr.md": () => import('../fiverr_Tsksa6eD.mjs'),"/src/content/companies/mennr.md": () => import('../mennr_afqxU72I.mjs'),"/src/content/companies/projects.md": () => import('../projects_3pOboQO6.mjs'),"/src/content/companies/resourcesr.md": () => import('../resourcesr_dPyoPX2a.mjs'),"/src/content/companies/riphah.md": () => import('../riphah_wOeezg_i.mjs'),"/src/content/companies/upwork.md": () => import('../upwork_NxYPhGSv.mjs'),"/src/content/educations/bachelor.md": () => import('../bachelor_c2jhsaDW.mjs'),"/src/content/educations/college.md": () => import('../college_eQy_GkMo.mjs'),"/src/content/educations/school.md": () => import('../school_cukH6pI2.mjs'),"/src/content/projects/alphaz_app.md": () => import('../alphaz_app_zHvnUJN4.mjs'),"/src/content/projects/alphaz_com.md": () => import('../alphaz_com_kvzugV8E.mjs'),"/src/content/projects/alphaz_framework.md": () => import('../alphaz_framework_x98rNchE.mjs'),"/src/content/projects/alphaz_website.md": () => import('../alphaz_website_7CC4OUcJ.mjs'),"/src/content/projects/ash_alphasofthub.md": () => import('../ash_alphasofthub_Nv6owsox.mjs'),"/src/content/projects/ash_covid19.md": () => import('../ash_covid19_gew0vsOf.mjs'),"/src/content/projects/ash_oldsite.md": () => import('../ash_oldsite_WNowJ9pS.mjs'),"/src/content/projects/ash_validity.md": () => import('../ash_validity_RoomcPkP.mjs'),"/src/content/projects/ash_webharvest.md": () => import('../ash_webharvest_t1nlrzgM.mjs'),"/src/content/projects/direct_ lumberjackgame.md": () => import('../direct_ lumberjackgame_L6-GR5C0.mjs'),"/src/content/projects/direct_ainda.md": () => import('../direct_ainda_tpeGHD1l.mjs'),"/src/content/projects/direct_spendbtc.md": () => import('../direct_spendbtc_MxyS0YBZ.mjs'),"/src/content/projects/fiverr_bkash.md": () => import('../fiverr_bkash_bxaRyk0n.mjs'),"/src/content/projects/freelance_php.md": () => import('../freelance_php_wXPcDa7u.mjs'),"/src/content/projects/mennr_crunchbase.md": () => import('../mennr_crunchbase_egzliS8O.mjs'),"/src/content/projects/others_board.md": () => import('../others_board_62Fx6ZXC.mjs'),"/src/content/projects/others_easytools.md": () => import('../others_easytools__6Gnjc8w.mjs'),"/src/content/projects/others_fontpicker.md": () => import('../others_fontpicker_p2T5BxkI.mjs'),"/src/content/projects/others_prayertimes.md": () => import('../others_prayertimes_FfcE9rh8.mjs'),"/src/content/projects/others_resume.md": () => import('../others_resume_Z21j2mHD.mjs'),"/src/content/projects/others_snake.md": () => import('../others_snake_bxW1yIZK.mjs'),"/src/content/projects/others_tictactoe.md": () => import('../others_tictactoe_l8HGgDZI.mjs'),"/src/content/projects/others_upworkvis.md": () => import('../others_upworkvis_XML_PKIp.mjs'),"/src/content/projects/others_weather.md": () => import('../others_weather_rkYjNQXa.mjs'),"/src/content/projects/resourcesr_app.md": () => import('../resourcesr_app_3fxJY-pt.mjs'),"/src/content/projects/resourcesr_cli.md": () => import('../resourcesr_cli_5ZTBrUJW.mjs'),"/src/content/projects/resourcesr_lite.md": () => import('../resourcesr_lite_43uHEENX.mjs'),"/src/content/projects/resourcesr_web.md": () => import('../resourcesr_web_ZTf3IyWY.mjs'),"/src/content/projects/riu_alumni.md": () => import('../riu_alumni_QQalfxqs.mjs'),"/src/content/projects/upwork_ pythonconsulting.md": () => import('../upwork_ pythonconsulting_OUk6yPlJ.mjs'),"/src/content/projects/upwork_alertsystem.md": () => import('../upwork_alertsystem_q_mAXWPL.mjs'),"/src/content/projects/upwork_bungalowsoftware.md": () => import('../upwork_bungalowsoftware_eRThcQoN.mjs'),"/src/content/projects/upwork_collaboration-app.md": () => import('../upwork_collaboration-app_uOqfZ3Mu.mjs'),"/src/content/projects/upwork_democraticai.md": () => import('../upwork_democraticai_ze7Zrr6R.mjs'),"/src/content/projects/upwork_github_action_app.md": () => import('../upwork_github_action_app_GWeFqHLN.mjs'),"/src/content/projects/upwork_leadcrm.md": () => import('../upwork_leadcrm_EdKZMhoQ.mjs'),"/src/content/projects/upwork_munacjny.md": () => import('../upwork_munacjny_n1zUrvTd.mjs'),"/src/content/projects/upwork_parkinglot.md": () => import('../upwork_parkinglot_42hLQPoA.mjs'),"/src/content/projects/upwork_replay.md": () => import('../upwork_replay_ufbmlhuL.mjs'),"/src/content/projects/upwork_weareappointments.md": () => import('../upwork_weareappointments_sYmFEPTQ.mjs'),"/src/content/skills/frameworks.md": () => import('../frameworks_ah-riA_v.mjs'),"/src/content/skills/languages.md": () => import('../languages_7kysTVP7.mjs'),"/src/content/skills/tools.md": () => import('../tools_cMzqJgub.mjs')});
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
}, "D:/umer/projects/lablnet/lablnet.com/src/components/PostLayout.astro", void 0);

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
    return renderTemplate`<div> ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "D:/umer/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} <div class="mt-4 prose dark:text-gray-300"> ${renderComponent($$result3, "Content", Content, {})} </div> <hr class="mt-12 mb-4"> </div>`;
  })}` })} ` })}`;
}, "D:/umer/projects/lablnet/lablnet.com/src/pages/share/[id].astro", void 0);

const $$file = "D:/umer/projects/lablnet/lablnet.com/src/pages/share/[id].astro";
const $$url = "/share/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostLayout as $, _id_ as _, getEntry as a, compareByDate as c, df as d, getCollection as g };
