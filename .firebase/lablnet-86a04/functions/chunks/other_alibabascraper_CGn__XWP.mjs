import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The project aimed to develop an AI-powered copilot for e-commerce users to help them find the best products from Alibaba, Amazon, and others. However, it began with an Alibaba scraper. Due to high proxy costs, the client couldn’t afford it, and I had to discontinue the project. After completing the Alibaba scraper, I released it as open-source. This script can scrape the entire Alibaba site, a process that would take approximately 4-6 months.</p>\n<h3 id=\"features\">Features</h3>\n<ul>\n<li>Scrape data from Alibaba website</li>\n<li>Multi-threaded</li>\n<li>Save data to Amazon DynamoDB</li>\n<li>Proxy support</li>\n<li>Proper error handling and logging</li>\n</ul>\n<h2 id=\"lessons-learned\">Lessons Learned</h2>\n<p>Having worked on numerous scraping projects before, I didn’t encounter any new technical challenges. However, I learned the importance of communicating with clients about additional costs that may arise during a project.</p>\n<h2 id=\"future-thoughts\">Future Thoughts</h2>\n<p>I have released this project as open-source, and I welcome anyone to use and contribute to it. I would be delighted if someone finds it useful and decides to build upon it.</p>";

				const frontmatter = {"title":"Multi-Threaded Alibaba Scraper","slug":"alibabascraper","startDate":"2024-02-07T00:00:00.000Z","endDate":"2024-02-15T00:00:00.000Z","stacks":["JavaScript","Playwright"],"github":"lablnet/alibaba_scraper","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/other_alibabascraper.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe project aimed to develop an AI-powered copilot for e-commerce users to help them find the best products from Alibaba, Amazon, and others. However, it began with an Alibaba scraper. Due to high proxy costs, the client couldn't afford it, and I had to discontinue the project. After completing the Alibaba scraper, I released it as open-source. This script can scrape the entire Alibaba site, a process that would take approximately 4-6 months.\n\n### Features\n- Scrape data from Alibaba website\n- Multi-threaded\n- Save data to Amazon DynamoDB\n- Proxy support\n- Proper error handling and logging\n\n## Lessons Learned\nHaving worked on numerous scraping projects before, I didn't encounter any new technical challenges. However, I learned the importance of communicating with clients about additional costs that may arise during a project.\n\n## Future Thoughts\nI have released this project as open-source, and I welcome anyone to use and contribute to it. I would be delighted if someone finds it useful and decides to build upon it.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":2,"slug":"lessons-learned","text":"Lessons Learned"},{"depth":2,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
