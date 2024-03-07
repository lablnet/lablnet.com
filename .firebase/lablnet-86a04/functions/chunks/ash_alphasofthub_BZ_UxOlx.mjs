import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The main purpose of this project was to create a website for my registered company, AlphaSoftHub (Private) Limited.</p>\n<h3 id=\"problems-faced\">Problems Faced</h3>\n<p>I initially wanted the backend of the system to be in Python, but I was unable to host it because I could not afford a dedicated server. I am currently using shared hosting. 😔</p>\n<h3 id=\"lessons-learnt\">Lessons Learnt</h3>\n<p>This was one of the first web apps I developed that utilized tailwindCSS, and it was a great learning experience. I now plan to use tailwindCSS in all of my future projects.</p>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>The blog functionality does not currently work as intended, and I would like to improve it. I also want to add a login system for users to manage their orders.</p>";

				const frontmatter = {"title":"AlphaSoftHub","slug":"alphasofthub_ash","startDate":"2022-08-01T00:00:00.000Z","endDate":"2022-09-01T00:00:00.000Z","stacks":["Vue","TailwindCSS","TypeScript","JavaScript","Vue"],"live":"https://alphasofthub.com/","company":"alphasofthub","featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/ash_alphasofthub.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Purpose\r\nThe main purpose of this project was to create a website for my registered company, AlphaSoftHub (Private) Limited.\r\n\r\n### Problems Faced\r\nI initially wanted the backend of the system to be in Python, but I was unable to host it because I could not afford a dedicated server. I am currently using shared hosting. 😔\r\n\r\n\r\n### Lessons Learnt\r\nThis was one of the first web apps I developed that utilized tailwindCSS, and it was a great learning experience. I now plan to use tailwindCSS in all of my future projects.\r\n\r\n### Future Thoughts\r\nThe blog functionality does not currently work as intended, and I would like to improve it. I also want to add a login system for users to manage their orders.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"problems-faced","text":"Problems Faced"},{"depth":3,"slug":"lessons-learnt","text":"Lessons Learnt"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
