import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_qETDCYOS.mjs';

const html = "<h3 id=\"purpose\">Purpose</h3>\n<p>This was my first attempt at creating an Android application. It was developed for the purpose of practicing Android development.</p>\n<h3 id=\"features\">Features</h3>\n<ul>\n<li>Notes and Todos: Users can create and manage notes and to-do lists.</li>\n<li>Calculator and Converter: Users can perform basic arithmetic calculations and unit conversions.</li>\n<li>Color Picker, Stopwatch, Timer, and Counter: Users can select colors, measure time intervals, set timers, and count events.</li>\n</ul>";

				const frontmatter = {"title":"EasyTools App","slug":"easytools","startDate":"2020-12-31T00:00:00.000Z","endDate":"2020-12-31T00:00:00.000Z","stacks":["JavaScript","HTML","CSS","Cordova"],"live":"https://play.google.com/store/apps/details?id=com.lablnet.easytools","github":"lablnet/EasyTools-Source","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_easytools.md";
				const url = undefined;
				function rawContent() {
					return "\n### Purpose\nThis was my first attempt at creating an Android application. It was developed for the purpose of practicing Android development.\n\n### Features\n- Notes and Todos: Users can create and manage notes and to-do lists.\n- Calculator and Converter: Users can perform basic arithmetic calculations and unit conversions.\n- Color Picker, Stopwatch, Timer, and Counter: Users can select colors, measure time intervals, set timers, and count events.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"features","text":"Features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
