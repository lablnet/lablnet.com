import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of PHP script was to sync Google contacts with a MySQL database. The script needed to fetch contacts from a Google account and store them in a MySQL database. The script also needed to update the database with any changes made to the Google contacts and vice versa.</p>\n<h3 id=\"solution\">Solution.</h3>\n<ul>\n<li>I developed a PHP script that authenticated with Google using OAuth 2.0 and fetched contacts from the Google account via the Google People API.</li>\n<li>The script then connected to a MySQL database and stored the contacts in the database.</li>\n<li>To ensure that the database was updated with any changes made to the Google contacts, I implemented a mechanism to compare the contacts in the database with the contacts fetched from Google and update the database accordingly.</li>\n<li>The script use cron job to run the sync process at regular intervals.</li>\n</ul>\n<h2 id=\"challenges\">Challenges</h2>\n<ul>\n<li>2-way sync between Google contacts and MySQL database</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>I’ve learned how to use Google People API to fetch contacts from a Google account.</li>\n</ul>";

				const frontmatter = {"title":"Google Contact Sync","slug":"google-contact-sync","startDate":"2024-04-02T00:00:00.000Z","endDate":"2024-04-06T00:00:00.000Z","stacks":["PHP","MySQL"],"company":"upwork","live":"https://www.upwork.com/jobs/~016582fa14b4769846","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}]};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_google-contact-sync.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe purpose of PHP script was to sync Google contacts with a MySQL database. The script needed to fetch contacts from a Google account and store them in a MySQL database. The script also needed to update the database with any changes made to the Google contacts and vice versa.\n\n### Solution.\n- I developed a PHP script that authenticated with Google using OAuth 2.0 and fetched contacts from the Google account via the Google People API.\n- The script then connected to a MySQL database and stored the contacts in the database.\n- To ensure that the database was updated with any changes made to the Google contacts, I implemented a mechanism to compare the contacts in the database with the contacts fetched from Google and update the database accordingly.\n- The script use cron job to run the sync process at regular intervals.\n\n## Challenges\n- 2-way sync between Google contacts and MySQL database\n\n### Lessons Learned\n- I've learned how to use Google People API to fetch contacts from a Google account.\n";
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
