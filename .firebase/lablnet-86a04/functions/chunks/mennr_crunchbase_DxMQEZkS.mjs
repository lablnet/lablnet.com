import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project is to scrap data from Crunchbase and store it in a database. The data is then used to create a dashboard for the user to view the data.</p>";

				const frontmatter = {"title":"Crunchbase Scrapper","slug":"mennr_crunchbase","startDate":"2022-11-01T00:00:00.000Z","endDate":"2022-11-15T00:00:00.000Z","stacks":["Python","Vue","JavaScript","TypeScript","TailwindCSS"],"company":"mennr","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/mennr_crunchbase.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe purpose of this project is to scrap data from Crunchbase and store it in a database. The data is then used to create a dashboard for the user to view the data.\n";
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
