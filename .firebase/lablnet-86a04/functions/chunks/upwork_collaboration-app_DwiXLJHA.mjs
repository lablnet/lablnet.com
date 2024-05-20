import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D8mEBU6v.mjs';

const html = "<p>I am currently working on a project called Collaboration App. Collaboration App is a web application that allows users to collaborate with each other. I am developing this project using Vue, TailwindCSS, and Firebase. The features of this project as follow:</p>\n<ul>\n<li>Admin will invite user to join the app.</li>\n<li>Admin can create another admin, user, room, and assign user to room.</li>\n<li>User can join the room and chat with other user in the same room.\n<ul>\n<li>User can send text message.</li>\n<li>User can send image.</li>\n<li>User can send file.</li>\n</ul>\n</li>\n<li>Admin can create Zoom meeting or sechdule before meeting.</li>\n<li>User can join the Zoom meeting from the app.</li>\n<li>The Zoom meeting should be inside the app by using Zoom SDK.</li>\n</ul>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>I learned how to integrate Zoom SDK into the web application.</li>\n<li>I learned how to use Firebase Functions to create Zoom meeting and join the meeting.</li>\n<li>I learned how to use Firebase storage to store the image and file.</li>\n</ul>";

				const frontmatter = {"title":"Collaboration App","slug":"collaboration-app","startDate":"2024-01-26T00:00:00.000Z","endDate":"2024-02-02T00:00:00.000Z","stacks":["TypeScript","JavaScript","Firebase","Functions","Vue","TailwindCSS","Zoom"],"company":"upwork"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_collaboration-app.md";
				const url = undefined;
				function rawContent() {
					return "\nI am currently working on a project called Collaboration App. Collaboration App is a web application that allows users to collaborate with each other. I am developing this project using Vue, TailwindCSS, and Firebase. The features of this project as follow:\n\n- Admin will invite user to join the app.\n- Admin can create another admin, user, room, and assign user to room.\n- User can join the room and chat with other user in the same room.\n    - User can send text message.\n    - User can send image.\n    - User can send file.\n- Admin can create Zoom meeting or sechdule before meeting.\n- User can join the Zoom meeting from the app.\n- The Zoom meeting should be inside the app by using Zoom SDK.\n\n### Lessons Learned\n- I learned how to integrate Zoom SDK into the web application.\n- I learned how to use Firebase Functions to create Zoom meeting and join the meeting.\n- I learned how to use Firebase storage to store the image and file.\n";
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
