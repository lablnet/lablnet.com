import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>Riphah International University offered me the opportunity to work on building an alumni management system for Riphah International University. The university will use this system to manage and connect with its alumni. I was excited to take on the project and help the university strengthen its relationship with its graduates.</p>";

				const frontmatter = {"startDate":"2022-10-01T00:00:00.000Z","endDate":"2023-08-31T00:00:00.000Z","title":"Web Developer","name":"Riphah International University","link":"https://www.riphah.edu.pk/","heroImage":"../assets/images/riphah.png","icon":"../assets/icons/riphah.jpg","featured":true,"type":"company"};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/companies/riphah.md";
				const url = undefined;
				function rawContent() {
					return "\r\nRiphah International University offered me the opportunity to work on building an alumni management system for Riphah International University. The university will use this system to manage and connect with its alumni. I was excited to take on the project and help the university strengthen its relationship with its graduates.\r\n";
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
