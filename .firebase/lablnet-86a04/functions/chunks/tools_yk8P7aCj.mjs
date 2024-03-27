import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>I use VS-Code, Jupyter Notebook, Git, and Docker on a daily basis. My primary operating system is Windows, but I also use Ubuntu inside Windows through WSL/WSLG.</p>";

				const frontmatter = {"title":"Tools/Platform","step":3};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/skills/tools.md";
				const url = undefined;
				function rawContent() {
					return "\nI use VS-Code, Jupyter Notebook, Git, and Docker on a daily basis. My primary operating system is Windows, but I also use Ubuntu inside Windows through WSL/WSLG.";
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
