---
startDate: 2025-10-25
endDate: 2025-10-28
title: StepWright
stacks:
  - Python
  - Playwright
  - AsyncIO
company: stepwright
live: https://pypi.org/project/stepwright/
github: lablnet/stepwright
image: ../assets/images/transparent/u.png
featured: true
draft: false
---

StepWright is a declarative web scraping library that simplifies building robust scraping workflows with Playwright. It supports pagination (next/scroll), streaming results, multi-tab flows, file/PDF downloads, and strong typing via dataclasses.

### Features
- Declarative templates (Python dataclasses) for steps and pagination
- Next-button and scroll pagination strategies
- Multi-tab flows, input/click/data, file and PDF operations
- Stream results with callbacks for real-time processing
- Error handling with optional terminate-on-error per step

### Install
- Python: `pip install stepwright`
- JS/TS: `pnpm add stepwright` or `npm install stepwright` or `yarn add stepwright`

### Quick Start (Python)
```python
import asyncio
from stepwright import run_scraper, TabTemplate, BaseStep, RunOptions

async def main():
    templates = [
        TabTemplate(
            tab="example",
            steps=[
                BaseStep(id="navigate", action="navigate", value="https://example.com"),
                BaseStep(id="get_title", action="data", object_type="tag", object="h1", key="title", data_type="text"),
            ],
        )
    ]
    results = await run_scraper(templates, RunOptions(browser={"headless": True}))
    print(results)

asyncio.run(main())
```

### Quick Start (JS/TS)
```ts
import { runScraper } from 'stepwright';

const templates = [
  {
    tab: 'example',
    steps: [
      { id: 'navigate', action: 'navigate', value: 'https://example.com' },
      { id: 'get_title', action: 'data', object_type: 'tag', object: 'h1', key: 'title', data_type: 'text' },
    ],
  },
];

const results = await runScraper(templates);
console.log(results);
```

### Links
- PyPI: `https://pypi.org/project/stepwright/`
- Python repo: `https://github.com/lablnet/stepwright`
- JS/TS repo: `https://github.com/Framework-Island/stepwright`


