import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_91YiZ_qg.mjs';
import { g as getCollection, c as compareByDate, d as df } from './_id__-QjLgzmQ.mjs';
import { $ as $$Layout } from './404_B2kc91GM.mjs';

const $$Astro = createAstro();
const $$Share = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Share;
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

export { $$Share as default, $$file as file, $$url as url };
