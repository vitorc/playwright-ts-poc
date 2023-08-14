---
# POC Playwright for API application
---

## Summary

- [About project](#about-project)
- [Configuration](#configuration)
- [Install](#install)
- [How to Test](#how-to-test)
---
## About Project

In this POC we will work in a mocked API application free for personal test [reqres](https://reqres.in/) using [playwright](https://playwright.dev/) framework to do 
this tests.
In this test we use these verbs (GET, POST, PUT and Delete) to validate Http status and some payload texts.
In the playwright.config we use baseURL to define a default URL and in the tests, we use the endpoints for the tests.

---

## Configuration

- [Install Node.js 16+](https://nodejs.org/)
- [Install Playwright](https://playwright.dev/docs/intro#installing-playwright)

## Install

**Clone the project**

`https://github.com/vitorc/playwright-ts-poc.git`

Access path playwright-ts-poc:

`cd ../playwright-ts-poc`

Playwright install:

`npx playwright install`  

Dependencies install:

`npm install`

---

## How to Test:

Testing Locally:

`npm run test`

Testing using Docker:

Install [docker](https://docs.docker.com/desktop/?_gl=1*1ln6akm*_ga*MTM2Njg1NTQ4My4xNjgyNjg5NzA0*_ga_XJWPQMJYHQ*MTY5MjA0MDgyMS44LjEuMTY5MjA0MDgzMS41MC4wLjA.)

Run the command below to build and start the Docker:
`docker-compose up --build`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2023 © <a href="https://www.linkedin.com/in/vitor-cardoso-" target="_blank">Vitor Cardoso</a>.
