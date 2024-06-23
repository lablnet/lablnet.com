import { c as createComponent, r as renderTemplate, e as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute, F as Fragment } from '../astro_BLbMhyYy.mjs';
import { g as getCollection, a as getEntry, c as compareByDate, $ as $$PostLayout, d as df } from './_id__CBkgfI1s.mjs';
import { $ as $$Layout } from './404_Bi9oVrSX.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const $$Astro$3 = createAstro();
async function getStaticPaths() {
  let companies = await getCollection("companies", (p) => !p.data.draft);
  return companies.map((entity) => ({
    params: { slug: entity.slug }
  }));
}
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
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

const $$file$1 = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/[slug]/index.astro";
const $$url$1 = "/[slug]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  getStaticPaths,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main = {
    name: "CollaboratorComp",
    props: {
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: '../assets/images/avatar.png',
        },
        link: {
            type: String,
            default: "javascript:void(1)",
        },
        contributions: {
          type: Number,
          default: 1,
        },
        contributionsStatus: {
          type: Boolean,
          default: true,
        }
    }   
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${
    ssrRenderAttrs(mergeProps({
      href: $props.link,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "inline-flex relative px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-900 dark:text-gray-400 text-gray-800"
    }, _attrs))
  }><img class="h-6 w-6 rounded-full border border-gray-100 shadow-sm absolute left-0.5 top-0.5"${
    ssrRenderAttr("src", $props.picture)
  }${
    ssrRenderAttr("alt", _ctx.text)
  }><span class="pl-5">${
    ssrInterpolate($props.name)
  }</span>`);
  if ($props.contributionsStatus) {
    _push(`<span class="pl-2 pr-2 mx-3 mr-0 rounded-full bg-white text-black dark:bg-gray-700 dark:text-gray-300">${ssrInterpolate($props.contributions)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/CollaboratorComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const CollaboratorComp = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  let socialMediaHandles = [
    {
      name: "lablnet",
      picture: "../assets/icons/upwork.svg",
      link: "https://www.upwork.com/freelancers/~010c32fc720f5f9624"
    },
    {
      name: "lablnet",
      picture: "../assets/icons/linkedin.svg",
      link: "https://linkedin.com/in/lablnet"
    },
    {
      name: "lablnet",
      picture: "../assets/icons/github.svg",
      link: "https://github.com/lablnet"
    },
    {
      name: "lablnet",
      picture: "../assets/icons/twitter.svg",
      link: "https://twitter.com/lablnet"
    },
    {
      name: "umerlablnet01",
      picture: "../assets/icons/fiverr.svg",
      link: "https://fiverr.com/umerlablnet01"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<main class="dark:bg-gray-700"> <section class="container"> <div class="block flex items-center gap-x-4"> <img class="w-24 h-24 md:w-48 md:h-48 rounded-full mt-12" src="../assets/images/umer.jpg" alt="Muhammad Umer Farooq"> <div class="block mt-16"> <h1 class="title dark:text-gray-300 prose">Muhammad Umer Farooq</h1> <div class="mt-2"> ${renderComponent($$result, "CollaboratorComp", CollaboratorComp, { "name": "lablent", "picture": "../assets/images/umer-removebg.png", "link": "https://github.com/lablnet", "contributionsStatus": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/CollaboratorComp.vue", "client:component-export": "default" })} </div> </div> </div> <div class="md:ml-12"> <p class="prose text-justify dark:text-gray-300">
Hello, I am a Professional Software Developer with a passion for working on open-source products.
</p> <p class="prose text-justify dark:text-gray-300">
I have extensive experience in Full Stack development, including web, mobile, and desktop applications.
				I have also worked with web scraping, web crawling, and web API integrations. I have worked on a wide
				range of projects and have interest in deep learning, computer vision, deterministic algorithms, kernel
				development, compilers, and cryptography.
</p> <p class="prose text-justify mb-6 dark:text-gray-300">
I am highly motivated to work on open-source projects and contribute to the community. I am always
				looking for opportunities to collaborate and learn from others.
</p> </div> <div class="mt-4 mb-24 md:ml-12"> <div class="grid grid-cols-3 gap-6 md:inline"> ${socialMediaHandles.map((socialMediaHandle) => {
    return renderTemplate`<div class="md:inline col-span-1 pr-4"> ${renderComponent($$result, "CollaboratorComp", CollaboratorComp, { "name": socialMediaHandle.name, "picture": socialMediaHandle.picture, "link": socialMediaHandle.link, "contributionsStatus": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/CollaboratorComp.vue", "client:component-export": "default" })} </div>`;
  })} </div> </div> </section> </main>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Intro.astro", void 0);

const meta = {
  company: {
    title: "Where I’ve worked.",
    description: ""
  },
  topProjects: {
    title: "Top Projects.",
    description: ""
  },
  projects: {
    title: "Things I've been working on.",
    description: ""
  },
  skills: {
    title: "Skills.",
    description: "As a student, I am constantly learning and expanding my knowledge. Some of the skills \n I have developed include:"
  },
  certificate: {
    title: "Certificates.",
    description: "I enjoy facing challenges that are given by my teachers. Here is my educational background"
  },
  education: {
    title: "Education.",
    description: "I enjoy facing challenges that are given by my teachers. Here is my educational background."
  }
};
const data = [[{
  id: "workexp",
  key: "work",
  icon: "fa-file",
  title: "Work Experience",
  component: "Companies"
}, {
  id: "workexp",
  key: "skills",
  icon: "fa-chalkboard",
  title: "Skills",
  component: "Skills"
}], [{
  id: "projects",
  key: "recent",
  icon: "fa-bars-progress",
  title: "Recent Projects",
  component: "Projects"
}, {
  id: "projects",
  key: "top",
  icon: "fa-project-diagram",
  title: "Top Projects",
  component: "RecentProjects"
}], [{
  id: "educert",
  key: "education",
  icon: "fa-graduation-cap",
  title: "Education",
  component: "Education"
}, {
  id: "educert",
  key: "certifications",
  icon: "fa-certificate",
  title: "Certifications",
  component: "Certificate"
}]];

const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const skills = await getCollection("skills");
  skills.sort((a, b) => {
    return a.data.step - b.data.step;
  });
  return renderTemplate`${maybeRenderHead()}<main class="mt-2 mb-2"> <section class="py-10 px-5 bg-gray-200 dark:bg-gray-900 dark:text-gray-400 container" id="skills"> <h3 class="subtitle dark:text-white prose">${meta.skills.title}</h3> <p class="prose dark:text-gray-400"> ${meta.skills.description} </p> <div class="grid md:grid-cols-3 mx-auto py-5"> ${skills.map(async (skill) => {
    const { Content } = await skill.render();
    return renderTemplate`<div class="flex flex-col px-4 py-4"> <div class="flex-grow flex flex-col"> <h4 class="mt-0 dark:text-white prose">${skill.data.title}</h4> <div class="prose dark:text-gray-300"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div>`;
  })} </div> </section> </main>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Skills.astro", void 0);

const $$Astro$2 = createAstro();
const $$Companies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Companies;
  let { type = "companies", title = meta.company.title, description = meta.company.description } = Astro2.props;
  let companies = [];
  if (type === "companies") {
    companies = await getCollection("companies", (p) => p.data.featured);
  } else {
    companies = await getCollection("companies", (p) => p.data.type === "project");
  }
  companies.sort(compareByDate);
  let step = companies.length + 1;
  let _klass = `mt-12 py-10 px-5 container `;
  _klass += type === "companies" ? `dark:bg-gray-700` : `bg-gray-200 dark:bg-gray-900`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(_klass, "class")}${addAttribute(type, "id")}> <h2 class="text-emphasis font-recoleta text-2xl dark:text-white">${title}</h2> <p class="dark:text-gray-300 prose mt-4">${description}</p> <div class="mt-8 space-y-12"> ${companies.map(async (company) => {
    const { Content } = await company.render();
    step--;
    return renderTemplate`<section> <div class="flex group relative"> <div class="px-px shrink-0"> <img class="rounded w-12 h-12 mt-2.5" width="100" height="100"${addAttribute(company.data.icon, "src")}${addAttribute(company.data.title, "alt")}> </div> <div class="ml-8"> <div class="font-medium text-muted text-sm dark:text-gray-300 prose"> ${df.format(company.data.startDate)} -${" "} ${company.data.endDate ? df.format(company.data.endDate) : "Now"} </div> <div class="font-medium text-emphasis dark:text-gray-300 prose"> <a class="accent dark:text-gray-300 prose arrow"${addAttribute(`/${company.slug}`, "href")}> <span>${company.data.title}</span> </a> ${" "}
· ${" "} <a class="relative dark:text-gray-300 prose arrow"${addAttribute(company.data.link, "href")} target="_blank"> ${company.data.name} </a> </div> <div class="mt-2 dark:text-gray-300 prose"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> ${step !== 1 && type === "companies" ? renderTemplate`<hr class="mt-8">` : ""} ${step !== 1 && type === "projects" ? renderTemplate`<hr class="mt-8 border-t border-gray-400">` : ""} </section>`;
  })} </div> ${type === "projects" ? renderTemplate`<a href="/projects" class="mr-4 float-right prose dark:text-gray-300 arrow">
More Projects
</a>` : renderTemplate`<div class="mb-12 md:mb-0"> <a href="/fiverr" class="mr-4 float-right prose dark:text-gray-300 arrow">
Fiverr Projects
</a> <a href="/direct" class="mr-4 float-right prose dark:text-gray-300 arrow">
Direct Client Projects
</a> </div>`} </section>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Companies.astro", void 0);

const $$Astro$1 = createAstro();
const $$EmptyComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmptyComponent;
  const { title = "It's empty here", description = "We couldn't find anything to show here" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-gray-600"> <i class="fa-regular fa-folder fa-3x mb-4"></i> <h1 class="text-xl font-semibold">${title}</h1> <p class="text-md text-center">${description}</p> </div>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/EmptyComponent.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  let projects = await getCollection("projects", (p) => p.data.featured && !p.data.draft);
  projects = projects.sort(compareByDate);
  let step = projects.length + 1;
  return renderTemplate`${maybeRenderHead()}<section class="mt-12 py-10 px-5 bg-white container" id="recent"> <h2 class="text-emphasis font-recoleta text-2xl dark:text-gray-300">${meta.projects.title}</h2> <p class="dark:text-gray-300 prose mt-4"> ${meta.projects.description} </p> <div class="mt-8 space-y-12"> ${projects.map(async (project) => {
    const { Content } = await project.render();
    let company = project.data.company ? await getCollection("companies", (p) => p.slug === project.data.company) : void 0;
    if (company && company.length > 0) {
      company = company[0];
    }
    step--;
    return renderTemplate`<section> <div class="flex"> <div class="text-muted font-medium text-sm w-20 pt-0.5 shrink-0 dark:text-gray-300"> ${project.data.endDate ? df.format(project.data.endDate) : "Ongoing"} </div> <div class="ml-0.5"> <h3 class="text-emphasis font-medium dark:text-gray-300"> <span>${project.data.title}</span> ${company ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}<a class="dark:text-gray-300 arrow"${addAttribute(`/${company.slug}`, "href")}>
@ ${company.data.name} </a> ` })}` : ""} </h3> <div class="prose mt-2 dark:text-gray-300"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> ${step !== 1 ? renderTemplate`<hr class="mt-8">` : ""} </section>`;
  })} ${projects.length === 0 ? renderTemplate`${renderComponent($$result, "EmptyComponent", $$EmptyComponent, { "title": "No projects found", "description": "I am not working on any projects at the moment. Check back later." })}` : ""} </div> </section>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Projects.astro", void 0);

const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const educations = await getCollection("educations");
  educations.sort(compareByDate);
  let length = educations.length + 1;
  return renderTemplate`${maybeRenderHead()}<main> <section class="py-10 px-5 bg-gray-200 dark:bg-gray-900 container" id="education"> <h3 class="subtitle dark:text-white prose">${meta.education.title}</h3> <p class="dark:text-gray-400 prose"> ${meta.education.description} </p> <section class="body-font"> <div class="container py-6 mx-auto flex flex-wrap"> <div class="flex flex-wrap w-full"> <div class=""> ${educations.map((education) => {
    length--;
    return renderTemplate`<div class="flex relative pb-12"> ${length !== 1 ? renderTemplate`<div class="
                                                h-full
                                                w-10
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                "> <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div> </div>` : null} <div class="
                                                flex-shrink-0
                                                w-10
                                                h-10
                                                rounded-full
                                                bg-indigo-500
                                                inline-flex
                                                items-center
                                                justify-center
                                                text-white
                                                relative
                                                z-10
                                                "> ${length} </div> <div class="flex-grow pl-4 dark:text-gray-400"> <h2 class="font-medium title-font mb-1">${education.data.title}</h2> <h5 class="font-mediume title-font mb-1 prose dark:text-gray-400"> <i> ${df.format(education.data.startDate)} -${" "} ${education.data.endDate ? df.format(education.data.endDate) : "..."} </i> </h5> <div class="flex flex-col space-y-2"> <div class="flex space-x-2"> <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="
                                                            text-xs
                                                            px-3
                                                            bg-blue-200
                                                            text-blue-800
                                                            rounded-full
                                                        "> ${education.data.grade} </div> </div> </div> <p class="leading-relaxed prose dark:text-gray-400">${education.data.institution}</p> </div> </div>`;
  })} </div> </div> </div> </section> </section> </main>`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Education.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Certificate = createComponent(async ($$result, $$props, $$slots) => {
  const certificates = await getCollection("certificates");
  certificates.sort(compareByDate);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<main> <section class="py-10 px-5 bg-gray-200 dark:bg-gray-900 container" id="certificates"> <h3 class="subtitle dark:text-white prose">', '.</h3> <p class="dark:text-gray-400 prose"> ', ' </p> <div class="container mx-auto"> <div class="flex flex-col divide-y divide-gray-300"> ', ` </div> </div> </section> </main> <script lang="js">
