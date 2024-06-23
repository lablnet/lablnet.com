import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<p>Zest is a PHP MVC framework designed for rapid application development, particularly for small to medium scale apps and APIs. It offers a simple, yet powerful solution for creating efficient and scalable applications.</p>";

				const frontmatter = {"startDate":"2019-02-20T00:00:00.000Z","title":"Developer","name":"AlphaZ","link":"https://github.com/alphazframework","heroImage":"../assets/images/zest.png","icon":"../assets/icons/alphaz.png","step":8,"featured":false,"type":"project"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/alphaz.md";
				const url = undefined;
				function rawContent() {
					return "\nZest is a PHP MVC framework designed for rapid application development, particularly for small to medium scale apps and APIs. It offers a simple, yet powerful solution for creating efficient and scalable applications.\n";
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
