import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_qETDCYOS.mjs';
import { a as getCollection } from '../chunks/_astro_content_DJ8X70Dr.mjs';
import { c as compareByDate, d as df } from '../chunks/index_BBBAK3-1.mjs';
import { $ as $$Layout } from '../chunks/Layout_xY9g-e_w.mjs';
export { renderers } from '../renderers.mjs';

const $$Share = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", (p) => !p.data.draft);
  projects.sort(compareByDate);
  let projectsData = projects.map((project) => {
    return {
      title: project.data.title,
      startDate: df.format(project.data.startDate),
      endDate: df.format(project.data.endDate),
      slug: project.slug
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Share" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShareComponent", null, { "projects": projectsData, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/ShareComp.vue", "client:component-export": "default" })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/share.astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/share.astro";
const $$url = "/share";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Share,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
