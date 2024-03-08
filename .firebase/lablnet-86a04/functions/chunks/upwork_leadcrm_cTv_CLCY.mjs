const id = "upwork_leadcrm.md";
						const collection = "projects";
						const slug = "leadcrm";
						const body = "\r\n### Purpose\r\nThe primary purpose of this CRM is to automate the process of receiving, validating, and distributing customer leads to various lead buyers based on pre-defined criteria and schedules. It aims to streamline lead management, ensure efficient lead distribution, and maintain a clear record of transactions and interactions without actual financial transactions within the system.\r\n\r\n### Features\r\n1. Receives submissions and performs basic validation and formatting.\r\n2. Automatically sends validated leads to the appropriate buyer's CRM using their API key.\r\n3. Visually tracks the cost of leads against lead buyer's balances without handling real transactions.\r\n4. Distributes leads based on a predefined ratio and schedule, ensuring fair and efficient distribution among buyers.\r\n5. Identifies repeat customers and routes their data to the original lead buyer at no extra cost.\r\n6. Provides separate interfaces for different user roles, with two-factor authentication for lead buyers and comprehensive management options for admins.\r\n\r\n## Challenges\r\n- Ensuring seamless integration with various external CRMs owned by lead buyers, each potentially having different API specifications.\r\n- Developing a fair and efficient algorithm for lead distribution that can handle varying schedules and ratios among lead buyers.\r\n- But I was able to overcome these challenges by:\r\n    - Implementing a robust error handling system to identify and fix issues promptly.\r\n    - Using a combination of Firebase Cloud Functions and Cloud Scheduler to automate lead distribution.\r\n    - Using Firebase Cloud Firestore to store and retrieve data efficiently.\r\n\r\n### Lessons Learned\r\n- Learned how to implement 2FA.\r\n";
						const data = {startDate:new Date(1692489600000),endDate:new Date(1700438400000),title:"Lead CRM",stacks:["React","TailwindCSS","JavaScript","TypeScript","Firebase"],company:"upwork",collaborators:[{name:"Muhammad Umer Farooq",picture:"../../assets/images/umer.jpg"}],live:"https://www.upwork.com/jobs/~01001b4d46993f251a",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_leadcrm.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };