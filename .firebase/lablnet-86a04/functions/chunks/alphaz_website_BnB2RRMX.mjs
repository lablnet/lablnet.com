import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This website was developed using the AlphaZ Framework, formerly known as Zest Framework.</p>";

				const frontmatter = {"title":"AlphaZ Website","slug":"alphaz_web","startDate":"2021-06-01T00:00:00.000Z","EndDate":"2021-06-01T00:00:00.000Z","stacks":["PHP","MySQL","JavaScript","Bootstrap"],"github":"alphazframework/Zest_Web","company":"alphaz","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/alphaz_website.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis website was developed using the AlphaZ Framework, formerly known as Zest Framework.\n";
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