let buttons = document.querySelectorAll('.accordion-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let content = document.querySelectorAll('.accordion-content');
        let id = this.getAttribute('data-id');
        content[id].classList.toggle('hidden');
    });
}
<\/script>`])), maybeRenderHead(), meta.certificate.title, meta.certificate.description, certificates.map((certificate, index) => renderTemplate`<div> <button${addAttribute(index, "data-id")} class="accordion-button flex justify-between items-center w-full py-2 px-4 text-left prose dark:text-gray-400"> <span><b>${df.format(certificate.data.completed)}</b> ${certificate.data.title} - ${certificate.data.institute}</span> <span class="w-6 h-6">🏆</span> </button> <div${addAttribute(index, "data-id")} class="accordion-content overflow-hidden transition-all duration-300 hidden"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4"> <div> <a${addAttribute(certificate.data.link, "href")} target="_blank" class="prose dark:text-gray-400">View Certificate</a> <p class="text-sm italic prose dark:text-gray-400">${df.format(certificate.data.completed)}</p> </div> <div class="image-container"> <img${addAttribute(certificate.data.picture, "src")} class="object-contain h-48 w-96 rounded sm:-mx-7 mt-5"> </div> </div> </div> </div>`));
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Certificate.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ToggleSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToggleSwitcher;
  let { sections } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="flex justify-center gap-6 mt-6 mb-4"> ', ' </div> <hr class="short"> ', ` <script lang="js">
	document.querySelectorAll('.toggle').forEach((toggle) => {
		toggle.addEventListener('click', function () {
			const key = this.getAttribute('data-key');
			const id = this.getAttribute('data-id');
			const elem = document.getElementById(key);
			const sections = document.querySelectorAll('.toggle-elems');
			const toggles = document.querySelectorAll('.toggle');
			// remove active class from all.
			toggles.forEach((tgl) => {
				let dataID = tgl.getAttribute('data-id');
				if (id === dataID) {
					tgl.classList.remove('active');
				}
			});

			toggle.classList.add('active');
			// hide all.
			sections.forEach((section) => {
				const dataID = section.getAttribute('data-id');
				console.log('keys', id, dataID, dataID === id);
				if (id == dataID) {
					section.classList.add('hidden');
				}
			});
			// toggle class of elem hidden.
			elem.classList.toggle('hidden');
		});
	});
