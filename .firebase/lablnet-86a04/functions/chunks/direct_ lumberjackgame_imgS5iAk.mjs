import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>One of my freelance projects was the development of a game that focused on the importance of trees for the health of our planet. In the game, players are invited to “plant trees” in a race against a malevolent lumberjack who seeks to chop them down. As the game progresses, it becomes increasingly faster and harder to click on the sack to “plant trees”. Once time runs out, players are presented with a fact about the importance of trees for the environment. This game was developed after a man from Japan contacted me directly and hired me for the job. I was responsible for bringing the game concept to life, and was pleased with the final result. This project allowed me to showcase my skills in game development and contribute to a important environmental message.</p>\n<h3 id=\"credits\">Credits</h3>\n<ul>\n<li>Character: <a href=\"https://giphy.com/stickers/stem-2w9gmg97uKtbi\">https://giphy.com/stickers/stem-2w9gmg97uKtbi</a></li>\n<li>Tree: <a href=\"https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html\">https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html</a></li>\n<li>Sack of Seeds: <a href=\"https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/\">https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/</a></li>\n<li>Background: <a href=\"https://superawesomevectors.com/vector-desert-landscape-background/\">https://superawesomevectors.com/vector-desert-landscape-background/</a></li>\n</ul>";

				const frontmatter = {"title":"LumberJack Game","slug":"direct_lumberjackgame","startDate":"2021-08-07T00:00:00.000Z","endDate":"2021-08-12T00:00:00.000Z","stacks":["HTML","CSS","JavaScript","Jquery","Firebase"],"company":"direct","live":"8https://lablnet.github.io/LumberJack-game/v2/index.html","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/direct_ lumberjackgame.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nOne of my freelance projects was the development of a game that focused on the importance of trees for the health of our planet. In the game, players are invited to \"plant trees\" in a race against a malevolent lumberjack who seeks to chop them down. As the game progresses, it becomes increasingly faster and harder to click on the sack to \"plant trees\". Once time runs out, players are presented with a fact about the importance of trees for the environment. This game was developed after a man from Japan contacted me directly and hired me for the job. I was responsible for bringing the game concept to life, and was pleased with the final result. This project allowed me to showcase my skills in game development and contribute to a important environmental message.\n\n### Credits\n- Character: https://giphy.com/stickers/stem-2w9gmg97uKtbi\n- Tree: https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html\n- Sack of Seeds: https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/\n- Background: https://superawesomevectors.com/vector-desert-landscape-background/\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"credits","text":"Credits"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
