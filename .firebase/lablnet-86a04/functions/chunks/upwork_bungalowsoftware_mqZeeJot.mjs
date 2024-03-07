import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ohu8eKR9.mjs';

const html = "<p>One of my recent projects involved the development of a subscription software service for a client. The service offered customers the ability to choose from five products for their subscription, and utilized CheddarGetter for payment management, customer email communications, and other necessary tasks. However, the client was in the process of migrating to Stripe.com’s subscription billing service and transitioning their code from Asp.net to PHP. I was tasked with implementing these changes, as well as creating a new database table to store the customer’s subscription information and a simple admin panel to manage the subscriptions. I found this project to be engaging and was able to complete it within seven days, with the remaining time spent on testing by the client. This project allowed me to showcase my skills in web development and database management.</p>";

				const frontmatter = {"title":"Set up shopping cart using Stripe.com Checkout (PhP)","slug":"upwork_bungalowsoftware","startDate":"2021-01-18T00:00:00.000Z","endDate":"2021-02-24T00:00:00.000Z","stacks":["PHP","HTML","CSS","JavaScript","Stripe"],"company":"upwork","live":"https://www.bungalowsoftware.com/subscription/buy/","collaborators":[{"name":"Muhammad Umer Farooq","picture":"../../assets/images/umer.jpg","link":"https://lablnet.com/"}],"featured":false};
				const file = "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_bungalowsoftware.md";
				const url = undefined;
				function rawContent() {
					return "\r\nOne of my recent projects involved the development of a subscription software service for a client. The service offered customers the ability to choose from five products for their subscription, and utilized CheddarGetter for payment management, customer email communications, and other necessary tasks. However, the client was in the process of migrating to Stripe.com's subscription billing service and transitioning their code from Asp.net to PHP. I was tasked with implementing these changes, as well as creating a new database table to store the customer's subscription information and a simple admin panel to manage the subscriptions. I found this project to be engaging and was able to complete it within seven days, with the remaining time spent on testing by the client. This project allowed me to showcase my skills in web development and database management.\r\n";
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
