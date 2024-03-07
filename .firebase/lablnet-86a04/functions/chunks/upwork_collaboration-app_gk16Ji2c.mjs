import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I am currently working on a project called Collaboration App. Collaboration App is a web application that allows users to collaborate with each other. I am developing this project using Vue, TailwindCSS, and Firebase. The features of this project as follow:</p>\n<ul>\n<li>Admin will invite user to join the app.</li>\n<li>Admin can create another admin, user, room, and assign user to room.</li>\n<li>User can join the room and chat with other user in the same room.\n<ul>\n<li>User can send text message.</li>\n<li>User can send image.</li>\n<li>User can send file.</li>\n</ul>\n</li>\n<li>Admin can create Zoom meeting or sechdule before meeting.</li>\n<li>User can join the Zoom meeting from the app.</li>\n<li>The Zoom meeting should be inside the app by using Zoom SDK.</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>I learned how to integrate Zoom SDK into the web application.</li>\n<li>I learned how to use Firebase Functions to create Zoom meeting and join the meeting.</li>\n<li>I learned how to use Firebase storage to store the image and file.</li>\n</ul>";

				const frontmatter = {"title":"Collaboration App","slug":"collaboration-app","startDate":"2024-01-26T00:00:00.000Z","endDate":"2024-02-02T00:00:00.000Z","stacks":["TypeScript","JavaScript","Firebase","Functions","Vue","TailwindCSS","Zoom"],"company":"upwork"};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_collaboration-app.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI am currently working on a project called Collaboration App. Collaboration App is a web application that allows users to collaborate with each other. I am developing this project using Vue, TailwindCSS, and Firebase. The features of this project as follow:\r\n\r\n- Admin will invite user to join the app.\r\n- Admin can create another admin, user, room, and assign user to room.\r\n- User can join the room and chat with other user in the same room.\r\n    - User can send text message.\r\n    - User can send image.\r\n    - User can send file.\r\n- Admin can create Zoom meeting or sechdule before meeting.\r\n- User can join the Zoom meeting from the app.\r\n- The Zoom meeting should be inside the app by using Zoom SDK.\r\n\r\n### Lessons Learned\r\n- I learned how to integrate Zoom SDK into the web application.\r\n- I learned how to use Firebase Functions to create Zoom meeting and join the meeting.\r\n- I learned how to use Firebase storage to store the image and file.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
