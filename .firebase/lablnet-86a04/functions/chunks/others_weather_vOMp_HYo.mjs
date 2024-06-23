import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BLbMhyYy.mjs';

const html = "<h3 id=\"️-note\">⚠️ Note</h3>\n<ul>\n<li>Multithreading does not affect network throughput, as it only splits URLs into multiple threads that wait in the network queue. However, data updating in the file is concurrent, meaning that\n<ul>\n<li>for example, if the first thread is updating data in the file at the same time the second thread is fetching data from the network, the second thread does not have to wait for the first thread to finish.</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"purpose\">Purpose</h3>\n<p>The sole purpose of this project is to retrieve weather data for Pakistan from the Weather Channel and store it in a database or CSV file. This data can then be used for further analysis. Additionally, I created a simple web app to display the latest weather reports for Pakistan as a fun extension of the project.</p>\n<h3 id=\"woking\">Woking</h3>\n<p>The script runs every hour, using <a href=\"https://github.com/features/actions\">GitHub Actions</a> to fetch the weather data from the Weather Channel and store it in the database.</p>\n<h3 id=\"data-files\">Data Files</h3>\n<p>To avoid creating a large, unwieldy file, the data is stored in multiple files organized by year and month. For example, data for August 2022 would be stored in the file “/data/2022/aug.csv” in CSV format. This approach was chosen because storing the data in a single file would make it difficult to read, and GitHub’s file size limit of 100MB necessitated the use of multiple files.</p>\n<p>However, this approach creates a new problem: it is difficult to read data from multiple files. To address this issue, I plan to create a simple script that will read data from multiple files and store it in a single file.</p>\n<h3 id=\"future-thoughts\">Future Thoughts</h3>\n<p>In the future, I plan to monitor the status of the GitHub action and fix any issues that may arise. I will also create a script to merge the data from multiple files into a single file for easier access and analysis.</p>";

				const frontmatter = {"title":"Pakistan Weather Scraper","slug":"weather","startDate":"2022-07-01T00:00:00.000Z","endDate":"2022-07-15T00:00:00.000Z","stacks":["Python","React","TailwindCSS"],"live":"https://weather.lablnet.com/","github":"lablnet/pakweather_scraper","company":"projects","featured":false};
				const file = "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/others_weather.md";
				const url = undefined;
				function rawContent() {
					return "\n### ⚠️ Note\n- Multithreading does not affect network throughput, as it only splits URLs into multiple threads that wait in the network queue. However, data updating in the file is concurrent, meaning that\n    - for example, if the first thread is updating data in the file at the same time the second thread is fetching data from the network, the second thread does not have to wait for the first thread to finish.\n\n### Purpose\nThe sole purpose of this project is to retrieve weather data for Pakistan from the Weather Channel and store it in a database or CSV file. This data can then be used for further analysis. Additionally, I created a simple web app to display the latest weather reports for Pakistan as a fun extension of the project.\n\n### Woking\nThe script runs every hour, using [GitHub Actions](https://github.com/features/actions) to fetch the weather data from the Weather Channel and store it in the database.\n\n### Data Files\nTo avoid creating a large, unwieldy file, the data is stored in multiple files organized by year and month. For example, data for August 2022 would be stored in the file \"/data/2022/aug.csv\" in CSV format. This approach was chosen because storing the data in a single file would make it difficult to read, and GitHub's file size limit of 100MB necessitated the use of multiple files.\n\nHowever, this approach creates a new problem: it is difficult to read data from multiple files. To address this issue, I plan to create a simple script that will read data from multiple files and store it in a single file.\n\n### Future Thoughts\nIn the future, I plan to monitor the status of the GitHub action and fix any issues that may arise. I will also create a script to merge the data from multiple files into a single file for easier access and analysis.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"️-note","text":"⚠️ Note"},{"depth":3,"slug":"purpose","text":"Purpose"},{"depth":3,"slug":"woking","text":"Woking"},{"depth":3,"slug":"data-files","text":"Data Files"},{"depth":3,"slug":"future-thoughts","text":"Future Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
