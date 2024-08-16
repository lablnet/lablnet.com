import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p>This project involves scraping Amazon products using Playwright and storing the data in Google Sheets and sending Specific products to CDON API.</p>\n<h2 id=\"flow\">Flow</h2>\n<ol>\n<li>Read URL and country from Google Sheet.</li>\n<li>Scrape product details from Amazon based on URL and country.</li>\n<li>Save images to Shopify via GraphQL API.</li>\n<li>Save product details to Google Sheet.</li>\n<li>Repeat the process for all products in the Google Sheet.</li>\n<li>If the column Platform has CDON value, send the product to CDON API.</li>\n</ol>\n<h2 id=\"challenges\">Challenges</h2>\n<ul>\n<li><strong>Handling Captcha</strong></li>\n</ul>\n<ul>\n<li>Used proxy rotation, but it was expensive.</li>\n<li>Implemented Google Gemini API to solve image captchas.</li>\n<li>If captcha is detected:\n<ol>\n<li>Download the image.</li>\n<li>Send it to Gemini API.</li>\n<li>Receive the text solution from the API.</li>\n<li>Enter the solution in the captcha field.</li>\n</ol>\n</li>\n<li>If the captcha solution fails, repeat the process.</li>\n</ul>\n<h2 id=\"lessons-learned\">Lessons Learned</h2>\n<ul>\n<li>Learned about GraphQL API.</li>\n<li>Learned about Google Gemini API.</li>\n</ul>\n<h2 id=\"contribution-from-usman\">Contribution from Usman</h2>\n<p>Usman made a significant contribution to the project by:</p>\n<ul>\n<li><strong>Image Quality Improvement</strong>: Helping in obtaining high-quality images from the Amazon product page.</li>\n</ul>\n<p>This contribution was crucial in enhancing the project’s overall quality and accuracy.</p>";

				const frontmatter = {"title":"Amazon Product scraping","slug":"upwork_amazon","startDate":"2024-05-25T00:00:00.000Z","endDate":"2024-06-01T00:00:00.000Z","stacks":["NodeJs","Playwright"],"company":"upwork","live":"https://www.upwork.com/jobs/~01c74972012086824b","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"},{"name":"Muhammad Usman Naeem","picture":"../../assets/images/usman.jpg","link":"https://musmannaeem.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_amazon.md";
				const url = undefined;
				function rawContent() {
					return "\n## Project Overview\n\nThis project involves scraping Amazon products using Playwright and storing the data in Google Sheets and sending Specific products to CDON API.\n\n## Flow\n\n1. Read URL and country from Google Sheet.\n2. Scrape product details from Amazon based on URL and country.\n3. Save images to Shopify via GraphQL API.\n4. Save product details to Google Sheet.\n5. Repeat the process for all products in the Google Sheet.\n6. If the column Platform has CDON value, send the product to CDON API.\n\n## Challenges\n\n- **Handling Captcha**\n* Used proxy rotation, but it was expensive.\n* Implemented Google Gemini API to solve image captchas.\n* If captcha is detected:\n\t1. Download the image.\n\t2. Send it to Gemini API.\n\t3. Receive the text solution from the API.\n\t4. Enter the solution in the captcha field.\n* If the captcha solution fails, repeat the process.\n\n## Lessons Learned\n\n* Learned about GraphQL API.\n* Learned about Google Gemini API.\n\n## Contribution from Usman\n\nUsman made a significant contribution to the project by:\n\n* **Image Quality Improvement**: Helping in obtaining high-quality images from the Amazon product page.\n\nThis contribution was crucial in enhancing the project's overall quality and accuracy.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-overview","text":"Project Overview"},{"depth":2,"slug":"flow","text":"Flow"},{"depth":2,"slug":"challenges","text":"Challenges"},{"depth":2,"slug":"lessons-learned","text":"Lessons Learned"},{"depth":2,"slug":"contribution-from-usman","text":"Contribution from Usman"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
