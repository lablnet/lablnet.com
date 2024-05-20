---
title: AutoTrader Scraper
slug: autotrader-scraper
startDate: 2024-02-21
endDate: 2024-03-21
stacks: [JavaScript, Playwright, Node, DynamoDB]
company: upwork
live: https://www.upwork.com/jobs/~0164ecf5f6fc10e457
collaborators: [
    {
        name: Muhammad Umer Farooq,
        picture: ../../assets/images/umer.jpg,
        link: https://lablnet.com/
    }
]
---

### Purpose
The purpose of this project is to develop a basic Proof of Concept (POC) for software that extracts vehicle registration, mileage, and listing price from Autotrader UK car adverts, generates a CAP (Car Auction Prices) value based on the extracted data, and stores the data in a database. <p class='text-red-500'>The client pause the project because CAP calculation provider charging a lot of money for the data. The client is looking for a new CAP calculation provider.</p>

### Solution.
- **Web Scraping:** Extract vehicle registration, mileage, and listing price from Autotrader UK car adverts using web scraping techniques.
    - As registration number is not available on autotrader website, so we will use the registration number from the image of the car. 
    - For that we leverage the Gemini Vision API to extract the registration number from the image.

## Challenges
- Handling variations in Autotrader UK car advert formats and data extraction

### Lessons Learned
- The need for a scalable and efficient database solution for storing and retrieving large amounts of data.