<\/script>`])), maybeRenderHead(), sections.map((section, index) => renderTemplate`<a href="javascript:void(0)"${addAttribute(`${section.key}-toggle toggle ${index === 0 ? "active" : ""} float-right prose dark:text-gray-300 font-bold hover:text-blue-500`, "class")}${addAttribute(section.key, "data-key")}${addAttribute(section.id, "data-id")}> ${" "} <i${addAttribute(`fa-solid ${section.icon}`, "class")}></i> ${section.title} </a>`), sections.map((section, index) => {
    return renderTemplate`<div${addAttribute(section.key, "id")}${addAttribute(`${index !== 0 ? "hidden" : ""} toggle-elems`, "class")}${addAttribute(section.key, "data-key")}${addAttribute(section.id, "data-id")}> ${section.component === "Skills" && renderTemplate`${renderComponent($$result, "Skills", $$Skills, {})}`} ${section.component === "Companies" && renderTemplate`${renderComponent($$result, "Companies", $$Companies, {})}`} ${section.component === "RecentProjects" && renderTemplate`${renderComponent($$result, "Companies", $$Companies, { "type": "projects", "title": meta.topProjects.title, "description": meta.topProjects.description })}`} ${section.component === "Projects" && renderTemplate`${renderComponent($$result, "Projects", $$Projects, {})}`} ${section.component === "Education" && renderTemplate`${renderComponent($$result, "Education", $$Education, {})}`} ${section.component === "Certificate" && renderTemplate`${renderComponent($$result, "Certificate", $$Certificate, {})}`} </div>`;
  }));
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/ToggleSwitcher.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Muhammad Umer Farooq" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Intro", $$Intro, {})}  ${data.map((sections) => {
    return renderTemplate`${renderComponent($$result2, "ToggleSwitcher", $$ToggleSwitcher, { "sections": sections })}`;
  })} ${renderComponent($$result2, "Contact", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/Home/Contact.vue", "client:component-export": "default" })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/index.astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _export_sfc as _, index as a, index$1 as i };
