import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This was a simple app developed in Flask that was lightweight and could be rendered on browsers without JavaScript. It was designed to be compatible with UC Browsers, a once-popular browser 🤔 Remember it?.</p>";

				const frontmatter = {"title":"ResourcesR Lite","slug":"resourcesr_lite","startDate":"2020-11-10T00:00:00.000Z","stacks":["Python","Flask","Firebases"],"github":"resourcesr/lite","company":"resourcesr","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/resourcesr_lite.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\n\nThis was a simple app developed in Flask that was lightweight and could be rendered on browsers without JavaScript. It was designed to be compatible with UC Browsers, a once-popular browser 🤔 Remember it?.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
