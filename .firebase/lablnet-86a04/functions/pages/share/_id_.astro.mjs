import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_qETDCYOS.mjs';
import { a as getCollection } from '../../chunks/_astro_content_DJ8X70Dr.mjs';
import { marked } from 'marked';
import { $ as $$PostLayout } from '../../chunks/PostLayout_BH-rYGra.mjs';
import { $ as $$Layout } from '../../chunks/Layout_xY9g-e_w.mjs';
import { c as compareByDate, d as df } from '../../chunks/index_BBBAK3-1.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
export { renderers } from '../../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
