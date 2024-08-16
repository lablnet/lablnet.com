import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_qETDCYOS.mjs';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_DJ8X70Dr.mjs';
import { $ as $$PostLayout } from '../../chunks/PostLayout_BH-rYGra.mjs';
import { $ as $$Layout } from '../../chunks/Layout_xY9g-e_w.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { id: project.slug }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const project = await getEntry("projects", id);
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.data.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": "Project" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": project.data.subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "coverPic": project.data.coverPic, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} ${maybeRenderHead()}<div class="mt-4 prose dark:text-gray-300"> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/project/[id].astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/project/[id].astro";
const $$url = "/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
