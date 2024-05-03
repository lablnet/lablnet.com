import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<p>As a freelancer on Fiverr for the past two years, I have successfully completed over 7 projects and have received a 5-star rating on 100% of them. While I am unable to list all of my projects, I am proud to highlight a few of my most notable achievements.</p>";

				const frontmatter = {"startDate":"2021-02-12T00:00:00.000Z","title":"Fiverr","name":"Freelancer","link":"https://www.fiverr.com/umerlablnet01","featured":false,"type":"company"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/fiverr.md";
				const url = undefined;
				function rawContent() {
					return "\nAs a freelancer on Fiverr for the past two years, I have successfully completed over 7 projects and have received a 5-star rating on 100% of them. While I am unable to list all of my projects, I am proud to highlight a few of my most notable achievements.";
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
