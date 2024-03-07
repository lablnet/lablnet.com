import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This is a skeleton app for the AlphaZ Framework that demonstrates the basic structure of the framework.</p>";

				const frontmatter = {"title":"AlphaZ","slug":"alphaz","startDate":"2018-02-20T00:00:00.000Z","stacks":["PHP"],"live":"https://zestframework.github.io/","github":"alphaZframework/alphaZ","company":"alphaz","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/alphaz_app.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThis is a skeleton app for the AlphaZ Framework that demonstrates the basic structure of the framework.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
