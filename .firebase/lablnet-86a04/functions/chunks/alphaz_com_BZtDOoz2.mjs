import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This is a component for the AlphaZ Framework, and its purpose is to install and manage the framework’s components.</p>\n<h3 id=\"lesson-learnt\">Lesson Learnt</h3>\n<p>Working on the basics of the component system, I learned about how systems that support components, plugins, and modules function. I also learned how to create a component for the AlphaZ Framework 😁.</p>";

				const frontmatter = {"title":"AlphaZ Component Installer","slug":"alphaz_com","startDate":"2020-07-01T00:00:00.000Z","EndDate":"2020-07-05T00:00:00.000Z","stacks":["PHP","JavaScript","Bootstrap"],"github":"alphazframework/com_installer","company":"alphaz","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/alphaz_com.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis is a component for the AlphaZ Framework, and its purpose is to install and manage the framework's components.\n\n### Lesson Learnt\nWorking on the basics of the component system, I learned about how systems that support components, plugins, and modules function. I also learned how to create a component for the AlphaZ Framework 😁.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"lesson-learnt","text":"Lesson Learnt"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
