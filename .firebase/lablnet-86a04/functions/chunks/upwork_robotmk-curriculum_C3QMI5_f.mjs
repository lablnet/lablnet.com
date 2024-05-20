import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project was to integrate GitHub authentication to restrict site access to authorized team members. The goal was to ensure that only users part of a specific team (e.g., team1) can access the corresponding subdomain (e.g., team1.lablnet.com) after authentication. The solution needed to be scalable to accommodate any number of teams and subdomains.</p>\n<h3 id=\"solution\">Solution</h3>\n<ul>\n<li>\n<p>To achieve this, I developed two Cloudflare workers:</p>\n<ol>\n<li><strong>GitHub Authentication Redirect:</strong> Handles GitHub authentication and redirects users to the appropriate subdomain.</li>\n<li><strong>Team Verification:</strong> Verifies team membership based on the subdomain and grants or denies access to the site.</li>\n</ol>\n</li>\n<li>\n<p>To automate subdomain creation and mapping to the Cloudflare page branch, I wrote a GitHub action that utilizes the Cloudflare API to create CNAME records.</p>\n</li>\n</ul>\n<h2 id=\"challenges\">Challenges</h2>\n<ul>\n<li>Handling GitHub authentication redirects for multiple subdomains without pattern support (e.g., *.lablnet.com)</li>\n<li>Ensuring that the solution is scalable and can accommodate any number of teams and subdomains.</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>The value of leveraging Cloudflare workers for custom authentication and routing logic</li>\n</ul>";

				const frontmatter = {"title":"Robotmk Curriculum","slug":"robotmk-curriculum","startDate":"2024-05-08T00:00:00.000Z","endDate":"2024-05-15T00:00:00.000Z","stacks":["JavaScript","Cloudflare Worker","GitHub Actions"],"company":"upwork","live":"https://www.upwork.com/jobs/~0189a03f69f206b9b5","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}]};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_robotmk-curriculum.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe purpose of this project was to integrate GitHub authentication to restrict site access to authorized team members. The goal was to ensure that only users part of a specific team (e.g., team1) can access the corresponding subdomain (e.g., team1.lablnet.com) after authentication. The solution needed to be scalable to accommodate any number of teams and subdomains.\n\n\n### Solution\n- To achieve this, I developed two Cloudflare workers:\n    1. **GitHub Authentication Redirect:** Handles GitHub authentication and redirects users to the appropriate subdomain.\n    2. **Team Verification:** Verifies team membership based on the subdomain and grants or denies access to the site.\n\n- To automate subdomain creation and mapping to the Cloudflare page branch, I wrote a GitHub action that utilizes the Cloudflare API to create CNAME records.\n\n\n## Challenges\n- Handling GitHub authentication redirects for multiple subdomains without pattern support (e.g., *.lablnet.com)\n- Ensuring that the solution is scalable and can accommodate any number of teams and subdomains.\n\n### Lessons Learned\n- The value of leveraging Cloudflare workers for custom authentication and routing logic\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"solution","text":"Solution"},{"depth":2,"slug":"challenges","text":"Challenges"},{"depth":3,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
