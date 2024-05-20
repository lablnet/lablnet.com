const id = "upwork_robotmk-curriculum.md";
						const collection = "projects";
						const slug = "website-authentication-and-automation";
						const body = "\n### Purpose\nThe purpose of this project was to integrate GitHub authentication to restrict site access to authorized team members. The goal was to ensure that only users part of a specific team (e.g., team1) can access the corresponding subdomain (e.g., team1.lablnet.com) after authentication. The solution needed to be scalable to accommodate any number of teams and subdomains.\n\n\n### Solution\n- To achieve this, I developed two Cloudflare workers:\n    1. **GitHub Authentication Redirect:** Handles GitHub authentication and redirects users to the appropriate subdomain.\n    2. **Team Verification:** Verifies team membership based on the subdomain and grants or denies access to the site.\n\n- To automate subdomain creation and mapping to the Cloudflare page branch, I wrote a GitHub action that utilizes the Cloudflare API to create CNAME records.\n\n\n## Challenges\n- Handling GitHub authentication redirects for multiple subdomains without pattern support (e.g., *.lablnet.com)\n- Ensuring that the solution is scalable and can accommodate any number of teams and subdomains.\n\n### Lessons Learned\n- The value of leveraging Cloudflare workers for custom authentication and routing logic\n";
						const data = {startDate:new Date(1715126400000),endDate:new Date(1715731200000),title:"Website Authentication and automation",stacks:["JavaScript","Cloudflare Worker","GitHub Actions"],company:"upwork",collaborators:[{name:"Muhammad Umer Farooq",picture:"../../assets/images/umer.jpg"}],live:"https://www.upwork.com/jobs/~0189a03f69f206b9b5",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_robotmk-curriculum.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
