import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_91YiZ_qg.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of the AlphaZ Framework is to provide a lightweight, generic, and extensible PHP framework with a minimal bundle footprint. It is designed for PHP developers who want to build apps without having to code common features such as validation, routing, and database manipulation from scratch. AlphaZ offers a set of well-defined toolkits to handle these tasks, allowing developers to focus on building their apps.</p>\n<h3 id=\"problems-faced\">Problems Faced</h3>\n<p>Due to the complexity of this project, one of the main challenges was creating everything from scratch. Additionally, unit testing for each module took time.</p>\n<h3 id=\"some-goodies\">Some Goodies</h3>\n<ol>\n<li>Not to mention, working on the project was enjoyable, even during my college exams.</li>\n<li>The framework is purely lightweight and does not rely on third-party libraries.</li>\n<li>It supports components and plugins.</li>\n</ol>\n<h3 id=\"lessons-learnt\">Lessons Learnt</h3>\n<p>This was my first developed framework with real-world applications, and I learned a lot about the inner workings of PHP, including regular expressions and framework design.</p>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>I plan to continue maintaining and improving the framework in the future, including adding a database layer, security layer, package management, and more features.</p>";

				const frontmatter = {"title":"AlphaZ Framework","slug":"alphaz_framework","startDate":"2018-02-20T00:00:00.000Z","stacks":["PHP"],"live":"https://zestframework.github.io/","github":"alphaZframework/framework","company":"alphaz","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/alphaz_framework.md";
				const url = undefined;
				function rawContent() {
					return "### Purpose\n\nThe purpose of the AlphaZ Framework is to provide a lightweight, generic, and extensible PHP framework with a minimal bundle footprint. It is designed for PHP developers who want to build apps without having to code common features such as validation, routing, and database manipulation from scratch. AlphaZ offers a set of well-defined toolkits to handle these tasks, allowing developers to focus on building their apps.\n\n\n### Problems Faced\n\nDue to the complexity of this project, one of the main challenges was creating everything from scratch. Additionally, unit testing for each module took time.\n\n### Some Goodies\n1. Not to mention, working on the project was enjoyable, even during my college exams.\n2. The framework is purely lightweight and does not rely on third-party libraries.\n3. It supports components and plugins.\n\n\n### Lessons Learnt\n\nThis was my first developed framework with real-world applications, and I learned a lot about the inner workings of PHP, including regular expressions and framework design.\n\n### Future Thoughts\n\nI plan to continue maintaining and improving the framework in the future, including adding a database layer, security layer, package management, and more features.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"problems-faced","text":"Problems Faced"},{"depth":3,"slug":"some-goodies","text":"Some Goodies"},{"depth":3,"slug":"lessons-learnt","text":"Lessons Learnt"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
