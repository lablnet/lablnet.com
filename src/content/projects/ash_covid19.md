---
title: Covid19
slug: covid19_ash
startDate: 2020-08-01
endDate: 2020-10-01
stacks: [Python, TypeScript, JavaScript, Vue, Bootstrap]
live: https://covid19.alphasofthub.com/
github: lablnet/covid19
company: alphasofthub
featured: false
---

### Purpose
The main purpose of this project is to create a fast COVID-19 dashboard and parser that can raise awareness among the public, visualize data for easy understanding, gather data for research and experiences, and provide a platform for the public to interact with the data.

### Problems Faced
- Initially I built a backend in the flask to retrieve the data and used Ajax to retrieve the data but the only problem I have is that I do not have a server where I can host other than PHP applications.
- It was very frustrating because of this problem but this thought came to my mind. Instead of retrieving data from the server, we can create static JavaScript files directly and host them on GitHub and create a static site with VueJs.
- So, I made it a success with GitHub Actions [by the way, thanks to GitHub for providing the best functionality].
- The second problem I faced was about enabling frontend sites to support multiple countries but I solved it.

### Features
- Automated parsing of data from government websites daily using GitHub Actions for multiple countries.
- Automated parsing of data from WHO on every Monday using GitHub Actions.
- Dashboard to visualize data.
- Publicly available data downloading.
- Support for multiple countries on the frontend.
- Super Fast performance.
- Fully customizable for country websites - see the contribution guideline for more information.

### Some Goodies
- Simple and easy-to-use UI for discovering COVID-19 statistics.
- Easily portable to multiple countries by adding a new scraper and frontend support.
- Highly scalable and fast.
- Publicly available data.
- I enjoyed working in it.

### Lessons Learnt
Although, this was my first project using the selenium and beautiful-soup libraries, so I learned about them along with GitHub Actions.
