import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This project involved the development of an Amazon gift buying site that allowed users to make purchases using various cryptocurrencies. This was a new challenge for me, as it was the first time I had developed a custom theme and plugins for WordPress. The project was initiated when a man from Japan contacted me directly and hired me for the job. Despite the challenges, I was able to successfully complete the project, resulting in a fully functional and user-friendly website. This experience allowed me to expand my skillset and broaden my expertise in WordPress development.</p>";

				const frontmatter = {"title":"SpendBTC","slug":"direct_spendbtc","startDate":"2019-07-01T00:00:00.000Z","endDate":"2019-07-31T00:00:00.000Z","stacks":["WordPress","PHP","HTML","CSS","JavaScript","Jquery"],"company":"direct","live":"https://spendbtc.io/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/direct_spendbtc.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis project involved the development of an Amazon gift buying site that allowed users to make purchases using various cryptocurrencies. This was a new challenge for me, as it was the first time I had developed a custom theme and plugins for WordPress. The project was initiated when a man from Japan contacted me directly and hired me for the job. Despite the challenges, I was able to successfully complete the project, resulting in a fully functional and user-friendly website. This experience allowed me to expand my skillset and broaden my expertise in WordPress development.\n";
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
