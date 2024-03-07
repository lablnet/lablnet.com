import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This is the previous website for AlphaSoftHub (Private) Limited.</p>";

				const frontmatter = {"title":"AlphaSoftHub Old Website","slug":"ash_oldsite","startDate":"2021-02-12T00:00:00.000Z","endDate":"2021-02-14T00:00:00.000Z","stacks":["PHP","WordPress"],"live":"https://old.alphasofthub.com/","company":"alphasofthub","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/ash_oldsite.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThis is the previous website for AlphaSoftHub (Private) Limited.\r\n";
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
