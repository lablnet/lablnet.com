const id = "upwork_google-contact-sync.md";
						const collection = "projects";
						const slug = "google-contact-sync";
						const body = "\n### Purpose\nThe purpose of PHP script was to sync Google contacts with a MySQL database. The script needed to fetch contacts from a Google account and store them in a MySQL database. The script also needed to update the database with any changes made to the Google contacts and vice versa.\n\n### Solution.\n- I developed a PHP script that authenticated with Google using OAuth 2.0 and fetched contacts from the Google account via the Google People API.\n- The script then connected to a MySQL database and stored the contacts in the database.\n- To ensure that the database was updated with any changes made to the Google contacts, I implemented a mechanism to compare the contacts in the database with the contacts fetched from Google and update the database accordingly.\n- The script use cron job to run the sync process at regular intervals.\n\n## Challenges\n- 2-way sync between Google contacts and MySQL database\n\n### Lessons Learned\n- I've learned how to use Google People API to fetch contacts from a Google account.\n";
						const data = {startDate:new Date(1712016000000),endDate:new Date(1712361600000),title:"Google Contact Sync",stacks:["PHP","MySQL"],company:"upwork",collaborators:[{name:"Muhammad Umer Farooq",picture:"../../assets/images/umer.jpg"}],live:"https://www.upwork.com/jobs/~016582fa14b4769846",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/lablnet/projects/lablnet/lablnet.com/src/content/projects/upwork_google-contact-sync.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
