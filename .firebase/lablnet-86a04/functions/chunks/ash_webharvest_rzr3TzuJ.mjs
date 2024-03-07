import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I am currently working on a project called WebHarvest. WebHarvest is a web scraping tool that allows users to extract data from websites. I am developing this project using Node.js, Express, Vue, and TailwindCSS. I am excited to share more about this project in the future.</p>";

				const frontmatter = {"title":"WebHarvest","slug":"webharvest","startDate":"2024-01-26T00:00:00.000Z","stacks":["typescript","javascript","nodejs","express","vue","tailwindCSS"],"collaborators":[{"name":"Muhammad Umer Farooq","picture":"../assets/images/umer.jpg"}],"live":"https://webharvest.lablnet.com","github":"lablnet/webharvest","company":"alphasofthub","featured":true,"draft":true};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/ash_webharvest.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI am currently working on a project called WebHarvest. WebHarvest is a web scraping tool that allows users to extract data from websites. I am developing this project using Node.js, Express, Vue, and TailwindCSS. I am excited to share more about this project in the future.\r\n";
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
