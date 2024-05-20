import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>A mobile application that runs on Android and IOS devices. This application is designed to for cleaner and customers to connect. I will share more details about this project in the future.</p>";

				const frontmatter = {"title":"Shine.hr","slug":"shine-hr","startDate":"2024-05-12T00:00:00.000Z","stacks":["Flutter","Dart","Firebase"],"collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"company":"upwork","featured":true};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_shine-hr.md";
				const url = undefined;
				function rawContent() {
					return "\nA mobile application that runs on Android and IOS devices. This application is designed to for cleaner and customers to connect. I will share more details about this project in the future.\n";
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
