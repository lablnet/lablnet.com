import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<p>I use frameworks to speed up the development process and am open to exploring different options. I have experience working with Laravel, Codeigniter, Vue, React, Electron, Jquery, TailwindCSS, AntDesign, Bootstrap, MaterializeCSS, Flask, Flutter, Selenium, and Ruby on Rails.</p>";

				const frontmatter = {"title":"Frameworks","step":2};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/skills/frameworks.md";
				const url = undefined;
				function rawContent() {
					return "\nI use frameworks to speed up the development process and am open to exploring different options. I have experience working with Laravel, Codeigniter, Vue, React, Electron, Jquery, TailwindCSS, AntDesign, Bootstrap, MaterializeCSS, Flask, Flutter, Selenium, and Ruby on Rails.";
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
