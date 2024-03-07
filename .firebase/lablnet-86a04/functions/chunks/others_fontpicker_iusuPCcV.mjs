import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project is to create a standalone font picker for the web. The font picker will allow users to quickly preview and select fonts from Google’s large range of free fonts. Users will be able to select a font family, as well as optional font weight and style (normal or italics).</p>\n<h3 id=\"features\">Features</h3>\n<ul>\n<li>Quickly preview and select any Google font family.</li>\n<li>Optionally choose font weight and font style.</li>\n</ul>\n<h3 id=\"todo\">Todo</h3>\n<ul>\n<li>Find fonts by name, language, and category (serif, sans-serif, display, handwriting, monospace).</li>\n<li>Update style to make it mobile responsive.</li>\n</ul>\n<h3 id=\"related-projects\">Related Projects</h3>\n<ul>\n<li><a href=\"https://github.com/av01d/fontpicker-jquery-plugin\">https://github.com/av01d/fontpicker-jquery-plugin</a> (but it’s Jquery plugin and dependend on Jquery).</li>\n</ul>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>Continue to work on adding more features to this project, such as those listed in the Todo section</p>";

				const frontmatter = {"title":"Font Picker","slug":"fontpicker","startDate":"2021-06-26T00:00:00.000Z","endDate":"2021-07-02T00:00:00.000Z","stacks":["HTML","CSS","JavaScript","Python"],"live":"https://lablnet.github.io/fontpicker/","github":"lablnet/fontpicker","company":"projects","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/others_fontpicker.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThe purpose of this project is to create a standalone font picker for the web. The font picker will allow users to quickly preview and select fonts from Google's large range of free fonts. Users will be able to select a font family, as well as optional font weight and style (normal or italics).\r\n\r\n### Features\r\n- Quickly preview and select any Google font family.\r\n- Optionally choose font weight and font style.\r\n\r\n### Todo\r\n- Find fonts by name, language, and category (serif, sans-serif, display, handwriting, monospace).\r\n- Update style to make it mobile responsive.\r\n\r\n### Related Projects\r\n- [https://github.com/av01d/fontpicker-jquery-plugin](https://github.com/av01d/fontpicker-jquery-plugin) (but it's Jquery plugin and dependend on Jquery).\r\n\r\n### Future Thoughts\r\nContinue to work on adding more features to this project, such as those listed in the Todo section\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":3,"slug":"todo","text":"Todo"},{"depth":3,"slug":"related-projects","text":"Related Projects"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
