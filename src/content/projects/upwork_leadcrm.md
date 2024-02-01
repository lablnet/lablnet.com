---
title: Lead CRM
slug: leadcrm
startDate: 2023-08-20
endDate: 2023-11-20
stacks: [React, TailwindCSS, JavaScript, TypeScript, Firebase]
company: upwork
live: https://www.upwork.com/jobs/~01001b4d46993f251a
collaborators: [
    {
        name: Muhammad Umer Farooq,
        picture: ../../assets/images/umer.jpg,
        link: https://lablnet.com/
    }
]
featured: false
---

### Purpose
The primary purpose of this CRM is to automate the process of receiving, validating, and distributing customer leads to various lead buyers based on pre-defined criteria and schedules. It aims to streamline lead management, ensure efficient lead distribution, and maintain a clear record of transactions and interactions without actual financial transactions within the system.

### Features
1. Receives submissions and performs basic validation and formatting.
2. Automatically sends validated leads to the appropriate buyer's CRM using their API key.
3. Visually tracks the cost of leads against lead buyer's balances without handling real transactions.
4. Distributes leads based on a predefined ratio and schedule, ensuring fair and efficient distribution among buyers.
5. Identifies repeat customers and routes their data to the original lead buyer at no extra cost.
6. Provides separate interfaces for different user roles, with two-factor authentication for lead buyers and comprehensive management options for admins.

## Challenges
- Ensuring seamless integration with various external CRMs owned by lead buyers, each potentially having different API specifications.
- Developing a fair and efficient algorithm for lead distribution that can handle varying schedules and ratios among lead buyers.

But I was able to overcome these challenges by:
    - Implementing a robust error handling system to identify and fix issues promptly.
    - Using a combination of Firebase Cloud Functions and Cloud Scheduler to automate lead distribution.
    - Using Firebase Cloud Firestore to store and retrieve data efficiently.

### Lessons Learned
- Learned how to implement 2FA.
