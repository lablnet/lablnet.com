import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>While I have only completed one project on freelancer.com, I quickly realized that this platform is rife with scams and spam. This was a disappointing discovery, as it made it difficult for me to trust the legitimacy of the opportunities available on the site. Despite this, I was able to successfully complete the project I was working on, and I gained valuable experience in the process. However, I decided to explore other freelance platforms in order to avoid the scams and spam that are prevalent on freelancer.com.</p>";

				const frontmatter = {"startDate":"2021-02-12T00:00:00.000Z","title":"Direct Client","name":"Projects","link":"https://www.lablnet.com/","step":6,"featured":false,"type":"company"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/companies/direct.md";
				const url = undefined;
				function rawContent() {
					return "\nWhile I have only completed one project on freelancer.com, I quickly realized that this platform is rife with scams and spam. This was a disappointing discovery, as it made it difficult for me to trust the legitimacy of the opportunities available on the site. Despite this, I was able to successfully complete the project I was working on, and I gained valuable experience in the process. However, I decided to explore other freelance platforms in order to avoid the scams and spam that are prevalent on freelancer.com.\n";
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
