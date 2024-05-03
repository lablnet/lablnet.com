import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_91YiZ_qg.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The primary objective is to develop a chatbot website that allows users to interact with a bot for various actions, including retrieving and storing information. This system aims to facilitate user-bot interactions in a structured and efficient manner.</p>\n<h3 id=\"features\">Features</h3>\n<ol>\n<li>Utilizes OpenAI’s APIs for natural language processing.</li>\n<li>Store User messages with conversation history.</li>\n<li>OpenAI moderation API to filter out inappropriate content.\n<ul>\n<li>Block conversations with inappropriate content.</li>\n</ul>\n</li>\n<li>Admin Dashboard with impersonation feature.</li>\n</ol>\n<h2 id=\"challenges\">Challenges</h2>\n<p>Prompt engineering is a new field that is still in its infancy. As such, there are many challenges that we will face during the development of this project. Some of the major ones are listed below:\n- <strong>Natural Language Processing</strong>: The chatbot will need to be able to understand and respond to user queries.\n- The queries can be like “I want to vote on rule 2” or “I want to vote on rule 2 with as netural”.\n- The bot will need to be able to understand the intent of the user and respond accordingly.</p>\n<h3 id=\"lessons-learned\">Lessons Learned</h3>\n<ul>\n<li>Learned how to use OpenAI’s APIs for natural language processing and prompt engineering.</li>\n</ul>";

				const frontmatter = {"title":"Democratic AI","slug":"democraticai","startDate":"2023-07-15T00:00:00.000Z","endDate":"2023-11-17T00:00:00.000Z","stacks":["Vue","TailwindCSS","JavaScript","TypeScript","Firebase","Lambda"],"company":"upwork","live":"https://www.upwork.com/jobs/~018e8ebcdde7fc9eee","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}]};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_democraticai.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe primary objective is to develop a chatbot website that allows users to interact with a bot for various actions, including retrieving and storing information. This system aims to facilitate user-bot interactions in a structured and efficient manner.\n\n### Features\n1. Utilizes OpenAI's APIs for natural language processing.\n2. Store User messages with conversation history.\n3. OpenAI moderation API to filter out inappropriate content.\n    - Block conversations with inappropriate content.\n4. Admin Dashboard with impersonation feature.\n\n## Challenges\nPrompt engineering is a new field that is still in its infancy. As such, there are many challenges that we will face during the development of this project. Some of the major ones are listed below:\n    - **Natural Language Processing**: The chatbot will need to be able to understand and respond to user queries.\n        - The queries can be like \"I want to vote on rule 2\" or \"I want to vote on rule 2 with as netural\".\n        - The bot will need to be able to understand the intent of the user and respond accordingly.\n\n### Lessons Learned\n- Learned how to use OpenAI's APIs for natural language processing and prompt engineering.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"},{"depth":2,"slug":"challenges","text":"Challenges"},{"depth":3,"slug":"lessons-learned","text":"Lessons Learned"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
