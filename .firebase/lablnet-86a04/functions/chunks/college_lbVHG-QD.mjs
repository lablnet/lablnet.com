import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "";

				const frontmatter = {"title":"intermediate of Computer Science (ICS (Computer Science with Mathematics))","institution":"Punjab College Of Commerce, 661 Peshawar Road Rawalpindi Cantt(2833)","grade":"55%","startDate":"2017-05-01T00:00:00.000Z","endDate":"2019-04-01T00:00:00.000Z"};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/educations/college.md";
				const url = undefined;
				function rawContent() {
					return "";
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
