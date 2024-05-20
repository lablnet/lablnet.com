const id = "upwork_autotrader-scraper.md";
						const collection = "projects";
						const slug = "autotrader-scraper";
						const body = "\n### Purpose\nThe purpose of this project is to develop a basic Proof of Concept (POC) for software that extracts vehicle registration, mileage, and listing price from Autotrader UK car adverts, generates a CAP (Car Auction Prices) value based on the extracted data, and stores the data in a database. <p class='text-red-500'>The client pause the project because CAP calculation provider charging a lot of money for the data. The client is looking for a new CAP calculation provider.</p>\n\n### Solution.\n- **Web Scraping:** Extract vehicle registration, mileage, and listing price from Autotrader UK car adverts using web scraping techniques.\n    - As registration number is not available on autotrader website, so we will use the registration number from the image of the car. \n    - For that we leverage the Gemini Vision API to extract the registration number from the image.\n\n## Challenges\n- Handling variations in Autotrader UK car advert formats and data extraction\n\n### Lessons Learned\n- The need for a scalable and efficient database solution for storing and retrieving large amounts of data.\n";
						const data = {startDate:new Date(1708473600000),endDate:new Date(1710979200000),title:"AutoTrader Scraper",stacks:["JavaScript","Playwright","Node","DynamoDB"],company:"upwork",collaborators:[{name:"Muhammad Umer Farooq",picture:"../../assets/images/umer.jpg"}],live:"https://www.upwork.com/jobs/~0164ecf5f6fc10e457",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_autotrader-scraper.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
