import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I work as software developer at Mennr. I was responsible for developing and maintaining the company’s various projects. I was also responsible for managing the company’s servers and infrastructure.</p>";

				const frontmatter = {"startDate":"2022-10-01T00:00:00.000Z","endDate":"2023-01-01T00:00:00.000Z","title":"Contract Engineer","name":"Mennr","link":"https://mennr.tech/","icon":"../assets/icons/mennr.png","featured":true,"type":"company"};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/companies/mennr.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI work as software developer at Mennr. I was responsible for developing and maintaining the company's various projects. I was also responsible for managing the company's servers and infrastructure.\r\n";
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
