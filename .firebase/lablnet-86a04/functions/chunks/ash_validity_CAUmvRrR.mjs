import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The main purpose of this library is to create a robust validation library for Flask, similar to the one available in Laravel.</p>";

				const frontmatter = {"title":"Validity","slug":"validity_ash","startDate":"2022-02-03T00:00:00.000Z","endDate":"2022-03-03T00:00:00.000Z","stacks":["Python"],"github":"alphasofthub/validity","company":"alphasofthub","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/ash_validity.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe main purpose of this library is to create a robust validation library for Flask, similar to the one available in Laravel.\n";
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
