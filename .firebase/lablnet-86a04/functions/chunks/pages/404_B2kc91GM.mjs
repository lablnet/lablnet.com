import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent, g as renderHead, h as addAttribute } from '../astro_91YiZ_qg.mjs';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="dark:text-white light-text-color bg-white dark:bg-gray-700"> <header x-data="{ mobileMenuOpen : false }" class="flex flex-wrap flex-row
        justify-between
        md:items-center md:space-x-4
        py-6
        px-6
        top-0
        z-50
        animated
        shadow-lg
        dark:bg-gray-900
        bg-white
        relative"> <a href="/" class="block"> <span class="sr-only"></span> <img class="" src="../assets/images/muf.png" alt="Logo" width="100" height="100" title="Logo"> </a> <!-- <span class="inline-block mx-auto mr-1 mt-1 md:hidden">
			<ThemeToggle client:load />
		</span> --> <button id="menu-button" class="inline-block mr-4 md:hidden w-8 h-8 p-1"> <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path> </svg> </button> <nav id="nav" class="absolute
          md:relative
          top-16
          left-0
          md:top-0
          z-20
          md:flex
          flex-col
          md:flex-row
		  md:space-x-6
          font-semibold
          w-full
          md:w-auto
          shadow-md
          rounded-lg
          md:rounded-none
		  md:shadow-none
          p-6
          pt-0
          md:p-0
          dark:bg-gray-900
          bg-white
          hidden
    	"> <a href="/#work" class="block md:mt-0 mt-6 py-1 menu-item"><i class="fa-solid fa-bars-progress"></i> Work Experience</a> <a href="/#education" class="block py-1 menu-item"><i class="fa-solid fa-graduation-cap"></i> Education</a> <a href="../assets/cv/CV.pdf" target="_blank" class="block py-1 menu-item"><i class="fa-solid fa-file"></i> CV</a> <a href="/#contact" class="block py-1"><i class="fa-solid fa-address-book"></i> Contact</a> <!-- <span class="hidden md:inline-block mt-1">
				<ThemeToggle client:load />
			</span> --> </nav> </header> </div>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/layouts/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="dark:bg-gray-700"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/layouts/Main.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer class="text-gray-600 body-font"> <div class="bg-gray-100 dark:text-white dark:bg-gray-900"> <div class="container
      px-5
      py-6
      mx-auto
      flex
      items-center
      sm:flex-row
      flex-col"> <a href="/" class="flex
        title-font
        font-medium
        items-center
        md:justify-start
        justify-center"> <span class="ml-3"> <img src="../assets/images/muf.png" style="width: 80px; height 80px;" alt="Muhammad Umer Farooq"> </span> </a> <p class="inline-flex
        text-sm text-gray-500
        dark:text-gray-300
        sm:ml-6 sm:mt-0
        mt-4">
Made with &nbsp;
<img class="h-6 w-6" src="../assets/icons/heart.gif">
&nbsp; By &nbsp;
<a class="font-bold" href="https://github.com/lablnet" target="_blank" rel="noopener noreferrer">Muhammad Umer Farooq</a> </p> </div> </div> </footer>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/layouts/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_b || (_b = __template([`<html lang="en"> <head><meta charset="UTF-8"><meta name="title" content="Muhammad Umer Farooq"><meta name="author" content="Muhammad Umer Farooq"><meta name="url" content="https://lablnet.com/"><meta name="type" content="website"><meta name="image" content="../assets/images/umer.jpg"><meta name=" keywords" content="portfolio,umer,web developer,software developer"><meta name="description" content="Hi there, I'm a Software Developer. I love building and rebuilding open source products. I have experience in Full Stack software development, including Web, Mobile applications, Desktop applications, web scraping, web crawling, and API integrations, working on many projects. Beside all these..."><meta name="og:title" content="Muhammad Umer Farooq"><meta name="og:author" content="Muhammad Umer Farooq"><meta name="og:url" content="https://lablnet.com/"><meta name="og:type" content="website"><meta name="og:image" content="../assets/images/umer.jpg"><meta name=" og:keywords" content="portfolio,umer,web developer,software developer"><meta name="og:description" content="Hi there, I'm a Software Developer. I love building and rebuilding open source products. I have experience in Full Stack software development, including Web, Mobile applications, Desktop applications, web scraping, web crawling, and API integrations, working on many projects. Beside all these..."><meta name="theme-color" content="#ffffff"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><meta name="generator"`, '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"><title>', "</title>", "", '</head> <body id="app-theme" class="app-theme"> <div class="light"> <!-- Header --> ', ' <div class=""> ', " </div> <!-- Main --> ", " <!-- Footer --> ", ` <!-- Back to top Button --> <button class="backtotop hidden bg-gray-200 dark:bg-gray-900 mb-2" id="backtotop" title="Go to top"> <i class="text-black dark:text-white fa fa-arrow-up"></i> </button> </div>  <script lang="js">

		// mobile menu
		let menuVisible = false;

		function toggleMenu() {
			const nav = document.getElementById('nav');
			menuVisible = !menuVisible;
			// @ts-ignore
			nav.classList.toggle('hidden', !menuVisible);
		}

		let elements = document.getElementsByClassName('menu-item');
		for (let i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', toggleMenu);
		}
		// @ts-ignore
		document.getElementById('menu-button').addEventListener('click', toggleMenu);

		// back to top button handler.
		window.addEventListener('scroll', function () {
			let _top = document.querySelector('#backtotop');
			if (window.scrollY > 100) {
				_top.classList.remove('hidden');
			} else {
				_top.classList.add('hidden');
			}
		});

		// Back to top button
		let _top = document.querySelector('#backtotop');
		_top.addEventListener('click', function () {
			window.scrollTo(0, 0);
		});
	</script> </body></html>`])), addAttribute(Astro2.generator, "content"), title, renderTemplate(_a || (_a = __template([`<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-JKMM6EQFM6"></script>
		<script lang="js">
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-JKMM6EQFM6');
		</script>`]))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "ProgressBar", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/ProgressBar.vue", "client:component-export": "default" }), renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` }), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
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

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
