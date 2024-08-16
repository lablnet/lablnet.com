import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_qETDCYOS.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_DJ8X70Dr.mjs';
import { $ as $$PostLayout } from '../chunks/PostLayout_BH-rYGra.mjs';
import { $ as $$Layout } from '../chunks/Layout_xY9g-e_w.mjs';
import { c as compareByDate, d as df } from '../chunks/index_BBBAK3-1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  let companies = await getCollection("companies", (p) => !p.data.draft);
  return companies.map((entity) => ({
    params: { slug: entity.slug }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const company = await getEntry("companies", slug);
  const { Content } = await company.render();
  const projects = await getCollection("projects", (p) => p.data.company === slug && !p.data.draft);
  projects.sort(compareByDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${company.data.title} - ${company.data.name}` }, { "default": ($$result2) => renderTemplate`${renderTemplate`${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": `${company.data.title} at ${company.data.name}`, "subtitle": `${df.format(company.data.startDate)} - ${company.data.endDate ? df.format(company.data.endDate) : "Present"}`, "coverPic": company.data.heroImage }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-4 dark:text-gray-300"> ${renderComponent($$result3, "Content", Content, {})} </div> ${!projects ? "" : projects.map(async (project) => {
    const { Content: Content2 } = await project.render();
    let endDate = project.data.endDate ? df.format(project.data.endDate) : "Present";
    let subtitle = `${df.format(project.data.startDate)} - ${endDate}`;
    return renderTemplate`<div> ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "coverPic": project.data.coverPic, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} <div class="mt-4 prose dark:text-gray-300"> ${renderComponent($$result3, "Content", Content2, {})} </div> <hr class="mt-12 mb-4"> </div>`;
  })}` })}`}` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/[slug]/index.astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/[slug]/index.astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
