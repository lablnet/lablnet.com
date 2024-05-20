---
title: Cloudflare Worker and GitHub action
slug: upwork-curriculum
startDate: 2024-05-08
endDate: 2024-05-15
stacks: [JavaScript, Cloudflare Worker, GitHub Actions]
company: upwork
live: https://www.upwork.com/jobs/~0189a03f69f206b9b5
collaborators: [
    {
        name: Muhammad Umer Farooq,
        picture: ../../assets/images/umer.jpg,
        link: https://lablnet.com/
    }
]
---

### Purpose
The purpose of this project was to integrate GitHub authentication to restrict site access to authorized team members. The goal was to ensure that only users part of a specific team (e.g., team1) can access the corresponding subdomain (e.g., team1.lablnet.com) after authentication. The solution needed to be scalable to accommodate any number of teams and subdomains.


### Solution
- To achieve this, I developed two Cloudflare workers:
    1. **GitHub Authentication Redirect:** Handles GitHub authentication and redirects users to the appropriate subdomain.
    2. **Team Verification:** Verifies team membership based on the subdomain and grants or denies access to the site.

- To automate subdomain creation and mapping to the Cloudflare page branch, I wrote a GitHub action that utilizes the Cloudflare API to create CNAME records.


## Challenges
- Handling GitHub authentication redirects for multiple subdomains without pattern support (e.g., *.lablnet.com)
- Ensuring that the solution is scalable and can accommodate any number of teams and subdomains.

### Lessons Learned
- The value of leveraging Cloudflare workers for custom authentication and routing logic
