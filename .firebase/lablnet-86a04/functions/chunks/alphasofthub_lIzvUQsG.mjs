import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I started my own business, AlphaSoftHub (Private) Limited, on February 12, 2021. In this role, I serve as the lead developer for the company’s various projects.</p>";

				const frontmatter = {"startDate":"2021-02-12T00:00:00.000Z","title":"Founder & CEO","name":"AlphaSoftHub (Private) Limited","link":"https://alphasofthub.com/","icon":"../assets/icons/ash.png","featured":true,"type":"company"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/alphasofthub.md";
				const url = undefined;
				function rawContent() {
					return "\nI started my own business, AlphaSoftHub (Private) Limited, on February 12, 2021. In this role, I serve as the lead developer for the company's various projects.\n";
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
