import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>ProtonCash is an ERP CRM system that is used to manage legal cases and grant funds as loans. Weareappointments is another CRM system that is used to manage leads. These two systems are integrated to provide a comprehensive solution for managing legal cases and identifying potential clients. ProtonCash is specifically designed to handle the financial aspects of legal cases, including the granting of loans and the tracking of payments.\nWeareappointments, on the other hand, is focused on managing the leads generated by the legal firm, including the tracking of client interactions and the scheduling of appointments. Together, these two systems provide a powerful tool for managing legal cases and client relationships.</p>";

				const frontmatter = {"title":"ProtonCash, Weareappointments","slug":"upwork_weareappointments","startDate":"2021-08-07T00:00:00.000Z","endDate":"2021-08-12T00:00:00.000Z","stacks":["PHP","Laravel","React"],"company":"upwork","live":"https://weareappointments.com/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_weareappointments.md";
				const url = undefined;
				function rawContent() {
					return "\nProtonCash is an ERP CRM system that is used to manage legal cases and grant funds as loans. Weareappointments is another CRM system that is used to manage leads. These two systems are integrated to provide a comprehensive solution for managing legal cases and identifying potential clients. ProtonCash is specifically designed to handle the financial aspects of legal cases, including the granting of loans and the tracking of payments.\nWeareappointments, on the other hand, is focused on managing the leads generated by the legal firm, including the tracking of client interactions and the scheduling of appointments. Together, these two systems provide a powerful tool for managing legal cases and client relationships.\n";
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