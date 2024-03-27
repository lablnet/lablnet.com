import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "";

				const frontmatter = {"title":"Python For Everybody","institute":"Coursera online course (University of Michigan)","completed":"2020-08-07T00:00:00.000Z","picture":"../assets/images/certificates/Coursera 8EWU75XUZ4XD-1.jpg","link":"https://www.coursera.org/account/accomplishments/certificate/8EWU75XUZ4XD","step":2};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/certificates/python.md";
				const url = undefined;
				function rawContent() {
					return "";
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
