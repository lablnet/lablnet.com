const id = "upwork_github_action_app.md";
						const collection = "projects";
						const slug = "github-action-and-github-app";
						const body = "\r\nThis project evolved through several iterations, each marked by specific enhancements and the introduction of new features. Below is a detailed account of these versions, highlighting the key concepts, changes, and technical implementations.\r\n\r\n### Version 1 (Feb 1, 2024 - Feb 2, 2024)\r\n\r\n<details>\r\n<summary>Key concepts in Version 1</summary>\r\n\r\nIn the initial version, I developed a GitHub Action workflow designed to activate upon every push to the repository and each pull request. The primary objectives were to execute coverage and linter checks for a Rust project, capture these outputs, and automatically comment on the pull request with the results. This workflow was successfully implemented and rigorously tested within the repository. <sup>[1](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/pr-tasks.yml)</sup>.\r\n\r\n</details>\r\n\r\n### Version 2 (Feb 4, 2024 - Feb 10, 2024)\r\n\r\n<details>\r\n<summary>Key Changes in Version 2</summary>\r\n\r\n- Significant advancements were made in this iteration:\r\n- A new GitHub Action workflow, `ai-comment.yml`, was created to operate on every push and pull request, enhancing our project's automation and integration capabilities. <sup>[2](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/ai-audit.yml)</sup>\r\n\r\n- A key task was to aggregate all Rust files following a specified schema, excluding any that matched defined patterns ('test', 'schema'). This was achieved through a straightforward shell script, which efficiently processed and prepared these files for further analysis.\r\n\r\n  - Note: I am sharing these files because they are on a public repo.\r\n  - I've done this with a simple shell script below:\r\n\r\n      <details>\r\n      <summary><strong>rust_file_aggregator.sh</strong></summary>\r\n\r\n    ```sh\r\n    #!/bin/bash\r\n\r\n    # Initialize the file\r\n    echo \"\" > rust.md\r\n\r\n    # Find all the Rust files in the current directory\r\n    # and its subdirectories.\r\n    # and iterate over the files\r\n    find . -name \"*.rs\" | while read file; do\r\n        # Check if the file name matches the exclusion patterns\r\n        # ['test', 'schema']\r\n        if [[ $file != *test* && $file != *schema* ]]; then\r\n            # Print the file name\r\n            echo \"Processing file: $file\"\r\n            # Append the file name to the output file\r\n            echo \"### FILE: $(basename $file)\" >> rust.md\r\n            # Append the file content to the output file\r\n            cat $file >> rust.md\r\n        fi\r\n    done\r\n    ```\r\n\r\n      </details>\r\n\r\n  - These files were then transmitted to a mock API endpoint (Which I created), crafted using AWS Lambda and DynamoDB, demonstrating a practical application of serverless technologies in automating code review processes.\r\n\r\n- Additionally, a `webhook` workflow was set up to trigger upon receiving webhook events <sup>[3](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/webhook.yml)</sup>, further integrated with two AWS Lambda functions for dynamic API simulation `API-CRON` and repository data management `Webhook`.\r\n  - `API-CRON` Which was part of Mock API to randomly simulate the API behavior.\r\n  - `Webhook` Which reads data from the DynamoDB and add comment to the PR.\r\n\r\n</details>\r\n\r\n### Version 3 (Feb 12, 2024- Feb 18, 2024)\r\n\r\n<details>\r\n<summary>Key Changes in Version 3</summary>\r\n\r\nThis phase marked a significant shift in the project's direction, with the introduction of a GitHub App and Webhook, both hosted on AWS Lambda, showcasing a complex, integrated development environment:\r\n\r\n- The flow of that GitHub was as follow:\r\n  - The user will install the GitHub App on their repository.\r\n  - The GitHub App webhook will be triggered by the GitHub event.\r\n  - The GitHub App will send the data to the AWS Lambda.\r\n  - The AWS Lambda will process the data, save to the DynamoDB and commit the required file and secrets to the repository.\r\n    - `ai-comment.yml` and `rust_file_aggregator.sh` will be committed to the repository.\r\n    - The `MOCK API` url will be saved to the repository secrets.\r\n- The `version 2` Lambda was used as it is just updated the following:\r\n  - The `webhook` Lambda updated to update the comment on the PR with the data from the Mock API.\r\n- The new Lambda `GithubAppWebhook` added to handle the GitHub App webhook event.\r\n\r\n</details>\r\n\r\n### Version 4 (Feb 21, 2024- March 01, 2024)\r\n\r\n<details>\r\n<summary>Key Changes in Version 4</summary>\r\n\r\nThis phase marked a more significant shift in the project's direction, with the introduction of a GitHub App to manage the `PR`. Instead of committing the `ai-comment.yml` and `rust_file_aggregator.sh` to the repository, the GitHub App will handle the `PR` and comment on the `PR` with the data from the Mock API.\r\n\r\n- The flow of that GitHub was as follow:\r\n  - The app now listens to the `PR` event and comment on the `PR` with the data from the Mock API.\r\n  - The Github app clone the user repo whenever `pr` created or syncronized.\r\n    - The App perform the required step as previously was hapening on the repo.\r\n- The `lambda` functions transformed to ` FastAPI`` and hosted on  `AWS EC2`.\r\n\r\n</details>\r\n\r\n### Lessons Learned\r\n\r\n- How to create GitHub App and seemelessly integrate webhook with it that hosted on AWS Lambda.\r\n";
						const data = {startDate:new Date(1706745600000),endDate:new Date(1708214400000),title:"GitHub Action & GitHub App",stacks:["Python","Lambda","DynamoDB","GitHub","GitHub-Action","GitHub-App"],company:"upwork",featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "D:/umer/projects/lablnet/lablnet.com/src/content/projects/upwork_github_action_app.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
