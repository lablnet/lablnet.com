import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "";

				const frontmatter = {"title":"Bachelor [Top in Batch Spring 2020] (Bachelor of Science in Software Engineering)","institution":"Riphah International University (I-14 Islamabad)","grade":"3.74 / 4.00","startDate":"2020-02-06T00:00:00.000Z","endDate":"2024-01-02T00:00:00.000Z"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/educations/bachelor.md";
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
