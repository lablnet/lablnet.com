import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The primary purpose of this CRM is to automate the process of receiving, validating, and distributing customer leads to various lead buyers based on pre-defined criteria and schedules. It aims to streamline lead management, ensure efficient lead distribution, and maintain a clear record of transactions and interactions without actual financial transactions within the system.</p>\n<h3 id=\"features\">Features</h3>\n<ol>\n<li>Receives submissions and performs basic validation and formatting.</li>\n<li>Automatically sends validated leads to the appropriate buyer’s CRM using their API key.</li>\n<li>Visually tracks the cost of leads against lead buyer’s balances without handling real transactions.</li>\n<li>Distributes leads based on a predefined ratio and schedule, ensuring fair and efficient distribution among buyers.</li>\n<li>Identifies repeat customers and routes their data to the original lead buyer at no extra cost.</li>\n<li>Provides separate interfaces for different user roles, with two-factor authentication for lead buyers and comprehensive management options for admins.</li>\n</ol>\n<h2 id=\"challenges\">Challenges</h2>\n<ul>\n<li>Ensuring seamless integration with various external CRMs owned by lead buyers, each potentially having different API specifications.</li>\n<li>Developing a fair and efficient algorithm for lead distribution that can handle varying schedules and ratios among lead buyers.</li>\n<li>But I was able to overcome these challenges by:\n<ul>\n<li>Implementing a robust error handling system to identify and fix issues promptly.</li>\n<li>Using a combination of Firebase Cloud Functions and Cloud Scheduler to automate lead distribution.</li>\n<li>Using Firebase Cloud Firestore to store and retrieve data efficiently.</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>Learned how to implement 2FA.</li>\n</ul>";

				const frontmatter = {"title":"Lead CRM","slug":"leadcrm","startDate":"2023-08-20T00:00:00.000Z","endDate":"2023-11-20T00:00:00.000Z","stacks":["React","TailwindCSS","JavaScript","TypeScript","Firebase"],"company":"upwork","live":"https://www.upwork.com/jobs/~01001b4d46993f251a","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}]};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_leadcrm.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThe primary purpose of this CRM is to automate the process of receiving, validating, and distributing customer leads to various lead buyers based on pre-defined criteria and schedules. It aims to streamline lead management, ensure efficient lead distribution, and maintain a clear record of transactions and interactions without actual financial transactions within the system.\r\n\r\n### Features\r\n1. Receives submissions and performs basic validation and formatting.\r\n2. Automatically sends validated leads to the appropriate buyer's CRM using their API key.\r\n3. Visually tracks the cost of leads against lead buyer's balances without handling real transactions.\r\n4. Distributes leads based on a predefined ratio and schedule, ensuring fair and efficient distribution among buyers.\r\n5. Identifies repeat customers and routes their data to the original lead buyer at no extra cost.\r\n6. Provides separate interfaces for different user roles, with two-factor authentication for lead buyers and comprehensive management options for admins.\r\n\r\n## Challenges\r\n- Ensuring seamless integration with various external CRMs owned by lead buyers, each potentially having different API specifications.\r\n- Developing a fair and efficient algorithm for lead distribution that can handle varying schedules and ratios among lead buyers.\r\n- But I was able to overcome these challenges by:\r\n    - Implementing a robust error handling system to identify and fix issues promptly.\r\n    - Using a combination of Firebase Cloud Functions and Cloud Scheduler to automate lead distribution.\r\n    - Using Firebase Cloud Firestore to store and retrieve data efficiently.\r\n\r\n### Lessons Learned\r\n- Learned how to implement 2FA.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":2,"slug":"challenges","text":"Challenges"},{"depth":3,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
