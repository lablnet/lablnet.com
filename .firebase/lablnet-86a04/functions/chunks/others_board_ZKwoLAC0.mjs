import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project is to create a simple, standalone, and flexible board app or progressive web app (PWA) using vanilla JavaScript.</p>\n<h3 id=\"features\">Features</h3>\n<ul>\n<li>Platform-friendly design for mobile and desktop devices.</li>\n<li>Multiple styling options.</li>\n<li>Export options.</li>\n<li>And more.</li>\n</ul>\n<h3 id=\"related-projects\">Related Projects</h3>\n<ul>\n<li><a href=\"https://github.com/cs50/draw.cs50.io\">https://github.com/cs50/draw.cs50.io</a> (uses Paper.js and Hammer.js libraries).</li>\n</ul>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>In the future, we plan to add more features to this project, such as live sharing via sockets for collaboration with multiple users.</p>";

				const frontmatter = {"title":"Baord","slug":"board","startDate":"2021-05-26T00:00:00.000Z","endDate":"2021-05-26T00:00:00.000Z","stacks":["HTML","CSS","JavaScript","Docker"],"live":"https://board.lablnet.com/","github":"lablnet/board","company":"projects","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/others_board.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThe purpose of this project is to create a simple, standalone, and flexible board app or progressive web app (PWA) using vanilla JavaScript.\r\n\r\n### Features\r\n- Platform-friendly design for mobile and desktop devices.\r\n- Multiple styling options.\r\n- Export options.\r\n- And more.\r\n\r\n### Related Projects\r\n- [https://github.com/cs50/draw.cs50.io](https://github.com/cs50/draw.cs50.io) (uses Paper.js and Hammer.js libraries).\r\n\r\n### Future Thoughts\r\nIn the future, we plan to add more features to this project, such as live sharing via sockets for collaboration with multiple users.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":3,"slug":"related-projects","text":"Related Projects"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
