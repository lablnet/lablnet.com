import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>As a university student in Pakistan, I noticed a common problem among my peers: they did not have access to lectures, slides, and other resources on exam night. I decided to develop an Android application to address this issue, as my university did not have an app available. I used Dart, Flutter, and Firebase to create the app, and was pleasantly surprised by the positive response from students. However, the app did not last long due to issues with resource management.</p>\n<h3 id=\"features\">Features</h3>\n<ol>\n<li>Sharing of class resources such as lectures, assignments, and quizzes.</li>\n<li>Viewing of today’s events and class announcements.</li>\n<li>Weekly timetable.</li>\n<li>Downloading and managing resources within the app.</li>\n<li>Sharing of downloaded resources directly from the app.</li>\n</ol>\n<h3 id=\"issues-faced\">Issues Faced</h3>\n<ol>\n<li>Difficulty in maintaining resources, as I relied on voluntary contributions from class representatives (CRs) who were often unwilling to help.</li>\n<li>Challenges with Firebase functions and Google payment due to my bank card not working 🤔. So I add firebase rules by adding email manually.</li>\n<li>On the top of it, limited support for Flutter as it was a relatively new technology at the time.</li>\n</ol>\n<h3 id=\"some-goodies\">Some Goodies</h3>\n<ol>\n<li>The app supports a dark theme.</li>\n<li>It can be compiled for multiple platforms with minimal effort thanks to Flutter.</li>\n<li>Working on the project was enjoyable.</li>\n</ol>\n<h3 id=\"lessons-learnt\">Lessons Learnt</h3>\n<p>This was my first project using Flutter and Firebase, and I learned about these technologies while working on it.</p>";

				const frontmatter = {"title":"ResourcesR App","slug":"resourcesr","startDate":"2020-10-10T00:00:00.000Z","stacks":["Dart","Flutter","Firebases"],"live":"https://play.google.com/store/apps/details?id=resourcesr.web.app","github":"resourcesr/app","company":"resourcesr","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/resourcesr_app.md";
				const url = undefined;
				function rawContent() {
					return "### Purpose\r\n\r\nAs a university student in Pakistan, I noticed a common problem among my peers: they did not have access to lectures, slides, and other resources on exam night. I decided to develop an Android application to address this issue, as my university did not have an app available. I used Dart, Flutter, and Firebase to create the app, and was pleasantly surprised by the positive response from students. However, the app did not last long due to issues with resource management.\r\n\r\n### Features\r\n\r\n1. Sharing of class resources such as lectures, assignments, and quizzes.\r\n2. Viewing of today's events and class announcements.\r\n3. Weekly timetable.\r\n4. Downloading and managing resources within the app.\r\n5. Sharing of downloaded resources directly from the app.\r\n\r\n### Issues Faced\r\n\r\n1. Difficulty in maintaining resources, as I relied on voluntary contributions from class representatives (CRs) who were often unwilling to help.\r\n2. Challenges with Firebase functions and Google payment due to my bank card not working 🤔. So I add firebase rules by adding email manually.\r\n3. On the top of it, limited support for Flutter as it was a relatively new technology at the time.\r\n\r\n### Some Goodies\r\n\r\n1. The app supports a dark theme.\r\n2. It can be compiled for multiple platforms with minimal effort thanks to Flutter.\r\n3. Working on the project was enjoyable.\r\n\r\n### Lessons Learnt\r\n\r\nThis was my first project using Flutter and Firebase, and I learned about these technologies while working on it.\r\n";
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
