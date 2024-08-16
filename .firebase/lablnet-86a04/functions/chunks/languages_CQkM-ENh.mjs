import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<p>I am proficient in JavaScript, Python, and PHP, and have experience working with various databases such as MySql, Firebase, and mongodb. Additionally, I have expertise in web development with HTML and CSS. I have also worked with other languages such as Dart, C, C++, and Ruby.</p>";

				const frontmatter = {"title":"Languages","step":1};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/skills/languages.md";
				const url = undefined;
				function rawContent() {
					return "\nI am proficient in JavaScript, Python, and PHP, and have experience working with various databases such as MySql, Firebase, and mongodb. Additionally, I have expertise in web development with HTML and CSS. I have also worked with other languages such as Dart, C, C++, and Ruby.\n";
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
