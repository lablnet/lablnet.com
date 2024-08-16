import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_qETDCYOS.mjs';
import { $ as $$Layout } from '../chunks/Layout_xY9g-e_w.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dark:bg-gray-700"> <section class="mb-12"> <div class="container px-5 py-24 mx-auto"> <div class="text-center mb-20"> <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">404 Not Found</h1> <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">
Sorry, the page you looking for does not exists it may be removed.
</p> <a href="/" class="mt-6
                        hover:underline
                        font-bold
                        rounded-full
                        border-black-500 border-2
                        my-6
                        py-4
                        px-8
                        focus:outline-none focus:shadow-outline
                        transform
                        transition
                        hover:scale-105
                        duration-300
                        ease-in-out
                        arrow
                        mb-12
                        ">
Home
</a> </div> </div> </section> </div> ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/404.astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
