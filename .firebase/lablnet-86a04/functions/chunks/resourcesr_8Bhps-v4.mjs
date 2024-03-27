import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I developed an app that offers a platform for students at Riphah University to share and access study resources.</p>";

				const frontmatter = {"startDate":"2019-02-20T00:00:00.000Z","title":"ResourcesR","name":"ResourcesR","link":"https://github.com/resourcesr","heroImage":"../assets/images/resourcesr.png","icon":"../assets/icons/resourcesr.png","featured":false,"type":"project"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/resourcesr.md";
				const url = undefined;
				function rawContent() {
					return "\nI developed an app that offers a platform for students at Riphah University to share and access study resources.\n";
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
