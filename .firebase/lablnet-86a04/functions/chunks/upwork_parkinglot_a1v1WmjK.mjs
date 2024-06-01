import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>A mobile application that runs on Android and IOS devices. This application is designed to manage parking lots.</p>\n<h1 id=\"features\">Features</h1>\n<h3 id=\"admin\">Admin</h3>\n<ol>\n<li>Admin can add parking slots.</li>\n<li>Admin can add addons.</li>\n<li>Admin can add terminal locations.</li>\n</ol>\n<h4 id=\"employee\">Employee</h4>\n<p>Admin also have these features.</p>\n<ol>\n<li>Employee can see the parking history.</li>\n<li>Employee can see the shuttle service requests.</li>\n<li>Employee can chat with the user.</li>\n<li>Employee can download the invoice.</li>\n<li>Employee can manage the parking lot orders.</li>\n<li>Employee can invoive the parking lot orders.</li>\n</ol>\n<h3 id=\"user\">User</h3>\n<ol>\n<li>User can register and login.</li>\n<li>User can book a parking slot.</li>\n<li>User can see the parking history.</li>\n<li>User can request shuttle service.</li>\n<li>User can download the invoice.</li>\n<li>User can chat with the admin/team.</li>\n</ol>\n<h2 id=\"lessons-learned\">Lessons Learned</h2>\n<p>I learned how to use firebase callable functions and how to use firebase storage.</p>";

				const frontmatter = {"title":"In & Out Parking","slug":"in-out-parking","startDate":"2024-02-23T00:00:00.000Z","endDate":"2024-04-22T00:00:00.000Z","stacks":["Flutter","Dart","Firebase"],"collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"company":"upwork"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_parkinglot.md";
				const url = undefined;
				function rawContent() {
					return "\nA mobile application that runs on Android and IOS devices. This application is designed to manage parking lots.\n\n# Features\n### Admin\n1. Admin can add parking slots.\n2. Admin can add addons.\n3. Admin can add terminal locations.\n\n#### Employee\nAdmin also have these features.\n1. Employee can see the parking history.\n2. Employee can see the shuttle service requests.\n3. Employee can chat with the user.\n4. Employee can download the invoice.\n5. Employee can manage the parking lot orders.\n6. Employee can invoive the parking lot orders.\n\n### User\n1. User can register and login.\n2. User can book a parking slot.\n3. User can see the parking history.\n4. User can request shuttle service.\n5. User can download the invoice.\n6. User can chat with the admin/team.\n\n## Lessons Learned\nI learned how to use firebase callable functions and how to use firebase storage.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"features","text":"Features"},{"depth":3,"slug":"admin","text":"Admin"},{"depth":4,"slug":"employee","text":"Employee"},{"depth":3,"slug":"user","text":"User"},{"depth":2,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
