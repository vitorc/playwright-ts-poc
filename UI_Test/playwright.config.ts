import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  outputDir: '/playwright-report',
  reporter: [
    ['html'],
    ['list'],
    ['./my-awesome-reporter.js'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  timeout: 30 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 5000
  },

  use:{
    ...devices['Desktop Chrome'],
          headless: true,
          browserName: "chromium",
              baseURL:"https://www.saucedemo.com/",
          // baseURL:"https://playwright.dev",
          screenshot: "only-on-failure",
          trace:"retain-on-failure",
          launchOptions: {
            args: ["--start-maximized"],
            logger: {
              isEnabled: (name, severity) => true,
              log:(name,severity,message,args) => console.log(name,severity)
            },
          },
        },
};

export default config;
