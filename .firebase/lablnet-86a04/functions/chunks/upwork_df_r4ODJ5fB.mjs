import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p>This project aim to create the website for Douglas Ferrin. The website is built using Astro and TailwindCSS. Client send me reference site to replicate the design and I did it. The website is hosted on Cloudflare Pages.</p>";

				const frontmatter = {"title":"Douglas Ferrin","slug":"upwork_df","startDate":"2024-07-25T00:00:00.000Z","endDate":"2024-08-01T00:00:00.000Z","stacks":["Astro","TailwindCSS"],"company":"upwork","live":"https://df-hsm.pages.dev/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_df.md";
				const url = undefined;
				function rawContent() {
					return "\n## Project Overview\n\nThis project aim to create the website for Douglas Ferrin. The website is built using Astro and TailwindCSS. Client send me reference site to replicate the design and I did it. The website is hosted on Cloudflare Pages.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-overview","text":"Project Overview"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
