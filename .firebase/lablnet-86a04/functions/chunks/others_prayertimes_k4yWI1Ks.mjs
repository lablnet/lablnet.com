import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This is a Dart package that can be used to find prayer and Ramadan timings for a specific location. It is a rewritten version of the PHP code provided by <a href=\"praytimes.org\">praytimes.org</a></p>";

				const frontmatter = {"title":"Prayers Time Dart Plugin","slug":"prayers_time","startDate":"2021-04-19T00:00:00.000Z","endDate":"2021-04-20T00:00:00.000Z","stacks":["Dart"],"live":"https://play.google.com/store/apps/details?id=prayer_time.lablnet.app","github":"alphasofthub/prayer_time","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_prayertimes.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis is a Dart package that can be used to find prayer and Ramadan timings for a specific location. It is a rewritten version of the PHP code provided by [praytimes.org](praytimes.org)\n";
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
