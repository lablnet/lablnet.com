import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_91YiZ_qg.mjs';

const html = "";

				const frontmatter = {"title":"Open-Source-Software, Linux and Git","institute":"Coursera online course (The Linux Foundation)","completed":"2020-07-15T00:00:00.000Z","picture":"../assets/images/certificates/Coursera C9BQZMZYQMCT-1.jpg","link":"https://www.coursera.org/account/accomplishments/certificate/C9BQZMZYQMCT","step":1};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/certificates/opensource.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
