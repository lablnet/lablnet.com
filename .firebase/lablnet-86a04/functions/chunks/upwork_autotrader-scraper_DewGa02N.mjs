import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project is to develop a basic Proof of Concept (POC) for software that extracts vehicle registration, mileage, and listing price from Autotrader UK car adverts, generates a CAP (Car Auction Prices) value based on the extracted data, and stores the data in a database. </p><p class=\"text-red-500\">The client pause the project because CAP calculation provider charging a lot of money for the data. The client is looking for a new CAP calculation provider.</p><p></p>\n<h3 id=\"solution\">Solution.</h3>\n<ul>\n<li><strong>Web Scraping:</strong> Extract vehicle registration, mileage, and listing price from Autotrader UK car adverts using web scraping techniques.\n<ul>\n<li>As registration number is not available on autotrader website, so we will use the registration number from the image of the car.</li>\n<li>For that we leverage the Gemini Vision API to extract the registration number from the image.</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"challenges\">Challenges</h2>\n<ul>\n<li>Handling variations in Autotrader UK car advert formats and data extraction</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>The need for a scalable and efficient database solution for storing and retrieving large amounts of data.</li>\n</ul>";

				const frontmatter = {"title":"AutoTrader Scraper","slug":"autotrader-scraper","startDate":"2024-02-21T00:00:00.000Z","endDate":"2024-03-21T00:00:00.000Z","stacks":["JavaScript","Playwright","Node","DynamoDB"],"company":"upwork","live":"https://www.upwork.com/jobs/~0164ecf5f6fc10e457","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}]};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_autotrader-scraper.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe purpose of this project is to develop a basic Proof of Concept (POC) for software that extracts vehicle registration, mileage, and listing price from Autotrader UK car adverts, generates a CAP (Car Auction Prices) value based on the extracted data, and stores the data in a database. <p class='text-red-500'>The client pause the project because CAP calculation provider charging a lot of money for the data. The client is looking for a new CAP calculation provider.</p>\n\n### Solution.\n- **Web Scraping:** Extract vehicle registration, mileage, and listing price from Autotrader UK car adverts using web scraping techniques.\n    - As registration number is not available on autotrader website, so we will use the registration number from the image of the car. \n    - For that we leverage the Gemini Vision API to extract the registration number from the image.\n\n## Challenges\n- Handling variations in Autotrader UK car advert formats and data extraction\n\n### Lessons Learned\n- The need for a scalable and efficient database solution for storing and retrieving large amounts of data.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"solution","text":"Solution."},{"depth":2,"slug":"challenges","text":"Challenges"},{"depth":3,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
