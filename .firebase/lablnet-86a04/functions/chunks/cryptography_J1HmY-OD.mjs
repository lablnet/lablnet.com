import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "";

				const frontmatter = {"title":"Cryptography 1","institute":"Coursera online course (Stanford)","completed":"2022-09-15T00:00:00.000Z","picture":"../assets/images/certificates/Coursera 5DZ79VRJSBK3-1.jpg","link":"https://www.coursera.org/account/accomplishments/certificate/5DZ79VRJSBK3","step":3};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/certificates/cryptography.md";
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
