import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_91YiZ_qg.mjs';

const html = "";

				const frontmatter = {"title":"Secondary School Certificate (Science)","institution":"F G Boys Secondary School Nai Chawni Westridge-1 Rawalpindi Cantt","grade":"65%","startDate":"2015-05-01T00:00:00.000Z","endDate":"2017-04-01T00:00:00.000Z"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/educations/school.md";
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
