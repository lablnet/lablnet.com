import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>The project involved creating a web-based Student Information System. The system was designed to manage student information, including registration details, course enrollment, and payment processing. The system had a user-friendly interface, and it provided a range of features to help users efficiently manage student data. These features included the ability to view and update student information, register students for courses, process payments, and generate reports. Overall, the system was a valuable tool for managing student information at educational institutions.</p>";

				const frontmatter = {"title":"Web based Student Information System","slug":"upwork_munacjny","startDate":"2022-08-27T00:00:00.000Z","endDate":"2022-09-22T00:00:00.000Z","stacks":["Laravel","Vue","TailwindCSS","MySQL","PHP"],"company":"upwork","live":"https://sis.munacjny.org/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_munacjny.md";
				const url = undefined;
				function rawContent() {
					return "\nThe project involved creating a web-based Student Information System. The system was designed to manage student information, including registration details, course enrollment, and payment processing. The system had a user-friendly interface, and it provided a range of features to help users efficiently manage student data. These features included the ability to view and update student information, register students for courses, process payments, and generate reports. Overall, the system was a valuable tool for managing student information at educational institutions.\n";
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
