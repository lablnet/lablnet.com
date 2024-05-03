import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CScWkXlk.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>One of my project was the development of an Android application for Icontem, a Brazil-based company owned by Manuel Lemos. The goal of the app was to help users find the best business partners by allowing them to log in and search for potential partners based on various criteria. I was responsible for the entire development process, from conceptualization to deployment, and was able to deliver a high-quality product that met the client’s needs and expectations. This project allowed me to gain valuable experience in developing mobile applications, and I was pleased to be able to contribute to the success of Icontem.</p>";

				const frontmatter = {"title":"AINDA","slug":"direct_ainda","startDate":"2019-07-01T00:00:00.000Z","endDate":"2019-07-31T00:00:00.000Z","stacks":["HTML","CSS","JavaScript","Cordova"],"company":"direct","live":"https://play.google.com/store/apps/details?id=com.practicalvalue.ainda&hl=en","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/direct_ainda.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nOne of my project was the development of an Android application for Icontem, a Brazil-based company owned by Manuel Lemos. The goal of the app was to help users find the best business partners by allowing them to log in and search for potential partners based on various criteria. I was responsible for the entire development process, from conceptualization to deployment, and was able to deliver a high-quality product that met the client's needs and expectations. This project allowed me to gain valuable experience in developing mobile applications, and I was pleased to be able to contribute to the success of Icontem.\n";
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
