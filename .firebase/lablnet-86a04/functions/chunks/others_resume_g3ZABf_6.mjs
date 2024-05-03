import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_91YiZ_qg.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The goal of this project is to provide an easy way to create and publish a resume on a GitHub page.</p>";

				const frontmatter = {"title":"Resume","slug":"resume","startDate":"2021-05-26T00:00:00.000Z","endDate":"2021-05-26T00:00:00.000Z","stacks":["HTML","CSS","JavaScript","gulp"],"live":"https://alphasofthub.github.io/resume/","github":"alphasofthub/resume","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_resume.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThe goal of this project is to provide an easy way to create and publish a resume on a GitHub page.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
