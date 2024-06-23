---
title: Amazon Product scraping
slug: upwork_amazon
startDate: 2024-05-25
endDate: 2024-06-01
stacks: [Node, Playwright]
company: upwork
live: https://www.upwork.com/jobs/~01c74972012086824b
collaborators: [
    {
        name: Muhammad Umer Farooq,
        picture: ../../assets/images/umer.jpg,
        link: https://lablnet.com/
    }
]
featured: false
---

## Project Overview

This project involves scraping Amazon products using Playwright and storing the data in Google Sheets and sending Specific products to CDON API.

## Flow

1. Read URL and country from Google Sheet.
2. Scrape product details from Amazon based on URL and country.
3. Save images to Shopify via GraphQL API.
4. Save product details to Google Sheet.
5. Repeat the process for all products in the Google Sheet.
6. If the column Platform has CDON value, send the product to CDON API.

## Challenges

- **Handling Captcha**
* Used proxy rotation, but it was expensive.
* Implemented Google Gemini API to solve image captchas.
* If captcha is detected:
	1. Download the image.
	2. Send it to Gemini API.
	3. Receive the text solution from the API.
	4. Enter the solution in the captcha field.
* If the captcha solution fails, repeat the process.

## Lessons Learned

* Learned about GraphQL API.
* Learned about Google Gemini API.
