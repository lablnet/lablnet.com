import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The project involved extracting data from a MySQL database using PHP. While the overall project was relatively simple, the MySQL queries required to complete it were quite complex. However, I was able to successfully configure and execute the queries, and I was able to extract the necessary data from the database. This allowed me to complete the project successfully, and I gained valuable experience working with complex MySQL queries in the process. Overall, I was pleased with the successful completion of this project.</p>";

				const frontmatter = {"title":"PHP out mysql data","slug":"freelance_php","startDate":"2020-12-01T00:00:00.000Z","endDate":"2020-12-01T00:00:00.000Z","stacks":["PHP","MySQL"],"company":"freelance","live":"https://www.freelancer.com/projects/php/Php-out-mysql-data","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/freelance_php.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe project involved extracting data from a MySQL database using PHP. While the overall project was relatively simple, the MySQL queries required to complete it were quite complex. However, I was able to successfully configure and execute the queries, and I was able to extract the necessary data from the database. This allowed me to complete the project successfully, and I gained valuable experience working with complex MySQL queries in the process. Overall, I was pleased with the successful completion of this project.\n";
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
