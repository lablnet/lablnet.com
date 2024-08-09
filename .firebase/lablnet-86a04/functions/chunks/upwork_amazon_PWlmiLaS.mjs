const id = "upwork_amazon.md";
						const collection = "projects";
						const slug = "upwork_amazon";
						const body = "\n## Project Overview\n\nThis project involves scraping Amazon products using Playwright and storing the data in Google Sheets and sending Specific products to CDON API.\n\n## Flow\n\n1. Read URL and country from Google Sheet.\n2. Scrape product details from Amazon based on URL and country.\n3. Save images to Shopify via GraphQL API.\n4. Save product details to Google Sheet.\n5. Repeat the process for all products in the Google Sheet.\n6. If the column Platform has CDON value, send the product to CDON API.\n\n## Challenges\n\n- **Handling Captcha**\n* Used proxy rotation, but it was expensive.\n* Implemented Google Gemini API to solve image captchas.\n* If captcha is detected:\n\t1. Download the image.\n\t2. Send it to Gemini API.\n\t3. Receive the text solution from the API.\n\t4. Enter the solution in the captcha field.\n* If the captcha solution fails, repeat the process.\n\n## Lessons Learned\n\n* Learned about GraphQL API.\n* Learned about Google Gemini API.\n\n## Contribution from Usman\n\nUsman made a significant contribution to the project by:\n\n* **Image Quality Improvement**: Helping in obtaining high-quality images from the Amazon product page.\n\nThis contribution was crucial in enhancing the project's overall quality and accuracy.\n";
						const data = {startDate:new Date(1716595200000),endDate:new Date(1717200000000),title:"Amazon Product scraping",stacks:["NodeJs","Playwright"],company:"upwork",collaborators:[{name:"Muhammad Umer Farooq",picture:"../../assets/images/umer.jpg"},{name:"Muhammad Usman Naeem",picture:"../../assets/images/usman.jpg"}],live:"https://www.upwork.com/jobs/~01c74972012086824b",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_amazon.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
