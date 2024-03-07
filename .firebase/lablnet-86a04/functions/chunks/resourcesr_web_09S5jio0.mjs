import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this web app is similar to the previous project, but with a faster and more efficient design. I was able to compile the Flutter app to web, but it was very slow. Therefore, I developed the app in VueJs to improve its performance.</p>\n<h3 id=\"features\">Features</h3>\n<ol>\n<li>Sharing of class resources such as lectures, assignments, and quizzes.</li>\n<li>Viewing of today’s events.</li>\n<li>Only class representatives or management can manage and update resources.</li>\n</ol>\n<h3 id=\"issues-faced\">Issues Faced</h3>\n<ol>\n<li>The same challenges as the previous project, including difficulty in maintaining resources and issues with Firebase functions.</li>\n</ol>\n<h3 id=\"some-goodies\">Some Goodies</h3>\n<ol>\n<li>I added additional features for admin users, such as the ability to add resources.</li>\n</ol>\n<h3 id=\"lessons-learnt\">Lessons Learnt</h3>\n<p>This was my first time using Firebase as a database, and I learned about its capabilities through this project.</p>";

				const frontmatter = {"title":"ResourcesR Web","slug":"resourcesr_web","startDate":"2020-09-10T00:00:00.000Z","stacks":["Vue","JavaScript","Firebases"],"live":"https://resourcesr.web.app/","github":"resourcesr/web","company":"resourcesr","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/resourcesr_web.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\n\r\nThe purpose of this web app is similar to the previous project, but with a faster and more efficient design. I was able to compile the Flutter app to web, but it was very slow. Therefore, I developed the app in VueJs to improve its performance.\r\n\r\n### Features\r\n\r\n1. Sharing of class resources such as lectures, assignments, and quizzes.\r\n2. Viewing of today's events.\r\n3. Only class representatives or management can manage and update resources.\r\n\r\n### Issues Faced\r\n\r\n1. The same challenges as the previous project, including difficulty in maintaining resources and issues with Firebase functions.\r\n\r\n### Some Goodies\r\n\r\n1. I added additional features for admin users, such as the ability to add resources.\r\n\r\n### Lessons Learnt\r\n\r\nThis was my first time using Firebase as a database, and I learned about its capabilities through this project.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":3,"slug":"issues-faced","text":"Issues Faced"},{"depth":3,"slug":"some-goodies","text":"Some Goodies"},{"depth":3,"slug":"lessons-learnt","text":"Lessons Learnt"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
