/**
 * Playwright Configuration for Logo Download Tests
 */

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Maximum time one test can run
  timeout: 60 * 1000,

  expect: {
    timeout: 10000
  },

  // Run tests in files in parallel
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Reporter to use
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    // Base URL to use in actions like `await page.goto('/')`
    // baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Timeout for each action
    actionTimeout: 30000,

    // Navigation timeout
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  // Number of workers to use
  workers: 1,
});
