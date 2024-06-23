import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>The purpose of this command line app is to scrape data from the Riphah International University website and store it in Firebase. The main data we were interested in were related to faculty members.</p>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>I plan to continue maintaining this app and add a configurable scraper so that it can be used on any website.</p>";

				const frontmatter = {"title":"ResourcesR CLI","slug":"resourcesr_cli","startDate":"2020-11-10T00:00:00.000Z","stacks":["Python"],"github":"resourcesr/cli","company":"resourcesr","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/resourcesr_cli.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\n\nThe purpose of this command line app is to scrape data from the Riphah International University website and store it in Firebase. The main data we were interested in were related to faculty members.\n\n### Future Thoughts\nI plan to continue maintaining this app and add a configurable scraper so that it can be used on any website.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
