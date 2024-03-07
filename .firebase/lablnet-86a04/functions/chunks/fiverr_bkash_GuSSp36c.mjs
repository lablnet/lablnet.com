import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>One of my project was the development of Bkash payment WooCommerce plugin. This plugin allows e-commerce businesses to easily accept payments via the popular Bkash payment gateway, providing their customers with a convenient and secure way to make purchases on their website.</p>\n<p>I am proud of the work I have done on this project, and I am excited to see how it will help e-commerce businesses in Bangladesh grow and thrive.</p>";

				const frontmatter = {"title":"Bkash payment WooCommerce plugin","slug":"fiverr_bkash","startDate":"2019-12-19T00:00:00.000Z","endDate":"2019-12-31T00:00:00.000Z","stacks":["PHP","WordPress","WooCommerce"],"company":"fiverr","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/fiverr_bkash.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nOne of my project was the development of Bkash payment WooCommerce plugin. This plugin allows e-commerce businesses to easily accept payments via the popular Bkash payment gateway, providing their customers with a convenient and secure way to make purchases on their website.\r\n\r\nI am proud of the work I have done on this project, and I am excited to see how it will help e-commerce businesses in Bangladesh grow and thrive.\r\n";
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
