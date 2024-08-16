import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this project is to implement a Tic Tac Toe game using the Minimax algorithm.</p>\n<h3 id=\"known-issues\">Known Issues</h3>\n<ul>\n<li>The game does not restart automatically after it ends; the user must refresh the page to play again.</li>\n<li>The game may not function properly on mobile devices.</li>\n</ul>";

				const frontmatter = {"title":"Tic Tac Toe","slug":"tictactoe","startDate":"2021-03-16T00:00:00.000Z","endDate":"2021-03-19T00:00:00.000Z","stacks":["JavaScript","HTML","CSS"],"live":"https://tictactoe.lablnet.com/","github":"lablnet/TicTacToe","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_tictactoe.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe purpose of this project is to implement a Tic Tac Toe game using the Minimax algorithm.\n\n### Known Issues\n- The game does not restart automatically after it ends; the user must refresh the page to play again.\n- The game may not function properly on mobile devices.\n";
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
