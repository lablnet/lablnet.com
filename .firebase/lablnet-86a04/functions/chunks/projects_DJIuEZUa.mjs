import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<p>These are the project which I do not feel proud to show.</p>";

				const frontmatter = {"startDate":"2018-01-01T00:00:00.000Z","title":"Other Projects","name":"Projects","link":"https://mennr.tech/","featured":false,"type":"company"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/projects.md";
				const url = undefined;
				function rawContent() {
					return "\nThese are the project which I do not feel proud to show.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
