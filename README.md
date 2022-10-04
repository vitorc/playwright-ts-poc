---
# POC Playwrith for API aplication
---

## Sumary

- [About project](#about-project)
- [Configuration](#configuration)
- [Instal](#instal)
- [How to test](#how-to-testar)

---
## About Project

In this POC we will work in an mocked API application free for personal tests [reqres](https://reqres.in/) using [playwright](https://playwright.dev/) framework to do 
this tests.
In this test we use this verbs (GET, POST, PUT and Delete) to validate Http status and some payload texts.
In the playwright.config we use baseURL to define a default URL and in the tests we use the endpoints for the tests.

---

## Configuration

- [Instalar Node.js 16+](https://nodejs.org/)
- [Instal Playwright](https://playwright.dev/docs/intro#installing-playwright)

## Instalacao

> Clone project

`https://github.com/vitorc/playwright-ts-poc.git`

>Access path playwright-ts-poc:

`cd ../playwright-ts-poc`

> Dependencies instal:

`npm install`

---

## How to Test:

> Run test:

`npm run test`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://www.linkedin.com/in/vitor-cardoso-" target="_blank">Vitor Cardoso</a>.
