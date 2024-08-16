import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>As a university student in Pakistan, I noticed a common problem among my peers: they did not have access to lectures, slides, and other resources on exam night. I decided to develop an Android application to address this issue, as my university did not have an app available. I used Dart, Flutter, and Firebase to create the app, and was pleasantly surprised by the positive response from students. However, the app did not last long due to issues with resource management.</p>\n<h3 id=\"features\">Features</h3>\n<ol>\n<li>Sharing of class resources such as lectures, assignments, and quizzes.</li>\n<li>Viewing of today’s events and class announcements.</li>\n<li>Weekly timetable.</li>\n<li>Downloading and managing resources within the app.</li>\n<li>Sharing of downloaded resources directly from the app.</li>\n</ol>\n<h3 id=\"issues-faced\">Issues Faced</h3>\n<ol>\n<li>Difficulty in maintaining resources, as I relied on voluntary contributions from class representatives (CRs) who were often unwilling to help.</li>\n<li>Challenges with Firebase functions and Google payment due to my bank card not working 🤔. So I add firebase rules by adding email manually.</li>\n<li>On the top of it, limited support for Flutter as it was a relatively new technology at the time.</li>\n</ol>\n<h3 id=\"some-goodies\">Some Goodies</h3>\n<ol>\n<li>The app supports a dark theme.</li>\n<li>It can be compiled for multiple platforms with minimal effort thanks to Flutter.</li>\n<li>Working on the project was enjoyable.</li>\n</ol>\n<h3 id=\"lessons-learnt\">Lessons Learnt</h3>\n<p>This was my first project using Flutter and Firebase, and I learned about these technologies while working on it.</p>";

				const frontmatter = {"title":"ResourcesR App","slug":"resourcesr","startDate":"2020-10-10T00:00:00.000Z","stacks":["Dart","Flutter","Firebases"],"live":"https://play.google.com/store/apps/details?id=resourcesr.web.app","github":"resourcesr/app","company":"resourcesr","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/resourcesr_app.md";
				const url = undefined;
				function rawContent() {
					return "### Purpose\n\nAs a university student in Pakistan, I noticed a common problem among my peers: they did not have access to lectures, slides, and other resources on exam night. I decided to develop an Android application to address this issue, as my university did not have an app available. I used Dart, Flutter, and Firebase to create the app, and was pleasantly surprised by the positive response from students. However, the app did not last long due to issues with resource management.\n\n### Features\n\n1. Sharing of class resources such as lectures, assignments, and quizzes.\n2. Viewing of today's events and class announcements.\n3. Weekly timetable.\n4. Downloading and managing resources within the app.\n5. Sharing of downloaded resources directly from the app.\n\n### Issues Faced\n\n1. Difficulty in maintaining resources, as I relied on voluntary contributions from class representatives (CRs) who were often unwilling to help.\n2. Challenges with Firebase functions and Google payment due to my bank card not working 🤔. So I add firebase rules by adding email manually.\n3. On the top of it, limited support for Flutter as it was a relatively new technology at the time.\n\n### Some Goodies\n\n1. The app supports a dark theme.\n2. It can be compiled for multiple platforms with minimal effort thanks to Flutter.\n3. Working on the project was enjoyable.\n\n### Lessons Learnt\n\nThis was my first project using Flutter and Firebase, and I learned about these technologies while working on it.\n";
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
