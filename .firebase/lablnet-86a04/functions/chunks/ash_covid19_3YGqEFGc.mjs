const id = "ash_covid19.md";
						const collection = "projects";
						const slug = "covid19_ash";
						const body = "\n### Purpose\nThe main purpose of this project is to create a fast COVID-19 dashboard and parser that can raise awareness among the public, visualize data for easy understanding, gather data for research and experiences, and provide a platform for the public to interact with the data.\n\n### Problems Faced\n- Initially I built a backend in the flask to retrieve the data and used Ajax to retrieve the data but the only problem I have is that I do not have a server where I can host other than PHP applications.\n- It was very frustrating because of this problem but this thought came to my mind. Instead of retrieving data from the server, we can create static JavaScript files directly and host them on GitHub and create a static site with VueJs.\n- So, I made it a success with GitHub Actions [by the way, thanks to GitHub for providing the best functionality].\n- The second problem I faced was about enabling frontend sites to support multiple countries but I solved it.\n\n### Features\n- Automated parsing of data from government websites daily using GitHub Actions for multiple countries.\n- Automated parsing of data from WHO on every Monday using GitHub Actions.\n- Dashboard to visualize data.\n- Publicly available data downloading.\n- Support for multiple countries on the frontend.\n- Super Fast performance.\n- Fully customizable for country websites - see the contribution guideline for more information.\n\n### Some Goodies\n- Simple and easy-to-use UI for discovering COVID-19 statistics.\n- Easily portable to multiple countries by adding a new scraper and frontend support.\n- Highly scalable and fast.\n- Publicly available data.\n- I enjoyed working in it.\n\n### Lessons Learnt\nAlthough, this was my first project using the selenium and beautiful-soup libraries, so I learned about them along with GitHub Actions.\n";
						const data = {startDate:new Date(1596240000000),endDate:new Date(1601510400000),title:"Covid19",stacks:["Python","TypeScript","JavaScript","Vue","Bootstrap"],company:"alphasofthub",live:"https://covid19.alphasofthub.com/",github:"lablnet/covid19",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/ash_covid19.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };