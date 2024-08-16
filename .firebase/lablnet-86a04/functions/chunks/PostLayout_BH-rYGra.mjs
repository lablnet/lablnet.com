import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_qETDCYOS.mjs';

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, subtitle, coverPic = null } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <section class="py-10 px-5"> ${coverPic && renderTemplate`<section class="hero container max-w-screen-lg mx-auto pb-10"> <img class="rounded object-cover !m-0"${addAttribute(coverPic, "src")}> </section>`} <section> ${title && renderTemplate`<div class="container"> <h1 class="title dark:text-gray-300">${title}</h1> ${subtitle && renderTemplate`<p class="prose ml-2 text-justify mb-6 dark:text-gray-300">${subtitle}</p>`} </div>`} <hr class="mt-9 mb-4"> ${renderSlot($$result, $$slots["default"])} </section> </section> </div>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostLayout.astro", void 0);

export { $$PostLayout as $ };
