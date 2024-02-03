---
title: Pakistan Weather Scrapper
slug: weather
startDate: 2022-07-01
endDate: 2022-07-15
stacks: [Python, React, TailwindCSS]
live: https://weather.lablnet.com/
github: lablnet/pakweather_scrapper
company: projects
featured: false
---

### ⚠️ Note
- Multithreading does not affect network throughput, as it only splits URLs into multiple threads that wait in the network queue. However, data updating in the file is concurrent, meaning that
    - for example, if the first thread is updating data in the file at the same time the second thread is fetching data from the network, the second thread does not have to wait for the first thread to finish.

### Purpose
The sole purpose of this project is to retrieve weather data for Pakistan from the Weather Channel and store it in a database or CSV file. This data can then be used for further analysis. Additionally, I created a simple web app to display the latest weather reports for Pakistan as a fun extension of the project.

### Woking
The script runs every hour, using [GitHub Actions](https://github.com/features/actions) to fetch the weather data from the Weather Channel and store it in the database.

### Data Files
To avoid creating a large, unwieldy file, the data is stored in multiple files organized by year and month. For example, data for August 2022 would be stored in the file "/data/2022/aug.csv" in CSV format. This approach was chosen because storing the data in a single file would make it difficult to read, and GitHub's file size limit of 100MB necessitated the use of multiple files.

However, this approach creates a new problem: it is difficult to read data from multiple files. To address this issue, I plan to create a simple script that will read data from multiple files and store it in a single file.

### Future Thoughts
In the future, I plan to monitor the status of the GitHub action and fix any issues that may arise. I will also create a script to merge the data from multiple files into a single file for easier access and analysis.

