import { c as createComponent, r as renderTemplate, e as renderComponent, g as addAttribute, m as maybeRenderHead } from '../astro_BLbMhyYy.mjs';
import { g as getCollection, c as compareByDate, $ as $$PostLayout, d as df } from './_id__o1UzQ_JP.mjs';
import { $ as $$Layout } from './404_Bi9oVrSX.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './index_Ce2vpn-l.mjs';

const _sfc_main = {
    name: "InputComp",
    props: {
        id: {
            type: String,
            default: "text"
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: null,
        },
        modelValue: {
            type: String,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        error: {
            type: String,
            default: null,
        },
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "rounded-md shadow-sm" }, _attrs))
  }><div><label${
    ssrRenderAttr("for", $props.id)
  } class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-200">${
    ssrInterpolate($props.label)
  } `);
  if ($props.required == true) {
    _push(`<span class="text-red-400">*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`: </label><input${
    ssrRenderAttr("id", $props.id)
  }${
    ssrRenderAttr("name", $props.name)
  }${
    ssrRenderAttr("type", $props.type)
  }${
    ssrRenderAttr("autocomplete", $props.autocomplete)
  }${
    (ssrIncludeBooleanAttr($props.required)) ? " required" : ""
  } class="${
    ssrRenderClass([$props.error ? 'border-red-500' : '', "w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-gray-900 dark:text-gray-400"])
  }"${
    ssrRenderAttr("placeholder", $props.placeholder)
  }${
    ssrRenderAttr("value", $props.modelValue)
  }>`);
  if ($props.error) {
    _push(`<span class="text-red-500 p-2 mt-3">${ssrInterpolate($props.error)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/InputComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const InputComp = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  projects.sort(compareByDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": "Projects", "subtitle": "" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([" ", '<div class="mt-2 mb-6"> ', ' </div> <div class="mt-2 mb-2 p-2" id="project-list"> ', ` </div> <script lang="js">
			document.addEventListener('DOMContentLoaded', () => {
				const searchInput = document.getElementById('search-input');
                console.log (searchInput);
				const projectList = document.getElementById('project-list');
                console.log ("projectList", projectList)
				const projectItems = projectList.getElementsByClassName('project-item');

				searchInput.addEventListener('input', (event) => {
					const query = event.target.value.toLowerCase();
					for (const projectItem of projectItems) {
						const title = projectItem.getAttribute('data-title');
						const id = projectItem.getAttribute('data-id');
						const stack = projectItem.getAttribute('data-stack');
						if (title.includes(query) || id.includes(query) || stack.includes(query)) {
							projectItem.style.display = 'block';
						} else {
							projectItem.style.display = 'none';
						}
					}
				});
			});
		<\/script> `])), maybeRenderHead(), renderComponent($$result3, "InputComp", InputComp, { "id": "search-input", "label": "Search projects by title or ID...", "placeholder": "Search projects by title or ID..." }), projects.map((project) => {
    const endDate = project.data.endDate ? df.format(project.data.endDate) : "Present";
    const subtitle = `${df.format(project.data.startDate)} - ${endDate}`;
    return renderTemplate`<div class="project-item"${addAttribute(project.data.title.toLowerCase(), "data-title")}${addAttribute(project.id.toLowerCase(), "data-id")}${addAttribute(project.data.stacks, "data-stack")}${addAttribute(project.data.collaborators, "data-collaborators")}${addAttribute(subtitle, "data-subtitle")}> ${renderComponent($$result3, "PostInfo", null, { "stack": project.data.stacks, "title": project.data.title, "slug": project.slug, "subtitle": subtitle, "codeURL": project.data?.github ?? "", "siteURL": project.data.live, "collaborators": project.data.collaborators, "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lablnet/projects/lablnet/lablnet.com/src/components/PostInfo.vue", "client:component-export": "default" })} <div class="mt-4 prose dark:text-gray-300"></div> <hr class="mt-12 mb-4"> </div>`;
  })) })} ` })}`;
}, "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/projects.astro", void 0);

const $$file = "/Users/lablnet/projects/lablnet/lablnet.com/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
