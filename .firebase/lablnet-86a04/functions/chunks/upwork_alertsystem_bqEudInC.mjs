import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>The project involved creating an alert system that would send notifications via SMS and email when stock prices were updated. This required web scraping techniques to gather the necessary data from various online sources. I was able to successfully implement the alert system, and it was able to provide timely notifications to the specified recipients. This project allowed me to showcase my web scraping skills, and I was pleased with the successful completion of this task.</p>";

				const frontmatter = {"title":"Alert System","slug":"upwork_alertsystem","startDate":"2022-05-21T00:00:00.000Z","endDate":"2022-05-28T00:00:00.000Z","stacks":["Python"],"company":"upwork","live":"https://sis.munacjny.org/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_alertsystem.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe project involved creating an alert system that would send notifications via SMS and email when stock prices were updated. This required web scraping techniques to gather the necessary data from various online sources. I was able to successfully implement the alert system, and it was able to provide timely notifications to the specified recipients. This project allowed me to showcase my web scraping skills, and I was pleased with the successful completion of this task.\r\n";
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
