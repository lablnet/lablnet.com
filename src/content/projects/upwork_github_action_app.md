---
title: GitHub Action & GitHub App
slug: github-action-and-github-app
startDate: 2024-02-01
endDate: 2024-02-18
stacks: [Python, Lambda, DynamoDB, GitHub, GitHub-Action, GitHub-App]
company: upwork
---

This project evolved through several iterations, each marked by specific enhancements and the introduction of new features. Below is a detailed account of these versions, highlighting the key concepts, changes, and technical implementations.

### Version 1 (Feb 1, 2024 - Feb 2, 2024)

<details>
<summary>Key concepts in Version 1</summary>

In the initial version, I developed a GitHub Action workflow designed to activate upon every push to the repository and each pull request. The primary objectives were to execute coverage and linter checks for a Rust project, capture these outputs, and automatically comment on the pull request with the results. This workflow was successfully implemented and rigorously tested within the repository. <sup>[1](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/pr-tasks.yml)</sup>.

</details>

### Version 2 (Feb 4, 2024 - Feb 10, 2024)

<details>
<summary>Key Changes in Version 2</summary>

- Significant advancements were made in this iteration:
- A new GitHub Action workflow, `ai-comment.yml`, was created to operate on every push and pull request, enhancing our project's automation and integration capabilities. <sup>[2](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/ai-audit.yml)</sup>

- A key task was to aggregate all Rust files following a specified schema, excluding any that matched defined patterns ('test', 'schema'). This was achieved through a straightforward shell script, which efficiently processed and prepared these files for further analysis.

  - Note: I am sharing these files because they are on a public repo.
  - I've done this with a simple shell script below:

      <details>
      <summary><strong>rust_file_aggregator.sh</strong></summary>

    ```sh
    #!/bin/bash

    # Initialize the file
    echo "" > rust.md

    # Find all the Rust files in the current directory
    # and its subdirectories.
    # and iterate over the files
    find . -name "*.rs" | while read file; do
        # Check if the file name matches the exclusion patterns
        # ['test', 'schema']
        if [[ $file != *test* && $file != *schema* ]]; then
            # Print the file name
            echo "Processing file: $file"
            # Append the file name to the output file
            echo "### FILE: $(basename $file)" >> rust.md
            # Append the file content to the output file
            cat $file >> rust.md
        fi
    done
    ```

      </details>

  - These files were then transmitted to a mock API endpoint (Which I created), crafted using AWS Lambda and DynamoDB, demonstrating a practical application of serverless technologies in automating code review processes.

- Additionally, a `webhook` workflow was set up to trigger upon receiving webhook events <sup>[3](https://github.com/yubrew/ac-outpost/blob/main/.github/workflows/webhook.yml)</sup>, further integrated with two AWS Lambda functions for dynamic API simulation `API-CRON` and repository data management `Webhook`.
  - `API-CRON` Which was part of Mock API to randomly simulate the API behavior.
  - `Webhook` Which reads data from the DynamoDB and add comment to the PR.

</details>

### Version 3 (Feb 12, 2024- Feb 18, 2024)

<details>
<summary>Key Changes in Version 3</summary>

This phase marked a significant shift in the project's direction, with the introduction of a GitHub App and Webhook, both hosted on AWS Lambda, showcasing a complex, integrated development environment:

- The flow of that GitHub was as follow:
  - The user will install the GitHub App on their repository.
  - The GitHub App webhook will be triggered by the GitHub event.
  - The GitHub App will send the data to the AWS Lambda.
  - The AWS Lambda will process the data, save to the DynamoDB and commit the required file and secrets to the repository.
    - `ai-comment.yml` and `rust_file_aggregator.sh` will be committed to the repository.
    - The `MOCK API` url will be saved to the repository secrets.
- The `version 2` Lambda was used as it is just updated the following:
  - The `webhook` Lambda updated to update the comment on the PR with the data from the Mock API.
- The new Lambda `GithubAppWebhook` added to handle the GitHub App webhook event.

</details>

### Version 4 (Feb 21, 2024- March 01, 2024)

<details>
<summary>Key Changes in Version 4</summary>

This phase marked a more significant shift in the project's direction, with the introduction of a GitHub App to manage the `PR`. Instead of committing the `ai-comment.yml` and `rust_file_aggregator.sh` to the repository, the GitHub App will handle the `PR` and comment on the `PR` with the data from the Mock API.

- The flow of that GitHub was as follow:
  - The app now listens to the `PR` event and comment on the `PR` with the data from the Mock API.
  - The Github app clone the user repo whenever `pr` created or syncronized.
    - The App perform the required step as previously was hapening on the repo.
- The `lambda` functions transformed to ` FastAPI`` and hosted on  `AWS EC2`.

</details>

### Lessons Learned

- How to create GitHub App and seemelessly integrate webhook with it that hosted on AWS Lambda.
