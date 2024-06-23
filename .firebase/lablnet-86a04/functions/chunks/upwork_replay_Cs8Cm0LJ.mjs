import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<p>This project entailed the development of an application where users, upon signing up, are navigated to a global view. In this view, users have the ability to sort patients and select a patient to view more detailed information, which includes various charts. The web application also incorporates an admin panel. This panel enables the admin to create, delete, and edit user profiles. The application is multilingual, offering support for French, English, and German. Additionally, the application is integrated with Google Analytics and Google Tag Manager for comprehensive data tracking and management.</p>";

				const frontmatter = {"title":"Replay Connect","slug":"replay-connect","startDate":"2023-07-23T00:00:00.000Z","endDate":"2023-08-22T00:00:00.000Z","stacks":["TypeScript","JavaScript","Firebase","Functions","Vue","TailwindCSS"],"live":"https://superadmin.replay-connect.com/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"company":"upwork"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_replay.md";
				const url = undefined;
				function rawContent() {
					return "\nThis project entailed the development of an application where users, upon signing up, are navigated to a global view. In this view, users have the ability to sort patients and select a patient to view more detailed information, which includes various charts. The web application also incorporates an admin panel. This panel enables the admin to create, delete, and edit user profiles. The application is multilingual, offering support for French, English, and German. Additionally, the application is integrated with Google Analytics and Google Tag Manager for comprehensive data tracking and management.\n";
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
