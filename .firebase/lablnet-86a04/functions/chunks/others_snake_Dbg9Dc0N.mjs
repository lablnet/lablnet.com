import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This project is an implementation of the classic Snake game using HTML5 canvas and vanilla JavaScript.</p>\n<h3 id=\"known-issues\">Known Issues</h3>\n<ul>\n<li>When the game is over, it does not restart on click, and the user must refresh the page to play again.</li>\n<li>The game does not function properly on mobile devices.</li>\n</ul>";

				const frontmatter = {"title":"Snack","slug":"snack","startDate":"2020-11-01T00:00:00.000Z","endDate":"2020-11-02T00:00:00.000Z","stacks":["JavaScript","HTML","CSS"],"live":"https://snake.lablnet.com/index.html","github":"lablnet/snake","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_snake.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis project is an implementation of the classic Snake game using HTML5 canvas and vanilla JavaScript.\n\n### Known Issues\n- When the game is over, it does not restart on click, and the user must refresh the page to play again.\n- The game does not function properly on mobile devices.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"known-issues","text":"Known Issues"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
