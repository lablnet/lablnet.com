import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<p>As a freelancer on Upwork, I developed this tool to help visualize and track my earnings and other statistics. I am publishing it for others to use as well. Upwork does not provide charts or graphs showing earnings or statistics. -14 April, 2021, so this project aims to provide that functionality.\nI started to improve the project on 2nd Feb, 2024 in my free time.</p>";

				const frontmatter = {"title":"Upwork Visualization","slug":"upwork_visualization","startDate":"2021-03-31T00:00:00.000Z","endDate":"2021-09-01T00:00:00.000Z","stacks":["Vue","TailwindCSS","JavaScript"],"live":"https://lablnet.github.io/upwork_visualization/","github":"lablnet/upwork_visualization","company":"projects"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_upworkvis.md";
				const url = undefined;
				function rawContent() {
					return "\nAs a freelancer on Upwork, I developed this tool to help visualize and track my earnings and other statistics. I am publishing it for others to use as well. Upwork does not provide charts or graphs showing earnings or statistics. -14 April, 2021, so this project aims to provide that functionality.\nI started to improve the project on 2nd Feb, 2024 in my free time.\n";
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
