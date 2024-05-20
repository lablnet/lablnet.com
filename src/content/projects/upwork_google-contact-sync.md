---
title: Google Contact Sync
slug: google-contact-sync
startDate: 2024-04-02
endDate: 2024-04-06
stacks: [PHP, MySQL]
company: upwork
live: https://www.upwork.com/jobs/~016582fa14b4769846
collaborators: [
    {
        name: Muhammad Umer Farooq,
        picture: ../../assets/images/umer.jpg,
        link: https://lablnet.com/
    }
]
---

### Purpose
The purpose of PHP script was to sync Google contacts with a MySQL database. The script needed to fetch contacts from a Google account and store them in a MySQL database. The script also needed to update the database with any changes made to the Google contacts and vice versa.

### Solution.
- I developed a PHP script that authenticated with Google using OAuth 2.0 and fetched contacts from the Google account via the Google People API.
- The script then connected to a MySQL database and stored the contacts in the database.
- To ensure that the database was updated with any changes made to the Google contacts, I implemented a mechanism to compare the contacts in the database with the contacts fetched from Google and update the database accordingly.
- The script use cron job to run the sync process at regular intervals.

## Challenges
- 2-way sync between Google contacts and MySQL database

### Lessons Learned
- I've learned how to use Google People API to fetch contacts from a Google account.
