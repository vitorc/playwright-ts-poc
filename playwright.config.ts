import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  outputDir: '/playwright-report',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use:{
          baseURL:'https://reqres.in/',           
          extraHTTPHeaders: {
            'Accept': 'application/json'
          },
        }
};

export default config;
